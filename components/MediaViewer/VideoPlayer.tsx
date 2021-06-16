import React from 'react'

interface IProps {
  fileUrl: string
  coverImageUrl?: string
  mimeType?: string
  controls?: boolean
}

const VideoPlayer: React.VFC<IProps> = ({
  fileUrl,
  coverImageUrl,
  controls = true,
  mimeType,
}) => {
  return (
    <video autoPlay controls={controls} loop muted className={'w-full h-96'}>
      <source src={fileUrl} type={mimeType} />
    </video>
  )
}

export default VideoPlayer
