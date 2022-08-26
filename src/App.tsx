import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Single from "./pages/singleproduct";
import SingleCategory from "./pages/singleCategory";
import Shop from "./pages/shop"
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <>
      <CartProvider>
      <div className="App">
      <BrowserRouter>
       <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop /> } />
            <Route path="/single/:id" element={<Single />} />
            <Route path="/category/:id" element= {<SingleCategory  />} />
            <Route path="*" element={<Home />} />
          </Route>
          {/*<Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Home/>} />
            <Route path="/about" element={<About />} />
  </Route>*/}
        </Routes>
        <Footer />
      </BrowserRouter>
      
      </div>
      </CartProvider>
    </>
  );
}

export default App;
