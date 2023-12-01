import Navbar from "./components/Navbar";
import ImageGallery from "./components/ImageGallery";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [isCartVisible, setCartVisibility] = useState(false);
  const price = 125;
  const oldPrice = 250;

  const handleCartIconClick = (event) => {
    event.stopPropagation();
    if (isCartVisible) {
      setCartVisibility(false);
    } else {
      setCartVisibility(true)
    }
  };

  const handleDocumentClick = (event) => {
    if (isCartVisible && !event.target.closest('.cart-container')) {
      setCartVisibility(false);;
    }
  };

    useEffect(() => {
      document.addEventListener('click', handleDocumentClick);

      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }, [isCartVisible]);

  return (
    <div>
       <Navbar
        quantity={quantity}
        onCartIconClick={handleCartIconClick}
      />
      <div className="content-container">
        <ImageGallery />
        <Product
          counter={counter}
          setCounter={setCounter}
          setQuantity={setQuantity}
          price={price}
          oldPrice={oldPrice}
        />
      </div>
      {isCartVisible && <Cart quantity={quantity} setQuantity={setQuantity} price={price} />}
    </div>
  );
}

export default App;
