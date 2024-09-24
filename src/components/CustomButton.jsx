import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "SVN-Gilroy", sans-serif;
  color: ${({ buttonBackgroundColor }) =>
    buttonBackgroundColor ? "white" : "#003366"};
  padding: 14px 28px 10px 28px;
  border-radius: 57px;
  cursor: pointer;
  font-size: 14px;
  border: ${({ buttonBackgroundColor }) =>
    !buttonBackgroundColor && "1.5px solid #003366"};
  background-color: ${({ buttonBackgroundColor }) =>
    buttonBackgroundColor || "transparent"};
  &:hover {
    background-color: #005bb5;
  }
`;

function CustomButton({ onClick, children, buttonBackgroundColor }) {
  return (
    <StyledButton
      onClick={onClick}
      buttonBackgroundColor={buttonBackgroundColor}
    >
      {children}
    </StyledButton>
  );
}

export default CustomButton;
