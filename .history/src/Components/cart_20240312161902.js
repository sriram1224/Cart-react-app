import React, { useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

function Cart() {
    const [cart, setCart] = useState(Array.from({ length: 10 }, () => ({ quantity: 0 })));
    const [total, setTotal] = useState(0);

    const products = [
        { id: "1", name: "Product 1", price: 100 },
        { id: "2", name: "Product 2", price: 200 },
        { id: "3", name: "Product 3", price: 300 },
        { id: "4", name: "Product 4", price: 400 },
        { id: "5", name: "Product 5", price: 500 },
        { id: "6", name: "Product 6", price: 600 },
        { id: "7", name: "Product 7", price: 700 },
        { id: "8", name: "Product 8", price: 800 },
        { id: "9", name: "Product 9", price: 900 },
        { id: "10", name: "Product 10", price: 1000 }
    ];

    const increaseQuantity = (index) => {
        const updatedCart = [...cart];
        updatedCart[index] = {
            ...cart[index],
            quantity: (cart[index].quantity || 0) + 1
        };
        setCart(updatedCart);
        updateTotal();
    };

    const updateTotal = () => {
        let newTotal = 0;
        cart.forEach((item, index) => {
            newTotal += item.quantity * products[index].price;
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
                        <h3>{cart[index]?.quantity || 0}</h3>
                        <button>
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
