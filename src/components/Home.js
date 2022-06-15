import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fondo from './../images/background.jpg'

export default class Home extends Component
{
    render()
    {
        return (
            <Container fluid>
                <Row>
                    <Col style={{padding: "0px"}}>
                        <div>
                            <img style={{display:"block", width:"100%"}} src={fondo} />
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
