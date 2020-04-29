import React from 'react'
import {Navbar, Nav, Button, FormControl, Form} from 'react-bootstrap'; 


class NavBar extends React.Component{
render() {
    return (
    
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href='/'>Geek Trotter</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href ='/'>Accueil</Nav.Link>
      <Nav.Link href='/Recherche'>Recherche</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Rechercher</Button>
    </Form>
  </Navbar>
    )}
}

export default NavBar