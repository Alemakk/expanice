import React from 'react'
import PropsTypes from 'prop-types'

import SectionDescription from './styled'

const ThemeSectionDescription = props => {
  const { title, subTitle, description, align = 'center', ...rest } = props

  return (
    <SectionDescription align={align} {...rest}>
      <SectionDescription.SubTitle>{subTitle}</SectionDescription.SubTitle>

      <SectionDescription.Title level={2} title={title} />

      {description && <SectionDescription.Description text={description} />}
    </SectionDescription>
  )
}

ThemeSectionDescription.propTypes = {
  title: PropsTypes.string.isRequired,
  subTitle: PropsTypes.string.isRequired,
  description: PropsTypes.string,
  align: PropsTypes.oneOf(['center', 'left', 'right'])
}

export default React.memo(ThemeSectionDescription)
