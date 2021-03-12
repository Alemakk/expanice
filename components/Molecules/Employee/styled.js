import styled from 'styled-components'

const Employee = styled('div')`
  display: flex;
`

Employee.Photo = styled('div')`
  width: 19rem;
  min-width: 19rem;
  height: 19rem;
  margin-right: 3.5rem;
  position: relative;
  border-radius: 100%;
  overflow: hidden;
`

Employee.Content = styled('div')``

Employee.Name = styled('div')`
  font-family: ${({ theme }) => theme.fonts.mulish};
  font-weight: 600;
  font-size: 2.6rem;
  color: ${({ theme }) => theme.colors.white};
`

Employee.Position = styled('div')`
  font-family: ${({ theme }) => theme.fonts.mulish};
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  font-weight: 600;
  margin-top: 1rem;
`

Employee.ContactsList = styled('ul')`
  margin: 3.5rem 0 0;
  padding: 0;
  list-style: none;
`

Employee.ContactsItem = styled('li')`
  padding-bottom: 0.5rem;
`

Employee.ContactsLink = styled('a')`
  font-family: ${({ theme }) => theme.fonts.mulish};
  color: ${({ theme }) => theme.colors.green_seconds};
  font-size: 1.8rem;
  font-weight: 800;
  text-decoration: none;
`

export default Employee