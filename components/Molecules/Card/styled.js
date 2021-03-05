import styled from 'styled-components'
import Image from 'next/image'

import { Atoms } from '../../'

const { Heading, Paragraph } = Atoms

const Card = styled('div')``

Card.Title = styled(Heading)`
  margin-top: 2rem;
`

Card.Description = styled(Paragraph)`
  margin-top: 2rem;
`

Card.Icon = styled(Image)``

Card.Info = styled('div')`
  margin-top: 6rem;
`

Card.InfoNumbers = styled('div')`
  color: ${({ theme }) => theme.colors.green};
  font-size: 3.2rem;
`

Card.InfoTitle = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.black_secondary}
`

export default Card