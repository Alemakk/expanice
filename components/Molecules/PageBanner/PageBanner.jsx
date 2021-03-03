import React from 'react'
import PropsTypes from 'prop-types'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import PageBanner from './styled'
import { Molecules } from '../../'
import { banner } from '../../../static'

// const { SectionDescription } = Molecules

const ThemePageBanner = props => {
  const { children, title = '', subTitle, route = '/', ...rest } = props
  return (
    <PageBanner poster={banner} {...rest}>
      <Container>
        <Row>
          <Col col={12} md={4}>
            <PageBanner.Left>
              <PageBanner.JustifyContent>
                <PageBanner.SubTitle>{subTitle}</PageBanner.SubTitle>
                <PageBanner.Title level={2} color='white' title={title} />
              </PageBanner.JustifyContent>

              <PageBanner.Button
                type='primary'
                onClick={() => console.log(route)}
              >
                More about industries
              </PageBanner.Button>
            </PageBanner.Left>
          </Col>
        </Row>
      </Container>
      {children}
    </PageBanner>
  )
}

ThemePageBanner.propTypes = {
  children: PropsTypes.node,
  title: PropsTypes.string.isRequired,
  subTitle: PropsTypes.string.isRequired,
  route: PropsTypes.string.isRequired
}

export default React.memo(ThemePageBanner)