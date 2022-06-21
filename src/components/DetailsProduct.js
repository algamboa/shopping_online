import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import DetailProductActionAddCreator from './../actions/DetailProductActionAddCreator';
import Loading from './Loading';


const DetailsProduct = () => {
	const dispatch = useDispatch();
	const [cant, setCant] = useState(1);
	const { tail } = useParams();
	const [amiibo, setAmiibo] = useState(null);
	const [errorApi, setErrorApi] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const handlerChange = (cant) => {
		setCant(cant)
	}
	const SetLocalStoraProducts = (product) => {
		var arr = JSON.parse(localStorage.getItem("cart"));
		if (arr !== null) {
			var sw = false;
			arr.forEach((data, i) => {
				if (data.tail === tail) {
					sw = true;
					arr[i] = product;
					localStorage.setItem("cart", JSON.stringify(arr));
				}
			});
			if (sw === false) {
				if (Object.keys(product).length !== 0) {
					arr.push(product);
					localStorage.setItem("cart", JSON.stringify(arr));
				}

			}
		}
		else {
			localStorage.setItem("cart", JSON.stringify([product]));
		}
	}
	const AddToCart = (item) => {
		const information = JSON.parse(localStorage.getItem(item.tail));
		const productAmiibo = {
			tail: item.tail,
			name: item.name,
			amiiboSeries: item.amiiboSeries,
			gameSeries: item.gameSeries,
			quantity: cant,
			image: item.image,
			totalPrice: parseInt(information.price) * parseInt(cant)
		};
		SetLocalStoraProducts(productAmiibo);
		dispatch(DetailProductActionAddCreator(productAmiibo));
	}

	const UpdateQuantity = (type) => {
		if(type === "up")
		{
			setCant(parseInt(cant) + 1)
		}
		else
		{
			if(cant > 1)
			{
				console.log(cant)
				setCant(parseInt(cant) - 1)
			}
			
		}
	}

	useEffect(() => {
		const getData = async () => {
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
				let cart = JSON.parse(localStorage.getItem("cart"));
				if(cart !== null){
					if (Object.keys(cart).length !== 0) {
						cart.forEach((data, i) => {
							if (data.tail === tail) {
								setCant(parseInt(data.quantity));
							}
						});
					}
				}
			}
		};
		getData();
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
						<div><img alt={"Imagen del producto " + tail} src={amiibo.image} style={{width: "70%"}} /></div>
					</Col>
					<Col lg={6}>
						<Row>
							<Col lg={12}>
								<h1>{amiibo.character}</h1>
							</Col>
						</Row>
						<Row>
							<Col lg={2}>
								<p><b>Name: </b></p>
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
									<h6><b>Quantity</b></h6>
									<div>
										<Row>
											<Col lg={1}>
												<div className='text-center me-0'>
													<Button variant='danger' onClick={() => UpdateQuantity("down")}>-</Button>
												</div>
											</Col>
											<Col lg={2}>
												<div className='text-center'>
													<Form.Control style={{ textAlign: 'center' }} type="text" placeholder="Cantidad" value={cant} onChange={handlerChange} />
												</div>
											</Col>
											<Col lg={1}>
												<div className='text-center me-0'>
													<Button variant='primary' onClick={() => UpdateQuantity("up")}>+</Button>
												</div>
											</Col>
											<Col lg={8}></Col>
										</Row>
									</div>
								</div>
							</Col>
						</Row>
						<Row>
							<Col lg={4}><div className='text-center'><p><Button className='mt-3' onClick={() => AddToCart(amiibo)}>Add to Cart</Button></p></div></Col>
						</Row>


					</Col>
					<Col lg={2}><div></div></Col>
				</Row>
			</Container>) : (<div><Loading /></div>)}

		</>
	);
}
export default DetailsProduct;