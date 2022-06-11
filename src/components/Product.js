import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Product = ({ key, image, title, text }) => {
    return (
        <Col key={key}>
            <Card style={{ width: '18rem' }} className="mt-5">
                <Card.Img variant="top" src={image} alt="title" width="300px" height="380px" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Product;