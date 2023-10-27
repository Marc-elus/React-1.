import React from 'react';
import logo from './logo.svg';
import './App.css';
import './react.css';
import MyCard from './MyCard';
import './R.jpg' ;


function App() {
  return (
    <>
    <div className="first">
      <h1>Hello World  </h1>
    </div>
    <div className='Card-container'>
    <MyCard Title='Geysir' info= 'Golden Circle' pic='https://github.com/Marc-elus/React-1./blob/main/src/R.jpg?raw=true'/>
    <MyCard Title='Skaftafell' info= 'National Park' pic='./R.jpg'/> 
    <MyCard Title='Skogafoss' info='South Cost' pic='./R.jpg'/>
    <MyCard Title= 'Snæfellsnes' info= 'West peninsula' pic='./R.jpg'/>
    </div>
    </>
  );
}

export default App;
