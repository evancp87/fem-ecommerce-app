import React from "react";

function LightboxImage() {
  return (
    <div className="lightbox-img">
      <img
        // onClick={() => {
        //   props.showImage(image);
        // }}
        // src={require(`../assets/images/${image}.jpg`)}
        className="thumbnail-img"
      />
    </div>
  );
}

export default LightboxImage;
