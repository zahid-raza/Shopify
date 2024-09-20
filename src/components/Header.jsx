import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
const Header = () => {
  const { products, addToCart, cart } = useContext(ProductContext);

  return (
    <header
      className="d-flex flex-wrap justify-content-center py-3 border-bottom"
      style={{ backgroundColor: "#588157" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4" style={{ fontWeight: "bold", color: "white" }}>
          Shopify
        </span>
      </a>

      <ul className="nav nav-pills" style={{ paddingInline: "30px" }}>
        <li className="nav-item">
          <Link to="/Home-page" className="nav-link" style={{ color: "white" }}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/product-page"
            className="nav-link"
            style={{ color: "white" }}
          >
            Product
          </Link>
        </li>

        <li className="nav-item">
          <Link to=".." className="nav-link" style={{ color: "white" }}>
            About
          </Link>
        </li>
        <li className="nav-item" style={{ position: "relative" }}>
          <Link to="/Cart-page" className="nav-link" style={{ color: "white" }}>
            <FaCartShopping />
          </Link>

          <div
            style={{
              color: "white",
              width: "25px",
              height: "25px",
              background: "gray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "50%",
              bottom: "0",
            }}
          >
            <p style={{ margin: "0" }}>{cart.length}</p>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
