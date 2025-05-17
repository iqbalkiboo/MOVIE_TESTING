import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies/:id' element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
