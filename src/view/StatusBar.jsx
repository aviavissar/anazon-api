import React from 'react';
import styled from 'styled-components/macro';
import media from "styled-media-query";
const StatusBar = () => {

  return (
    <StatusBarWrap className='container'>
      <div className='container'>
        <StatuseColor className='notStarted' />
        <StatuseText>"Not Started"</StatuseText>
      </div>
      <div className='container'>
        <StatuseColor className='inProgress' />
        <StatuseText>"In Progress"</StatuseText>
      </div>
      <div className='container'>
        <StatuseColor className='done' />
        <StatuseText>"Done"</StatuseText>
      </div>
    </StatusBarWrap>
  );
}

export default StatusBar;


const StatuseColor = styled.div`
    border-radius:50%;
    border:1px solid black;
    width:20px;
    height:20px;
    `;

const StatuseText = styled.span`
    font-size:14px;
    background-color: #fff;
    margin: 1px 10px 1px 3px;
    width: 90px;
    text-align:left;
    ${media.lessThan("small")`
    font-size: 13px;
    background-color: #fff;
    margin: 1px 10px 1px 3px;
    width: 81px;
  `}
  `;
const StatusBarWrap = styled.div`
   background-color: #ffffff;
   padding:2vh 0vw 2vh 4vw;
   ${media.lessThan("small")`
   padding: 3vh 0vw 1vh 13vw;
  `}
  `;