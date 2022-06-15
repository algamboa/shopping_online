import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApiProductsAction from '../actions/ApiProductsActionCreator';

const Products = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState(null);
	const [dataFromPaginate, setDataFromPaginate] = useState(null);
	const [usersPerPage] = useState(8);
    const products = useSelector((state) => state.ApiProductsReducer.data);
    const loading = useSelector((state) => state.ApiProductsReducer.loading);
    const error = useSelector((state) => state.ApiProductsReducer.error);
    useEffect(() => {
        dispatch(ApiProductsAction('https://www.amiiboapi.com/api/amiibo/'));
        setData(products);
        //console.log(product)
    }, []);

    return (
        <>
        {
            loading && (products.length > 0)
            ?
                (<div>Cargando ...</div>) 
            : 
                (
                    error ? (<div>Error</div>) 
                : 
                <div>listado
                {
                    console.log(data)
                }
                </div>
                )
                
        }
        </>
    );
}

export default Products;