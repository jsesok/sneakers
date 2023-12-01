import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import { ReactComponent as PlusIcon } from "../images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "../images/icon-minus.svg";
import { useState } from "react";


function Product({counter, setCounter, setQuantity, price, oldPrice}) {
  const [addedToTheCart, setAddedToTheCart] = useState(false);

  const handleReduceCounter = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };

  const handleIncreaseCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const handleAddToCart = () => {
      setQuantity((prev) => prev + counter)
      setAddedToTheCart(true);
      setCounter(0);
  };

  return (
    <div className="product">
      <h2 className="company">SNEAKER COMPANY</h2>
      <h3 className="product-title">Fall Limited Edition Sneakers</h3>
      <div className="description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </div>
      <div className="prices-one-line">
        <div className="price-container">
          <span className="price">{`$${price}.00`}</span>
          <span className="discount">50%</span>
        </div>
        <div className="old-price">{`$${oldPrice}.00`}</div>
      </div>
      <div className="btns">
        <span className="quantity">
          <button className="btn-quantity" onClick={handleReduceCounter}>
            <MinusIcon className="m-icon"/>
          </button>
          <span className="number">{counter}</span>
          <button className="btn-quantity" onClick={handleIncreaseCounter}>
            <PlusIcon className="m-icon"/>
          </button>
        </span>
        <button className="btn-add-to-cart" onClick={handleAddToCart}>
          <CartIcon className="icon-add-to-cart" />
          <span className="text-add-to-cart">Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default Product;
