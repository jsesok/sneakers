import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import { ReactComponent as DeleteIcon} from "../images/icon-delete.svg";

function Navbar({ onCartIconClick }) {
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
        <li><a href="#"><CartIcon className="cart" onClick={onCartIconClick} /></a></li>  
        <li><a href="#"><img src={Avatar} alt="Avatar"/></a></li>
      </ul>
      
    </nav>
  )
}

export default Navbar;