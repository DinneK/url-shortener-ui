const getUrls = () => {
  return fetch("http://localhost:3001/api/v1/urls").then((response) => {
    console.log({ response });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  });
};

const postUrl = (newUrl) => {
  return fetch(`http://localhost:3001/api/v1/urls`, {
    method: "POST",
    body: JSON.stringify(newUrl),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      console.log("Ooof, you made an error in the network request");
    } else {
      return response.json;
    }
  });
};

export { getUrls, postUrl };
