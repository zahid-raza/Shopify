import { useContext } from "react";
import "./Home.css";
import ProductCard from "./ProductCard";
import { ProductContext } from "../context/ProductContext";

const Home = () => {
  const { products, addToCart } = useContext(ProductContext);
  return (
    <div>
      <div className="home">
        <h1>Discover Your Style</h1>
        <h1>Redefine Your Wardrobe</h1>
      </div>

      <div className="container mt-4">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
