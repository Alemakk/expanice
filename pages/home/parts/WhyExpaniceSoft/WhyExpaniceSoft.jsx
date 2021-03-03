import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import ExpaniceSoft from './styled'
import { Molecules } from '../../../../components'
const { SectionDescription, Card } = Molecules
import { icon1 } from '../../../../static'

const exampleDescription = `<p>Expanice developers have the right competence to build eCommerce solutions, social networking, mobile back-ends, sleek data processing tools, infrastructure for IoT systems, and more.</p>`

const cards = [...Array(4)].fill(
  {
    title: 'Quality Transparency',
    description: `<p>This is a key measurement not only of our code but also through our recruiting processes. We understand that quality of work and transparency build solid long term business relationships.</p>`,
    icon: icon1,
    info: {
      numbers: '97%',
      title: 'Retention rate'
    }
  }
)

const WhyExpaniceSoft = props => {

  return (
    <ExpaniceSoft>
      <Container>
        <Row>
          <Col col={12} md={7}>
            <SectionDescription
              align='left'
              title='Why Expanice Soft'
              subTitle='Benefits'
              description={exampleDescription}
              style={{ marginBottom: '5rem' }}
            />
          </Col>
        </Row>

        <Row>
          {cards.map((i, idx) => (
            <Col key={idx} col={12} md={3}><Card item={i} /></Col>
          ))}
        </Row>
      </Container>
    </ExpaniceSoft>
  )
}

export default React.memo(WhyExpaniceSoft)