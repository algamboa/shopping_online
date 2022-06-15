import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import getRandomPrice from './../utils/GetRandomPrice'
import Paginate from './Paginate';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Product from './Product';

const ProductsTable = () => {
  const [data, setData] = useState(null);
  const [dataFromPaginate, setDataFromPaginate] = useState(null);
	const [usersPerPage] = useState(8);
  useEffect(() => {
    fetch('https://www.amiiboapi.com/api/amiibo/')
      .then((data => data.json()))
        .then((products => {
            const data = products.amiibo.map(
                product => {
                    product.price = getRandomPrice()
                    return product
                }
            )
            setData(data)
        }))
        .catch(e => console.warn(e));
  }, []);
    const updateDataFromPaginate = data => setDataFromPaginate(data);

    
    
    const renderUserList = () =>
    dataFromPaginate
      ? dataFromPaginate.map((product, i) => (
          
            <Product key={i} image={product.image} title={product.character} text={product.amiiboSeries} price={product.price} tail={product.tail}></Product>
        ))
      : data.map((product, i) => {
          if (i < usersPerPage) {
			  return (
				  
					   <Product key={i} image={product.image} title={product.character} text={product.amiiboSeries} price={product.price} tail={product.tail}></Product>

                
            );
          } else {
            return null;
          }
        });

  return (
      <div>
          <Container>
                <Row className="pb-5">
      {data ? (
        <Paginate
          data={data}
          setData={updateDataFromPaginate}
          itemsPerPage={usersPerPage}
        />
      ) : null}
                  {data ? renderUserList() : null}
              </Row>
              </Container>
    </div>
  );
};

export default ProductsTable;