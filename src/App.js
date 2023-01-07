import React from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/globalStyles";
import Hero from "./components/Hero";
import Card from "./components/Card"
import styled from "styled-components";
// import pic1 from "./images/pic1.jpeg"
// import pic2 from "./images/pic2.jpeg"
// import pic3 from "./images/pic3.jpeg"
// import Katie from "./images/KatieV2.jpeg"
import Data from "./Data"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(1,1fr);
  justify-items: center;
  width: 100%;
  padding: 30px 150px;
  column-gap: 20px;
`

function App() {
  const cards = Data.map(item =>{
    return (
      <Card 
        key = {item.id}
              {...item}
        // item = {item}
        // image ={item.coverImg}
        // rate = {item.stats.rating}
        // country = {item.location}
        // amount = {item.price}
        // reviewCount = {item.stats.reviewCount}
        // title = {item.title}
        // openSpots = {item.openSpots}
      />
    )
  })
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Wrapper> 
        {cards}
      </Wrapper>
      
    </>
  );
} 

export default App;
