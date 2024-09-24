import React from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
  background: #f7f3ed;
  width: 100%;
  background: ${({ backgroundColor }) => backgroundColor || "transparent"};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 130px;
  @media (max-width: 900px) {
    margin: 0 16px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  line-height: 60px;
  color: #002a48;
  margin-top: 35px;
  font-family: "SVN-Gilroy", sans-serif;
  @media (max-width: 400px) {
    font-size: 30px;
  }
`;

const Subtitle = styled.h2`
  color: #002a48;
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  font-family: "SVN-Gilroy", sans-serif;
  @media (max-width: 400px) {
    font-size: 20px;
  }
  
`;

const Description = styled.p`
  font-size: 12px;
  color: #242b33;
  margin-bottom: 20px;
  font-weight: 500;
  line-height: 18px;
  font-family: "SVN-Gilroy", sans-serif;
  text-align: left;
  max-width: 360px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 70px;
`;

const Image = styled.img`
  max-width: 414px;
  width: 100%;
  @media (min-width:640px) {
    display: none;
  }
`;

const Banner = ({
  title,
  subtitle,
  description,
  viewIntroText,
  exploreNowText,
  onViewIntroClick,
  onExploreNowClick,
  imageUrl,
  altText,
  backgroundColor,
  buttonBackgroundColor,
}) => {
  return (
    <>
      <Container backgroundColor={backgroundColor}>
        <TextContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Description>{description}</Description>
          <ButtonContainer>
            <CustomButton onClick={onViewIntroClick}>
              {viewIntroText}
            </CustomButton>
            <CustomButton
              onClick={onExploreNowClick}
              buttonBackgroundColor={buttonBackgroundColor}
            >
              {exploreNowText}
            </CustomButton>
          </ButtonContainer>
        </TextContainer>
        <Image src={imageUrl} alt={altText} />
        
      </Container>
    </>
  );
};

export default Banner;
