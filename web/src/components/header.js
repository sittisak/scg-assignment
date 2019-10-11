import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const Header = () => {
  return (
		<Navbar bg="dark" variant="dark">
			<NavLink to={'/'}>
				<Navbar.Brand as="li">Home</Navbar.Brand>
			</NavLink>
			<Nav className="mr-auto">
				<NavLink to={'/cv'}>
					<Nav.Link as="li">CV</Nav.Link>
				</NavLink>
			</Nav>
		</Navbar>
  )
}

export default Header
