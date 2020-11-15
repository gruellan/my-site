import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import firebaseConfig from './firebase';
import fb from 'firebase';

// Initialize Firebase
fb.initializeApp(firebaseConfig);
fb.analytics();

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
