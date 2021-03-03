import React from 'react'
import PropsTypes from 'prop-types'

import Heading from './styled'

const ThemeHeading = props => {
  const { level = 1, title = '', ...rest } = props

  return (
    <Heading dangerouslySetInnerHTML={{ __html: title }} as={`h${level}`} {...rest} />
  )
}

ThemeHeading.propTypes = {
  title: PropsTypes.string.isRequired,
  level: PropsTypes.oneOf([1, 2, 3, 4])
}

export default React.memo(ThemeHeading)
