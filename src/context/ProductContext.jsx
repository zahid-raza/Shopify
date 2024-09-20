import React, { createContext, useReducer } from "react";
import myImage from "../Images/img1.jpg";

const initialState = {
  products: [
    {
      id: 1,
      name: "Regular Fit Corduroy Shirt",
      price: "Rs. 1,999.00",
      image: myImage,
    },
    {
      id: 2,
      name: "Slim Fit Denim Jacket",
      price: "Rs. 2,499.00",
      image: myImage,
    },
    {
      id: 3,
      name: "Casual Sneakers",
      price: "Rs. 3,299.00",
      image: myImage,
    },
  ],
  cart: [],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  return (
    <ProductContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </ProductContext.Provider>
  );
};
