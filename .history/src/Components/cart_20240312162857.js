import React, { useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

function Cart() {
    const [products, setProducts] = useState([
        { id: "1", name: "Product 1", price: 100, quantity: 1 },
        { id: "2", name: "Product 2", price: 200, quantity: 1 },
        { id: "3", name: "Product 3", price: 300, quantity: 1 },
        { id: "4", name: "Product 4", price: 400, quantity: 1 },
        { id: "5", name: "Product 5", price: 500, quantity: 1 },
        { id: "6", name: "Product 6", price: 600, quantity: 1 },
        { id: "7", name: "Product 7", price: 700, quantity: 1 },
        { id: "8", name: "Product 8", price: 800, quantity: 1 },
        { id: "9", name: "Product 9", price: 900, quantity: 1 },
        { id: "10", name: "Product 10", price: 1000, quantity: 1 }
    ]);

    const [total, setTotal] = useState(0);

    const increaseQuantity = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].quantity++;
        setProducts(updatedProducts);
        updateTotal();
    };

    const decreaseQuantity = (index) => {
        const updatedProducts = [...products];
        if (updatedProducts[index].quantity > 0) {
            updatedProducts[index].quantity--;
            setProducts(updatedProducts);
            updateTotal();
        }
    };

    const updateTotal = () => {
        let newTotal = 0;
        products.forEach((product) => {
            newTotal += product.quantity * product.price;
        });
        setTotal(newTotal);
    };

    return (
        <div>
            {products.map((product, index) => {
                return (
                    <div key={index}>
                        <h1>{product.name}</h1>
                        <h2>{product.price}</h2>
                        <button onClick={() => increaseQuantity(index)}>
                            <BiSolidUpArrow />
                        </button>
                        <h3>{product.quantity}</h3>
                        <button onClick={() => decreaseQuantity(index)}>
                            <BiSolidDownArrow />
                        </button>
                    </div>
                );
            })}
            <h2>Total: {total}</h2>
        </div>
    );
}

export default Cart;
