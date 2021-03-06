import React, { useEffect, useState } from "react";
import axios from "axios";
import House from "./House";
import styled from "styled-components";
import Navbar from "./Navbar";
import Image from "./Image";

const Home = styled.div`
  text-align: center;
  max-width: 1200ps;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
`;

// const Header = styled.div`
//   padding: 100px 100px 10px 100px;

//   h1 {
//     font-size: 42px;
//   }
// `;

// const Subheader = styled.div`
//   font-weight: 300;
//   font-size: 26px;
// `;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`;

const Houses = () => {
  const [house, setHouse] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/houses")
      .then((resp) => {
        const houses = resp.data.data;
        console.log(resp.data.data);

        setHouse(houses);
      })
      .catch((err) => console.error(err));
  }, [house.length]);

  const grid = house.map((item) => {
    return <House key={item.attributes.name} attributes={item.attributes} />;
  });

  return (
    <>
      <Navbar />
      <Image />
      <Home>
        {/* <Header>
          <h1>Open Houses</h1>
          <Subheader>Honest, unbiased house Review</Subheader>
        </Header> */}
        <Grid>{grid}</Grid>
      </Home>
    </>
  );
};

export default Houses;
