import React from "react";

function Avatar() {
  return (
    <div className="avatar">
      <img
        src={require("../assets/images/image-avatar.png")}
        alt="avatar img"
        className="avatar__img"
      />
    </div>
  );
}

export default Avatar;
