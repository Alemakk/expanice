import React from 'react'
import PropsTypes from 'prop-types'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import MainBanner from './styled'

const ThemeMainBanner = props => {
  const {
    poster = '',
    subTitle = '',
    title = '',
    description = '',
    children,
    ...rest
  } = props
  return (
    <MainBanner poster={poster}>
      <Container>
        <Row>
          <Col col={12}>
            <MainBanner.SubTitle>{subTitle}</MainBanner.SubTitle>

            <MainBanner.Title color='white' title={title} level={1} />

            {!!description &&
            <MainBanner.Description>{description}</MainBanner.Description>}

            {!!children &&
            <MainBanner.ExtraContent>{children}</MainBanner.ExtraContent>}
          </Col>
        </Row>
      </Container>
    </MainBanner>
  )
}

ThemeMainBanner.propTypes = {
  children: PropsTypes.node,
  poster: PropsTypes.string.isRequired,
  subTitle: PropsTypes.string.isRequired,
  title: PropsTypes.string.isRequired,
  description: PropsTypes.string
}

export default React.memo(ThemeMainBanner)


