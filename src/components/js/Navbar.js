import React from 'react';
import { Navbar, NavDropdown, Nav, Form, Button, FormControl } from 'react-bootstrap';
import image5 from '../../image/5.jpg'
const NavbarComponent = () =>
(
  <Navbar bg="light" expand="lg">

    <Navbar.Brand href="#home">
      <img alt="" src={image5} width="30" height="30" className="d-inline-block  align-top" />{' '}
      Free to Lance
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav ml-3">
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Nav className="mr-auto ml-5">
        <Nav.Link href="#home">How it Works?</Nav.Link>
        <NavDropdown title="Browse" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Button variant="outline-primary" className="mr-3">Login</Button>{' '}
      <Button variant="outline-primary">Sign-in</Button>{' '}

    </Navbar.Collapse>
  </Navbar>
)

export default NavbarComponent;
