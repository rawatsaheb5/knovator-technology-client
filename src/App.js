import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductListingPage from './ProductListingPage';
import Cart from './Cart';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductListingPage />} />
         
        <Route path='/cart' element={<Cart />} /> 
        
        
      </Routes>
    </>
  );
}

export default App;
