import { Col, Card, Button } from 'react-bootstrap';

const Product = ({ key, image, title, text, price }) => {
    return (
        <Col key={key}>
            <Card style={{ width: '18rem' }} className="mt-5">
                <Card.Img variant="top" src={image} alt="title" width="300px" height="380px" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}
export default Product;