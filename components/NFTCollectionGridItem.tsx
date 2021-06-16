import React from 'react'
import ImageWithActions, { ActionButton } from './ImageWithActions'

interface IProps {
  coverPhotoImageSrc: string
  amountCollected: number
  creator: {
    avatarImageSrc: string
    username: string
  }
}

const NFTCollectionGridItem: React.FC<IProps> = ({
  coverPhotoImageSrc,
  amountCollected,
  creator,
}) => {
  return (
    <div></div>
    // <ImageWithActions
    //   src={coverPhotoImageSrc}
    //   actions={[
    //     <ActionButton
    //       size={'large'}
    //       className={'bg-gray-900 text-white text-xs sm:text-lg cursor-pointer'}
    //     >
    //       {amountCollected}
    //     </ActionButton>,
    //     <ActionButton
    //       size={'large'}
    //       className={'border-2 border-solid border-purple-500 cursor-pointer'}
    //     >
    //       <img src={creator.avatarImageSrc} alt={creator.username} />
    //     </ActionButton>,
    //   ]}
    // />
  )
}

export default NFTCollectionGridItem
