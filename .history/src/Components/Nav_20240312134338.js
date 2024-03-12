import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import the CSS file
const cartCount = 5; // Replace this with the actual cart count
function Navbar() {
  return (
    <div>
      <h1>
        <div className="cart-icon-container">
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </div>
        
      </h1>
    </div>
  );
}

export default Navbar;