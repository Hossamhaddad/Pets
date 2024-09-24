import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 10px;
  box-sizing: border-box;
  place-items: center;
  justify-content: center;
  background-color: #fdfdfd;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 17px;
  & h2 {
    font-family: "SVN-Gilroy", sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    text-align: left;
    color: #003459;
  }
`;

function CardsContainer({ cards }) {
  return (
    <>
      <TitleContainer>
        <p>Whats new?</p>
        <h2>Take a look at some of our pets</h2>
      </TitleContainer>
      <CardContainer>
        {cards.map((cardInfo) => (
          <Card cardInfo={cardInfo} />
        ))}
      </CardContainer>
    </>
  );
}

export default CardsContainer;
