import React from 'react';
import { useState } from 'react';
import './App.css';
import NavBar from './components/navBar';
import { FaCartPlus } from "react-icons/fa";
import ItemCount from './components/navBar/ItemCount';

const App = () => {

  const ItemListContainer = () => {
    return (
      <h2>Minha lista de itens da loja!</h2>
    );
  };

  const handleAddToCart = (quantity: number) => {
    console.log('Added ${quantity} items to the cart');
  }

  return (
    <div>
      <h1>Anime Store</h1>
      <NavBar url='https://images.cdn-files-a.com/uploads/6718933/800_63cfe4780fe14_filter_63cfe4780fe16.jpg'/>
      <NavBar buttonNames='About us'/>
      <NavBar buttonNames='Our products'/>
      <NavBar buttonNames='Login'/>
      <ItemListContainer/>
      <button type='button'>
        <FaCartPlus />
      </button>
      <ItemCount initial={1} stock={10} onAdd={handleAddToCart} />
    </div>
  );
}; 

export default App;
