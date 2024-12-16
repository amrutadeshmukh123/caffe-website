import logo from './logo.svg';
import './App.css';
import Container2 from './pages/Container2';
import { useState } from 'react';
import Header from './pages/Header';
import Home from './pages/Home';
import Order from './pages/Order';

function App() {

  return (
    <>
     <Header/>
     <Home/>
     <Container2/>
     <Order/>
    </>
  );
}

export default App;
