import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './Components/Router';
import MenuRutas from './Components/MenuRutas';
import FormSimple from './Components/FormSimple';
import Collatz from './Components/Collatz';
import TablaMultiplicar from './Components/TablaMultiplicar';
import TablaMultiplicarV2 from './Components/TablaMultiplicarV2.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <h1>PAGINA PRINCIPAL</h1>
    <MenuRutas/>
    <hr/>
        <Router/>
    <hr/>
    <h2>Pie de página</h2> 
    <hr/>
    <FormSimple/>
    <hr/>
    <hr/> */}
    <Collatz/>
    <hr/>
    <TablaMultiplicar/>
    <hr/>
    <TablaMultiplicarV2/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
