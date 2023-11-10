import { useState } from "react";
import Modal from "./Modal";
import Image1 from "../images/image-product-1.jpg";
import Image1Thumbnail from "../images/image-product-1-thumbnail.jpg";
import Image2 from "../images/image-product-2.jpg";
import Image2Thumbnail from "../images/image-product-2-thumbnail.jpg";
import Image3 from "../images/image-product-3.jpg";
import Image3Thumbnail from "../images/image-product-3-thumbnail.jpg";
import Image4 from "../images/image-product-4.jpg";
import Image4Thumbnail from "../images/image-product-4-thumbnail.jpg";

function ImageGallery() {
  const [mainImage, setMainImage] = useState(Image1);
  const [mainImageClicked, setMainImageClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imageList = [
    { fullSize: Image1, thumbnail: Image1Thumbnail },
    { fullSize: Image2, thumbnail: Image2Thumbnail },
    { fullSize: Image3, thumbnail: Image3Thumbnail },
    { fullSize: Image4, thumbnail: Image4Thumbnail },
  ];

  const handleMainImageClick = () => {
    setMainImageClicked(true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigateImages = (direction) => {
    const currentIndex = imageList.findIndex((img) => img.fullSize === mainImage);
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % imageList.length;
    } else {
      newIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    }

    setMainImage(imageList[newIndex].fullSize);
  };

  return (
    <div className="wrapper">
      <div className="wrapper-main-img" onClick={handleMainImageClick}>
        <img src={mainImage} alt="Sneakers" className="main-img"/>
      </div>
      <div className="thumbnails">
        {/* later on change this to a map function */}
        <div className="wrapper-img" onClick={() => setMainImage(Image1)}>
          <img src={Image1Thumbnail} alt="Sneakers thumbnail" className={mainImage === Image1 ? "thumbnail-img thumbnail-img-chosen" : " thumbnail-img"}/>
        </div>
        <div className="wrapper-img" onClick={() => setMainImage(Image2)}>
          <img src={Image2Thumbnail} alt="Sneakers thumbnail" className={mainImage === Image2 ? "thumbnail-img thumbnail-img-chosen" : " thumbnail-img"} />
        </div>
        <div className="wrapper-img" onClick={() => setMainImage(Image3)}>
          <img src={Image3Thumbnail} alt="Sneakers thumbnail" className={mainImage === Image3 ? "thumbnail-img thumbnail-img-chosen" : " thumbnail-img"} />
        </div>
        <div className="wrapper-img" onClick={() => setMainImage(Image4)}>
          <img src={Image4Thumbnail} alt="Sneakers thumbnail" className={mainImage === Image4 ? "thumbnail-img thumbnail-img-chosen" : " thumbnail-img"} />
        </div>
      </div>
      {isModalOpen && (
        <Modal imgToShow={mainImage} closeModal={closeModal} navigateImages={navigateImages} imageList={imageList} setMainImage={setMainImage} />
      )}
    </div>
  );
}

export default ImageGallery;
