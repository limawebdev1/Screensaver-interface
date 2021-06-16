import React from 'react'

interface IProps {
  fileUrl: string
  coverImageUrl: string
}

const PdfViewer: React.VFC<IProps> = ({ fileUrl, coverImageUrl }) => {
  return (
    <div className={'relative'}>
      <img
        src={coverImageUrl}
        alt={'cover photo'}
        className={'blur-sm filter object-fill'}
      />
      <span
        className={'top-4 absolute shadow-xl w-full text-center text-red-400'}
      >
        PDF viewer here
      </span>
    </div>
  )
}

export default PdfViewer
