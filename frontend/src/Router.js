import React from 'react';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

export default function () {
  return (
    <Router>
      <App />
    </Router>
  );
}
