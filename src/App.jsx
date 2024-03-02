import React from "react";
import './App.css'
import ProductsDetail from './components/ProductsDetail'
import Navbar from './components/Navbar'
import DealBar from './components/DealBar'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductStrip1 from "./components/ProductStrip1";


function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <DealBar/>
    <Routes>
      {/* <Route path= "/" element = {<ProductStrip1/>}/> */}
      <Route path= "/" element = {<ProductsDetail/>}/>
      </Routes>
   </Router>
   </>
  );
}

export default App
