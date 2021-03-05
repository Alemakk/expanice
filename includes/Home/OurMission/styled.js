import styled from 'styled-components'
import Image from 'next/image'

import { Atoms } from '../../../components'

const { Button } = Atoms

const OurMission = styled('div')`
  padding-top: 12rem;
`

OurMission.Button = styled(Button)`
  margin-top: 11rem;
`

OurMission.JustifyContent = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

OurMission.ImageWrapper = styled('div')`
  position: relative;
  width: 100%;
  height: 38rem;
`

OurMission.Image = styled(Image)``

export default OurMission
