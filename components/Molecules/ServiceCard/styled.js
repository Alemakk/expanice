import styled from 'styled-components'
import { rgba } from 'polished'
import { Atoms } from '../../'
const { Button, Paragraph, Heading } = Atoms

const ServiceCard = styled('section')`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 3.5rem;
  background-color: ${({ theme }) => theme.colors.gray};
  ${({ poster }) => !!poster && `
    background: url(${poster}) center no-repeat;
    background-size: cover;
  `}
`

ServiceCard.Heading = styled(Heading)``

ServiceCard.Content = styled('div')`
`

ServiceCard.Description = styled(Paragraph)`
   margin-top: 2rem;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

ServiceCard.Button = styled(Button)`
  margin-top: 2rem;
  ${({ withPoster, theme }) => withPoster && `
    box-shadow: 0 0.8rem 3rem 0 ${rgba(theme.colors.green, 0.38)};
  `}
`

export default ServiceCard
