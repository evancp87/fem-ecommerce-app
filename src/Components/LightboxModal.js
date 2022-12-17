import React from "react";
// import LightboxImage from "./LightboxImage";
const lightboxImg = require("../assets/images/image-product-1");
const lightboxImgTwo = require("../assets/images/image-product-2");
const lightboxImgThree = require("../assets/images/image-product-3");
const lightboxImgFour = require("../assets/images/image-product-4");

const lightboxThumbnailImg = "../assets/images/image-product-1-thumbnail";
const lightboxThumbnailImgTwo = require("../assets/images/image-product-2-thumbnail");
const lightboxThumbnailImgThree = require("../assets/images/image-product-3-thumbnail");
const lightboxThumbnailImgFour = require("../assets/images/image-product-4-thumbnail");

// const lightboxImages = [
//   lightboxImg,
//   lightboxImgTwo,
//   lightboxImgThree,
//   lightboxImgFour,
// ];

const thumbnailImages = [
  lightboxThumbnailImg,
  lightboxThumbnailImgTwo,
  lightboxThumbnailImgThree,
  lightboxThumbnailImgFour,
];

function LightboxModal() {
  return (
    <div>
      {thumbnailImages.map((thumbnail) => {
        <img src={thumbnail} className="thumbnail-img" />;
      })}
    </div>
  );
}

export default LightboxModal;
