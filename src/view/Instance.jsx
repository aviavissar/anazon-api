import React from 'react';
import styled from 'styled-components/macro';
import media from "styled-media-query";
import Step from './Step';


const Instance = ({ instances }) => {
 
  return (
    <Container>
      <Namewrap><h3>{instances.team_name}</h3></Namewrap>
      {
        instances.steps.map((step, indx) => <Step step={step} key={'step' + indx} />)
      }
    </Container>
  );
}

export default Instance;


const Container = styled.div`
  display:flex;
  background: #fffbfbe8;
  padding:20px;
  margin:15px;
  height: 31vh;
  scroll-behavior: smooth;
  overflow-x: scroll;
  ${media.lessThan("small")`
    margin: 10px;
    padding: 0px;
    height: 18vh;
  `}
`;

const Namewrap = styled.div`
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align:left;
  width:200px;
  padding:10px;
  min-width: 210px;
  margin: 12px;
  ${media.lessThan("small")`
    padding:5px;
    min-width: 118px;
    margin:5px;
  `}
`;
