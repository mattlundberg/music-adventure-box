import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class Navigation extends React.Component {
  render() {
    const fixedTop = {
      position: "sticky",
      top: 0,
    }
    return (
      <div style={fixedTop}>
        <nav>
          <Navbar bg="primary" expand="lg" variant="dark">
            <Navbar.Brand href="/">Music Adventure Box</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/shop">Shop</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/videos">Videos</Nav.Link>
              </Nav.Item>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
        </nav>
      </div>
    );
  }
}

export default Navigation;