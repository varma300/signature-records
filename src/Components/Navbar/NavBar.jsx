import React from 'react'
import './Navbar.css'
import { Container,Navbar, Nav, NavDropdown } from 'react-bootstrap'

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">signature records</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#service">Service</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#content">Content</Nav.Link>
              <Nav.Link href="#gigs">Gigs</Nav.Link>
              <Nav.Link href="#festivals">Festivals</Nav.Link>
              <Nav.Link href="#artist">Artist</Nav.Link>
              <Nav.Link href="#eShoecase">Event Showcase</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">High-On-Music</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Indiegaga
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Intersect</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">HOM Getaway</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Aboout</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Client</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar