import React, { useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
     {
            id:"1",
            name:"Product 1",
            price: 100,
            Quantity: 1,

        },
        {
            id:"2",
            name:"Product 2",
            price: 200,
            Quantity: 2,

        },
        {
            id:"3",
            name:"Product 3",
            price: 300,
            Quantity: 3,

        },
        {
            id:"4",
            name:"Product 4",
            price: 400,
            Quantity: 4,

        },
        {
            id:"5",
            name:"Product 5",
            price: 500,
            Quantity: 5,

        },
        {
            id:"6",
            name:"Product 6",
            price: 600,
            Quantity: 6,

        },
        {
            id:"7",
            name:"Product 7",
            price: 700,
            Quantity: 7,

        },
        {
            id:"8",
            name:"Product 8",
            price: 800,
            Quantity: 8,

        },
        {
            id:"9",
            name:"Product 9",
            price: 900,
            Quantity: 9,

        },
        {
            id:"10",
            name:"Product 10",
            price: 1000,
            Quantity: 10,

        },
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
