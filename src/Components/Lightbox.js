import React, { useState, useEffect } from "react";
const lightboxThumbnailImg = require("../assets/images/image-product-1-thumbnail.jpg");
const lightboxThumbnailImgTwo = require("../assets/images/image-product-2-thumbnail.jpg");
const lightboxThumbnailImgThree = require("../assets/images/image-product-3-thumbnail.jpg");
const lightboxThumbnailImgFour = require("../assets/images/image-product-4-thumbnail.jpg");
const prev = require("../assets/images/icon-previous.svg").default;
const next = require("../assets/images/icon-next.svg").default;
const closeMenu = require("../assets/images/icon-close.svg").default;
// const lightboxImg = require("../assets/images/image-product-1.jpg");
// const lightboxImgTwo = require("../assets/images/image-product-2.jpg");
// const lightboxImgThree = require("../assets/images/image-product-3.jpg");
// const lightboxImgFour = require("../assets/images/image-product-4.jpg");

// const imagesArr = [
//   lightboxImg,
//   lightboxImgTwo,
//   lightboxImgThree,
//   lightboxImgFour,
// ];

const thumbnailImagesArr = [
  lightboxThumbnailImg,
  lightboxThumbnailImgTwo,
  lightboxThumbnailImgThree,
  lightboxThumbnailImgFour,
];

function Lightbox() {
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  const [mainImage, setMainImageToShow] = useState("");

  const defaultImg = (image) => {
    useEffect(() => {
      setImageToShow(image);
      setLightboxDisplay(true);
    });
  };

  const showImage = (image) => {
    setImageToShow(image);
    setLightboxDisplay(true);
  };

  // const showMainImage = (image) => {
  //   setMainImageToShow(image);
  //   setLightboxDisplay(true);
  // };

  const hideLightbox = () => {
    setLightboxDisplay(false);
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
            id="lightbox-img"
            className="lightbox__modal-img"
            src={imageToShow}
          />
          <img
            className="lightbox__modal-close-menu"
            src={closeMenu}
            onClick={hideLightbox}
          />
          <img
            src={prev}
            alt="prev btn"
            // onClick={showPrev}
            className="slider__gallery-item-prev"
          />
          <img
            src={next}
            alt="next btn"
            // onClick={showNext}
            className="slider__gallery-item-next"
          />
          <img />
        </div>
      ) : (
        ""
      )}
      {defaultImg}
      <div className="lightbox__thumbnails">{thumbnails}</div>
    </div>
  );
}

export default Lightbox;
