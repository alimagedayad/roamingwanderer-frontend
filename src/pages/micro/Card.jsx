/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import styled from "styled-components";
import capitalizeFirstLetter from "../../utils.js/capitalizeFirstLetter";

const Card = ({city, days, batch, setCity}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseDown = () => {
    setIsOpen(true);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const { flag } = city;
  return (
    <>
      <Item
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onClick={() => {
          setCity(city);
        }}
      >
        <img
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 20,
            objectFit: "cover",
          }}
          src={flag}
        ></img>

        <ImageOverlay
          backgroundColor={`rgba(0, 0, 0, ${isHovered ? 0.7 : 0.25})`}
        />

        <>
          {isHovered ? (
            <HoveredItem
              income={city.income_level}
              live={city.live_cost}
              rent={city.rent_price}
              batch={batch} 
              days={days}
            />
          ) : (
            <DefaultItem item={city} batch={batch} days={days} />
          )}
        </>
      </Item>
    </>
  );
};

export default Card;

const HoveredItem = ({income=1, live, rent, batch, days = 1}) => {
  return (
    <HoveredItemContainer style={{
      marginTop: "100px",
    }}>
      <HoveredListItemWrapper>
          <HoveredListItemContainer>
            <AttributeNameWrapper>
              <P style={{ fontWeight: "100" }} fontSize={"20px"}>
                {"Food"}
              </P>
            </AttributeNameWrapper>
            <IncomeLevelContainer>
              <P style={{ fontWeight: "100" }} fontSize={"20px"}>
                {(days ? (income*days) : income)} USD
              </P>
            </IncomeLevelContainer>
          </HoveredListItemContainer>

          <HoveredListItemContainer>
            <AttributeNameWrapper>
              <P style={{ fontWeight: "100" }} fontSize={"20px"}>
                {"Airfare"}
              </P>
            </AttributeNameWrapper>
            <IncomeLevelContainer>
              <P style={{ fontWeight: "100" }} fontSize={"20px"}>
                {live} USD
              </P>
            </IncomeLevelContainer>
          </HoveredListItemContainer>

          <HoveredListItemContainer>
            <AttributeNameWrapper>
              <P style={{ fontWeight: "100" }} fontSize={"20px"}>
                {"Accomodation"}
              </P>
            </AttributeNameWrapper>
            <IncomeLevelContainer>
              <P style={{ fontWeight: "100" }} fontSize={"20px"}>
              {(days ? (rent*days) : rent)} USD
              </P>
            </IncomeLevelContainer>

          </HoveredListItemContainer>
      </HoveredListItemWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flex: 0.5,
          alignItems: "center",
        }}
      >
      </div>
    </HoveredItemContainer>
  );
};

const DefaultItem = ({ item, batch, days }) => {
  const { capital, name, happiness_level, total_cost_per_day, language } = item;
  return (
    <>
      <TopItem>
        <TopLeftItem>
          <P
            style={{ height: "3px", width: "100%", backgroundColor: "white" }}
          ></P>
        </TopLeftItem>
        <TopRightItemwrapper>
          <P fontSize={"12px"}>Speaks</P>
            <P fontSize={"16px"}>{capitalizeFirstLetter(language)}</P>
        </TopRightItemwrapper>
      </TopItem>
      <CenterItem>
        {capitalizeFirstLetter(capital)}
        <H1>{capitalizeFirstLetter(name)}</H1>
      </CenterItem>
      <BottomItem>
        <BottomLeft>
          <BottomLeftTemperature>
            <P fontSize={"16px"} textAlign={"center"}>
              Happiness Level
            </P>
          </BottomLeftTemperature>
          <Smiley>{happiness_level == "great" ? "🤩" : happiness_level == "good" ? "😃" : "😞"}</Smiley>
        </BottomLeft>
        {
          batch ? <BottomRight>{total_cost_per_day * days} USD / {days} days</BottomRight>
          : <BottomRight>{total_cost_per_day} USD/day</BottomRight>
        }
      </BottomItem>
    </>
  );
};
const Item = styled.div`
  position: relative;
  height: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 350px;
  border-radius: 20px;
`;
const TopItem = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 10px;
  bottom: 0;
  left: 20px;
  right: 20px;
`;

const TopLeftItem = styled.p`
  font-weight: 500;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 24px;
  text-align: center;
`;

const TopRightItemwrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InternetSpeed = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: white;
  font-size: 24px;
  padding-left: 5px;
`;

const CenterItem = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 20px;
  right: 20px;
  font-weight: var(--bold);
  color: white;
  font-size: 24px;
`;
const WifiIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 30px;
  justify-content: center;
`;
const H1 = styled.h1`
  font-weight: var(--bold);
  color: white;
  font-size: 16px;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor || rgba(0, 0, 0, 0.27)};
  border-radius: 20px;
`;

const BottomItem = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 10;
  bottom: 10px;
  left: 20px;
  right: 20px;
`;

const BottomLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  color: white;
  font-size: 24px;
`;

const BottomRight = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: white;
  font-size: 22px;
`;

const BottomLeftTemperature = styled.div`
  flex-direction: column;
  padding-left: 10px;
`;
const P = styled.p`
  color: ${(props) => props.color || "white"};
  font-size: ${(props) => props.fontSize || "8px"};
  text-align: ${(props) => props.textAlign || "center"};
`;

const AQI = styled.div`
  flex-direction: column;
  padding-left: 10px;
`;

const Smiley = styled.span`
  padding: 0px 5px;
`;

const HoveredItemContainer = styled.div`
  display: flex;
  position: absolute;
  flex: 1;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const HoveredListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justifycontent: center;
`;

const HoveredListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
`;
const AttributeNameWrapper = styled.div`
  display: flex;
  flex: 0.5;
`;

const FavourtieIconWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const OneLineParagraph = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
  width: calc(60% - 14px);
`;

const IncomeLevelContainer = styled.div`
  height: 20px;
  width: 100px;
  display: flex;
`;
