import React from 'react'
import PropsTypes from 'prop-types'

import SectionDescription from './styled'

const ThemeSectionDescription = props => {
  const { title, isWhite, subTitle, description, align = 'center', ...rest } = props

  return (
    <SectionDescription align={align} {...rest}>
      <SectionDescription.SubTitle>{subTitle}</SectionDescription.SubTitle>

      <SectionDescription.Title color={isWhite && 'white'} level={2} title={title} />

      {description && <SectionDescription.Description text={description} />}
    </SectionDescription>
  )
}

ThemeSectionDescription.propTypes = {
  title: PropsTypes.string.isRequired,
  subTitle: PropsTypes.string.isRequired,
  description: PropsTypes.string,
  align: PropsTypes.oneOf(['center', 'left', 'right']),
  isWhite: PropsTypes.bool,
}

export default React.memo(ThemeSectionDescription)
