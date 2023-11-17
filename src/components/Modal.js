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
          <div className="modal-directions">
            <PreviousIcon className="icon-direction" onClick={handlePrev} />
            <NextIcon className="icon-direction" onClick={handleNext} />
          </div>
        </div>
        <div className="thumbnails-modal-view">
          {imageList.map((img, index) => (
            <div className="thumbnail-wrapper">
              <img
                className={img.fullSize === imgToShow ? "thumbnail-img thumbnail-img-chosen" : " thumbnail-img"}
                key={index}
                src={img.thumbnail}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setMainImage(img.fullSize)}
              />
            </div>
            ))}
        </div>
        <div className="close-icon-container" onClick={closeModal}>
          <CloseIcon className="close-icon" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
