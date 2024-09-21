import "./ProductCard.css";
// import myImage from "../Images/img1.jpg";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Productcard = ({ product, onRemove, addToCart }) => {
  const { image, name, price, id } = product;
  return (
    <div
      className="row product-row mb-4"
      style={{ backgroundColor: "#dad7cd", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "min-content",
        }}
      >
        <button onClick={() => onRemove(product)}>x</button>
      </div>
      <div className="col-md-4">
        <img
          src={product.image}
          alt={product.name}
          className="img-fluid product-image"
          style={{ maxWidth: "fit-content" }}
        />
      </div>
      <div className="col-md-8 d-flex flex-column justify-content-center">
        <h4>{product.name}</h4>
        <h5 className="text-primary">{product.price}</h5>
        <button
          className="btn btn-success mt-2"
          onClick={() => {
            addToCart(product);
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Productcard;
