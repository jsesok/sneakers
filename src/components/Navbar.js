import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import { ReactComponent as DeleteIcon } from "../images/icon-delete.svg";

function Navbar({ quantity, onCartIconClick }) {
  return (
    <nav className="navbar">
      <ul className="left-items">
      <li><h1>sneakers</h1></li>
        <li className="item"><a href="#">Collections</a></li>
        <li className="item"><a href="#">Men</a></li>
        <li className="item"><a href="#">Women</a></li>
        <li className="item"><a href="#">About</a></li>
        <li className="item"><a href="#">Contact</a></li>
      </ul>
      <ul className="right-items">
        <li>
          <a href="#">
            <div className="cart-icon-container" onClick={onCartIconClick}>
              <CartIcon className="cart" />
              {quantity > 0 && <span className="cart-icon-quantity">{quantity}</span>}
            </div>
          </a>
        </li>
        <li><a href="#"><img src={Avatar} alt="Avatar"/></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
