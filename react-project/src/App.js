import logo from './logo.svg';
import './App.css';
import Counter from './components/counter'
import Home from'./components/home'
import Product from './components/product'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
// function App() {
//   return (
//     // <div className="App">
//     <div>
//       <Home/>
//       <Product/>
//     <Counter/>
//     </div>
//   );
// };
function App(){
  return (
    <>
    <Router>
      <div className='App'>
     
        <Navbar/>
        <Routes>
        
          <Route path ='/' element={<Home/>}/>
          <Route path = '/about' element={<About/>}/>
          <Route path = '/contact' element={<Contact/>}/>
         
        </Routes>
        <Counter/>
      </div>
      
    </Router>
    </>
  )
}

export default App;

