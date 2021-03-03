import styled from 'styled-components'

function getBackgroundColorFromType (type, theme, isRevers = false) {
  if (isRevers) {
    switch (type) {
      case 'primary':
        return theme.colors.transparent
      default:
        return theme.colors.green
    }
  } else {
    switch (type) {
      case 'primary':
        return theme.colors.green
      default:
        return theme.colors.transparent
    }
  }
}

function getTextNodeColorFromType (type, theme, isRevers = false) {
  if (isRevers) {
    switch (type) {
      case 'primary':
        return theme.colors.green
      default:
        return theme.colors.white
    }
  } else {
    switch (type) {
      case 'primary':
        return theme.colors.white
      default:
        return theme.colors.green
    }
  }
}

function getBorderColorFromType (type, theme, isRevers = false) {
  if (isRevers) {
    switch (type) {
      case 'primary':
        return theme.colors.green
      default:
        return 'transparent'
    }
  } else {
    switch (type) {
      case 'primary':
        return 'transparent'
      default:
        return theme.colors.green
    }
  }
}


const ButtonWrapper = styled.div`
  border-radius: 2.7rem;
  display: inline-block;
  overflow: hidden;
`

const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.mulish};
  font-weight: 600;
  color: ${({ type, theme }) => getTextNodeColorFromType(type, theme)};
  background-color: ${({ type, theme }) => getBackgroundColorFromType(type, theme)};
  border: .2rem solid ${({ type, theme }) => getBorderColorFromType(type, theme)};
  font-size: 1.4rem;
  text-align: center;
  min-width: 19rem;
  padding: 1.6rem 2rem;
  border-radius: 2.7rem;
  outline: none;
  cursor: pointer;
  position: relative;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
  color: ${({ type, theme }) => getTextNodeColorFromType(type, theme, true)};
  background-color: ${({ type, theme }) => getBackgroundColorFromType(type, theme, true)};
  border: .2rem solid ${({ type, theme }) => getBorderColorFromType(type, theme, true)};
  }
`

export {
  ButtonWrapper,
  Button
}
