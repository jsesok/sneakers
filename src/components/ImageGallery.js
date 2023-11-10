import Image1 from "../images/image-product-1.jpg";
import Image1Thumbnail from "../images/image-product-1-thumbnail.jpg";
import Image2 from "../images/image-product-2.jpg";
import Image2Thumbnail from "../images/image-product-2-thumbnail.jpg";
import Image3 from "../images/image-product-3.jpg";
import Image3Thumbnail from "../images/image-product-3-thumbnail.jpg";
import Image4 from "../images/image-product-4.jpg";
import Image4Thumbnail from "../images/image-product-4-thumbnail.jpg";
import { useState } from "react";

function ImageGallery() {
  const [mainImage, setMainImage] = useState(Image1);

  const handleMainImageClick = () => {
    console.log("main img clicked");
  }

  return (
    <div className="wrapper">
      <div className="wrapper-img" onClick={handleMainImageClick}>
        <img src={mainImage} alt="Sneakers" />
      </div>
      <div className="wrapper-img" onClick={() => setMainImage(Image1)}>
        <img src={Image1Thumbnail} alt="Sneakers thumbnail" />
      </div>
      <div className="wrapper-img" onClick={() => setMainImage(Image2)}>
        <img src={Image2Thumbnail} alt="Sneakers thumbnail" />
      </div>
      <div className="wrapper-img" onClick={() => setMainImage(Image3)}>
        <img src={Image3Thumbnail} alt="Sneakers thumbnail" />
      </div>
      <div className="wrapper-img" onClick={() => setMainImage(Image4)}>
        <img src={Image4Thumbnail} alt="Sneakers thumbnail" />
      </div>
    </div>
  )
}

export default ImageGallery;