import logo from './logo.svg';
import './App.css';
import Counter from './components/counter'
import Home from'./components/home'
import Product from './components/product'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Product/>
    <Counter/>
    </div>
  );
}

export default App;

