import React from "react";
import Login from './pages/Login';
import Menu from './pages/Menu';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Cards from './pages/Cards'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Menu />} />
        <Route path='/homepage' element={<Home />}/>
        <Route path='/cardpage' element={<Cards />}/>
      </Routes>
    </div>
  );
}


