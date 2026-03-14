import styled from "styled-components";
import { motion } from "framer-motion";
import vercelLogo from "../assets/vercel-logo.png";
import craLogo from "../assets/cra-logo.png";
import reactIconsLogo from "../assets/react-icons-logo.svg";
import styledComponentslLogo from "../assets/styled-components-logo.png";
import swiperJsLogo from "../assets/swiper-logo.svg";
import framerMotionLogo from "../assets/framer-motion-logo.svg";

const logos = [
  {
    name: "Vercel",
    url: vercelLogo,
  },
  {
    name: "CRA (ReactJS)",
    url: craLogo,
  },
  {
    name: "React Icons",
    url: reactIconsLogo,
  },
  {
    name: "Styled Components",
    url: styledComponentslLogo,
  },
  {
    name: "SwiperJS",
    url: swiperJsLogo,
  },
  {
    name: "Framer Motion",
    url: framerMotionLogo,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const PoweredBy = () => {
  return (
    <Section id="powered-by">
      <Inner>
        <Intro
          as={motion.div}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Eyebrow>Built With</Eyebrow>
          <Title>Carefully chosen tools behind this portfolio.</Title>
          <Description>
            Designed and developed with a frontend stack focused on speed,
            maintainability, motion, and polished user experience.
          </Description>
        </Intro>

        <LogoGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {logos.map((logo) => (
            <LogoCard
              key={logo.name}
              as={motion.div}
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <LogoImageWrap>
                <LogoImage src={logo.url} alt={logo.name} />
              </LogoImageWrap>
              <LogoName>{logo.name}</LogoName>
            </LogoCard>
          ))}
        </LogoGrid>
      </Inner>
    </Section>
  );
};

export default PoweredBy;

const Section = styled.section`
  width: 100%;
  margin-top: 90px;
  padding: 100px 0;
  position: relative;

  background:
    radial-gradient(
      circle at 20% 10%,
      rgba(59, 130, 246, 0.25),
      transparent 35%
    ),
    radial-gradient(
      circle at 80% 90%,
      rgba(99, 102, 241, 0.2),
      transparent 40%
    ),
    linear-gradient(135deg, #050b17 0%, #0a142a 45%, #0f1e3d 100%);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
  }
`;

const Inner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Intro = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto 28px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 36px;
  }
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  margin-bottom: 16px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(226, 232, 240, 0.9);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const Title = styled.h2`
  margin: 0 0 12px;
  font-size: clamp(1.9rem, 4vw, 3.4rem);
  line-height: 1.02;
  letter-spacing: -0.045em;
  font-weight: 800;
  color: #f8fbff;
`;

const Description = styled.p`
  margin: 0 auto;
  max-width: 620px;
  font-size: 0.98rem;
  line-height: 1.8;
  color: rgba(203, 213, 225, 0.78);

  @media screen and (min-width: 768px) {
    font-size: 1.02rem;
  }
`;

const LogoGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 16px;
  }
`;

const LogoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-height: 132px;
  padding: 20px 14px;
  border-radius: 24px;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.03),
    0 10px 24px rgba(2, 6, 23, 0.18);
  backdrop-filter: blur(10px);
`;

const LogoImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  padding: 14px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%) brightness(1.2);
  opacity: 0.95;
`;

const LogoName = styled.p`
  margin: 0;
  font-size: 0.86rem;
  line-height: 1.4;
  font-weight: 600;
  color: rgba(241, 245, 249, 0.9);
`;
