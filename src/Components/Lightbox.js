import React, { useState, useEffect } from "react";
import classnames from "classnames";
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
  const [isActive, setIsActive] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setCurrentImage(lightboxImgData[0].larger);
    setIsActive(lightboxImgData[0].thumbnail);
    // sets active thumbnail with lightboxImgdata[0].thumbnail with  hover status css- short circuit-
  }, []);

  const showImage = (image) => {
    setImageToShow(image);
    setLightboxDisplay(true);
  };

  const hideLightbox = () => {
    setLightboxDisplay(false);
  };

  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = lightboxImgData.indexOf(imageToShow);
    if (currentIndex >= lightboxImgData.length - 1) {
      setLightboxDisplay(false);
    } else {
      let nextImage = lightboxImgData[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = lightboxImgData.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightboxDisplay(false);
    } else {
      let nextImage = lightboxImgData.larger[currentIndex - 1];
      setImageToShow(nextImage.larger);
    }
  };

  // const handleOpenMainImage = (image) => {
  //   setCurrentImage(image.larger);

  //   setIsActive(!isActive);
  // };

  return (
    <div className="lightbox">
      {lightboxDisplay ? (
        <div id="lightbox" className="lightbox__modal">
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
            onClick={showPrev}
            className="slider__gallery-item-prev"
          />
          <img
            src={next}
            alt="next btn"
            onClick={showNext}
            className="slider__gallery-item-next"
          />
          <div className="lightbox__thumbnails-modal ">
            {lightboxImgData.map((image, index) => (
              <img
                key={index}
                onClick={() => {
                  showImage(image.larger);
                  setIsActive(!isActive);
                  setActiveIndex(index);

                  // sets active thumbnail with lightboxImgdata[0].thumbnail with  hover status css- short circuit-
                }}
                // onClick={() => setIsActive(!isActive)}
                src={image.thumbnail}
                className={classnames("thumbnail-img", {
                  active: isActive && activeIndex === index,
                })}
                // className={isActive ? "thumbnail-img active" : "thumbnail-img"}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}

      {currentImage && (
        <img
          src={currentImage}
          onClick={() => {
            showImage(currentImage);
          }}
          // thumbnails={thumbnails}
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
              setIsActive(!isActive);
            }}
            src={image.thumbnail}
            className={classnames("thumbnail-img", { active: !isActive })}
          />
        ))}
      </div>
    </div>
  );
}

export default Lightbox;
