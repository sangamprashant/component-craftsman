import React from "react";
import PropTypes from "prop-types";
import "./EmailCheckInput.css";

export const EmailCheckInput = ({
  type,
  value,
  placeholder,
  isValid,
  ...props
}) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [isEmailValid, setIsEmailValid] = React.useState(
    value ? emailRegex.test(value) : false
  );

  React.useEffect(() => {
    setIsEmailValid(emailRegex.test(value));
  }, [value]);

  React.useEffect(() => {
    if (isValid) {
      isValid(isEmailValid);
    }
  }, [value]);

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      style={{
        borderColor: value ? (isEmailValid ? "green" : "red") : "",
      }}
      className={`component-craftsman--input white`}
      {...props}
    />
  );
};

EmailCheckInput.propTypes = {
  /**
   * Input type
   */
  type: PropTypes.string,
  /**
   * Input value
   */
  value: PropTypes.string.isRequired,
  /**
   * Placeholder text
   */
  placeholder: PropTypes.string,
  /**
   * Function to handle input change
   */
  onChange: PropTypes.func,
  /**
   * Function to return the valid status of the input
   */
  isValid: PropTypes.func,
};

EmailCheckInput.defaultProps = {
  type: "text",
  placeholder: "Enter email",
  onChange: undefined,
  isValid: undefined,
};

export default EmailCheckInput;
