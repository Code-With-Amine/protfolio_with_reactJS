import React from 'react';
import logo from '../assets/images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (

    <div id='NAVBAR'>
     <Navbar expand="lg" className="container">
      <Container fluid>
        <Navbar.Brand href="#" className='text-white'><img src={logo} alt='logo'/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='container'>
            <Nav.Link href="#" className='text-white p-5'>Home</Nav.Link>
            <Nav.Link href="#Methodology" className='text-white p-5'>My Methodology</Nav.Link>
            <Nav.Link href="#project" className='text-white p-5'>projects</Nav.Link>
            <Nav.Link href="#Skills" className='text-white p-5'>Skills</Nav.Link>
            <Nav.Link href="https://codewithamine.hashnode.dev/" target="_blank" className='text-white p-5'>Blog</Nav.Link>
            <Nav.Link href="#Contact" className='text-white p-5'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar