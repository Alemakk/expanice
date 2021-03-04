import React, { useState } from 'react'
import PropsTypes from 'prop-types'

import ToggleContent from './styled'

const ThemeToggleContent = ({ data = [], ...rest }) => {
  const [activeItem, setActiveItem] = useState(data[0])
  return (
    <ToggleContent {...rest}>
      <ToggleContent.Left>
        <ToggleContent.ItemsList>
          {data.map((item, idx) => (
            <ToggleContent.Item className={activeItem.id === item.id && 'active'} key={idx} onClick={() => setActiveItem(item)}>
              <ToggleContent.ItemStatus color='white' title={activeItem.id === item.id ? '-' : '+'} level={3} />
              <ToggleContent.ItemHeading color='white' title={item.type} level={4} />
            </ToggleContent.Item>
          ))}
        </ToggleContent.ItemsList>
      </ToggleContent.Left>

      <ToggleContent.Right>
        <ToggleContent.ItemTitle color='white' title={activeItem.title} level={3} />
        <ToggleContent.Description color='white' text={activeItem.description} />
      </ToggleContent.Right>
    </ToggleContent>
  )
}

ThemeToggleContent.propTypes = {
  data: PropsTypes.array.isRequired
}

export default React.memo(ThemeToggleContent)
