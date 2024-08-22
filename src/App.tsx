import React from 'react';
import { useState } from 'react';
import './App.css';
import NavBar from './components/navBar';
import { FaCartPlus } from "react-icons/fa";

const App = () => {

  return (
    <div>
      <h1>Anime Store</h1>
      <NavBar url='https://images.cdn-files-a.com/uploads/6718933/800_63cfe4780fe14_filter_63cfe4780fe16.jpg'/>
      <NavBar buttonNames='About us'/>
      <NavBar buttonNames='Our products'/>
      <NavBar buttonNames='Login'/>
      <button type='button'>
        <FaCartPlus />
      </button>
    </div>
  );
}; 

export default App;
