import React from "react";
import "./UrlCard.css";

const UrlCard = ({ title, shortUrl, longUrl }) => {
  return (
    <div className="url">
      <h3>{title}</h3>
      <a href={shortUrl} target="blank">
        {shortUrl}
      </a>
      <p>{longUrl}</p>
    </div>
  );
};

export default UrlCard;
