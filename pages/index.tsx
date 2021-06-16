import Head from 'next/head'
import { Layout } from '../components'
import Mint from '../components/Mint'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <Layout>
      <div className={'w-11/12 max-w-2xl mx-auto py-6'}>
        <h1 className={'text-2xl font-bold mb-3'}>Welcome to Screensaver</h1>
        <p>
          Screensaver is the first digital Marketplace Dao built on Polygon Layer 2.
          Using Polygon means extremely low minting and bidding fees ( ~
          $0.0002). Polygon also uses POS which means it's a cleaner alternative to minting on the ethereum mainnet.
        </p>
        {/* <h1 className={'text-xl font-bold mt-6 mb-3'}>👩‍⚖️ Governance</h1>
        <p>
          A governance token will be distributed to users based on their
          activity in the marketplace. We are figuring out the best algorithm to
          use for this so - stay tuned.{' '}
        </p> */}

<h1 className={'text-xl font-bold mt-6 mb-3'}>New to Screensaver.world?</h1>

<a
  href={'https://screensaver.gitbook.io/screensaver-world/faqs'}
  target={'_blank'}
  className="mt-4 w-full justify-center inline-flex items-center px-6 py-3 border border-red-300 shadow-sm text-red-300 font-medium rounded-xs text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
>
  Check out the faqs
</a>

        <h1 className={'text-xl font-bold mt-6 mb-3'}>🎨 Gallery</h1>

        <a
          href={'/gallery?page=1'}
          target={'_blank'}
          className="mt-4 w-full justify-center inline-flex items-center px-6 py-3 border border-red-300 shadow-sm text-red-300 font-medium rounded-xs text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Gallery
        </a>

        <h1 className={'text-xl font-bold mt-6 mb-3'}>🍃 Minting</h1>

        <a
          href={'/mint'}
          className="mt-4 w-full justify-center inline-flex items-center px-6 py-3 border border-red-300 shadow-sm text-red-300 font-medium rounded-xs text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Mint
        </a>
        <h1 className={'text-xl font-bold mt-6 mb-3'}>💖 Community</h1>

        <a
          href={'https://discord.gg/fAGHysxKux'}
          target={'_blank'}
          className="mt-4 w-full justify-center inline-flex items-center px-6 py-3 border border-red-300 shadow-sm text-red-300 font-medium rounded-xs text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Discord
        </a>

        <h1 className={'text-xl font-bold mt-6 mb-3'}>🗄️ Resources</h1>

        <a
          target={'_blank'}
          href={
            'https://drive.google.com/drive/folders/1Z5AWkN0kHH1gYkTCB-OvgdJlubQxtumQ'
          }
          className="mt-4 w-full justify-center inline-flex items-center px-6 py-3 border border-red-300 shadow-sm text-red-300 font-medium rounded-xs text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Check out the DAO Resources
        </a>

        <h1 className={'text-xl font-bold mt-6 mb-3'}>💻 Code</h1>

        <a
          target={'_blank'}
          href={'https://github.com/domhaobaobao/gallery'}
          className="mt-4 w-full justify-center inline-flex items-center px-6 py-3 border border-red-300 shadow-sm text-red-300 font-medium rounded-xs text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Code
        </a>
      </div>
    </Layout>
  )
}
