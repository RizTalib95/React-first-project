//import the correct libraries needed.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// get a reference to the div with the ID of "root"
const el = document.getElementById('root');

//tell react to take control of that element
const root = ReactDOM.createRoot(el);

//show component on screen
root.render(<App />);
