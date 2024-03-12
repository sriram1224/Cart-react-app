import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const cartCount

function Navbar() {
  return (
    <div>
      <h1>
        <FontAwesomeIcon icon={faShoppingCart} /> Cart
        {cartCount > 0 && <span> ({cartCount})</span>}
      </h1>
    </div>
  );
}

export default Navbar;