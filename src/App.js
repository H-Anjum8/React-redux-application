import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Headers from './containers/Headers';
import './App.css';


function App() {
  return (

    <div className="App">
    
    <BrowserRouter>
    <Headers/>
       <Routes>
        <Route path="/" exact element={<ProductListing/>} />
        <Route path="/product/:productId" element={<ProductDetails/>} />
        <Route>404 Not Found!</Route>
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
