
import { ChainId, Token } from '@uniswap/sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

// import { injected, walletconnect } from '../connectors'
import { injected } from '../connectors'

export const SECONDS_PER_BLOCK = 14

export const DEFAULT_TOKEN_PRECISION = 18

export const iconUrlByProviderId: { [key: string]: string } = {
  network: '/icons/providers/coinbase.svg',
  fortmatic: '/icons/providers/fortmatic.svg',
  metamask: '/icons/providers/metamask.svg',
  portis: '/icons/providers/portis.svg',
  // wallet_connect: '/icons/providers/walletconnect.svg',
}

export const NetworkContextName = 'NETWORK'

export const POLYGON_MAINNET_PARAMS = {
  chainId: '0x89', // A 0x-prefixed hexadecimal chainId
  chainName: 'Polygon Mainnet',
  nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18
  },
  rpcUrls: ['https://rpc-mainnet.matic.network'],
  blockExplorerUrls: ['https://explorer.matic.network/']
}

export interface ContractList {
  delegation?: string
  controlledCommitteeRewardsBuilder?: string
  compoundPoolBuilder?: string
  permitAndDepositDai?: string
  prizePool?: string
  token?: string
  ticket?: string
  sponsorship?: string
  committeeRewards?: string
  cDai?: string
  cUsdc?: string
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D',
  },
  // WALLET_CONNECT: {
  //   connector: walletconnect,
  //   name: 'WalletConnect',
  //   iconName: 'walletConnectIcon.svg',
  //   description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
  //   href: null,
  //   color: '#4196FC',
  //   mobile: true,
  // },
}

// Group IDs (art-related) to display `creator` attributes
export const GROUPS_WITH_CREATORS = [1]

// Traits to ignore on NFT page
export const TRAITS_IGNORE = ['tag']
