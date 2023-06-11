import { Box, styled } from '@mui/material'
import React from 'react'
import HomePage from './typingEffect';

const BodyContainer = styled(Box)`
  background-color: black;
  color: white;
  width: 100%;
  height:1000px;
  display: flex;
`;

const HomeDescription=styled(Box)`
  margin-top: 100px;
  margin-left:200px;
  font-size: 50px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;




const Body = () => {
  return (
    <BodyContainer>
        <HomeDescription>
        
        <HomePage/>
        </HomeDescription>
        
    </BodyContainer>
  )
}

export default Body