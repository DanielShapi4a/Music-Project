import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'; 
import Library from './Pages/Library';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Library" element={<Library />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;