import { Web3Provider } from '@ethersproject/providers'
// import { FortmaticConnector } from '@web3-react/fortmatic-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

import { NetworkConnector } from './NetworkConnector'

const NETWORK_URL = 0 // process.env.REACT_APP_NETWORK_URL

export const NETWORK_CHAIN_ID: number = parseInt(process.env.REACT_APP_CHAIN_ID ?? '6')

if (typeof NETWORK_URL === 'undefined') {
  throw new Error(`REACT_APP_NETWORK_URL must be a defined environment variable`)
}

const POLLING_INTERVAL = 12000
const RPC_URLS: { [chainId: number]: string } = {
  137: process.env.NEXT_PUBLIC_RPC_URL_1 as string,
}

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any))
}

export const injected = new InjectedConnector({ supportedChainIds: [137] }) // MetaMask

export const network = new NetworkConnector({
  urls: { 137: process.env.NEXT_PUBLIC_RPC_URL_1},
  defaultChainId: 137,
})
