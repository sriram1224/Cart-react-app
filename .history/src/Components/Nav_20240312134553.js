import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
const cartCount = 5; 
function Navbar() {
  return (
      <div className="cart">
          <div>
              <h1>
              
              </h1>
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
  );
}

export default Navbar;