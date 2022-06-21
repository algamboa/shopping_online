import React, { Component } from 'react';
import logo from './../images/logo-nintendo.png';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {NavLink}  from 'react-router-dom'
import Icono from './Icono';

export class Menu extends Component
{
    render()
    {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <a href="/">
                        <img alt="logo" src={logo} with="50px" height="50px"></img>
                    </a>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link" to="">Home</NavLink>
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                            <NavLink className="nav-link" to="/checkout">Checkout</NavLink>
                        </Nav>
                        <Nav className="me-left">
                            <NavLink className="nav-link" to="/checkout">
                                <Icono/>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
