import React, { useContext } from "react";
import "./ProductPage.css";
import { ProductContext } from "../context/ProductContext";

const ProductPage = () => {
  const { products, addToCart } = useContext(ProductContext);

  return (
    <div className="container mt-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="row product-row mb-4"
          style={{ backgroundColor: "#dad7cd" }}
        >
          <div className="col-md-4">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid product-image"
            />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <h4>{product.name}</h4>
            <h5 className="text-primary">{product.price}</h5>
            <button
              className="btn btn-success mt-2"
              onClick={() => addToCart(product)}
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
