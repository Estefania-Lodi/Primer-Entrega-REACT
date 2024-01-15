import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;

