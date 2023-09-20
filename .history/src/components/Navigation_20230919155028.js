import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: #333;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Wrapper = styled.div`
    @media screen and (min-width: 768px) {
        width: 1280px;
        margin: auto;
    }
`

const StyledLink = styled(Link)`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

const BurgerIcon = styled.span`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
  }
`;

const NavItems = styled.div`
  @media screen and (max-width: 767px) {
    overflow: hidden;
    display: block; // You can always keep it as block since we control visibility with max-height
    width: 100%;
    max-height: ${(props) => (props.open ? "500px" : "0")}; // 500px is an example. Adjust it based on your content.
    transition: max-height 0.3s ease-in-out;
    text-align: center;
  }
  
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`;


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
        <Wrapper>
            <h1>Jay Yasay</h1>
            <BurgerIcon onClick={() => setIsOpen(!isOpen)}>☰</BurgerIcon>
            <NavItems open={isOpen}>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="#">Contact</StyledLink>
            </NavItems>
        </Wrapper>
    </Nav>
  );
};

export default Navigation;