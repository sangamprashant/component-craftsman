import React from "react";
import "./Timeline.css"; // Assuming you have a corresponding CSS file

export const Timeline = () => {
  // Define timeline data
  const timelineData = [
    {
      id: 1,
      side: "left",
      iconClass: "fa fa-code-fork",
      title: "Git Basics",
      description:
        "Visit this site to learn about Git and become comfortable with basic Git practices",
      link: "https://learngitbranching.js.org/",
    },
    {
      id: 2,
      side: "right",
      title: "Puppet Language Basics",
      description:
        "This self-paced course will teach you the basics of understanding and writing Puppet code in less than thirty minutes.",
      link: "https://puppet.com/learning-training/kits/puppet-language-basics/",
    },
    {
      id: 3,
      side: "left",
      title: "Puppet Practice Labs",
      description:
        "Now you are ready to write some Puppet code in an interactive, browser-based environment.",
      link: "https://learn.puppet.com/practicelabcatalog",
    },
    {
      id: 4,
      side: "right",
      title: "PE101: Deploy & Discover",
      description:
        "At this point, you are ready to take the in-person training and implement Puppet in your environment. Coming soon!",
      link: "",
    },
    {
      id: 5,
      side: "left",
      title: "PE201: Design & Manage",
      description:
        "Already have Puppet implemented? Learn best practices for designing and managing your environment. Coming soon!",
      link: "",
    },
    {
      id: 6,
      side: "right",
      title: "Keep going!",
      description:
        "The journey never ends. Here are some resources to keep you on your learning path.",
      link: "http://learn.puppet.com",
    },
  ];

  return (
    <div className="timeline">
      {timelineData.map((item) => (
        <div key={item.id} className={`container ${item.side}`}>
          {item.iconClass && (
            <p>
              <i className={item.iconClass} aria-hidden="true"></i>
            </p>
          )}
          <div className="content">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {item.link && <a href={item.link}>Learn more</a>}
          </div>
        </div>
      ))}
    </div>
  );
};


Timeline.defaultProps = {
  loading: 1,
  label: null,
};
