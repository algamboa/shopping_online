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
									<h3>Bienvenidos a la Tienda</h3>
									<p>Encontrá varios videojuegos</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="background_2.jpg"
									alt="Second slide"
								/>

								<Carousel.Caption>
									<h3>Tenemos Amiibo</h3>
									<p>Varios modelos, para el disfrute de su familia</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="background_3.jpg"
									alt="Third slide"
								/>

								<Carousel.Caption>
									<h3>Consolas</h3>
									<p>Tenemos consolas desde las retro, hasta las más nuevas</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>
			</Container>
		);
	}
}
