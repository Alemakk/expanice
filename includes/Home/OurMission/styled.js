import styled from 'styled-components'
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

OurMission.Image = styled('img')`
  display: block;
  width: 100%;
  max-width: 54rem;
  height: 100%;
  object-fit: cover;
`

export default OurMission
