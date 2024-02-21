import React from "react";
import "./BasicButton.css";
import PropTypes from 'prop-types';

export const BasicButton = ({backgroundColor,primary ,size, ...props }) => {
  const mode = primary ? 'component-craftsman--primary' : 'component-craftsman--secondary';
  return (
    <button
      type="button"
      {...props}
      style={backgroundColor && { backgroundColor }}
      className={["component-craftsman-button", `component-craftsman--${size}`,mode].join(" ")}
    >
      {props.label}
    </button>
  );
};


BasicButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

BasicButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};