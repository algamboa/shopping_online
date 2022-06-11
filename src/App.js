import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components/Menu';
import Productos from './components/Productos';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Productos></Productos>
    </div>
  );
}

export default App;
