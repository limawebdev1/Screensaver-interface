import React, { useEffect, useRef } from 'react'
import Waveform from "./Waveform";

interface IProps {
  fileUrl: string
  coverImageUrl: string
  mimeType?: string
}

const AudioPlayer: React.VFC<IProps> = ({
  fileUrl,
  mimeType,
  coverImageUrl,
}) => {

  return (
    <div className={'relative w-full'}>
      {/* <Waveform url={fileUrl} /> */}
      <img
        className={'object-fill w-full h-80'}
        src={require('../../assets/soundwave.png')}
        alt={'sound wave'}

      />
      <audio controls className={'absolute bottom-2 px-4 w-full'}>
        <source src={fileUrl} type={mimeType} />
      </audio>
    </div>
  )
}

export default AudioPlayer
