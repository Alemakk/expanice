import React from 'react'

import { Layout, Molecules } from '../../components'
import { background } from '../../static'
import { Home } from '../../components'

const { MainBanner, PageBanner } = Molecules
const { OurMission, WhatWeDo, WhyExpaniceSoft } = Home

const title = `Custom Software Development <br/> Company That Cares`
const bannerTitle = `Are you <br /> nurturing a <br /> product idea?`

export default function HomePage() {
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
