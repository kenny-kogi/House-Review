import React, { useState, useEffect } from "react";
import axios from "axios";

const House = (props) => {
  const [house, setHouse] = useState({});
  const [review, setReview] = useState({});

  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `/api/v1/houses/${slug}`;

    axios
      .get(url)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }, []);
  return <div>Currently on the show#app</div>;
};

export default House;
