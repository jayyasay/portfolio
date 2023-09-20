import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Heading = styled.h1`
    padding-left: 20px;
`

const Nav = styled.nav`
  background-color: #333;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Wrapper = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        width: 90%;
        margin: auto;
    }
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: white;
  text-align: center;
  height: 100%;
  text-decoration: none;
  &:hover {
    background-color: #ddd;
    color: black;
  }
  justify-content: center;
`;

const BurgerIcon = styled.span`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    right: 20px;
    top: 24px;
    cursor: pointer;
    color: #fff;
  }
`;

const NavItems = styled.div`
  @media screen and (max-width: 767px) {
    display: block; // You can always keep it as block since we control visibility with max-height
    width: 100%;
    max-height: ${(props) => (props.open ? "500px" : "0")}; // 500px is an example. Adjust it based on your content.
    transition: max-height 0.2s ease-in-out;
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
            <Heading>Jay Yasay</Heading>
            <BurgerIcon onClick={() => setIsOpen(!isOpen)}>☰</BurgerIcon>
            <NavItems open={isOpen}>
                <StyledLink to="/" onClick={() => setIsOpen(!isOpen)}>Home</StyledLink>
                <StyledLink to="/about" onClick={() => setIsOpen(!isOpen)}>About</StyledLink>
                <StyledLink to="#" onClick={() => setIsOpen(!isOpen)}>Contact</StyledLink>
            </NavItems>
        </Wrapper>
    </Nav>
  );
};

export default Navigation;