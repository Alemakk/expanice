import React from 'react'

import { Layout, Molecules } from '../../components'
import { background } from '../../static'
import { Home } from '../../includes'

const { MainBanner, PageBanner, ToggleContent } = Molecules
const { OurMission, WhatWeDo, WhyExpaniceSoft } = Home

const title = `Custom Software Development <br/> Company That Cares`
const bannerTitle = `Are you <br /> nurturing a <br /> product idea?`
const bannerData = [
  {
    id: 1,
    type: 'Smart Home',
    title: 'Why Smart Home great for your site?',
    description: `
      <p>PWA (Progressive Web Apps) development is a cheaper and more effective alternative to separate native apps for iOS, Android and the Web. It's the simplest way to ensure that your app works offline, among other features.</p>
      <br />
      <p>There is no bigger and more open platform than the Web and, given over eight years of experience, we know all its ins and outs. Therefore, if you can't make a decision or need to brainstorm your idea, we will use our expertise from previous projects to help you achieve your goals.</p>
    `
  },
  {
    id: 2,
    type: 'Healthcare IoT',
    title: 'Why Healthcare IoT great for your site?',
    description: `
      <p>PWA (Progressive Web Apps) development is a cheaper and more effective alternative to separate native apps for iOS, Android and the Web. It's the simplest way to ensure that your app works offline, among other features.</p>
      <br />
      <p>There is no bigger and more open platform than the Web and, given over eight years of experience, we know all its ins and outs. Therefore, if you can't make a decision or need to brainstorm your idea, we will use our expertise from previous projects to help you achieve your goals.</p>
    `
  },
  {
    id: 3,
    type: 'Ecommerce',
    title: 'Why Ecommerce great for your site?',
    description: `
      <p>PWA (Progressive Web Apps) development is a cheaper and more effective alternative to separate native apps for iOS, Android and the Web. It's the simplest way to ensure that your app works offline, among other features.</p>
      <br />
      <p>There is no bigger and more open platform than the Web and, given over eight years of experience, we know all its ins and outs. Therefore, if you can't make a decision or need to brainstorm your idea, we will use our expertise from previous projects to help you achieve your goals.</p>
    `
  },
  {
    id: 4,
    type: 'Social Networking',
    title: 'Why Social Networking great for your site?',
    description: `
      <p>PWA (Progressive Web Apps) development is a cheaper and more effective alternative to separate native apps for iOS, Android and the Web. It's the simplest way to ensure that your app works offline, among other features.</p>
      <br />
      <p>There is no bigger and more open platform than the Web and, given over eight years of experience, we know all its ins and outs. Therefore, if you can't make a decision or need to brainstorm your idea, we will use our expertise from previous projects to help you achieve your goals.</p>
    `
  },
  {
    id: 5,
    type: 'Amazon Web Services',
    title: 'Why Amazon Web Services great for your site?',
    description: `
      <p>PWA (Progressive Web Apps) development is a cheaper and more effective alternative to separate native apps for iOS, Android and the Web. It's the simplest way to ensure that your app works offline, among other features.</p>
      <br />
      <p>There is no bigger and more open platform than the Web and, given over eight years of experience, we know all its ins and outs. Therefore, if you can't make a decision or need to brainstorm your idea, we will use our expertise from previous projects to help you achieve your goals.</p>
    `
  },
  {
    id: 6,
    type: 'Drupal Development',
    title: 'Why Drupal Development great for your site?',
    description: `
      <p>PWA (Progressive Web Apps) development is a cheaper and more effective alternative to separate native apps for iOS, Android and the Web. It's the simplest way to ensure that your app works offline, among other features.</p>
      <br />
      <p>There is no bigger and more open platform than the Web and, given over eight years of experience, we know all its ins and outs. Therefore, if you can't make a decision or need to brainstorm your idea, we will use our expertise from previous projects to help you achieve your goals.</p>
    `
  },
  {
    id: 7,
    type: 'PWA',
    title: 'Why is a PWA great for your site?',
    description: `
      <p>PWA (Progressive Web Apps) development is a cheaper and more effective alternative to separate native apps for iOS, Android and the Web. It's the simplest way to ensure that your app works offline, among other features.</p>
      <br />
      <p>There is no bigger and more open platform than the Web and, given over eight years of experience, we know all its ins and outs. Therefore, if you can't make a decision or need to brainstorm your idea, we will use our expertise from previous projects to help you achieve your goals.</p>
    `
  },
]

export default function HomePage() {
  return (
      <Layout title='Home page'>
        <MainBanner poster={background} subTitle='Company' title={title} />
        <OurMission />
        <WhatWeDo />
        <PageBanner title={bannerTitle} data={bannerData} subTitle='industries' route='/industries'>
          <ToggleContent data={bannerData} />
        </PageBanner>
        <WhyExpaniceSoft />
      </Layout>
  )
}
