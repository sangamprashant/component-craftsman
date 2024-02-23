import React from "react";
import PropTypes from "prop-types";
import "./Divider.css";

export const Divider = ({ tag, position }) => {
  const renderTag = () => {
    if (!tag) return null;

    let tagStyle = {};
    switch (position) {
      case "left":
        tagStyle = { left: 0 };
        break;
      case "center":
        tagStyle = { left: "50%", transform: "translateX(-50%)" };
        break;
      case "right":
        tagStyle = { right: 0 };
        break;
      default:
        break;
    }

    return <span className={`component-craftsman--divider-tag divider-tag-${position}`} style={tagStyle}>{tag}</span>;
  };

  return (
    <div className="component-craftsman--divider-container">
      <hr className="component-craftsman--divider-line" />
      {position && renderTag()}
    </div>
  );
};

Divider.propTypes = {
  /**
   * Tag to be displayed on the line
   */
  tag: PropTypes.string,
  /**
   * Position of the tag relative to the line
   */
  position: PropTypes.oneOf(["left", "center", "right"]),
};

Divider.defaultProps = {
  tag: null,
  position: "left",
};


