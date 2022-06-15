import React, { useState, useEffect } from 'react';
import { getProduct } from './../actions/productsAction';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useParams } from "react-router";
import axios from 'axios';

const DetailsProduct = () => {
	const [amiibo, setData] = useState(null);
	const { tail } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			try {
				const result = await axios(
					'https://www.amiiboapi.com/api/amiibo/?tail=' + tail,
				);
				setData(result.data.amiibo);
			} catch (error) {
				setIsError(true)
			}
			finally {
				setIsLoading(false)
			}
		};

		fetchData();
	}, [tail]);
	return (
		<>
			{isError ? <div>Error</div> : (isLoading || !amiibo) ? <div>Loading ...</div> : <Container>
				<Row>
					<Col className='mt-5'></Col>
				</Row>
				<Row>
					<Col lg={4}>
						<div><img src={amiibo[0].image} /></div>
					</Col>
					<Col lg={8}>
						<div>
							<h1>{amiibo[0].character}</h1>
							<br />
						</div>
						<div>
							<p>Name: {amiibo[0].name}</p>
							<p>Amiibo Series: {amiibo[0].amiiboSeries}</p>
							<p>Game Series: {amiibo[0].gameSeries}</p>
						</div>
					</Col>
				</Row>
			</Container>}

		</>
	);
}
export default DetailsProduct;