import React from 'react'
import { Box} from '@mui/material'
import styled from '@emotion/styled'
import ButtonComponent from '../../atoms/button'


const StyledBox=styled(Box)`
  background-color: #000000;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
`

const ButtonContainer = styled(Box)`
  display: flex;
  gap: 50px;
  margin-right: 100px;
  
`;


const Header = () => {
  return (
    <StyledBox>
      <ButtonContainer>
        <ButtonComponent label='about me' color='primary' variant='contained'/>
        <ButtonComponent label='my journey' color='primary' variant='contained'/>
        <ButtonComponent label='contact me' color='primary' variant='contained'/>
        <ButtonComponent label='hire me'  color='primary' variant='contained'/>
      </ButtonContainer>
    </StyledBox>
  )
}

export default Header