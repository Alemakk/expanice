import React from 'react'
import Link from 'next/link'
import { Container } from 'styled-bootstrap-grid'

import { routes } from '../../../constants'
import { logo } from '../../../static'
import { Atoms } from '../../'
import Header from './styled'
const { NavLink } = Atoms

const ThemeHeader = props => {

  return (
    <Header>
      <Container>
        <Header.Inner>
          <Link href='/'>
            <Header.Logo src={logo} alt='Main Logo' />
          </Link>

          <Header.Menu count={routes.length} >
            {routes.map((i, idx) => (
              <Header.NavLinkWrapper key={idx}>
                <NavLink route={i.route} type='header'>{i.name}</NavLink>
              </Header.NavLinkWrapper>
            ))}
          </Header.Menu>

          <Header.Button onClick={() => 'Get free quote'}>Get a Free Quote</Header.Button>
        </Header.Inner>
      </Container>
    </Header>
  )
}

export default React.memo(ThemeHeader)