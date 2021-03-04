import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import WhatWeDo from './styled'
import { example } from '../../../static'
import { Molecules } from '../../../components'

const { SectionDescription, ServiceCard } = Molecules

const text = `Here are the services and skills our custom mobile app <br /> development company brings to the table`

const services = [
  {
    title: 'IOT Development',
    description: 'Use secure IoT solutions to monitor your operations, optimise them, and introduce pinpoint efficiency. Gain crucial insights from the Big Data gathered by IoT devices to improve decision-making. Use secure IoT solutions to monitor your operations, optimise them, and introduce pinpoint efficiency. Gain crucial insights from the Big Data gathered by IoT devices to improve decision-making.',
    poster: null
  },
  {
    title: 'Web App Development',
    description: 'As a web application development hub, we are committed to bringing tangible business results with fully packed, high-performing, and secure web solutions.',
    poster: null
  },
  {
    title: 'Mobile App Development',
    description: 'iOS and Android apps built with React Native based on the robust Node.js backend will satisfy every end-user. See how we solved the problem of non-scalability in one startup\'s application.',
    poster: example
  }
]

const ThemeWhatWeDo = props => {
  return (
    <WhatWeDo>
      <Container>
        <Row>
          <Col col={12}>
            <SectionDescription
              align='center'
              title='Expanice Soft Services'
              subTitle='WHAT WE DO'
              description={text}
              style={{ marginBottom: '6rem' }}
            />
          </Col>

          {services.map((i, idx) => (
            <Col key={idx} col={12} md={4}>
              <ServiceCard
                title={i.title}
                description={i.description}
                poster={i.poster}
                onClick={() => console.log('click')}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </WhatWeDo>
  )
}

export default React.memo(ThemeWhatWeDo)