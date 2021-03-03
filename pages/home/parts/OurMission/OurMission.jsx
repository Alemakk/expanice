import React from 'react'
import { useRouter } from 'next/router'
import PropsTypes from 'prop-types'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import { example } from '../../../../static'
import { Atoms, Molecules } from '../../../../components'

const { Button, Paragraph } = Atoms
const { SectionDescription } = Molecules

import OurMission from './styled'
const text = `
  <p>Our mission is to enhancing the business growth of our customers with creative Design and Development to deliver market-defining high-quality solutions that create value and reliable competitive advantage for our clients around the world.</p>
  <br />
  <p>Our mission is to deliver optimal solutions with quality and services at reasonable prices. For us customer satisfaction is given top place.</p> 
  <br />
  <p>We are very friendly in our dealings to the customers and it helps us retain existing clients and expand customer circle. We always try to improve the quality of our products by exploring innovative ideas.</p></p>
`
const title = `We value <br/> and in all <br /> that we do`

const ThemeOurMission = props => {
  const router = useRouter()

  const handleClick = e => {
    e.preventDefault()
      router.push('/about')
  }

  return (
    <OurMission>
      <Container>
        <Row>
          <Col col={12} md={3}>
            <OurMission.JustifyContent>
              <SectionDescription
                align='left'
                title={title}
                subTitle='our mission'
              />

              <OurMission.Button type='primary' onClick={handleClick}>About us</OurMission.Button>
            </OurMission.JustifyContent>
          </Col>

          <Col col={12} md={9}>
            <Row>
              <Col col={12} md={6}>
                <Paragraph text={text} />
              </Col>
              <Col col={12} md={6}>
                <OurMission.Image src={example} alt='image' />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </OurMission>
  )
}

export default React.memo(ThemeOurMission)
