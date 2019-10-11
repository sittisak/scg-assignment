import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import api from '../utils/web-api'


const HomePage = () => {
  const styles = {
    item: {
      textDecoration: 'none',
      display: 'flex',
      justifyContent: 'space-between',
    },
    text: {
      color: '#555',
      margin: '0px',
    },
    subtitle: {
      color: '#555',
      marginBottom: '24px',
    },
  }
  const [restaurants, setRestaurants] = React.useState([])

  React.useEffect(() => {
    api.restaurantsInBangsue().then(res => setRestaurants(res.data))
  }, [])

  return (
    <div>
      <h2>Display restaurants in Bangsue area</h2>
      <h4 style={styles.subtitle}>(You can click on item, it will bring you to google map)</h4>
      <ListGroup>
        {restaurants.map(restaurant => (
          <ListGroup.Item
            key={restaurant.place_id}
            as='a'
            style={styles.item}
            target='_blank'
            href={`https://www.google.com/maps/place/?q=place_id:${restaurant.place_id}`}>
            <p style={styles.text}>{restaurant.name}</p>
            {restaurant.rating &&
              <p style={styles.text}>rating {parseFloat(restaurant.rating).toFixed(1)}</p>
            }
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>

  )
}

export default HomePage
