import React from "react";
import styled from "styled-components";
import Gray from "./Stars/Gray";
import Hover from "./Stars/Hover";
import Selected from "./Stars/Selected";

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 10px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  background: #fff;
`;

const RatingBox = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}");
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}");
  }
`;

//The review Form Component
const ReviewForm = (props) => {
  //The star rating function
  const options_array = [1, 2, 3, 4, 5].map((score, index) => {
    return (
      <>
        <input
          type="radio"
          name="rating"
          value={score}
          onChange={() => console.log(score)}
          id={`rating-${score}`}
        />
        <label></label>
      </>
    );
  });
  return (
    <div className="wrapper">
      <form onSubmit={props.handleSubmit}>
        <div>
          Have an experience with {props.attributes.name} Share your review?
        </div>
        <div className="field">
          <input
            onChange={props.handleChange}
            value={props.review.title}
            type="text"
            name="title"
            placeholder="Review Title"
          />
        </div>
        <div className="field">
          <input
            onChange={props.handleChange}
            value={props.review.description}
            type="text"
            name="description"
            placeholder="Review Description"
          />
        </div>
        <div className="field">
          <RatingContainer>
            <div className="rating-title-text">Rate this line</div>
            <RatingBox>{options_array}</RatingBox>
          </RatingContainer>
        </div>
        <button type="submit">Submit your Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
