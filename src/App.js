import { useState } from 'react';
import Products from './components/Products';
import Details from './components/Details';
import Navbar from './layouts/Navbar';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:name' element={<Details />} />
      </Routes>

      {/* a Route should always be the child of Routes */}

    </div>
  );
};

export default App;
