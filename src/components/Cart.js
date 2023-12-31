import { ReactComponent as DeleteIcon} from "../images/icon-delete.svg";
import Image1Thumbnail from "../images/image-product-1-thumbnail.jpg";

function Cart({quantity, setQuantity, price}) {

  const handleCartItemsDeletion = () => {
    setQuantity(0);
  }

  return (
    <div className="cart-container">
      <div className="cart-title">
        <h4>Cart</h4>
      </div>
      {quantity > 0 ? (
        <>
          <span className="cart-content-container">
            <img src={Image1Thumbnail} alt="Sneakers thumbnail" className="cart-thumbnail-img" />
            <div className="cart-description">
              <div>Fall Limited Edition Sneakers</div>
              <div>{`$${price}.00 x ${quantity}`}<span className="total-price">{`$${price * quantity}.00`}</span></div>
            </div>
            <div>
              <DeleteIcon className="delete-icon" onClick={handleCartItemsDeletion}/>
            </div>
          </span>
          <button className="btn-checkout">Checkout</button>
        </>
        ) : (
          <div className="empty-cart-message">
            Your cart is empty.
          </div>
        )}
    </div>
  )
}

export default Cart;