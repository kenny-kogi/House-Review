import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "../Rating/Rating";
//Styling for the Airline Component
const Card = styled.div`
  border: 1px solid #efefef;
  background: grey;
  text-align: center;
  border-radius: 2 0px;
`;
const HouseLogo = styled.div`
  width: 50px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`;
const HouseName = styled.div`
  padding: 20px 0 10px 0;
`;

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background: #000;
    border-radius: 40px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`;

const House = ({ attributes }) => {
  return (
    <Card>
      <HouseLogo>
        <img src={attributes.image_url} alt={attributes.name} />
      </HouseLogo>
      <HouseName>{attributes.name}</HouseName>
      <Rating score={attributes.avg_score} />
      <LinkWrapper>
        <Link to={`/house/${attributes.slug}`}>View House</Link>
      </LinkWrapper>
    </Card>
  );
};

export default House;
