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
        display: flex;
        flex-direction: row;
        width: 90%;
        margin: auto;
    }
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: white;
  text-align: center;
  height: 100%;
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
    max-height: ${(props) => (props.open ? "auto" : "0")}; // 500px is an example. Adjust it based on your content.
    transition: max-height 1s ease-in-out;
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
                <StyledLink to="/" onClick={() => setIsOpen(!isOpen)}>Home</StyledLink>
                <StyledLink to="/about" onClick={() => setIsOpen(!isOpen)}>About</StyledLink>
                <StyledLink to="#" onClick={() => setIsOpen(!isOpen)}>Contact</StyledLink>
            </NavItems>
        </Wrapper>
    </Nav>
  );
};

export default Navigation;