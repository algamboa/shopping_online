import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CheckoutProducts = () => {
    const carts = JSON.parse(localStorage.getItem("cart"));
    const [totalPrice, setTotalPrice] = useState(0);
    
    return (
        <>
        {!carts ? (<div>Loading ...</div>) : (
            <Container>
            <Row>
                <Col lg={12} className="mt-5 mp-5">
                    <div><h1>Order Review</h1></div>
                </Col>
            </Row>
        {
            carts.map((data) => {
                return (
                <Row className="mt-5 mp-5">
                    <Col lg={3}>
                        <div className="justify-content-center">
                            <img src={data.image} style={{width: "20%"}} />
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
                    <h4 style={{textAlign: "left"}}><b>${totalPrice}</b></h4>
                </div>
            </Col>
        </Row>
        </Container>
        )
        }
        </>
    );
}
export default CheckoutProducts;