import React from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/globalStyles";
import Data from "./Data"
import styled from "styled-components";
// import Data from "./Data"

const Wrapper = styled.div``

function App() {
    const journal = Data.map((info) => {
      return (
        <Cards 
        key = {info.id}
        {...info}
        />
        
      )
    })
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Wrapper>
        {journal}
      </Wrapper>
    </>
  );
} 

export default App;
