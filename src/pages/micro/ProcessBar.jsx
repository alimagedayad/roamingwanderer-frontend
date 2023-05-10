import React, { useCallback } from "react";
import styled from "styled-components";

const ProgressBar = ({ percentage }) => {
  const colorIndicator = useCallback(() => {
    if (percentage <= 50) {
      return "red";
    } else if (percentage <= 70) {
      return "yellow";
    } else {
      return "#4caf50";
    }
  }, [percentage]);
  return (
    <ProgressBarContainer>
      <Progress percentage={percentage} barColor={colorIndicator} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;

const ProgressBarContainer = styled.div`
  height: 20px;
  width: 100px;
  background-color: #ddd;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
`;

const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.percentage}%;
  background-color: ${(props) => props.barColor};
  border-radius: 10px;
`;
