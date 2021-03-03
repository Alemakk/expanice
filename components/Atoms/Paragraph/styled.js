import styled from 'styled-components'

function getParagraphColor (type, theme) {
  switch (type) {
    case 'white':
      return theme.colors.white
    default:
      return theme.colors.primary
  }
}


const Paragraph = styled('div')`
  font-family: ${({ theme }) => theme.fonts.mulish};
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.69;
  
  p {
    margin: 0;
  }
`

export default Paragraph
