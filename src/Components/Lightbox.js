import React, { useState, useEffect } from "react";
const lightboxThumbnailImg = require("../assets/images/image-product-1-thumbnail.jpg");
const lightboxThumbnailImgTwo = require("../assets/images/image-product-2-thumbnail.jpg");
const lightboxThumbnailImgThree = require("../assets/images/image-product-3-thumbnail.jpg");
const lightboxThumbnailImgFour = require("../assets/images/image-product-4-thumbnail.jpg");
const prev = require("../assets/images/icon-previous.svg").default;
const next = require("../assets/images/icon-next.svg").default;
const closeMenu = require("../assets/images/icon-close.svg").default;
const lightboxImg = require("../assets/images/image-product-1.jpg");
const lightboxImgTwo = require("../assets/images/image-product-2.jpg");
const lightboxImgThree = require("../assets/images/image-product-3.jpg");
const lightboxImgFour = require("../assets/images/image-product-4.jpg");

const lightboxImgData = [
  { thumbnail: lightboxThumbnailImg, larger: lightboxImg },
  { thumbnail: lightboxThumbnailImgTwo, larger: lightboxImgTwo },
  { thumbnail: lightboxThumbnailImgThree, larger: lightboxImgThree },
  { thumbnail: lightboxThumbnailImgFour, larger: lightboxImgFour },
];

function Lightbox() {
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState("");
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    setCurrentImage(lightboxImgData[0].larger);
  }, []);

  const showImage = (image) => {
    setImageToShow(image);
    setLightboxDisplay(true);
  };

  const hideLightbox = () => {
    setLightboxDisplay(false);
  };

  // const largerImages = lightboxImgData.map((image, index) => {
  //   <img
  //     key={index}
  //     onClick={() => {
  //       showImage(() => image.larger);
  //     }}
  //     src={image.larger}
  //     className="lightbox__main-img"
  //   />;
  // });

  // const handleMainImage = (image) => {
  //   setImageToShow(image);
  // };

  // const mainImage = lightboxImgData.map((image, index) => (
  //   <img
  //     key={index}
  //     onClick={() => {
  //       showImage(image.larger);
  //     }}
  //     src={image.larger}
  //     className="lightbox__main-img"
  //   />
  // ));

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
      {/* {mainImage} */}

      {currentImage && (
        <img
          src={currentImage}
          onClick={(image) => {
            showImage(image.larger);
          }}
          className="lightbox__main-img"
          alt="large"
        />
      )}
      <div className="lightbox__thumbnails">
        {lightboxImgData.map((image, index) => (
          <img
            key={index}
            onClick={() => {
              setCurrentImage(image.larger);
            }}
            src={image.thumbnail}
            className="thumbnail-img"
          />
        ))}
      </div>
    </div>
  );
}

export default Lightbox;
