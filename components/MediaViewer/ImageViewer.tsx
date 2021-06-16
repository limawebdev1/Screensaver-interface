import React from 'react'

interface IProps {
  fileUrl: string
  description?: string
}

const ImageViewer: React.VFC<IProps> = ({ fileUrl, description }) => {
  return (
    <picture>
      <img className={'object-fill'} src={fileUrl} alt={description} />
    </picture>
  )
}

export default ImageViewer
