import React from "react";
import UrlCard from "../UrlCard/UrlCard";
import "./UrlContainer.css";

const UrlContainer = ({ urls }) => {
  console.log("2", urls);
  const urlEls = urls.map((url) => {
    return (
      <UrlCard
        title={url.title}
        shortUrl={url.short_url}
        longUrl={url.long_url}
        id={url.id}
        key={url.id}
      />
    );
  });

  return (
    <section>
      {urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p>}
    </section>
  );
};

export default UrlContainer;
