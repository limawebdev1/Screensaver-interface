import { Web3Provider } from '@ethersproject/providers'
import { ChainId } from '@uniswap/sdk'
import { useWeb3React } from '@web3-react/core'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import axios from 'axios'
import { injected } from '../connectors'
import { useEffect, useReducer, useState } from 'react'

type Action<T> =
  | { type: 'PENDING' }
  | { type: 'SUCCESS'; data: T }
  | { type: 'FAIL'; error?: Error }

interface GraphQLQuery {
  query: string
  variables: Record<string, unknown>
}

type GraphQLErrorExtension = {
  code: string
  exception: string
}

type GraphQLErrorLocation = {
  column: number
  line: number
}

type GraphQLError = {
  extensions: GraphQLErrorExtension[]
  locations: GraphQLErrorLocation[]
  message: string
  path: string[]
}

interface GraphQLErrors {
  errors?: GraphQLError[]
}

interface State<T> {
  isLoading: boolean
  data?: T
  error?: Error
}

interface AxioxGraphQLResponse<T> {
  data: { data: T } & GraphQLErrors
  status: number
}

export function useActiveWeb3React(): Web3ReactContextInterface<Web3Provider> & {
  chainId?: ChainId
} {
  const context = useWeb3React<Web3Provider>()
  return context
}

export function useEagerConnect() {
  const { activate, active } = useWeb3React()

  const [tried, setTried] = useState(false)

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true)
        })
      } else {
        setTried(true)
      }
    })
  }, []) // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true)
    }
  }, [tried, active])

  return tried
}

export function useInactiveListener(suppress = false) {
  const { active, error, activate } = useWeb3React()

  useEffect((): any => {
    const { ethereum } = window as any
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        activate(injected)
      }
      const handleChainChanged = (chainId: string | number) => {
        activate(injected)
      }
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length > 0) {
          activate(injected)
        }
      }
      const handleNetworkChanged = (networkId: string | number) => {
        activate(injected)
      }

      ethereum.on('connect', handleConnect)
      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)
      ethereum.on('networkChanged', handleNetworkChanged)

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect)
          ethereum.removeListener('chainChanged', handleChainChanged)
          ethereum.removeListener('accountsChanged', handleAccountsChanged)
          ethereum.removeListener('networkChanged', handleNetworkChanged)
        }
      }
    }
  }, [active, error, suppress, activate])
}

const createDataFetchReducer = <T>() => (state: State<T>, action: Action<T>): State<T> => {
  switch (action.type) {
    case 'PENDING':
      return {
        ...state,
        isLoading: true,
      }
    case 'SUCCESS': {
      return {
        ...state,
        isLoading: false,
        data: action.data,
      }
    }
    case 'FAIL':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      throw new Error('Action not supported')
  }
}

export function getAllData(addresses: string[]) {
  return Promise.all(addresses.map(fetchData))
}

const defaultEndpoint = 'https://stage.api.upshot.io/graphqldev' // Used if .env.local doesn't exist

function fetchData(address: string) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return axios
    .post(
      process.env.GRAPHQL_ENDPOINT ?? defaultEndpoint,
      {
        query: `query openSeaAssetsByAddress($address: String!) {
          openSeaAssetsByAddress (address: $address) {
            id
            imageUrl
            tokenId
            assetId
            lastSaleTxAt
            lastSaleTotalPrice
            numSales
            creatorUsername
          }
        }`,
        variables: {
          address: address,
        },
      },
      options
    )
    .then(function (response) {
      return {
        success: true,
        data: response.data,
      }
    })
    .catch(function (error) {
      return { success: false }
    })
}

export function useGraphQL<T>(initialQuery?: GraphQLQuery) {
  const [query, setQuery] = useState(initialQuery)
  const dataFetchReducer = createDataFetchReducer<T>()
  const [state, dispatch] = useReducer(dataFetchReducer, { isLoading: true })

  const graphQLRequest = async <T>(query: GraphQLQuery) => {
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data, status }: AxioxGraphQLResponse<T> = await axios.post(
      process.env.GRAPHQL_ENDPOINT ?? defaultEndpoint,
      query,
      options
    )

    if (status !== 200) {
      throw new Error('Server error')
    }

    return data
  }

  useEffect(() => {
    if (!query) return
    const fetchData = async () => {
      dispatch({ type: 'PENDING' })
      try {
        const response = await graphQLRequest<T>(query)
        if (response.errors) throw response.errors

        const { data } = response

        dispatch({ type: 'SUCCESS', data })
      } catch (error) {
        dispatch({ type: 'FAIL', error: error.message || error })
      }
    }
    fetchData()
  }, [query])
  const executeQuery = (query: GraphQLQuery) => {
    setQuery(query)
  }
  return { ...state, executeQuery }
}
