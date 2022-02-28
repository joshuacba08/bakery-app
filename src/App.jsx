import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import Home from './pages/Home';
import NavBar from './layout/NavBar/NavBar';
import ProductsPage from "./pages/ProductsPage";

import './App.scss';



function App() {


  return (
    <Router>

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="product/:id" element={<DetailPage />} />
      </Routes>

    </Router>
  )
}

export default App

