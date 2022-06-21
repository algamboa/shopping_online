import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApiProductsAction from '../actions/ApiProductsActionCreator';
import { Container, Row, Col } from 'react-bootstrap';
import Paginate from './Paginate';
import Product from './Product';
import Loading from './../components/Loading';

const Products = () => {
    const dispatch = useDispatch();
	const [dataFromPaginate, setDataFromPaginate] = useState(null);
	const [usersPerPage] = useState(8);
    const products = useSelector((state) => state.ApiProductsReducer.data);
    const loading = useSelector((state) => state.ApiProductsReducer.loading);
    const error = useSelector((state) => state.ApiProductsReducer.error);
    useEffect(() => {
        dispatch(ApiProductsAction('https://www.amiiboapi.com/api/amiibo/'));
    }, [dispatch]);
	if(products.length > 0)
	{
		products.forEach(data => {
			if(localStorage.getItem(data.tail) === null)
			{
				localStorage.setItem(`${data.tail}`, JSON.stringify({tail: data.tail, price: data.price}));
			}

			return;
		})
	}

	const updateDataFromPaginate = products => setDataFromPaginate(products);
	const renderUserList = () =>
		dataFromPaginate
			? dataFromPaginate.map((product, i) => (
                <Product key={product.tail} image={product.image} title={product.character} text={product.amiiboSeries} tail={product.tail}></Product>
			))
			: products.map((product, i) => {
				if (i < usersPerPage) {
					return (
						<Product key={product.tail} image={product.image} title={product.character} text={product.amiiboSeries} tail={product.tail}></Product>
					);
				} else {
					return null;
				}
			});
            if(error) return <div>{error.message}</div>
	return (
		<div>
			<Container>
				<Row className="pb-5">
					{products ? (
						<Paginate
							data={products}
							setData={updateDataFromPaginate}
							itemsPerPage={usersPerPage}
						/>
					) : null}
					{products && !loading ? renderUserList() : <Col lg={12}><Loading /></Col>}
				</Row>
			</Container>
		</div>
	);
}

export default Products;