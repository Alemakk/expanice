import styled from 'styled-components'

function getHeadingColor (color, theme) {
  switch (color) {
    case 'white':
      return theme.colors.white
    default:
      return theme.colors.black_secondary
  }
}

const Heading = styled.span`
  font-family: ${({ theme }) => theme.fonts.mulish};
  color: ${({ color, theme }) => getHeadingColor(color, theme)};
  font-weight: 900;
  line-height: 1.3;
  margin: 0;
  ${({ as, theme }) => theme.headings[as]}
`

export default Heading