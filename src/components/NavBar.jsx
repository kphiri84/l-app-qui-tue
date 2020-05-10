import React from 'react'
import {Navbar, Nav, Button, FormControl, Form, Carousel} from 'react-bootstrap'; 
import  { NavLink }  from 'react-router-dom'
import './NavBar.css'

class NavBar extends React.Component{
render() {
    return (
    <div className="Lien1">
  <Navbar className="dark" >
    <Navbar.Brand href='/'><h3 className="Title">Geek Trotter</h3></Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink to ='/'><p className="Lien">Accueil</p></NavLink>
      <NavLink to='/Recherche'><p className="Lien">Recherche</p></NavLink>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Recherche" className="mr-sm-2" />
      <Button className="boutton" variant="outline-info">Rechercher</Button>
    </Form>
  </Navbar>
  </div>
    )}
}

export default NavBar