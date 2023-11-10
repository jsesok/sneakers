import { ReactComponent as CloseIcon } from "../images/icon-close.svg";
import { ReactComponent as PreviousIcon } from "../images/icon-previous.svg";
import { ReactComponent as NextIcon } from "../images/icon-next.svg";

const Modal = ({ imgToShow, closeModal, navigateImages, imageList, setMainImage }) => {
  const handleNext = () => {
    navigateImages("next");
  };

  const handlePrev = () => {
    navigateImages("prev");
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-main-img">
          <img src={imgToShow} alt="Modal" className="main-img" />
          <div className="modal-navigation">
            <PreviousIcon className="icon" onClick={handlePrev} />
            <NextIcon className="icon" onClick={handleNext} />
          </div>
        </div>
        <div className="thumbnails">
          {imageList.map((img, index) => (
              <img
                className={img.fullSize === imgToShow ? "thumbnail-img thumbnail-img-chosen" : " thumbnail-img"}
                key={index}
                src={img.thumbnail}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImage(img.fullSize)}
              />
            ))}
        </div>
        <CloseIcon className="close-icon" onClick={closeModal} />
      </div>
    </div>
  );
};

export default Modal;
