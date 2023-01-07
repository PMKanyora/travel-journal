import React from 'react'
import styled from 'styled-components'
import Grid from '../images/grid.png'

const Wrapper = styled.div``
const Banner = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 0;
    img {
        width: 50%;
        height: 50%;
    }
`
const Text = styled.div`
    padding-left: 50px;
    font-family: "Nunito";
    text-align: center;
`
const Heading = styled.h1``
const Paragraph = styled.p`
    letter-spacing: 1px;
    font-weight: 500;
    text-align: center;
    font-size: 18px;
    align-self: center;
    width: 100%;
    padding-right: 100px;
`

export default function Hero() {
  return (
    <Wrapper>
        <Banner>
            <img src={Grid} alt="hero" />
        </Banner>
        <Text>
            <Heading>
                Online Experiences
            </Heading>
            <Paragraph>
                Join unique interactive activities led by one-of-a-kind hosts-all without
                leaving home. Travel is a new experience that can transport you out of your 
                everyday routine to create memories with the ones you love...
            </Paragraph>
        </Text>
    </Wrapper>
  )
}
