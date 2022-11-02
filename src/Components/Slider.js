import React, { useState } from "react";
const lightboxThumbnailImg = require("../assets/images/image-product-1-thumbnail.jpg");
const lightboxThumbnailImgTwo = require("../assets/images/image-product-2-thumbnail.jpg");
const lightboxThumbnailImgThree = require("../assets/images/image-product-3-thumbnail.jpg");
const lightboxThumbnailImgFour = require("../assets/images/image-product-4-thumbnail.jpg");

const thumbnailImagesArr = [
  lightboxThumbnailImg,
  lightboxThumbnailImgTwo,
  lightboxThumbnailImgThree,
  lightboxThumbnailImgFour,
];

function Lightbox() {
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  // const [mainImage, setMainImageToShow] = "";

  const showImage = (image) => {
    setImageToShow(image);
    setLightboxDisplay(true);
  };

  // showMainImage = (image) => {
  //   setMainImageToShow(image);
  //   setLightboxDisplay(true);
  // };

  const hideLightbox = () => {
    setLightboxDisplay(false);
  };

  const showPrevious = (e) => {
    e.stopPropagation();
    let currentIndex = thumbnails.indexOf(imageToShow);

    if (currentIndex <= 0) {
      setImageToShow(false);
    } else {
      let prevImage = thumbnails[currentIndex - 1];
      setImageToShow(prevImage);
    }
  };

  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = thumbnails.indexOf(imageToShow);

    if (currentIndex >= thumbnails.length - 1) {
      return setImageToShow(false);
    } else {
      let nextImage = thumbnails[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const thumbnails = thumbnailImagesArr.map((image, index) => (
    <img
      key={index}
      onClick={() => {
        showImage(image);
      }}
      src={image}
      className="thumbnail-img"
    />
  ));

  return (
    <div className="lightbox">
      {lightboxDisplay ? (
        <div id="lightbox" onClick={hideLightbox} className="lightbox__modal">
          <img
            className="lightbox__modal-prev"
            onClick={showPrevious}
            src={require("../assets/images/icon-previous.svg").default}
          />
          <img
            id="lightbox-img"
            className="lightbox__modal-img"
            src={imageToShow}
          />
          <img
            onClick={showNext}
            className="lightbox__modal-next"
            src={require("../assets/images/icon-next.svg").default}
          />
        </div>
      ) : (
        ""
      )}
      <div className="lightbox__thumbnails">{thumbnails}</div>
    </div>
  );
}

export default Lightbox;
