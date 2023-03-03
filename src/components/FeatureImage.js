import React from "react";

export default function FeatureImage(props) {
  return (
    <div
      className="feature-image"
      style={{
        backgroundImage: `url("${props.image}")`,
      }}
    ></div>
  );
}
