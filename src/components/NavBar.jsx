import React from 'react'
import {Navbar, Nav, Link, Button, FormControl, Form} from 'react-bootstrap'; 

class NavBar extends React.Component{
render() {
    return (
    
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Geek Trotter</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Accueil</Nav.Link>
      <Nav.Link href="#features">Recherches</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Rechercher</Button>
    </Form>
  </Navbar>
    )}
}

export default NavBar