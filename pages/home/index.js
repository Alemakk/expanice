import React from 'react'

import { Layout, Molecules } from '../../components'
import { background } from '../../static'
import { OurMission, WhatWeDo, WhyExpaniceSoft } from './parts'

const { MainBanner, PageBanner } = Molecules

const title = `Custom Software Development <br/> Company That Cares`
const bannerTitle = `Are you <br /> nurturing a <br /> product idea?`

export default function Home() {
  return (
      <Layout title='Home page'>
        <MainBanner poster={background} subTitle='Company' title={title} />
        <OurMission />
        <WhatWeDo />
        <PageBanner title={bannerTitle} subTitle='industries' route='/industries' />
        <WhyExpaniceSoft />
      </Layout>
  )
}
