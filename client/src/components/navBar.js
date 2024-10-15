import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
const NavBar = () => {
  return (
    <div>

       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">TO-DO-LIST</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/register">register</Nav.Link>
            <Nav.Link href="/profile">profile</Nav.Link>
            <Nav.Link href="/login">login</Nav.Link>
            <Nav.Link href="/">home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default NavBar