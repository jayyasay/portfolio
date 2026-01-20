import React from "react";
import styled from "styled-components";
import jay from "../assets/jay.jpg";
import GlobalStyle from "../components/GlobalStyle";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const H2 = styled(motion.h2)`
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const AboutWrapper = styled(motion.div)`
  @media screen and (min-width: 768px) {
    max-width: 1024px;
    margin: auto;
  }
`;

const MyPhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid #fff;
  object-fit: cover;
  padding: 4px;
`;

const InnerWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const ScrollButton = styled(Link)`
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &.dark {
    background-color: #2d3748;
    color: white;

    &:hover {
      background-color: #1a202c;
    }
  }

  &.light {
    background-color: #f7fafc;
    color: #2d3748;
    border: 1px solid #e2e8f0;

    &:hover {
      background-color: #edf2f7;
    }
  }
`;

const TextWrapper = styled.div``;

const headerVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.9 } },
};

const About = React.forwardRef((props, ref) => {
  return (
    <AboutWrapper ref={ref} id="about">
      <GlobalStyle />
      <H2
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        Frontend Developer (React/Next.js) + Shopify/WordPress Specialist
      </H2>
      <InnerWrapper
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <MyPhoto src={jay} alt="Jay" />
        <TextWrapper>
          <p>
            I build fast, conversion-focused eCommerce and marketing sites—theme
            customization, UI systems, performance, analytics, and integrations.
          </p>
          <TextWrapper>
            <InnerWrapper style={{ gap: "10px", marginTop: "20px" }}>
              <ScrollButton
                to="mycv"
                smooth
                spy
                offset={-100}
                duration={500}
                className={props.theme === "dark" ? "dark" : "light"}
              >
                Download CV
              </ScrollButton>
            </InnerWrapper>
          </TextWrapper>
        </TextWrapper>
      </InnerWrapper>
    </AboutWrapper>
  );
});

export default About;
