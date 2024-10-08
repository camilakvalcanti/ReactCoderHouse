
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import { FaCartPlus } from "react-icons/fa";
import ItemCount from './components/navBar/ItemCount';
import ItemListContainer from './components/navBar/ItemListContainer';
import ItemDetailContainer from './components/navBar/ItemDetailContainer';
import Cart from './components/navBar/Cart';

const App = () => {

  const handleAddToCart = (quantity: number) => {
    console.log(`Added ${quantity} items to the cart`);
  }

  return (
    <Router>
      <div>
        <h1>Anime Store</h1>
        <NavBar url='https://images.cdn-files-a.com/uploads/6718933/800_63cfe4780fe14_filter_63cfe4780fe16.jpg' />
        <NavBar buttonNames='About us' />
        <NavBar buttonNames='Our products' />
        <NavBar buttonNames='Login' />
        <ItemListContainer />
        <button type='button'>
          <FaCartPlus />
        </button>
        <ItemCount initial={1} stock={10} onAdd={handleAddToCart} />
        <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

