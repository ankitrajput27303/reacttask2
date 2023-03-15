import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Module1 from './Componets/Page1/Module1';
import Greet1 from './Componets/Greeting/Greet1.js';
import Module2 from './Componets/Page2/Module2';
import App from './App';
import Module3 from './Componets/Page3/Module3';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Module1/>
    <Greet1/>
    <Module2/>
    <App/>
    <Module3/>
  </React.StrictMode>
);

