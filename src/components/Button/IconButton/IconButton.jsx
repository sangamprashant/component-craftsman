import React from "react";
import "./IconButton.css";
import PropTypes from "prop-types";

export const IconButton = ({ icon, effect, bg, ...props }) => {
  const colors = {
    1: "fb",
    2: "tw",
    3: "g-plus",
    4: "dribbble",
    5: "vimeo",
    6: "pinterest",
    7: "insta",
    8: "in",
  };

  return (
    <div class={`component-craftsman-icon-btn-effect ${effect}`}>
      <button className={colors[bg]} {...props}>
        {icon}
      </button>
    </div>
  );
};

IconButton.propTypes = {
  /**
   * Button contents
   */
  icon: PropTypes.element,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Button effect
   */
  effect: PropTypes.oneOf(["aeneas", "jaques", "egeon", "claudio", "laertes"]),
  /**
   * Buttons background color
   */
  bg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
};

IconButton.defaultProps = {
  icon: null,
  effect: "aeneas",
  bg: 1,
  onClick: undefined,
};
