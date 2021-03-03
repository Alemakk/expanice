import styled from 'styled-components'
import { Atoms } from '../../'

const { Paragraph, Heading, SubTitle } = Atoms

const MainBanner = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;        
  align-content: center;
  width: 100%;
  min-height: 82rem;
  background-color: ${({ theme }) => theme.colors.gray};
  ${({ poster }) => `
    background: url(${poster}) center no-repeat;
    background-size: cover;
  `}
`

MainBanner.SubTitle = styled(SubTitle)`
  text-align: center;
`

MainBanner.Title = styled(Heading)`
  text-align: center;
`

MainBanner.Description = styled(Paragraph)`
  text-align: center;
`

MainBanner.ExtraContent = styled('div')``

export default MainBanner
