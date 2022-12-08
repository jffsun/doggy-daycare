// Still commonly used in production react codebases 
import React from 'react';

// Allows us to access DOM specific methods 
import ReactDOM from 'react-dom';
import App from './App';

// Import bootstrap for extra styling
import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render() method to renders our app component to the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  // Rendering app component to the 'root' element which is the default ID created with render method
  document.getElementById('root')
);