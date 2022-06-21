import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components/Menu';
import Home from './components/Home';
import DetailsProduct from './components/DetailsProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import CheckoutProducts from './components/CheckoutProducts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DetailProductActionSetCartCreator from './actions/DetailProductActionSetCartCreator';
import EndShopping from './components/EndShopping';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem("cart"));
		if(cart !== null)
		{
			dispatch(DetailProductActionSetCartCreator(cart));
		}
    }, [dispatch]);
	return (
		<BrowserRouter>
			<div className="App">
				<Menu />
				<Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/products" element={<Products/>}></Route>
                    <Route exact path="/detailsProduct/:tail" element={<DetailsProduct/>}></Route>
					<Route exact path="/checkout" element={<CheckoutProducts/>}></Route>
					<Route exact path="/purchase" element={<EndShopping/>}></Route>
                </Routes>
			</div>
		</BrowserRouter>

	);
}

export default App;
