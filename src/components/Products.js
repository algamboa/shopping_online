import React, { Component } from 'react';
import { getProducts } from './../utils/Api';
import Product from './Product';
import { Container, Row } from 'react-bootstrap';
import Pagination  from './Pagination';
import { axios } from 'axios';
import Productos from './Productos';

export class Products extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            page: 0,
            errorMsg: "",
            products: [],
            isLoading: false,
            loading: true,
            currentPage: 1,
            setCurrentPage: false,
            postsPerPage: 8,
            setPostsPerPage: 8,

        };
    }

    componentDidMount()
    {
        getProducts().then((res) => {
            console.log(res.data.amiibo);
            this.setState({
                products: res.data.amiibo,
                loading: false
            });
        })
    }

    /*loadProducts = async () => {
        try {
            console.log("LLEG");
            const { page } = this.state;
            this.setState({ isLoading: true });
            const response = await axios.get('https://www.amiiboapi.com/api/amiibo/');
            console.log(response);
            this.setState({
                products: response.data.amiibo,
                loading: false
            })
        } catch (error) {
            this.setState({ errorMsg: 'Error while loading data, Try again later' });
        } finally {
            this.setState({ isLoading: false });
        }
    }*/

    renderProducts = () => {
        console.log("AQUI");
        const { products } = this.state;
        const { currentPage } = this.state;
        const { setCurrentPage } = this.state
        const { postsPerPage } = this.state;
        const { setPostsPerPage } = this.state;
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
        return currentPosts.map((product, index) => {
            const key = product.tail;
            const image = product.image;
            const title = product.character;
            const text = product.amiiboSeries;
            return (
                <Product key={key} image={image} title={title} text={text} />
            );
        });
    }

    render()
    {
        
        const { loading } = this.state;
        return (
            <Container>
                <Row>
                    {loading ? 'loading...' : this.renderProducts()}
                </Row>
                <Row><Pagination totalRecords={800} pageLimit={18} pageNeighbours={1} onPageChanged={this.onPageChanged}/></Row>
            </Container>
        );
    }
}

export default Products;