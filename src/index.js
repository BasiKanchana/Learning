import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

 import EshopWeb from "./EshopWeb";
 import reducer, { initialState}  from './components/reducer';
 import { StateProvider } from './components/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <EshopWeb/>  
    </StateProvider> 
   
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
