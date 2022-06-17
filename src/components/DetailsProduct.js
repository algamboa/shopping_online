import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router";
import axios from 'axios';


const DetailsProduct = () => {
	const Checkout = () => {
		let cart = {};
		cart[shoppingCart.tail] = {shoppingCart}
		localStorage.setItem("cart", JSON.stringify(cart));
		/*let a = shoppingCart.tail;
		cart = ["cart",shoppingCart];
		
		const basura = JSON.parse(localStorage.getItem("cart"));*/
		console.log(shoppingCart);
		console.log(JSON.parse(localStorage.getItem("cart")));
	}
	const AddProduct = (item) => {
		const total = parseInt(cant) + 1;
		setCant(total);
		const information = JSON.parse(localStorage.getItem(item.tail));
		const productAmiibo = {
			tail: item.tail,
			name: item.name,
			amiiboSeries: item.amiiboSeries,
			gameSeries: item.gameSeries,
			quantity: total,
			totalPrice: parseInt(information.price) * parseInt(total)
		};
		setShoppingCart(productAmiibo);
		console.log(shoppingCart);

	}
	const DeleteProduct = (item) => {
		const total = parseInt(cant - 1);
		if (total !== 0) {
			setCant(total);
			const information = JSON.parse(localStorage.getItem(item.tail));
			const productAmiibo = {
				tail: item.tail,
				name: item.name,
				amiiboSeries: item.amiiboSeries,
				gameSeries: item.gameSeries,
				quantity: total,
				totalPrice: parseInt(information.price) * parseInt(total)
			};
			setShoppingCart(productAmiibo);
			console.log(shoppingCart);
		}
		else
		{
			setShoppingCart({});
		}
	}
	const [cant, setCant] = useState(1);
	const [shoppingCart, setShoppingCart] = useState({});
	const { tail } = useParams();
	const [amiibo, setAmiibo] = useState(null);
	const [errorApi, setErrorApi] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const result = await axios(
					'https://www.amiiboapi.com/api/amiibo/?tail=' + tail,
				);
				setAmiibo(result.data.amiibo[0]);
			} catch (error) {
				setErrorApi(error);
			}
			finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [tail]);
	const information = JSON.parse(localStorage.getItem(tail));
	if (errorApi) return <div>{errorApi.message}</div>
	return (
		<>
			{amiibo && isLoading === false ? (<Container>
				<Row>
					<Col className='mt-5'></Col>
				</Row>
				<Row>
					<Col lg={4} className="justify-content-center">
						<div><img src={amiibo.image} /></div>
					</Col>
					<Col lg={6}>
						<Row>
							<Col lg={12}>
								<h1>{amiibo.character}</h1>
							</Col>
						</Row>
						<Row>
							<Col lg={2}>
								<p><b>Nombre: </b></p>
							</Col>
							<Col lg={10}>
								<p style={{ textAlign: "left" }}>{amiibo.name}</p>
							</Col>
						</Row>
						<Row>
							<Col lg={2}>
								<p><b>Amiibo Series: </b></p>
							</Col>
							<Col lg={10}>
								<p style={{ textAlign: "left" }}>{amiibo.amiiboSeries}</p>
							</Col>
						</Row>
						<Row>
							<Col lg={2}>
								<p><b>Game Series: </b></p>
							</Col>
							<Col lg={10}>
								<p style={{ textAlign: "left" }}>{amiibo.gameSeries}</p>
							</Col>
						</Row>
						<Row>
							<Col lg={2}>
								<p><b>Price: </b></p>
							</Col>
							<Col lg={10}>
								<p style={{ textAlign: "left" }}>${information.price}</p>
							</Col>
						</Row>
						<Row>
							<Col lg={12}>
								<div style={{ textAlign: "left" }}>
									<h6><b>Cantidad</b></h6>
									<div>
										<Row>
											<Col lg={1}>
												<div className='text-center me-0'>
													<Button variant='danger' onClick={() => DeleteProduct(amiibo)}>-</Button>
												</div>
											</Col>
											<Col lg={2}>
												<div className='text-center'>
													<Form.Control style={{ textAlign: 'center' }} type="text" placeholder="Cantidad" defaultValue={cant} />
												</div>
											</Col>
											<Col lg={1}>
												<div className='text-center me-0'>
													<Button variant='primary' onClick={() => AddProduct(amiibo)}>+</Button>
												</div>
											</Col>
											<Col lg={8}></Col>
										</Row>
									</div>
								</div>
							</Col>
						</Row>
						<Row>
							<Col lg={4}><div className='text-center'><p><Button className='mt-3' onClick={() => Checkout()}>Ir al Checkout</Button></p></div></Col>
						</Row>


					</Col>
					<Col lg={2}><div></div></Col>
				</Row>
			</Container>) : (<div>Loading ...</div>)}

		</>
	);
}
export default DetailsProduct;