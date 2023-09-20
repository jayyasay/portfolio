import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: #23242c;
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
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: white;
  text-align: center;
  text-decoration: none;
  justify-content: center;

  @media screen and (min-width: 768px) {
    height: 100%;
    padding: 0 20px;
    &:hover {
      background-color: #ddd;
      color: black;
    }
  }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-height: ${(props) =>
      props.open
        ? "100vh"
        : "0"};
    transition: max-height 0.2s ease-in-out;
    text-align: center;
    height: calc(100vh - 72.81px);
    background-color: #33363D;
    position: absolute;
    top: 72.81px;
    left: 0;
    overflow: hidden;
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    margin-left: auto;
    display: flex;
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
          <StyledLink to="/" onClick={() => setIsOpen(!isOpen)}>
            Home
          </StyledLink>
          <StyledLink to="/about" onClick={() => setIsOpen(!isOpen)}>
            About
          </StyledLink>
          <StyledLink to="#" onClick={() => setIsOpen(!isOpen)}>
            Contact
          </StyledLink>
        </NavItems>
      </Wrapper>
    </Nav>
  );
};

export default Navigation;
