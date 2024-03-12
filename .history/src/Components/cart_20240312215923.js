import React, { useState, useEffect } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import Nav from './Nav'
import './cart.css'

function Cart() {
    const [products, setProducts] = useState([
        { id: "1", name: "Product 1", price: 100, quantity: 0, image: "https://unsplash.com/photos/round-white-watch-with-white-band-2cFZ_FB08UM" },
        { id: "2", name: "Product 2", price: 200, quantity: 0, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" },
        { id: "3", name: "Product 3", price: 300, quantity: 0, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" },
        { id: "4", name: "Product 4", price: 400, quantity: 0, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" },
        { id: "5", name: "Product 5", price: 500, quantity: 0, image: "image-url-5" },
        { id: "6", name: "Product 6", price: 600, quantity: 0, image: "image-url-6" },
        { id: "7", name: "Product 7", price: 700, quantity: 0, image: "image-url-7" },
        { id: "8", name: "Product 8", price: 800, quantity: 0, image: "image-url-8" },
        { id: "9", name: "Product 9", price: 900, quantity: 0, image: "image-url-9" },
        { id: "10", name: "Product 10", price: 1000, quantity: 0, image: "image-url-10" }
    ]);

    const [total, setTotal] = useState(0);
    const [cartItems, setCartItems] = useState(0);

    useEffect(() => {
        let newCartItems = 0;
        products.forEach(product => {
            newCartItems += product.quantity;
        });
        setCartItems(newCartItems);
    }, [products]);

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

    const clearCart = () => {
        setProducts([]);
        setTotal(0);
        setCartItems(0);
    };

    const removeFromCart = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
        updateTotal();
    };

    return (
        <div>
            <Nav cartItems={cartItems} />
            <div className="">
                {products.map((product, index) => {
                    return (
                        <div className="product-container" key={index}>
                            <img src={product.image} alt={product.name} />
                            <h1>{product.name}</h1>
                            <h2>{product.price}</h2>
                            <div>
                                <button onClick={() => increaseQuantity(index)}>
                                    <BiSolidUpArrow />
                                </button>
                                <h3>{product.quantity}</h3>
                                <button onClick={() => decreaseQuantity(index)}>
                                    <BiSolidDownArrow />
                                </button>
                            </div>
                            <button onClick={() => removeFromCart(index)}>Remove</button>
                        </div>
                    );
                })}
                <button onClick={clearCart}>Clear Cart</button>
                <h2>Total: {total}</h2>
            </div>
        </div>
    );
}

export default Cart;
