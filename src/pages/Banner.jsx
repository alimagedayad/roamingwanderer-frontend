import React from "react";
import styled from "styled-components";
import BrandInfo from "./micro/BrandInfo";
import { AVATAR } from "../constants/datas";

const Banner = () => {
  return (
    <Container className="flex flex-col w-full ">
      <img
        style={{ height: "100%", width: "100%", objectFit: "resize" }}
        src={"/images/landing_background.jpeg"}
        alt="logo"
      ></img>
      <BrandInfo />
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  height: 400px;
`;

const StyledDiv = styled.div`
  max-height: 0;
  z-index: 1;
  left: 50px;
  bottom: 0;
  right: 0;
`;

const InnerDiv = styled.div`
  position: relative;
  height: 30px;
  width: 30px;
`;

const InvertedArrowDiv = styled.div`
  width: 25px;
  height: 25px;
`;

const InvertedarrowSvg = styled.svg`
  width: 25px;
  height: 25px;
  fill: white;
`;
