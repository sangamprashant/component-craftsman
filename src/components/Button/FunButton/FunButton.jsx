import React from "react";
import PropTypes from "prop-types";
import "./FunButton.css";

export const FunButton = ({ btn, label, ...props }) => {
  const pos = {
    1: "first",
    2: "second",
    3: "third",
    4: "fourth",
    5: "fifth",
    6: "sixth",
    7: "fill",
    8: "pulse",
    9: "close",
    10: "raise",
    11: "up",
    12: "slide",
    13: "offset",
  };
  
  const index = btn;

  const classIs =
    index <= 6
      ? `component-craftsman-funbtn component-craftsman-funbtn-${pos[index]}`
      : `component-craftsman-box-button component-craftsman-box-${pos[index]}`;
      
  return (
    <button type="button" {...props} className={classIs}>
      {label}
    </button>
  );
};

FunButton.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Button type from 1-6
   */
  // Adjust the PropTypes range to start from 1
  btn: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
};

FunButton.defaultProps = {
  label: null,
  btn: 1,
  onClick: undefined,
};
