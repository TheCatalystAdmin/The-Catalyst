import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import MyPosts from './pages/MyPosts';
import Post from './pages/Post';
import Register from './pages/Register';
import SetUsername from './pages/SetUsername';
import Write from './pages/Write';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/login" element = {<Login />} />
        <Route path="/error/login" element={<Login error />} />
        <Route path = "/signup" element = {<Register />} />
        <Route path="/set-username" element={<SetUsername />} />
        <Route path="/write" element={<Write />} />
        <Route path="/me/posts" element={<MyPosts />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  )
}
export default App;