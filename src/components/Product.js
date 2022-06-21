import { Col, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Product = ({ image, title, text, tail }) => {
    const information = JSON.parse(localStorage.getItem(tail));
    return (
        <Col key={tail} lg={3}>
            <Card className="mt-5">
                <Card.Img variant="top" src={image} alt="title" width="300px" height="380px" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Card.Text>
                        Price: ${information.price}
                    </Card.Text>
                    <Link to={`/detailsProduct/${tail}`}><Button variant="primary">Buy</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
}
export default Product;