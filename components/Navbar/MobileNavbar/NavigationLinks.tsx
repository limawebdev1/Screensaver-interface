import React from 'react'

interface IProps {
  // user: User
}

const NavigationLinks: React.VFC<IProps> = () => {
  return (
    <nav className={'flex flex-col '}>
      <div className={'flex flex-col space-y-4 '}>
        <div className={'flex flex-col space-y-2 text-xl font-bold items-center'}>
        <a 
            href={'/mint'}           
            className="justify-center px-5 inline-flex w-48 px-6 py-2 rounded-md font-bold rounded-sm shadow-sm text-red-300 hover:text-black bg-gray-900 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Screensaver.world Dao
            </a>  
          <a 
            href={'/'}           
            className="justify-center px-5 inline-flex w-48 px-6 py-2 rounded-md font-bold rounded-sm shadow-sm text-red-300 hover:text-black bg-gray-900 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Explore
            </a>
            <a 
            href={'/mint'}           
            className="justify-center px-5 inline-flex w-48 px-6 py-2 rounded-md font-bold rounded-sm shadow-sm text-red-300 hover:text-black bg-gray-900 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Mint
            </a>  
            <a 
            href={'/objects'}           
            className="justify-center px-5 inline-flex w-48 px-6 py-2 rounded-md font-bold rounded-sm shadow-sm text-red-300 hover:text-black bg-gray-900 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Objects
            </a>
        </div>      
      </div>
    </nav>
  )
}

export default NavigationLinks
