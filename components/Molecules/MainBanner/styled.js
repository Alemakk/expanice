import styled from 'styled-components'
import Image from 'next/image'

import { Atoms } from '../../'

const { Paragraph, Heading, SubTitle } = Atoms

const MainBanner = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;        
  align-content: center;
  width: 100%;
  min-height: 82rem;
  background-color: ${({ theme }) => theme.colors.gray};
`

MainBanner.Poster = styled(Image)``

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
