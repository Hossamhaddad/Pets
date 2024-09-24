import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  padding: 8px;
  background-color: #fdfdfd;
  height: 317px;
  width: 180px;
  box-shadow: 0px 4px 28px -2px #00000014;
  justify-content: space-between;
`;

const CardImage=styled.div`
    background-image: url(${props => props.bgImage});
    background-repeat: no-repeat;
    background-size:cover;
    height: 180px;
    border-radius: 12px;
    width: 100%;
`

const CardDot = styled.div`
  display: none;
  background-color: #667479;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  @media (min-width: 600px) {
    display: block;
  }
`;
const CardTitle = styled.p`
  font-family: "SVN-Gilroy", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  margin-bottom: 4px;
  padding-right: 20px;
  margin-top: 12px;
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #667479;
  margin-bottom: 8px;
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  & p {
    font-family: "SVN-Gilroy", sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
    margin-bottom: 4px;
  }

  & span {
    font-family: "SVN-Gilroy", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
  }
`;

const CardPrice = styled.p`
  font-family: "SVN-Gilroy", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  margin-bottom: 12px;
`;

function Card({ cardInfo }) {
  return (
    <CardContainer>
      <CardImage bgImage={cardInfo.img} />
      <CardTitle>{cardInfo.title}</CardTitle>
      <CardInfo>
        <p>
          Gene:
          <span>{cardInfo.gender}</span>
        </p>

        <CardDot>.</CardDot>
        <p>
          Age:
          <span>{cardInfo.age}</span>
        </p>
      </CardInfo>
      <CardPrice>{cardInfo.price}</CardPrice>
    </CardContainer>
  );
}

export default Card;
