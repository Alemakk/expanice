import React from 'react'
import PropsTypes from 'prop-types'

import SubTitle from './styled'

const ThemeSubTitle = props => {
  const { children, ...rest } = props

  return (
    <SubTitle {...rest}>{children}</SubTitle>
  )
}

ThemeSubTitle.propTypes = {
  children: PropsTypes.node
}

export default React.memo(ThemeSubTitle)