import React from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper'

import SectionDescription from '../SectionDescription'
import Employee from '../Employee'
import Footer from './styled'

SwiperCore.use([Pagination]);

const ThemeFooter = () => {
  return (
    <Footer>
      <Container>
        <Row>
          <Col col={12} md={6}>
            <SectionDescription
              align='left'
              subTitle='Let’s build it together'
              title='Take your idea to the next level!'
              style={{ marginBottom: '10rem', maxWidth: '53rem' }}
              isWhite
            />

            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><Employee /></SwiperSlide>
              <SwiperSlide><Employee /></SwiperSlide>
              <SwiperSlide><Employee /></SwiperSlide>
              <SwiperSlide><Employee /></SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}

export default React.memo(ThemeFooter)