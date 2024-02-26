import React from "react";
import "./Loading.css";
import PropTypes from "prop-types";

export const Loading = ({ loading, label }) => {
  const renderLoadingIndicator = () => {
    // Define the class name based on the loading index
    const className = `load-${loading}`;

    // Define the loading content based on the loading index
    let loadingContent;
    switch (loading) {
      case 1:
        loadingContent = (
          <>
            <p>{label}</p>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </>
        );
        break;
      case 2:
      case 3:
        loadingContent = (
          <>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <p>{label}</p>
          </>
        );
        break;
      case 4:
        loadingContent = (
          <>
            <div className="ring-1"></div>
            <p>{label}</p>
          </>
        );
        break;
      case 5:
        loadingContent = (
          <>
            <div className="ring-2">
              <div className="ball-holder">
                <div className="ball"></div>
              </div>
            </div>
            <p>{label}</p>
          </>
        );
        break;
      case 7:
        loadingContent = (
          <>
            <div className="square-holder">
              <div className="square"></div>
            </div>
            <p>{label}</p>
          </>
        );
        break;
      case 8:
        loadingContent = (
          <>
            <p>{label}</p>
            <div className="line"></div>
          </>
        );
        break;
      case 9:
        loadingContent = (
          <>
            <div className="spinner">
              <div className="bubble-1"></div>
              <div className="bubble-2"></div>
            </div>
            <p>{label}</p>
          </>
        );
        break;
      case 10:
        loadingContent = (
          <>
            <div className="bar"></div>
            <br />
            <p>{label}</p>
          </>
        );
        break;
      default:
        loadingContent = (
          <>
            <div className="letter-holder">
              <div className="l-1 letter">L</div>
              <div className="l-2 letter">o</div>
              <div className="l-3 letter">a</div>
              <div className="l-4 letter">d</div>
              <div className="l-5 letter">i</div>
              <div className="l-6 letter">n</div>
              <div className="l-7 letter">g</div>
              <div className="l-8 letter">.</div>
              <div className="l-9 letter">.</div>
              <div className="l-10 letter">.</div>
            </div>
          </>
        );
        break;
    }

    return (
      <div className="load-wrapp">
        <div className={className}>{loadingContent}</div>
      </div>
    );
  };

  return <div className="content">{renderLoadingIndicator()}</div>;
};

Loading.propTypes = {
  /**
   * Index of the loading indicator to display
   */
  loading: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  /**
   * Label to display below the animation
   */
  label: PropTypes.string,
};

Loading.defaultProps = {
  loading: 1,
  label: null,
};
