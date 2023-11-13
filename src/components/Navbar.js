import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";

function Navbar() {
  return (
    <ul className="navbar">
      <li><h1>sneakers</h1></li>
      <li><a href="#">Collections</a></li>
      <li><a href="#">Men</a></li>
      <li><a href="#">Women</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#"><CartIcon /></a></li>
      <li><a href="#"><img src={Avatar} alt="Avatar"/></a></li>
    </ul>
  )
}

export default Navbar;