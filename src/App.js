import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components/Menu';
import ProductsTable from './components/ProductsTable'

function App() {
  return (
    <div className="App">
      <Menu/>
      <ProductsTable></ProductsTable>
    </div>
  );
}

export default App;
