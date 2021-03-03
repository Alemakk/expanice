import styled from 'styled-components'
import { Atoms, Molecules } from '../../'

const { Heading, Button, SubTitle } = Atoms

const PageBanner = styled('div')`
  padding: 12rem 0;
  background-color: ${({ theme }) => theme.colors.gray};
  ${({ poster }) => `
    background: url(${poster}) center no-repeat;
    background-size: cover;
  `}
`

PageBanner.Title = styled(Heading)``

PageBanner.SubTitle = styled(SubTitle)`
  margin-top: 1rem;
`

PageBanner.Left = styled('div')`
  height: 100%;
`

PageBanner.JustifyContent = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

PageBanner.Button = styled(Button)`
  margin-top: 6rem;
`

export default PageBanner