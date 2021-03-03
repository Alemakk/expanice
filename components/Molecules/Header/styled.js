import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
import { Atoms } from '../../'

const { Button, NavLink } = Atoms

const Header = styled('nav')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 4.5rem 0;
`

Header.Inner = styled('div')`
  display: flex;
  align-content: center;
  justify-content: space-between;
`

Header.Logo = styled('img')`
  width: 100%;
  max-width: 15.5rem;
  height: auto;
  object-fit: contain;
`

Header.Menu = styled('div')`
  width: 100%;
  max-width: calc(12rem * ${({ count }) => count});
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(${({ count }) => count}, minmax(12rem, 1fr));
  justify-items: center;
  align-items: center;
`

Header.NavLinkWrapper = styled('div')`

`

Header.Button = styled(Button)``

export default Header