import React from 'react'
import PropTypes from 'prop-types'
import Ripples from 'react-ripples'
import { rgba } from 'polished'

import { theme } from '../../../constants'
import { ButtonWrapper, Button } from './styled'

const ThemeButton = props => {
  const {
    type = '',
    onClick,
    children,
    ...rest } = props

  const getRippleColor = React.useCallback((type) => {
    switch (type) {
      case 'primary':
        return rgba(theme.colors.green, 0.2)
      default:
        return rgba(theme.colors.white, 0.2)
    }
  }, [type])

  return (
    <ButtonWrapper {...rest}>
      <Ripples color={getRippleColor(type)}>
        <Button type={type} onClick={onClick}>{children}</Button>
      </Ripples>
    </ButtonWrapper>
  )
}

ThemeButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default React.memo(ThemeButton)
