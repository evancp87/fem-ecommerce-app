/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import classnames from "classnames";
import Overlay from "./Overlay";

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
  const [overlay, setOverlay] = useState(false);

  // sets the default main image and active thumbnail on load
  useEffect(() => {
    setCurrentImage(lightboxImgData[0].larger);
    setActiveIndex(0);
    setIsActive(true);
  }, []);

  // sets the image to show on click
  const showImage = (image) => {
    setImageToShow(image);
    window.innerWidth > 799 && setLightboxDisplay(true);
    window.innerWidth > 799 && setOverlay(true);
  };

  const hideLightbox = () => {
    setLightboxDisplay(false);
    setOverlay(false);
  };

  const carouselData = lightboxImgData.map((i) => i.larger);

  // shows next image in lightbox modal
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = carouselData.indexOf(imageToShow);
    console.log(currentIndex);
    if (currentIndex >= lightboxImgData.length - 1) {
      setLightboxDisplay(false);
      setOverlay(false);
    } else {
      let nextImage = lightboxImgData[currentIndex + 1];
      setImageToShow(nextImage.larger);
      setActiveIndex(currentIndex + 1);
    }
  };

  // shows previous image in lightbox modal
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = carouselData.indexOf(imageToShow);
    console.log(currentIndex);
    if (currentIndex <= 0) {
      setLightboxDisplay(false);
      setOverlay(false);
    } else {
      let nextImage = lightboxImgData[currentIndex - 1];
      setImageToShow(nextImage.larger);
      setActiveIndex(currentIndex - 1);
    }
  };

  const showNextMobile = (e) => {
    e.stopPropagation();
    let currentIndex = carouselData.indexOf(currentImage);
    console.log(currentIndex);
    let nextImage;
    if (currentIndex + 1 < lightboxImgData.length) {
      // check if the current index is not the last index
      // if not, set the next image to be the one at the next index
      nextImage = lightboxImgData[currentIndex + 1].larger;
    } else {
      // if the current index is the last index, set the next image to be the first image
      nextImage = lightboxImgData[0].larger;
    }
    setCurrentImage(nextImage);
  };

  // shows previous image in lightbox modal
  const showPrevMobile = (e) => {
    e.stopPropagation();
    let currentIndex = carouselData.indexOf(currentImage);
    console.log(currentIndex);
    let nextImage;
    if (currentIndex > 0) {
      // check if the current index is not the last index
      // if not, set the next image to be the one at the next index
      nextImage = lightboxImgData[currentIndex - 1].larger;
    } else if (currentIndex === 0) {
      // if the current index is the first index, set the next image to be the first image
      nextImage = lightboxImgData[lightboxImgData.length - 1].larger;
    }
    setCurrentImage(nextImage);
  };

  return (
    <div className="lightbox">
      {lightboxDisplay ? (
        <div id="lightbox" className="lightbox__modal">
          <img
            id="lightbox-img"
            alt="main image"
            className="lightbox__modal-img"
            src={imageToShow}
          />
          <img
            className="lightbox__modal-close-menu"
            src={closeMenu}
            alt="close button"
            onClick={hideLightbox}
          />
          <div className="slider__gallery-item-prev">
            <img
              src={prev}
              alt="previous btn"
              onClick={showPrev}
              className="slider__gallery-item-img"
            />
          </div>
          <div className="slider__gallery-item-next">
            <img
              src={next}
              alt="next btn"
              onClick={showNext}
              className="slider__gallery-item-img"
            />
          </div>
          <div className="lightbox__thumbnails-modal ">
            {lightboxImgData.map((image, index) => (
              <img
                key={index}
                alt="thumbnail"
                onClick={() => {
                  showImage(image.larger);
                  setIsActive(true);
                  setActiveIndex(index);
                }}
                src={image.thumbnail}
                className={classnames("thumbnail-img", {
                  active: isActive && activeIndex === index,
                })}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      {/* main image */}
      {currentImage && (
        <div className="lightbox-main-img">
          <img
            src={currentImage}
            onClick={() => {
              showImage(currentImage);
            }}
            className="lightbox__main-img"
            alt="large image"
          />

          <img
            src={prev}
            alt="previous btn"
            onClick={showPrevMobile}
            className="mobile-slider__item-prev"
          />

          <img
            src={next}
            alt="next btn"
            onClick={showNextMobile}
            className="mobile-slider__item-next"
          />
        </div>
      )}
      {overlay && <Overlay overlay={overlay} />}
      {/* main image thumbnails */}
      <div className="lightbox__thumbnails">
        {lightboxImgData.map((image, index) => (
          <img
            key={index}
            alt="thumbnail"
            onClick={() => {
              setCurrentImage(image.larger);
              setIsActive(true);
              setActiveIndex(index);
            }}
            src={image.thumbnail}
            className={classnames("thumbnail-img", {
              active: isActive && activeIndex === index,
            })}
          />
        ))}
      </div>
    </div>
  );
}

export default Lightbox;
