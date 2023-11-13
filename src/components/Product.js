import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import { useState } from "react";

function Product() {
  const [quantity, setQuantity] = useState(0);

  const handleReduceQuantity = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  return (
    <div>
      <div className="company">SNEAKER COMPANY</div>
      <div className="product-title">Fall Limited Edition Sneakers</div>
      <div className="description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </div>
      <div>
        <span className="price">$125.00</span>
        <span className="discount">50%</span>
      </div>
      <div className="old-price">$250.00</div>
      <div>
        <span>
          <button className="btn-quantity" onClick={handleReduceQuantity}>-</button>
          <span>{quantity}</span>
          <button className="btn-quantity" onClick={handleIncreaseQuantity}>+</button>
        </span>
        <button>
          <CartIcon />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
