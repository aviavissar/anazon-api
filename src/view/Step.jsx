import React from 'react';
import styled from 'styled-components/macro';
import { notStarted, inProgress, done } from '../App.scss';
import media from "styled-media-query";

const Step = ({ step }) => {

  const { step_name, status } = step
  return (
    <StepContainer>
      <StepDiv type={status}>
        <span> {step_name}</span>
      </StepDiv>
    </StepContainer>
  );
}

export default Step;


const StepDiv = styled.div`
  border-radius:50%;
  border:3px solid black;
  padding: 7px;
  width: 100px;
  height: 100px;
  margin:10px;
  display:flex;
  justify-content:center;
  text-align:center;
  flex-direction:column;
  font-size: 13px;
  ${media.lessThan("small")`
    padding: 5px;
    width: 95px;
    height: 95px;
  `}
  span{
    width: 100%;
    word-break: break-word;
  }
    border-color:${props => (props.type === "in_progress" && inProgress) ||
    (props.type === "not_started" && notStarted) || (props.type === 'done' && done)
  }
`;

const StepContainer = styled.div`
  display:flex;
  justify-content: flex-start;
`;