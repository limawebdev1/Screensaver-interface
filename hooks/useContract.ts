// modified from https://github.com/Uniswap/uniswap-interface
import { Contract } from '@ethersproject/contracts'
import { useMemo } from 'react'
import { getContract } from '../utils'
import GALLERY_ABI from '../constants/gallery'
import { Web3Provider } from '@ethersproject/providers'
import { ChainId } from '@uniswap/sdk'
import { useWeb3React } from '@web3-react/core'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import { useActiveWeb3React } from './index'

// returns undefined on errors
function useContract(
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true
): Contract | undefined {
  
  const { library, account } = useActiveWeb3React()

  return useMemo(() => {
    if (!address || !ABI || !library) return undefined
    try {
      return getContract(
        address,
        ABI,
        library,
        withSignerIfPossible && account ? account : undefined
      )
    } catch (error) {
      console.error('Failed to get contract', error)
      return undefined
    }
  }, [address, ABI, library, withSignerIfPossible, account])
}

export function useGalleryContract(
  tokenAddress?: string,
  withSignerIfPossible?: boolean
): Contract | undefined {
  return useContract(tokenAddress, GALLERY_ABI, withSignerIfPossible)
}
