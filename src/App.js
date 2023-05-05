import React from 'react'
import Home from './Components/Home'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './Components/Create';
import Update from './Components/Update'

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Home/>}></Route>
      <Route path = "/create" element={<Create/>}></Route>
      <Route path = "/edit/:id" element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>


  );
}

export default App;
