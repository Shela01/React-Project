import logo from './logo.svg';
import './App.css';
import Counter from './components/counter'
import Home from'./components/home'
import Product from './components/product'
function App() {
  return (
    <div className="App">
      <Home/>
      <Product/>
    <Counter/>
    </div>
  );
}

export default App;
