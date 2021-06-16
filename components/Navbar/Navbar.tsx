import React from 'react'
import MobileNavbar from './MobileNavbar'
import { IProps } from './types'

const Navbar: React.VFC<IProps> = () => {
  return (
    <div>
        <MobileNavbar />
    </div>
  )
}

export default Navbar
