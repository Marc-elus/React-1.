import React from 'react';
import logo from './logo.svg';
import './App.css';
import './react.css';
import MyCard from './MyCard';
import pic1 from "./Skafta.jpg";
import pic2 from './OIP (2).jpg';
import pic3 from './snaefellsnes.jpg';

function App() {
  return (
    <>
    <div className="first">
      <h1>Hello World  </h1>
    </div>
    <div className='Card-container'>
    <MyCard Title='Geysir' info= 'Golden Circle' pic='https://github.com/Marc-elus/React-1./blob/main/src/R.jpg?raw=true'/>
    <MyCard Title='Skaftafell' info= 'National Park' pic={pic1}/> 
    <MyCard Title='Skogafoss' info='South Cost' pic={pic2}/>
    <MyCard Title= 'Snæfellsnes' info= 'West peninsula' pic={pic3}/>
    </div>
    </>
  );
}

export default App;
