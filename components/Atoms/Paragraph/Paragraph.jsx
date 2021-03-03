import React from 'react'
import PropsTypes from 'prop-types'

import Paragraph from './styled'

const ThemeParagraph = props => {
  const { color = 'primary', text, ...rest } = props

  return (
    <Paragraph color={color} dangerouslySetInnerHTML={{ __html: text }} {...rest} />
  )
}

ThemeParagraph.propTypes = {
  color: PropsTypes.oneOf(['primary', 'white']),
  text: PropsTypes.string.isRequired,
  children: PropsTypes.node
}

export default React.memo(ThemeParagraph)