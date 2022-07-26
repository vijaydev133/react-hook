import logo from './logo.svg';
import './App.css';
import UseState from './UseState';
import UseEffect from './UseEffect';
import CLassC from './ClassC';
import {Routes,Route} from "react-router-dom"
import Home from './Home';
import About from './About';
import Product from './Product';
import Nav from './Nav';
import Subscribe from './Subscribe';
import { useNavigate } from 'react-router-dom';


function App() {
  let navigate  = useNavigate()
  return (
    <div className="App">
      <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element = {<About/>}></Route>
      <Route path='product/:id' element = {<Product/>}></Route>
      <Route path='subscribe' element = {<Subscribe/>}></Route>
      <Route path='*' element = {()=>navigate("/")}></Route>
     </Routes>
    </div>
  );
}

export default App;
