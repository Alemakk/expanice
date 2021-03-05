import styled from 'styled-components'
import { Atoms} from '../../'

const { Heading, Button, SubTitle } = Atoms

const Footer = styled('footer')`
  padding: 12rem 0 3rem;
  background-color: ${({ theme }) => theme.colors.black};
`

export default Footer