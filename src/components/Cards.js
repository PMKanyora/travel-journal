import React from 'react'
import styled from 'styled-components'
import Icon1 from '../images/location1.png'

const Wrapper = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    padding: 30px 50px;
`
const Photo = styled.div`
    img {
        border-radius: 7px;
        height: 250px;
        width: 300px;
    }
`
const Map = styled.div`
    display: flex;
    align-items: center;
`
const Icon = styled.div`
    display: flex;
    align-items: baseline;
    img {
        width: 20px;
        height: 20px;
    }
`
const Place = styled.h3`
    font-weight: 400;
    font-family: 'Inter';
    letter-spacing: 0.17em;
    color: #2B283A;
    font-style: normal;
`
const Link = styled.p`
   padding-left: 10px;
   text-align: center;
   text-decoration-line: underline;

`
const Location = styled.p`
    font-family: 'Inter';
    font-weight: 700;
    font-size: 30px;
    padding-bottom: 20px;
`
const Duration = styled.h4`
    font-size: 14px;
    font-family: 'Inter';
    color: #1b263b;
    line-height: 12px;
    font-family: 700;
    padding-bottom: 10px;
`
const Description = styled.p`
    font-family: 'Inter';
    line-height: 150%;
    color: #2B283A;
    font-size: 16px;
`
const Content = styled.div`
    padding-left: 20px;
`

 
export default function Cards(props) {
  return (
    <Wrapper>
        <Photo>
            <img src={props.photo} alt="Aberdere" />
        </Photo>
        <Content>
            <Map>
                <Icon>
                    <img src={Icon1} alt="location icon" />
                </Icon>
                <Place>{props.country}</Place>
                <Link>
                    <a href={props.link} target="_blank" rel="noopener noreferrer"
                    style={{textDecoration:'none', color:'black'}}>
                        View on google maps
                    </a>
                </Link>
            </Map>
            <Location>{props.location}</Location>
            <Duration>{props.duration}</Duration>
            <Description>{props.description}</Description>
        </Content>
        
    </Wrapper>
  )
}
