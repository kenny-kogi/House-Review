import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import styled from "styled-components";
import ReviewForm from "./ReviewForm";

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
    e.preventDefaut();
  };

  const handleSubmit = (e) => {
    e.preventDefaut();
  };

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

              <div className="reviews"></div>
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={house.data.attributes}
              review={review}
            />
          </Column>
        </>
      )}
    </Wrapper>
  );
};

export default House;
