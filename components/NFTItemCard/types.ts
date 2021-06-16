import NFT from '../../types'

export interface IProps {
  title?: string
  coverImageSrc?: string
  creator?: string
  endDateTime?: Date
  amountCollected?: number
  tokenId?: number
  nft?: NFT
  loading?: boolean
  key?: number
}
