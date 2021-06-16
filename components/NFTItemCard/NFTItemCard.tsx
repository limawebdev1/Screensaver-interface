import { IProps } from './types'
import ActiveNFTItemCard from './ActiveNFTItemCard'

const NFTItemCard: React.FC<IProps> = (props) => {

    return <a href={`/object/${props?.tokenId}`}><ActiveNFTItemCard {...props} /></a>
}

export default NFTItemCard
