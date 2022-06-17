import { useState } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ACTIONS_TYPES from '../actions/ActionsTypes';
import { history, Link, useNavigate } from "react-router-dom";
import { fetchDetail } from '../actions/ApiProductsAction';

const Product = ({ image, title, text, tail }) => {
    const information = JSON.parse(localStorage.getItem(tail));
    return (
        <Col key={tail}>
            <Card style={{ width: '18rem' }} className="mt-5">
                <Card.Img variant="top" src={image} alt="title" width="300px" height="380px" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Card.Text>
                        Price: ${information.price}
                    </Card.Text>
                    <Link to={`/detailsProduct/${tail}`}><Button variant="primary">Comprar</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
}
export default Product;