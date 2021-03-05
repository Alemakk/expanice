import React from 'react'
import PropsTypes from 'prop-types'

import Card from './styled'

const ThemeCard = props => {
  const { item } = props
  return (
    <Card>
      <Card.Icon width={100} height={80} src={item.icon} alt='card icon' />
      <Card.Title title={item.title} level={4} />
      <Card.Description text={item.description} />
      {item.info &&
      <Card.Info>
        <Card.InfoNumbers>{item.info.numbers}</Card.InfoNumbers>
        <Card.InfoTitle text={item.info.title} />
      </Card.Info>}
    </Card>
  )
}

ThemeCard.propTypes = {
  item: PropsTypes.object.isRequired
}

export default React.memo(ThemeCard)