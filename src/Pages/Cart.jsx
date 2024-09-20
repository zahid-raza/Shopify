import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./Cart.css";
import Productcard from "../components/ProductCard";

const Cart = () => {
  const { cart, removeFromCart } = useContext(ProductContext);
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark Cart">
      <h1>CART</h1>
      <hr />

      <ul
        className="nav nav-pills flex-column mb-auto"
        style={{ margin: "2rem" }}
      >
        {cart.length === 0 ? (
          <div>Cart is empty!</div>
        ) : (
          cart.map((product) => (
            <div>
              <Productcard
                key={product.id}
                product={product}
                onRemove={removeFromCart}
              />
            </div>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cart;
