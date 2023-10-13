import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import AppLayout from './common/index';

export default function App() {
  return (
    <Router> 
      <div className="text-3xl font-bold">
        <AppLayout />
      </div>
    </Router>
  );
}
