import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Form, FormControl, ReactBootstrapStyle } from 'react-bootstrap';


class NavBar extends Component {
render() {
  return (
  
    <Navbar className="navbar-custom" sticky="top">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> 
  </Navbar>

  )
}
}


export default NavBar;




