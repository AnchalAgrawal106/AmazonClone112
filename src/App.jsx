import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import DealBar from "./components/DealBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import BoatProductDetail from "./components/BoatProductDetail";
import ProductStrip1 from "./components/ProductStrip1";
import BoultProduct from "./components/BoultProduct";
import ProductsNavbar from "./components/ProductsNavbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <DealBar />
        <Routes>
          {/* <Route path="/" element={<ProductStrip1 />} />
          <Route exact path="/component/0" element={<BoatProductDetail />} />
          <Route exact path="/component/1" element={<BoultProduct/>} /> */}
          <Route exact path="/" element={<ProductsNavbar/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
