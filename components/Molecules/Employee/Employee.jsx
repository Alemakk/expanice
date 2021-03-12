import React from 'react'
import Image from 'next/image'

import Employee from './styled'
import { example } from '../../../static'

const ThemeEmployee = () => {
  return (
    <Employee>
      <Employee.Photo>
        <Image src={example} layout='fill' objectFit='cover' />
      </Employee.Photo>
      <Employee.Content>
        <Employee.Name>Employee name</Employee.Name>
        <Employee.Position>Employee position</Employee.Position>
        <Employee.ContactsList>
          <Employee.ContactsItem>
            <Employee.ContactsLink href='#'>LinkedIn</Employee.ContactsLink>
          </Employee.ContactsItem>

          <Employee.ContactsItem>
            <Employee.ContactsLink href='#'>ask@expanice.com</Employee.ContactsLink>
          </Employee.ContactsItem>
        </Employee.ContactsList>
      </Employee.Content>
    </Employee>
  )
}

export default React.memo(ThemeEmployee)