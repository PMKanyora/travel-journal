import React from 'react'
import styled from 'styled-components'
import Logo from '../images/airbnb.png';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 0 3px 7.5px rgba(0, 0, 0, 0.1);
  
 `
const Nav = styled.div`
  img {
    width: 60px;
    height: 60px;
    margin-left: 45px;
    margin-top: 10px;
    margin-bottom: 15px;
  }
` 

export default function Navbar() {
  return (
   <Wrapper>
      <Nav>
        <img src={Logo} alt='logo' />
      </Nav>
   </Wrapper>
  )
}
