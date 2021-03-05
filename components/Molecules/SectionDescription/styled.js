import styled from 'styled-components'
import { Atoms } from '../../'

const { SubTitle, Heading, Paragraph } = Atoms

const SectionDescription = styled('div')`
  text-align: ${({ align }) => align};
`

SectionDescription.SubTitle = styled(SubTitle)`
  text-align: inherit;
  color: ${({ theme }) => theme.colors.green_seconds};
`

SectionDescription.Title = styled(Heading)`
  text-align: inherit;
  margin-top: 1rem;
`

SectionDescription.Description = styled(Paragraph)`
  text-align: inherit;
  margin-top: 3rem;
`

export default SectionDescription
