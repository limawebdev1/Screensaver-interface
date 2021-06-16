import React, { useEffect } from 'react'
import useAxios from 'axios-hooks'
import { shortenAddress } from '../../utils'

export default function AccountId({address}) {
    const [{ data, loading, error }, refetch] = useAxios(
        `https://us-central1-proofoftwitter.cloudfunctions.net/api/user/?address=${address}`
      )

      useEffect(() => {
          console.log("DATA", data)
      }, [data])
    
      if (loading || !data?.twitterId) return <a href={`/owned/${address}`} className={'hover:bg-gray-800 p-2 -ml-2 rounded-md'}>{!!address && shortenAddress(address)}</a>
      if (error) return <p>Error!</p>
      if (!data) return <p>Error!</p>

      return (
        <div className={'font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-300'}>
          <a href={`/owned/${address}`} className={'hover:bg-gray-800 hover:from-pink-300 hover:to-pink-400 p-2 -ml-2 rounded-md font-bold text-md text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-300'} >@{data.twitterId}</a>
        </div>
      )
}
