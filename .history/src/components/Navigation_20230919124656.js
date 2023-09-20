import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  overflow: hidden;
`;

const NavLink = styled.a`
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
  @media screen and (max-width: 600px) {
    display: block;
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
  }
`;

const NavItems = styled.div`
  @media screen and (max-width: 600px) {
    display: ${(props) => (props.open ? "block" : "none")};
    width: 100%;
    text-align: center;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <BurgerIcon onClick={() => setIsOpen(!isOpen)}>☰</BurgerIcon>
      <NavItems open={isOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="#">Contact</NavLink>
      </NavItems>
    </Nav>
  );
};

export default Navigation;