import { React, useState } from "react";
import styled from "styled-components";
import dog from "../assets/dog.png";
import mobile from "../assets/mobil.png";
import burger from "../assets/Hamburger_MD.svg";
import logo from "../assets/Frame.svg";
import desktop from "../assets/desktop.png";
import countries from "../constants/countryList";
import { Search } from "react-feather";
import Banner from "./Banner";
import CustomButton from "./CustomButton";
import { Select, MenuItem } from "@mui/material";
import { ChevronDown } from "react-feather";

const Burger = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const SelectCurrency = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;
const Currency = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 21px;
  height: 21px;
`;

const DesktopLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #003459;
  font-family: "SVN-Gilroy", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  margin: 0 130px;
  align-items: center;
  & li {
    list-style-type: none;
    display: inline;
  }
  & ul {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    width: 41%;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
const MobileLogoContainer = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  @media (min-width: 800px) {
    display: none;
  }
`;

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-size: cover;
  background-repeat: no-repeat;
  height: fit-content;
  padding: 20px 10px 0px 10px;
  border-radius: 0px 0px 20px 20px;
  background-image: url(${mobile});
  @media (min-width: 630px) {
    background-image: url(${desktop});
  }
`;

export default function Header() {
  const [selectedCountry, setSelectedCountry] = useState("VN");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  console.log(selectedCountry);

  return (
    <NavbarContainer>
      <MobileLogoContainer>
        <Burger>
          <img src={burger} alt="" />
        </Burger>
        <img src={logo} alt="" />
        <Search />
      </MobileLogoContainer>
      <DesktopLogoContainer>
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Category</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <CustomButton buttonBackgroundColor="#003459">
          Join the community
        </CustomButton>

        <SelectCurrency>
          <Currency
            imageUrl={`https://flagcdn.com/w40/${selectedCountry?.toLowerCase()}.png`}
          />
          <Select
            labelId="country-select-label"
            id="country-select"
            value={selectedCountry}
            label="Select Country"
            onChange={handleChange}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiSelect-icon": {
                color: "black",
                top: "15px",
                width: "14px",
              },
            }}
            IconComponent={ChevronDown}
          >
            {countries.map((country) => (
              <MenuItem key={country.value} value={country.value}>
                {country.currency}
              </MenuItem>
            ))}
          </Select>
        </SelectCurrency>
      </DesktopLogoContainer>
      <Banner
        title="One More Friend"
        subtitle="Thousands More Fun!"
        description="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
        viewIntroText="View Intro"
        exploreNowText="Explore Now"
        imageUrl={dog}
        altText="Person holding a dog"
        borderRadius="10px"
        buttonBackgroundColor="#003366"
      />
    </NavbarContainer>
  );
}
