
import {BrowserRouter, Routes, Route } from "react-router-dom";

import DetailPage from "../pages/DetailPage";
import Home from '../pages/Home';
import NavBar from '../layout/NavBar/NavBar';
import NotFound404 from "../pages/NotFound404";
import ProductsPage from "../pages/ProductsPage";
import Contact from "../pages/Contact";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>

    </BrowserRouter>
  )
}

export default AppRouter