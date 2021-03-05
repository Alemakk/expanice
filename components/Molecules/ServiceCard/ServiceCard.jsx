import React from 'react'
import PropsTypes from 'prop-types'

import ServiceCard from './styled'

const ThemeServiceCard = props => {
  const { title = '', description = '', poster = '', onClick } = props
  return (
    <ServiceCard>
      {!!poster &&
        <ServiceCard.Poster src={poster} alt='image' layout='fill' objectFit='cover' />
      }
      <ServiceCard.Content>
        <ServiceCard.Heading level={3} title={title} />
        <ServiceCard.Description text={description} />
      </ServiceCard.Content>

      <div>
        <ServiceCard.Button withPoster={!!poster} type={poster && 'primary'} onClick={onClick}>More</ServiceCard.Button>
      </div>
    </ServiceCard>
  )
}

ThemeServiceCard.propTypes = {
  title: PropsTypes.string.isRequired,
  description: PropsTypes.string.isRequired,
  poster: PropsTypes.string,
  onClick: PropsTypes.func.isRequired
}

export default React.memo(ThemeServiceCard)