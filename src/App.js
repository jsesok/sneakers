import Navbar from "./components/Navbar";
import ImageGallery from "./components/ImageGallery";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [isCartVisible, setCartVisibility] = useState(false);
  const price = 125;
  const oldPrice = 250;

  const handleCartIconClick = () => {
    setCartVisibility(!isCartVisible);
  };

  return (
    <div>
       <Navbar
        onCartIconClick={handleCartIconClick}
      />
      <div className="content-container">
        <ImageGallery />
        <Product
          quantity={quantity}
          setQuantity={setQuantity}
          price={price}
          oldPrice={oldPrice}
        />
      </div>
      {isCartVisible && <Cart quantity={quantity} price={price} />}
     
    </div>
  );
}

export default App;
