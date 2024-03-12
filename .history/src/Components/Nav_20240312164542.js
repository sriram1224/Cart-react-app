import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
 
function Navbar({cartCount}) {
    return (
      cons
      <div className="nav-container">
      <div className="cart">
          <div className="heading">
              <h1>
              Cart
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
      </div>
  );
}

export default Navbar;