import './App.css';
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Web from "./pages/Web";
import Profile from "./pages/Profile";
import Mobile from "./pages/Mobile";
import Menu from './pages/Menu';
import Contact from './pages/Contact';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Web' element={<Web />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/Mobile' element={<Mobile />}></Route>
        <Route path='/Menu' element={<Menu />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
