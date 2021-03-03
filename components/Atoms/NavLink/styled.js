import styled from 'styled-components'

const NavLink = styled('a')`
  display: block;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  font-family: ${({ theme }) => theme.fonts.mulish};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  line-height: 1.5;
  font-size: 1.6rem;
  text-decoration: none;
  padding: 0 0 0.5rem;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:after {
    transition: inherit;
    width: 100%;
    display: block;
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    max-width: 2.2rem;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.green};
    transform: translateX(-101%);
  }
   
   &:hover {
    &:after {
      transform: translateX(0);      
    }
   }
  
  ${({ active }) => active && `
    &:after {
      transform: translateX(0);
    }
  `}
`

export default NavLink