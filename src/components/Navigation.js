import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { NavLink as RouterLink } from "react-router-dom";
import {
  AiOutlineFilePdf,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineUser,
  AiOutlineAppstore,
  AiOutlineFundProjectionScreen,
  AiOutlineDeploymentUnit
} from "react-icons/ai";

const sections = [
  { id: "about", name: "About", icon: <AiOutlineUser /> },
  { id: "work", name: "My Work", icon: <AiOutlineAppstore /> },
  {
    id: "experiences",
    name: "Experiences",
    icon: <AiOutlineFundProjectionScreen />,
  },
  { id: "mycv", name: "CV", icon: <AiOutlineFilePdf /> },
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
  }
];

/* -----------------------------
  COMPONENT
-------------------------------- */
const Navigation = () => {
  return (
    <>
      {/* Desktop Top Pill Nav */}
      <TopNav>
        <TopWrap>
          <Brand>Jay Yasay</Brand>

          <TopNavItems>
            {sections.map((s) => (
              <TopLink
                key={s.id}
                to={s.id}
                smooth
                spy
                offset={-110}
                duration={450}
                activeClass="active"
              >
                {s.name}
              </TopLink>
            ))}
            <SystemDesignLink to="/design-system">Design System</SystemDesignLink>
          </TopNavItems>


          <SocialIcons>
            <SocialUL>
              {socialMedia.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </SocialUL>
          </SocialIcons>
        </TopWrap>
      </TopNav>

      {/* Mobile Bottom Dock */}
      <BottomDockSpacer />
      <DockWrap>
        <Dock role="navigation" aria-label="Primary">
          {sections.map((s) => (
            <DockLink
              key={s.id}
              to={s.id}
              smooth
              spy
              offset={-90}
              duration={450}
              activeClass="active"
            >
              <DockIcon aria-hidden="true">{s.icon}</DockIcon>
              <DockLabel>{s.name}</DockLabel>
              <ActiveDot className="dot" aria-hidden="true" />
            </DockLink>
          ))}

          <SystemDesignDockLink to="/design-system">
            <DockIcon aria-hidden="true">
              <AiOutlineDeploymentUnit />
            </DockIcon>
            <DockLabel>System</DockLabel>
          </SystemDesignDockLink>
        </Dock>
      </DockWrap>
    </>
  );
};

export default Navigation;

const DockIcon = styled.span`
  width: 34px;
  height: 34px;
  border-radius: 999px;

  display: grid;
  place-items: center;

  font-size: 18px;
  background: transparent;
  transition: background 160ms ease;
`;

const DockLabel = styled.span`
  margin-top: 2px;
  font-size: 10.5px;
  line-height: 1;
  letter-spacing: 0.2px;
  opacity: 0.9;
  color: currentColor;
`;

const TopNav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 50;
  display: none;

  @media (min-width: 768px) {
    display: block;
    top: 14px;
    margin: auto;
  }
`;

const TopWrap = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  height: 56px;
  padding: 8px 10px;

  display: flex;
  align-items: center;
  gap: 16px;

  border-radius: 32px;

  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow:
    0 10px 30px rgba(15, 23, 42, 0.08),
    0 1px 0 rgba(255, 255, 255, 0.7) inset;
`;

const Brand = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -1.5px;
  background: linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 45%, #0f172a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding: 0 10px;
  white-space: nowrap;
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
`;

const TopNavItems = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const TopLink = styled(ScrollLink)`
  cursor: pointer;
  text-decoration: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: #4b5563;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;

  border-radius: 999px;
  padding: 10px 14px;

  transition:
    background 160ms ease,
    color 160ms ease,
    transform 160ms ease,
    box-shadow 160ms ease;

  &:hover {
    background: rgba(15, 23, 42, 0.05);
    color: #111827;
  }

  &:active {
    transform: scale(0.98);
  }

  &.active {
    background: #ffffff;
    color: #111827;
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
  }
`;

const SocialIcons = styled.div`
  margin-left: auto;
  display: flex;
`;

const SocialUL = styled.ul`
  display: flex;
  list-style: none;
  gap: 12px;
  margin: 0;
  padding: 0;
  align-items: center;

  & * {
    color: #4b5563;
    font-size: 1.35rem;
  }

  & li a {
    display: flex;
    padding: 8px;
    border-radius: 999px;
    transition:
      background 160ms ease,
      transform 160ms ease,
      color 160ms ease;
  }

  & li a:hover {
    background: rgba(15, 23, 42, 0.05);
  }

  & li a:hover * {
    color: #111827;
  }

  & li a:active {
    transform: scale(0.98);
  }
`;

const BottomDockSpacer = styled.div`
  display: none;
  height: calc(84px + env(safe-area-inset-bottom));

  @media (min-width: 768px) {
    height: 0;
  }
`;

const DockWrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 60;

  padding: 14px 14px calc(14px + env(safe-area-inset-bottom));
  display: flex;
  justify-content: center;

  pointer-events: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

const SystemDesignLink = styled(RouterLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 16px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
  box-shadow:
    0 8px 20px rgba(15, 23, 42, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    opacity 160ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow:
      0 12px 24px rgba(15, 23, 42, 0.22),
      inset 0 1px 0 rgba(255, 255, 255, 0.14);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const SystemDesignDockLink = styled(RouterLink)`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 999px;
  text-decoration: none;
  color: #ffffff;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
  box-shadow:
    0 8px 18px rgba(15, 23, 42, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);

  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    opacity 160ms ease;

  &:active {
    transform: scale(0.98);
  }

  ${DockIcon} {
    background: rgba(255, 255, 255, 0.12);
  }

  ${DockLabel} {
    opacity: 1;
  }
`;

const Dock = styled.div`
  pointer-events: auto;

  width: min(520px, calc(100vw - 28px));
  height: 64px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;

  padding: 8px;
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow:
    0 10px 30px rgba(15, 23, 42, 0.1),
    0 1px 0 rgba(255, 255, 255, 0.7) inset;
`;

const ActiveDot = styled.span`
  position: absolute;
  bottom: -6px;

  width: 4px;
  height: 4px;
  border-radius: 999px;

  background: #111827;
  box-shadow: 0 0 0 4px rgba(15, 23, 42, 0.08);

  opacity: 0;
  transform: translateY(2px);
  transition:
    opacity 160ms ease,
    transform 160ms ease;
`;

const DockLink = styled(ScrollLink)`
  position: relative;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 999px;
  text-decoration: none;

  color: #6b7280;
  transition:
    background 160ms ease,
    transform 160ms ease,
    color 160ms ease;

  &:hover {
    background: rgba(15, 23, 42, 0.05);
  }

  &:active {
    transform: scale(0.98);
  }

  &.active {
    color: #111827;
  }

  &.active ${DockIcon} {
    background: rgba(15, 23, 42, 0.06);
  }

  &.active ${ActiveDot} {
    opacity: 1;
    transform: translateY(0);
  }
`;
