import React from "react";
import styled from "styled-components";
import Home from "../../../assets/images/keja.jpg";
const ImageView = styled.div`
  background-image: url(${Home});
  background-position: center;
  height: 700px;
  border-radius: 10px;

  h1 {
    color: white;
    padding-top: 300px;
    text-align: center;
  }
`;
const Image = () => {
  return (
    <ImageView>
      <h1>House Reviews</h1>
    </ImageView>
  );
};

export default Image;
