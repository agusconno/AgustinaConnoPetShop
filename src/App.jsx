import React from 'react';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import fondo from '../src/assets/huesitos.jpg'; 

const App = () => {
  return (
    <BrowserRouter>
      <div style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', 
      }}>
        <NavBar />

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row', 
          padding: '30px', 
        }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/category/:category" element={<ItemListContainer />} />
            <Route exact path="/Item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;


