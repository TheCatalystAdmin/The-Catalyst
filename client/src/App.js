import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SetUsername from './pages/SetUsername';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/signup" element = {<Register />} />
        <Route path="/set-username" element={<SetUsername />} />
      </Routes>
    </Router>
  )
}
export default App;