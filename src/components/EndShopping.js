import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import DetailProductActionDeleteCreator from '../actions/DetailProductActionDeleteCreator';
import imagenBye from './../images/purchase.jpg';

const EndShopping = () => {
	const dispatch = useDispatch();
	dispatch(DetailProductActionDeleteCreator());
    localStorage.removeItem("cart");
	return (
		<>
			<Container>
				<Row>
					<Col lg={12} className="mt-5 mp-5 text-center">
						<div><h1>Your purchase has been Complete</h1></div>
						<img alt="Purchase End" src={imagenBye} width="500px" height="500px"/>
					</Col>
				</Row>
			</Container>
			</>
			)
}
export default EndShopping;