import { Routes, Route } from "react-router-dom";
import Home from "./componentes/views/page/home";
import About from "./componentes/views/page/about";
import "./App.css";
import { Categories } from "./componentes/views/page/categories";
import Products from "./componentes/views/page/products";
import { Login } from "./componentes/views/page/login";
import { Contact } from "./componentes/views/page/contact";
import { Carrito } from "./componentes/views/page/carrito";
import { Comprar } from "./componentes/views/page/comprar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/producto/:categoria" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/comprar" element={<Comprar />} />
      </Routes>
    </>
  );
}

export default App;
