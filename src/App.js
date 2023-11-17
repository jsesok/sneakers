import Navbar from "./components/Navbar";
import ImageGallery from "./components/ImageGallery";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content-container">
        <ImageGallery />
        <Product />
      </div>
    </div>
  );
}

export default App;
