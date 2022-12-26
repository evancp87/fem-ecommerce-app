import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

function Overlay({ overlay }) {
  return (
    <div
      className={overlay && classnames("overlay", { active: overlay })}
    ></div>
  );
}

Overlay.propTypes = {
  overlay: PropTypes.bool,
};

export default Overlay;
