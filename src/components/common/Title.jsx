import React from "react";

const Title = ({ text, level = 1 }) => {
  const Tag = `h${level}`;

  return (
    <Tag style={{ color: "#003580", fontFamily: "sans-serif" }}>{text}</Tag>
  );
};

export default Title;
