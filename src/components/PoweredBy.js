import styled from "styled-components";
import vercelLogo from "../assets/vercel-logo.png";
import craLogo from "../assets/cra-logo.png";
import reactIconsLogo from "../assets/react-icons-logo.svg";
import styledComponentslLogo from "../assets/styled-components-logo.png";
import swiperJsLogo from "../assets/swiper-logo.svg";
import framerMotionLogo from "../assets/framer-motion-logo.svg";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  background-color: #333;
  padding: 30px 0 50px 0;
  text-align: center;
  margin-top: 30px;
`;

const LogoWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
  text-align: center;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const Text = styled(motion.p)`
  font-size: 10px;
`;

const Image = styled(motion.img)`
  height: 50px;
  filter: grayscale(100%);
  opacity: 0.8;
`;

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
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PoweredBy = () => {
  return (
    <>
      <Wrapper>
        <p>This website is powered by:</p>
        <LogoWrapper
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              variants={itemVariants}
            >
              <Image src={logo.url} alt={logo.name} />
              <Text>{logo.name}</Text>
            </motion.div>
          ))}
        </LogoWrapper>
      </Wrapper>
    </>
  );
};

export default PoweredBy;
