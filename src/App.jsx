import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import ProductPage from "./Pages/ProductPage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.jsx";
import Cart from "./Pages/Cart.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home-page" element={<Home />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/Cart-page" element={<Cart />} />
        </Routes>

        <Footer />
      </Router>
    </ProductProvider>
  );
}

export default App;
