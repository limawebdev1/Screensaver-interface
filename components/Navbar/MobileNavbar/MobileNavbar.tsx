// TODO: Cleanup and foramlize states
// TODO: Make Overlay take up full height of screen
// TODO: Properly handle login button placement code (current code is smelly)
// TODO: Properly color search box
import React, { useState } from 'react'
import { IProps } from '../types'
// TODO: figure out why inline require'ing these don't work (webpack issue?)
// import logoImage from './REDPILL.svg'
import SearchInput from '../SearchInput'
// import closeButtonIcon from './close-button-icon.svg'
// import searchIcon from './search-icon.svg'
// import menuIcon from './menu-icon.svg'
import NavigationLinks from './NavigationLinks'
import { MenuIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/outline'
import ConnectButton from '../../ConnectButton'
import Banner from '../../Banner'
import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import logoImage from './SCREENSAVER.png'
import { ethers } from 'ethers'
import { ERC20_ABI } from '../../../constants/abis/erc20'
import { auth } from '../../../config/firebase'

var utils = require('ethers').utils

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

type State = 'initial' | 'search' | 'menu'

const MobileNavbar: React.FC<IProps> = () => {
  const [state, setState] = useState<State>('initial')
  const [tokenBalance, setTokenBalance] = useState<number>(0)
  const { account, chainId, library } = useWeb3React()
  const [isSignedIn, setIsSignedIn] = useState(false) // Local signed-in state.

  useEffect(() => {
    const unregisterAuthObserver = auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user)
      console.log('SIGN UP', user)
    })
    return () => unregisterAuthObserver()
  }, [])

  async function balanceOf() {
    const contract = new ethers.Contract(
      '0x580127f3F17516A945785b9485048ad22f036142',
      ERC20_ABI,
      library.getSigner(account),
    )

    var balance = await contract.balanceOf(account)
    // var intBalance = balance.toString()
    var intBalance = utils.formatEther(balance)
    setTokenBalance(intBalance)
    console.log('TOKEN BALANCE', intBalance)
  }

  useEffect(() => {
    if (!account) return
    balanceOf()
  }, [account])

  return (
    <div
      className={
        'fixed z-10 bg-black right-0 top-0 w-full border-b-2 border-gray-800'
      }
    >
      <div className={'mx-4'}>
        <div
          className={
            'flex justify-between mx-auto w-11/12 items-center h-16 z-10'
          }
        >
          <div className={'flex'}>
      
            <span className={'inline text-2xl mr-2'}>🌈</span>
            <a
              className={'font-serif text-2xl text-red-400 font-bold'}
              href={'/gallery?page=1'}
            >
              <img
                src={logoImage}
                alt={'Screen Saver'}
                className={'cursor-pointer'}
                width={200}
              />
            </a>
          </div>
          <div className={'flex space-x-3 items-center'}>
            <div className="px-6 w-full py-2 border border-red-300 text-sm shadow-lg font-medium rounded-sm shadow-sm text-red-300 bg-gray-900 focus:outline-none ">
              {tokenBalance} SSD
            </div>
            <ConnectButton />

            <Menu as="div" className="ml-3 relative z-20">
              {({ open }) => (
                <>
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      {/* <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          /> */}
                      <MenuIcon
                        className={
                          ' text-red-300 h-8 w-8 p-2 border border-red-300 text-md font-medium rounded-sm shadow-lg hover:shadow-sm text-red-300 bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                        }
                      />
                
                    </Menu.Button>
                  </div>
                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className="origin-top-right absolute right-0 mt-2 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/gallery?page=1"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            Gallery
                          </a>
                        )}
                      </Menu.Item>
                      {!!account && (
                        <>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href={`/created/${account}`}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700',
                              )}
                            >
                              Created
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                          <a
                            href={`/owned/${account}`}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            Owned
                          </a>
                        )}
                      </Menu.Item>
                      </>
                      )}
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/mint"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            Mint
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/whitelist"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            Whitelist
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            What is Screensaver Dao?
                          </a>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://v0.screensaver.world"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            Screensaver V0
                          </a>
                        )}
                      </Menu.Item>

                      {isSignedIn && <Menu.Item>
                        {({ active }) => (
                          <div
                          onClick={
                            () => {
                              auth().signOut().then(() => {
                                // Sign-out successful.
                                console.log("SIGNOUT")
                              }).catch((error) => {
                                // An error happened.
                                console.log("SIGNOUT ERROR", error)
                              });
                            }
                          }
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            Admin Logout
                          </div>
                        )}
                      
                      </Menu.Item>
                      }

                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </div>
      </div>

      <Banner />
    </div>
  )
}

export default MobileNavbar
