import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components/Menu';
import ProductsTable from './components/ProductsTable';
import Home from './components/Home';
import DetailsProduct from './components/DetailsProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products';

const App = () => {
	return (

		<BrowserRouter>
			<div className="App">
				<Menu />
				<Routes>
                    <Route exact path="/" element={<Home></Home>}></Route>
                    <Route exact path="/products" element={<Products></Products>}></Route>
                    <Route exact path="/detailsProduct/:tail" element={<DetailsProduct></DetailsProduct>}></Route>
                </Routes>
			</div>
		</BrowserRouter>

	);
}

export default App;
