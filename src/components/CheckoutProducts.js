import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import DetailProductActionDeleteCreator from '../actions/DetailProductActionDeleteCreator';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const CheckoutProducts = () => {
    const [seed, setSeed] = useState(1);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.DetailProductReducer.data);
    const TotalPrice = () => {
        let total = 0;
        products.forEach(product => {
            total += product.totalPrice;
        });
        return total;
    }

    const emptyCart = () => {
        dispatch(DetailProductActionDeleteCreator());
        localStorage.removeItem("cart");
        setSeed(Math.random());
    }
    
    return (
        <>
        {
            products === null ? <Container key={seed}>
            <Row>
                <Col lg={12} className="mt-5 mp-5">
                    <div><h1>Order Review</h1></div>
                </Col>
            </Row>
            </Container> : 
            (
                !products ? (<div><Loading /></div>) : (
                    <Container>
                    <Row>
                        <Col lg={12} className="mt-5 mp-5">
                            <div><h1>Order Review</h1></div>
                        </Col>
                    </Row>
                {
                    products.map((data) => {
                        return (
                        <Row className="mt-5 mp-5" key={data.tail}>
                            <Col lg={3}>
                                <div className="justify-content-center">
                                    <img alt={"imagen del producto " + data.tail} src={data.image} style={{width: "20%"}} />
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div>
                                    <p style={{textAlign: "left"}}>{data.name}</p>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div>
                                    <p style={{textAlign: "left"}}>{data.quantity}</p>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div>
                                    <p style={{textAlign: "left"}}>${data.totalPrice}</p>
                                </div>
                            </Col>
                        </Row>)
                    })
                }
                <Row>
                    <Col lg={6}>
                    </Col>
                    <Col lg={4}>
                        <div>
                            <h1><b>Total:</b></h1>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div>
                            <h4 style={{textAlign: "left"}}><b>${TotalPrice()}</b></h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Button variant='danger' onClick={emptyCart}>Empty Cart</Button>
                    </Col>
                    <Col lg={5}>
                        
                    </Col>
                    <Col lg={3}>
                        <Button variant='success' onClick={emptyCart}><Link style={{textDecoration: "none", color: "white"}} to="/purchase">Purchase</Link></Button>
                    </Col>
                </Row>
                </Container>
                )
            )
        }
        </>
    );
}
export default CheckoutProducts;