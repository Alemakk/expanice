import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import SectionDescription from '../SectionDescription'
import Footer from './styled'


const ThemeFooter = props => {
  return (
    <Footer>
      <Container>
        <Row>
          <Col col={12} md={4}>
            <SectionDescription
              align='left'
              subTitle='Let’s build it together'
              title='Take your idea to the next level!'
              style={{ marginBottom: '10rem' }}
              isWhite
            />
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}

export default React.memo(ThemeFooter)