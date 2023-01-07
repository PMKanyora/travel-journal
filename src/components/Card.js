import React from 'react'
import styled from 'styled-components'
// import Katie from "../images/KatieV2.jpeg"
import Star from "../images/star.png"

const Wrapper = styled.div`
    width: 100%;
    font-size: 18px;
    position: relative;
    padding-bottom: "20px"

    `
const Photo = styled.div`
     img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 5px;
     }
     border-radius: 5px;
`
const Details = styled.div`
    img {
        height: 18px;
    }
`
const Description = styled.p`
    width: 175px;
`
const Rate = styled.p``
const Badge = styled.div`
    position: absolute;
    top: 6px;
    left: 6px;
    padding: 5px 7px;
    background-color: white;
    font-weight: bold;
    border-radius: 5px;
    font-size: 12px;

`

export default function Card(props) {
    // console.log({props.item.openSpots});
    console.log(props);
  return (
    <Wrapper>
        {props.openSpots === 0 && <Badge>
            SOLD OUT
        </Badge>}
        <Photo>
            <img src={props.coverImg} alt="Katie" />
        </Photo>
        <Details>
            <img src={Star} alt="star" />
            <span>{props.stats.rating}</span>
            <span style={{color:'gray'}}>({props.stats.reviewCount}) .</span>
            <span style={{color:'gray'}}>{props.location}</span>
        </Details>
        <Description>
            {props.title}
        </Description>
        <Rate>
            <span style={{fontWeight:'700'}}>From ${props.price}</span> / person
        </Rate>
    </Wrapper>
  )
}
