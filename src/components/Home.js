import React, { Component } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

export default class Home extends Component {
	render() {
		return (
			<Container fluid>
				<Row>
					<Col>
						<Carousel fade>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="background_1.jpg"
									alt="First slide"
									style={{ maxWidth: "100%", height: "50%" }}
								/>
								<Carousel.Caption>
									<h3>Welcome to the online store</h3>
									<p>Find videogames</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="background_2.jpg"
									alt="Second slide"
								/>

								<Carousel.Caption>
									<h3>We have Amiibo</h3>
									<p>Differente models, for your family's enjoyment</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="background_3.jpg"
									alt="Third slide"
								/>

								<Carousel.Caption>
									<h3>Consoles</h3>
									<p>Retro and new consoles</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>
			</Container>
		);
	}
}
