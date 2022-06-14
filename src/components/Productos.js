import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions/productsAction';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Pagination from './Pagination';

class Productos extends Component {
    componentDidMount() {
        this.props.getProducts();
        localStorage.setItem(0, 'pro')
    }

    render() {
        const { products } = this.props.products;
        const currentPosts = products.slice(0, 8);
        console.log(localStorage.getItem(0));
        return (
            <Container>
                <Row>
                    {
                        currentPosts.map(product =>
                            <Col >
                                <Card style={{ width: '18rem' }} className="mt-5">
                                    <Card.Img variant="top" src={product.image} alt="title" width="300px" height="380px" />
                                    <Card.Body>
                                        <Card.Title>{product.character}</Card.Title>
                                        <Card.Text>
                                            {product.amiiboSeries}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                </Row>
                <Row className="justify-content-md-center"><Col xs="4" className="mt-2"><Pagination totalRecords={800} pageLimit={18} pageNeighbours={1} onPageChanged={this.onPageChanged}/></Col></Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({ products: state.products });

export default connect(mapStateToProps, { getProducts })(Productos);