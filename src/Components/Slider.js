import React, { useState } from "react";
const lightboxImg = require("../assets/images/image-product-1.jpg");
const lightboxImgTwo = require("../assets/images/image-product-2.jpg");
const lightboxImgThree = require("../assets/images/image-product-3.jpg");
const lightboxImgFour = require("../assets/images/image-product-4.jpg");
const prev = require("../assets/images/icon-previous.svg").default;
const next = require("../assets/images/icon-next.svg").default;

const imagesArr = [
  lightboxImg,
  lightboxImgTwo,
  lightboxImgThree,
  lightboxImgFour,
];

function Slider() {
  // const [lightboxDisplay, setLightboxDisplay] = useState(false);
  // const [imageToShow, setImageToShow] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  // // const [mainImage, setMainImageToShow] = "";

  // const showImage = (image) => {
  //   setImageToShow(image);
  //   setLightboxDisplay(true);
  // };

  // showMainImage = (image) => {
  //   setMainImageToShow(image);
  //   setLightboxDisplay(true);
  // };

  // const hideLightbox = () => {
  //   setLightboxDisplay(false);
  // };

  // const showPrevious = (e) => {
  //   e.stopPropagation();
  //   let currentIndex = thumbnails.indexOf(imageToShow);

  //   if (currentIndex <= 0) {
  //     setImageToShow(false);
  //   } else {
  //     let prevImage = thumbnails[currentIndex - 1];
  //     setImageToShow(prevImage);
  //   }
  // };

  // const showNext = (e) => {
  //   e.stopPropagation();
  //   let currentIndex = thumbnails.indexOf(imageToShow);

  //   if (currentIndex >= thumbnails.length - 1) {
  //     return setImageToShow(false);
  //   } else {
  //     let nextImage = thumbnails[currentIndex + 1];
  //     setImageToShow(nextImage);
  //   }
  // };

  const showNext = () => {
    // if (currentIndex === imagesArr.length + 1) {
    //   setCurrentIndex(0);
    // }
    return setCurrentIndex(currentIndex + 1);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    if (currentIndex === imagesArr.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex - 1);
  };

  const images = imagesArr.map((image, index) => (
    <li className="slider__gallery-item" key={index}>
      <img
        // onClick={() => {
        //   showImage(image);
        // }}
        src={image}
        // style={{ transform: `translateX(${currentIndex * 100}%)` }}
        className="slider__gallery-item-img"
      />
    </li>
  ));

  return (
    <div className="slider">
      <div>
        {" "}
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
      </div>
      <ul className="slider__gallery">{images}</ul>
    </div>
  );

  // <div className="slider-wra">
  //     {lightboxDisplay ? (
  //       <div id="lightbox" onClick={hideLightbox} className="lightbox__modal">
  //         <img
  //           className="lightbox__modal-prev"
  //           onClick={showPrevious}
  //           src={require("../assets/images/icon-previous.svg").default}
  //         />
  //         <img
  //           id="lightbox-img"
  //           className="lightbox__modal-img"
  //           src={imageToShow}
  //         />
  //         <img
  //           onClick={showNext}
  //           className="lightbox__modal-next"
  //           src={require("../assets/images/icon-next.svg").default}
  //         />
  //       </div>
  //     ) : (
  //       ""
  //     )}
  //     <div className="lightbox__thumbnails">{thumbnails}</div>
  //   </div>
  // );
}

export default Slider;
