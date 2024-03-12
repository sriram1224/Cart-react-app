import React, { useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    import React, { useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: "1",
      name: "Product 1",
      price: 100,
      Quantity: 1,
    },
    {
      id: "2",
      name: "Product 2",
      price: 200,
      Quantity: 2,
    },
    // Add more products here...
  ];

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].Quantity++;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product }]);
    }
  };

  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <h3>{product.Quantity}</h3>
            {/* Optional: Add increment and decrement buttons */}
            {/* <button><BiSolidUpArrow /></button>
            <button><BiSolidDownArrow /></button> */}
          </div>
        );
      })}
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.Quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

  ];

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].Quantity++;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product }]);
    }
  };

  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <h3>{product.Quantity}</h3>
            {/* Optional: Add increment and decrement buttons */}
            {/* <button><BiSolidUpArrow /></button>
            <button><BiSolidDownArrow /></button> */}
          </div>
        );
      })}
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.Quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
