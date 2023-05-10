import React from "react";
import styled from "styled-components";
import Emoji from "../../components/CommonComponents/Emoji";

const BrandInfo = ({ avatars }) => {
  const StyledBrandInfo = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-left: 20%;
    height: 50%;
    width: 60%;
    justify-content: center;
  `;

  const EmojiHeader = styled.div`
    display: flex;
    align-items: center;
  `;

  const BrandName = styled.h1`
    color: white;
    font-size: 40px;
    margin-left: 10px;
  `;

  const Description = styled.p`
    color: white;
    font-size: 25px;
    margin-top: 20px;
  `;

  const AvatarContainer = styled.div`
    display: flex;
    margin-top: 10px;
    flex-direction: row-reverse;
    margin-left: 0;
    justify-content: flex-end;
  `;

  const AvatarWrapper = styled.div`
    margin-right: -10px;
  `;

  return (
    <StyledBrandInfo>
      <EmojiHeader>
        <Emoji symbol="🚀" size="3em" />
        <BrandName>Travel the world</BrandName>
      </EmojiHeader>
      <Description>
        Join a global of nomads travelling and enjoying the world
      </Description>
    </StyledBrandInfo>
  );
};
   
const Avatar = ({ color }) => (
  <div
    style={{
      height: "30px",
      width: "30px",
      borderRadius: "50px",
      backgroundColor: color,
    }}
  ></div>
);

export default BrandInfo;
