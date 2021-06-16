import React from 'react'
import { Navbar } from '.'
import NFT from '../types'

interface IProps {
  url?: string
  image?: string
  metadata?: NFT
}

const Layout: React.FC<IProps> = ({ children }) => {

  return (
    <div className={'mt-32 pace-y-4 lg:pb-20 bg-black h-full relative'}>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default Layout
