import styled from 'styled-components'
import { Atoms } from '../../'

const { Heading, Paragraph } = Atoms

const ToggleContent = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

ToggleContent.Left = styled('div')`
  margin-right: 8rem;
`

ToggleContent.Right = styled('div')`
  width: 100%;
  max-width: 45.5rem;
`

ToggleContent.ItemsList = styled('ul')`
  display: inline-flex;
  flex-direction: column; 
  padding: 0;
  margin: 0;
  list-style: none;
`

ToggleContent.Item = styled('li')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1.5rem;
  
  &.active * {
    color: ${({ theme }) => theme.colors.green};
  }
  
  &:last-of-type {
    margin-bottom: 0;
  }
`

ToggleContent.ItemStatus = styled(Heading)`
  margin-right: 1.5rem;
  min-width: 1.5rem;
`

ToggleContent.ItemHeading = styled(Heading)``

ToggleContent.ItemTitle = styled(Heading)`
  font-size: 2.6rem;
  margin-bottom: 2rem;
`

ToggleContent.Description = styled(Paragraph)``

export default ToggleContent
