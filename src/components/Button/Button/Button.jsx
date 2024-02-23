import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export const Button = ({backgroundColor,primary ,size, icon,label,radius, ...props }) => {
    const mode = primary ? 'component-craftsman--primary' : 'component-craftsman--secondary';
  const validatedRadius = Math.max(1, Math.min(5, radius));
    const buttonStyle = {
        ...(backgroundColor && { backgroundColor }),
        ...(validatedRadius && { borderRadius: `${10 * validatedRadius}px` })
      };
  return (
    <button
      type="button"
      {...props}
      style={buttonStyle}
      className={["component-craftsman-button", `component-craftsman--${size}`,mode].join(" ")}
    >
     <span> {icon} </span> {icon && label &&<span className={`component-craftsman--inner-button-divide ${primary?"primary":"secondary"}`}> | </span>} <span> {label}</span>
    </button>
  );
};

Button.propTypes = {
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
    * Radius of the button 
    * 1-5
    */
    radius: PropTypes.oneOf([1, 2, 3, 4, 5]),
    /**
     * Button contents
     */
    icon: PropTypes.elementType,
    /**
     * Button contents
     */
    label: PropTypes.string,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };
  
  Button.defaultProps = {
    label:null,
    radius:1,
    icon:null,
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
  };