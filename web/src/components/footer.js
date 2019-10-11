import React from 'react'
import { NavLink } from 'react-router-dom'


const Footer = () => {
	const styles = {
    footer: {
			position: 'absolute',
			width: '100%',
			backgroundColor: '#555',
			height: '80px',
			bottom: '0px',
			padding: '24px 0px',
			display: 'flex',
			justifyContent: 'space-around',
		},
		link: {
			color: '#fff',
			textDecoration: 'none',
		}
	}
	
  return (
		<footer style={styles.footer}>
			<NavLink style={styles.link} to={'/'}>Home</NavLink>
			<NavLink style={styles.link} to={'/cv'}>CV</NavLink>
		</footer>
  )
}

export default Footer
