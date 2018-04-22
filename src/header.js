import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Navbar,Nav,NavItem,NavDropdown,MenuItem,Glyphicon } from 'react-bootstrap'

class Header extends React.Component {
  render() {
    return (
      <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">Carrito</a><Glyphicon glyph="glyphicon glyphicon-shopping-cart" />
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="/form">
      Añadir
    </NavItem>
  </Nav>
</Navbar>)
    
  }
}

export default Header