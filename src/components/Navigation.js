import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import {
  AiOutlineFilePdf,
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

const Nav = styled.nav`
  background-color: #23242c;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: 0 3px 45px -20px #fff;
  z-index: 2;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 1024px;
    margin: auto;
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: white;
  text-align: center;
  text-decoration: none;
  justify-content: center;
  background-color: ${({ isActive }) =>
    isActive ? "#ddd" : "transparent"}; // Change colors as needed
  transition: background-color 0.3s ease;

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
    max-height: ${(props) => (props.open ? "100vh" : "0")};
    transition: max-height 0.2s ease-in-out;
    text-align: center;
    height: calc(100vh - 72.81px);
    background-color: #33363d;
    position: absolute;
    top: 72.81px;
    left: 0;
    overflow: hidden;
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    margin: auto;
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
  }
`;

const SocialIcons = styled.div`
  margin-left: auto;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const SocialUL = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 20px;
  margin: auto;
  align-items: center;

  & * {
    color: #fff;
    font-size: 1.5rem;
  }

  & li {
    position: relative;
  }

  & li a {
    position: relative;
    display: flex;
    transition: all 0.3s ease-in-out;
  }

  & li a:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0); /* Center and hide */
    z-index: -1;
    content: "";
    width: calc(100% + 24px); /* Adjust width as needed */
    height: calc(100% + 24px); /* Adjust height as needed */
    background-color: rgba(255, 255, 255, 0.1);
    transition: transform 0.2s ease-in-out;
    overflow: visible;
    border-radius: 50%;
  }

  & li a:hover:after {
    transform: translate(-50%, -50%) scale(1); /* Expand to full size */
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const styleIcons = { marginLeft: "10px" };

  const sections = [
    { id: "about", name: "About" },
    { id: "experiences", name: "Experiences" },
    { id: "portfolio", name: "My Work" },
    {
      id: "mycv",
      name: "View my CV",
      icon: <AiOutlineFilePdf style={styleIcons} />,
    },
  ];

  const socialMedia = [
    {
      name: "GitHub",
      url: "https://github.com/jayyasay",
      icon: <AiFillGithub />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jayyasay/",
      icon: <AiFillLinkedin />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/jayyasay",
      icon: <AiFillFacebook />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/jayyasay",
      icon: <AiOutlineInstagram />,
    },
  ];

  return (
    <Nav>
      <Wrapper>
        <h1>Jay Yasay</h1>
        <BurgerIcon onClick={() => setIsOpen(!isOpen)}>☰</BurgerIcon>
        <NavItems open={isOpen}>
          {sections.map((section) => (
            <StyledLink
              key={section.id}
              activeClass="active"
              smooth
              spy
              offset={-100}
              to={section.id}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {section.name} {section.icon && section.icon}
            </StyledLink>
          ))}
        </NavItems>
        <SocialIcons>
          <SocialUL>
            {socialMedia.map((social) => (
              <li key={social.name}>
                <a href={social.url} target="_blank">
                  {social.icon}
                </a>
              </li>
            ))}
          </SocialUL>
        </SocialIcons>
      </Wrapper>
    </Nav>
  );
};

export default Navigation;
