import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import { ReactComponent as PlusIcon } from "../images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "../images/icon-minus.svg";
import { useState } from "react";

function Product() {
  const [quantity, setQuantity] = useState(0);

  const handleReduceQuantity = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="product">
      <div className="company">SNEAKER COMPANY</div>
      <div className="product-title">Fall Limited Edition Sneakers</div>
      <div className="description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </div>
      <div className="price-container">
        <span className="price">$125.00</span>
        <span className="discount">50%</span>
      </div>
      <div className="old-price">$250.00</div>
      <div className="btns">
        <span className="quantity">
          <button className="btn-quantity" onClick={handleReduceQuantity}>
            <MinusIcon className="minus-icon"/>
          </button>
          <span className="number">{quantity}</span>
          <button className="btn-quantity" onClick={handleIncreaseQuantity}>
            <PlusIcon />
          </button>
        </span>
        <button className="btn-add-to-cart">
          <CartIcon className="icon-add-to-cart" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
