import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import jay from "../assets/jay2.webp";

const Section = styled.section`
  padding: 0 20px;
  @media screen and (min-width: 1024px) {
    padding: 72px 0 2rem 0;
  }
`;

const Container = styled(motion.div)`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

const Card = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  padding: 24px;
  backdrop-filter: blur(10px);
  background: ${({ theme }) =>
    theme === "dark"
      ? `
      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06), transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(255,255,255,0.04), transparent 45%),
      rgba(255,255,255,0.04)
    `
      : `
      radial-gradient(circle at 15% 20%, rgba(99,102,241,0.10), transparent 40%),
      radial-gradient(circle at 85% 80%, rgba(59,130,246,0.08), transparent 45%),
      linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)
    `};
  border: 1px solid
    ${({ theme }) =>
      theme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.6)"};
  box-shadow: ${({ theme }) =>
    theme === "dark"
      ? "0 10px 40px rgba(0, 0, 0, 0.35)"
      : "0 10px 30px rgba(15, 23, 42, 0.08)"};

  @media screen and (min-width: 768px) {
    padding: 40px;
    border-radius: 32px;
  }
`;

const Glow = styled.div`
  position: absolute;
  inset: auto -60px -60px auto;
  width: 180px;
  height: 180px;
  border-radius: 999px;
  background: ${({ theme }) =>
    theme === "dark"
      ? "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)"
      : "radial-gradient(circle, rgba(59,130,246,0.12), transparent 70%)"};
  pointer-events: none;
`;

const Grid = styled.div`
  display: grid;
  gap: 24px;
  align-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 220px minmax(0, 1fr);
    gap: 40px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 240px minmax(0, 1fr);
  }
`;

const PhotoWrap = styled(motion.div)`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const PhotoFrame = styled.div`
  position: relative;
  padding: 10px;
  border-radius: 38px;
  background: ${({ theme }) =>
    theme === "dark"
      ? "rgba(255,255,255,0.04)"
      : "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.92) 100%)"};
  border: 1px solid
    ${({ theme }) =>
      theme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.8)"};
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
`;

const MyPhoto = styled.img`
  width: 150px;
  height: 180px;
  border-radius: 30px;
  object-fit: cover;
  object-position: center;
  border: 1px solid
    ${({ theme }) =>
      theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.75)"};
  background: #fff;
  box-shadow:
    0 18px 40px rgba(15, 23, 42, 0.12),
    0 6px 18px rgba(15, 23, 42, 0.08);

  @media screen and (min-width: 768px) {
    width: 190px;
    height: 230px;
    border-radius: 34px;
  }
`;

const Content = styled.div`
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
  color: ${({ theme }) => (theme === "dark" ? "#d1d5db" : "#334155")};
  background: ${({ theme }) =>
    theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.05)"};
  border: 1px solid
    ${({ theme }) =>
      theme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"};
`;

const Title = styled(motion.h2)`
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 4.5rem);
  line-height: 0.98;
  letter-spacing: -0.055em;
  font-weight: 800;
  color: ${({ theme }) => (theme === "dark" ? "#f8fafc" : "#0f172a")};
`;

const Accent = styled.span`
  display: block;
  margin-top: 8px;
  background: linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 45%, #0f172a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled(motion.p)`
  margin: 20px 0 0;
  max-width: 62ch;
  font-size: 1rem;
  line-height: 1.75;
  color: ${({ theme }) => (theme === "dark" ? "#cbd5e1" : "#475569")};

  @media screen and (min-width: 768px) {
    font-size: 1.0625rem;
  }
`;

const MetaRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const MetaPill = styled.span`
  padding: 10px 14px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => (theme === "dark" ? "#e2e8f0" : "#1e293b")};
  background: ${({ theme }) =>
    theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.85)"};
  border: 1px solid
    ${({ theme }) =>
      theme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"};
`;

const Actions = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 28px;

  @media screen and (min-width: 480px) {
    flex-direction: row;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 18px;
  border-radius: 14px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  background: ${({ theme }) => (theme === "dark" ? "#f8fafc" : "#0f172a")};
  color: ${({ theme }) => (theme === "dark" ? "#0f172a" : "#f8fafc")};
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.95;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 18px;
  border-radius: 14px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  background: transparent;
  color: ${({ theme }) => (theme === "dark" ? "#e2e8f0" : "#0f172a")};
  border: 1px solid
    ${({ theme }) =>
      theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.12)"};

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) =>
      theme === "dark" ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)"};
  }
`;

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const About = React.forwardRef(({ theme }, ref) => {
  return (
    <Section id="about" theme={theme}>
      <Container
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Card theme={theme}>
          <Glow theme={theme} />

          <Grid>
            <PhotoWrap variants={itemVariants}>
              <PhotoFrame theme={theme}>
                <MyPhoto src={jay} alt="Jay Yasay" theme={theme} />
              </PhotoFrame>
            </PhotoWrap>

            <Content>
              <Eyebrow theme={theme}>About Me</Eyebrow>
              <Title variants={itemVariants} theme={theme}>
                <Accent theme={theme}>
                  I build clean frontend with full-stack exposure for product interfaces.
                </Accent>
              </Title>

              <Description variants={itemVariants} theme={theme}>
                Most of my work is on React UI and product experiences that need
                to stay clear, practical, and easy to use. I've built dashboards,
                admin tools, inventory systems, booking flows, and other web apps
                that need solid frontend structure, with full-stack exposure when
                the project goes beyond frontend.
              </Description>

              <MetaRow variants={itemVariants}>
                <MetaPill theme={theme}>React</MetaPill>
                <MetaPill theme={theme}>Next.js</MetaPill>
                <MetaPill theme={theme}>JavaScript</MetaPill>
                <MetaPill theme={theme}>HTML / CSS</MetaPill>
                <MetaPill theme={theme}>Shopify</MetaPill>
                <MetaPill theme={theme}>WordPress</MetaPill>
                <MetaPill theme={theme}>Supabase</MetaPill>
                <MetaPill theme={theme}>NeonDB</MetaPill>
                <MetaPill theme={theme}>Node.js</MetaPill>
              </MetaRow>

              <Actions variants={itemVariants}>
                <PrimaryButton
                  to="mycv"
                  smooth
                  spy
                  offset={-100}
                  duration={500}
                  theme={theme}
                >
                  Download CV
                </PrimaryButton>

                <SecondaryButton
                  to="work"
                  smooth
                  spy
                  offset={-100}
                  duration={500}
                  theme={theme}
                >
                  View My Work
                </SecondaryButton>
              </Actions>
            </Content>
          </Grid>
        </Card>
      </Container>
    </Section>
  );
});

export default About;
