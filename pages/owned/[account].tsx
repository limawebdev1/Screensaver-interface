import React from 'react'
import { Layout } from '../../components'
import ExploreView from '../ExploreView'

const CollectionPage: React.VFC = () => {
  return (
    <Layout>
      <div className={'md:mt-12 pb-8 w-11/12 mx-auto'}>
        <ExploreView owned={true} />
      </div>
    </Layout>
  )
}

export default CollectionPage
