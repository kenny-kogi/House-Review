import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import styled from "styled-components";
import ReviewForm from "./ReviewForm";
import Review from "./Review";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`;

const Main = styled.div`
  padding-left: 50px;
`;

const House = (props) => {
  const [house, setHouse] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const slug = props.match.params.slug;
    const url = `/api/v1/houses/${slug}`;

    axios
      .get(url)
      .then((resp) => {
        setHouse(resp.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setReview(
      Object.assign({}, { ...review, [e.target.name]: e.target.value })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    const house_id = house.data.id;
    console.log(house_id);
    axios
      .post("/api/v1/reviews", { review, house_id })
      .then((resp) => {
        const included = [...house.included, resp.data.data];
        setHouse({ ...house, included });
        setReview({ title: "", description: "", score: 0 });
      })
      .catch((err) => console.log(err));
  };

  const setRating = (score, e) => {
    e.preventDefault();
    setReview({ ...review, score });
  };

  let reviews;
  if (loaded && house.included) {
    reviews = house.included.map((item, index) => {
      return <Review key={index} attributes={item.attributes} />;
    });
  }

  return (
    <Wrapper>
      {loaded && (
        <>
          <Column>
            <Main>
              <Header
                attributes={house.data.attributes}
                reviews={house.included}
              />

              <div className="reviews">{reviews}</div>
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={house.data.attributes}
              review={review}
              setRating={setRating}
            />
          </Column>
        </>
      )}
    </Wrapper>
  );
};

export default House;
