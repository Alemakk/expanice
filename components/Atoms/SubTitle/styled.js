import styled from 'styled-components'

const SubTitle = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.mulish};
  color: ${({ theme }) => theme.colors.green};
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 1.69;
  text-transform: uppercase;
`

export default SubTitle