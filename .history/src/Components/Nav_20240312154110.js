import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  // Function to update the cart count
  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <div className="nav-container">
      <div className="cart">
        <div className="heading">
          <h1>Cart</h1>
        </div>
        <h1>
          <div className="cart-icon-container">
            <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </div>
        </h1>
      </div>
      {/* Render the Cart component and pass the updateCartCount function */}
      <Cart updateCartCount={updateCartCount} />
    </div>
  );
}

export default Navbar;
