import React from 'react'
import {Navbar, Nav, Button, FormControl, Form, Carousel} from 'react-bootstrap'; 
import  { NavLink }  from 'react-router-dom'

class NavBar extends React.Component{
render() {
    return (
    
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href='/'>Geek Trotter</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink to ='/'>Accueil</NavLink>
      <NavLink to='/Recherche'>Recherche</NavLink>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Rechercher</Button>
    </Form>
  </Navbar>
    )}
}

export default NavBar