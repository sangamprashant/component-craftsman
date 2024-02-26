import React from "react";
import "./Timeline.css";
import { NoData } from "../../NoData";
import PropTypes from "prop-types";

export const Timeline = ({ data, ...props }) => {
  if (!data || data.length === 0) {
    return <NoData label="No data available" />;
  }

  return (
    <div className="component-craftsman-timeline" {...props}>
      {data.map((item) => (
        <div
          key={item.id}
          className={`component-craftsman-timeline-container component-craftsman-timeline-${item.side}`}
        >
          {item.iconClass && (
            <p>
              <i className={item.iconClass} aria-hidden="true"></i>
            </p>
          )}
          <div className="component-craftsman-timeline-content">
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            {item?.render}
            {item.link && <a href={item.link}>Learn more</a>}
            {/* Render custom tags if provided */}
          </div>
        </div>
      ))}
    </div>
  );
};

Timeline.propTypes = {
  /**
   * Data array containing timeline items
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      side: PropTypes.oneOf(["left", "right"]).isRequired,
      iconClass: PropTypes.string,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      link: PropTypes.string,
      render: PropTypes.elementType,
    })
  ),
  /**
   * Function to render custom tags for each timeline item
   */
  renderCustomTags: PropTypes.func,
};

Timeline.defaultProps = {
  data: [],
};
