import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import api from '../utils/web-api'


const HomePage = () => {
  const styles = {
    item: {
      textDecoration: 'none',
    }
  }
  const [restaurants, setRestaurants] = React.useState([])

  React.useEffect(() => {
    api.restaurantsInBangsue().then(res => setRestaurants(res.data))
  }, [])

  return (
    <ListGroup>
      {restaurants.map(restaurant => (
        <ListGroup.Item
          key={restaurant.place_id}
          as="a"
          style={styles.item}
          target="_blank"
          href={`https://www.google.com/maps/place/?q=place_id:${restaurant.place_id}`}>
          {restaurant.name} (rating {restaurant.rating})
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default HomePage
