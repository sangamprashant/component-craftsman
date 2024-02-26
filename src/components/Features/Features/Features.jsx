import React from "react";
import { NoData } from "../../NoData";
import PropTypes from "prop-types"; 
import "./Features.css"

export const Features = ({ data }) => {
  if (!data || data.length === 0) {
    return <NoData label="No data available" />;
  }
  return (
    <section className="component-craftsman-features">
      {data.map((feature) => (
        <div key={feature.id} className="component-craftsman-feature-container">
          <img src={feature.imgSrc} alt={feature.alt} />
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
          {feature.render}
        </div>
      ))}
    </section>
  );
};

Features.propTypes = {
  /**
   * Data array containing feature items
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgSrc: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      render: PropTypes.elementType,
    })
  ),
};

Features.defaultProps = {
  data: [],
};

