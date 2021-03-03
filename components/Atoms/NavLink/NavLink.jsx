import React from 'react'
import Link from 'next/link'
import PropsTypes from 'prop-types'
import { useRouter } from 'next/router'

import NavLink from './styled'

const ThemeNavLink = props => {
  const { route = '', type = 'header', children, ...rest } = props
  const { pathname } = useRouter()

  return (
    <Link href={route}>
      <NavLink active={pathname === route} type={type}>{children}</NavLink>
    </Link>
  )
}

ThemeNavLink.propTypes = {
  type: PropsTypes.oneOf(['header', 'footer']).isRequired,
  route: PropsTypes.string.isRequired,
  children: PropsTypes.node.isRequired
}

export default React.memo(ThemeNavLink)