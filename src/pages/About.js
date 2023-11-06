import React from "react";
import styled from "styled-components";
import jay from "../assets/jay.jpg";
import GlobalStyle from "../components/GlobalStyle";
import { motion } from "framer-motion";

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
    <AboutWrapper
      ref={ref}
      id="about"
    >
      <GlobalStyle />
      <H2
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        Kamusta?
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
            Hey there! I'm Jay. I've been dabbling in web development for 13
            years, and I've got some chops in Express/Serverless on the back-end
            side too.
          </p>
          <p>
            I rocked a 10-year stint at a big company doing web stuff and
            teaming up with folks from all over the world.
          </p>
          <p>
            Then, my family landed to Dubai for a fresh start and found a job to
            jazz up a travel website.
          </p>
          <p>Scroll on to see my detailed experiences!</p>
          <p>Got questions? Shoot me an email.</p>
        </TextWrapper>
      </InnerWrapper>
    </AboutWrapper>
  );
});

export default About;
