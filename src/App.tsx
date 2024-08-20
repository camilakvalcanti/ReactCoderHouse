import React from 'react';
import './App.css';
import NavBar from './components/navBar';


const App = () => {
  return (
    <div>
      <NavBar buttonNames='Home'/>
      <NavBar buttonNames='About us'/>
      <NavBar buttonNames='Our products'/>
      <NavBar buttonNames='Login'/>
    </div>
  );
}; 

export default App;
