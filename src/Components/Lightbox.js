import React, { useState, useEffect } from "react";
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

  // showMainImage = (image) => {
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
