import React from 'react'
import {
  ImageWithActions
} from '../../components'
import NFT from '../../types'
import MintButton from '../../components/MintButton'
import AccountId from '../../components/AccountId'
import moment from 'moment'
import { useRouter } from 'next/router'

interface IProps {
  metadata: NFT
  hash?: string
}

const ItemDetailView: React.VFC<IProps> = ({
  metadata,
  hash,
}) => {

  const router = useRouter()
  const { tokenId, preview } = router.query

  return (
    <div className={'flex flex-col space-y-12'}>
      <div className={'flex flex-col space-y-8'}>

        <div className={'space-y-3 mt-3'}>
          <ImageWithActions 
            src={metadata.image}
            alt={metadata.name}
            nft={metadata}
            actions={[]}
          />
        </div>

        <div className={'px-3'}>
        <div className={'absolute right-0 w-full border-t border-gray-800 '} />

          {!!preview && <MintButton hash={hash} />}

          <div className={'text-4xl font-bold mt-3 mb-1 md:mt-12 mt-8'}>{metadata.name}</div>
          <div className={'text-xl mt-4 mb-6'}>
            <strong></strong>
            {metadata.description}
          </div>

          <div className={'w-full border-t border-gray-800'} />

          <div className={'text-lg py-1 mt-3'}>
            <strong>Creator: </strong> <AccountId address={metadata.creator} />
          </div>
          <div className={'text-sm py-1'}>
            <strong>Minted: </strong>
            {moment(metadata.creationDate).format('MMMM Do YYYY, h:mm:ss a')}
          </div>
          <div className={'text-sm py-1'}>
            <strong>MimeType: </strong> {metadata.media.mimeType}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailView
