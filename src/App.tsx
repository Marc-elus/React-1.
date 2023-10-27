import React from 'react';
import logo from './logo.svg';
import './App.css';
import './react.css';
import MyCard from './MyCard';


function App() {
  return (
    <>
    <div className="first">
      <h1>Hello World  </h1>
    </div>
    <div className='Card-container'>
    <MyCard></MyCard> 
    <MyCard></MyCard> 
    <MyCard></MyCard> 
    <MyCard></MyCard> 
    </div>

    </>
  );
}

export default App;
