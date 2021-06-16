import React from 'react'
import { AudioPlayer, ImageViewer, PdfViewer, VideoPlayer } from '.'

interface IProps {
  type: 'image' | 'video' | 'audio' | 'pdf' // TODO: use mimeType instead
  mimeType?: string
  fileUrl: string
  coverImageUrl?: string
  description?: string
}

const MediaViewer: React.VFC<IProps> = ({
  type,
  fileUrl,
  coverImageUrl,
  description,
}) => {
  return (
    <div>
      {type === 'image' && (
        <ImageViewer fileUrl={fileUrl} description={description} />
      )}
      {type === 'video' && (
        <VideoPlayer fileUrl={fileUrl} coverImageUrl={coverImageUrl} />
      )}
      {type === 'audio' && (
        <AudioPlayer fileUrl={fileUrl} coverImageUrl={coverImageUrl} />
      )}
      {type === 'pdf' && (
        <PdfViewer fileUrl={fileUrl} coverImageUrl={coverImageUrl} />
      )}
    </div>
  )
}

export default MediaViewer
