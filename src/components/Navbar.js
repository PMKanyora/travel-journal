import React from 'react'
import styled from 'styled-components'
import GlobePic from '../images/glo.png'

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    background-color: #F55A5A;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Globe = styled.div`
   img {
    width: 40px;
    height: 40px;
   }
`
const Title = styled.h2`
   margin-left: 10px;
   color: #fff;
   font-family: 'Nunito';
`

export default function Navbar() {
  return (
    <Wrapper>
        <Globe>
            <img src={GlobePic} alt="globe" />
        </Globe>
        <Title>
            My Travel Journal
        </Title>
    </Wrapper>
  )
}
