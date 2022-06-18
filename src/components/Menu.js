import React, { Component } from 'react';
import logo from './../images/logo.png';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import {NavLink, withRouter}  from 'react-router-dom'

export class Menu extends Component
{

    getNavLink = (path) =>
    {
        return this.props.location.pathname === path ? 'active' : ''
    }
    render()
    {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <a href="/">
                        <img alt="logo" src={logo} with="100px" height="75px"></img>
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="">Home</NavLink>
                            <NavLink to="/products">Productos</NavLink>
                            <NavLink to="/checkout">Checkout</NavLink>
                            {/*<Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
