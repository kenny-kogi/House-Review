import React from "react";

const ReviewForm = (props) => {
  return (
    <div className="wrapper">
      <form onSubmit={props.handleSubmit}>
        <div>
          Have an experience with {props.attributes.name} Share your review?
        </div>
        <div className="field">
          <input
            type="text"
            name="title"
            placeholder="Review Title"
            onChange={props.handleChange}
            value={props.review.title}
          />
        </div>
        <div className="field">
          <input
            type="text"
            name="description"
            placeholder="Review Description"
            onChange={props.handleChange}
            value={props.review.description}
          />
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">Rate this line</div>
            Star Rating Goes Here
          </div>
        </div>
        <button type="submit">Submit your Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
