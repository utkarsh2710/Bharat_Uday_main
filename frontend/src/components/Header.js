import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapeOnSelect>
                <Container>
                    <Navbar.Brand href="/">Bharat Uday</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/features">Features</Nav.Link>
                            <Nav.Link href="/pricing">Pricing</Nav.Link>
                            <Nav.Link href="/disabled">Disabled</Nav.Link>
                            <Nav.Link href="/login"><i className='fa fa-user'></i> Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
