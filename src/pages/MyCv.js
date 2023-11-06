import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle";
import SamplePdf from "../components/SamplePdf";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & * {
    margin: 0;
    padding: 0;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    align-items: center;
    margin: 20px 0;
  }
`;

const ExperienceMainWrapper = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 1024px;
    margin: auto;
  }
`;

const Download = styled(motion.p)`
  transition: all 0.3s ease-in-out;
  padding: 10px;
  &:hover {
    cursor: pointer;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease-in-out;
  }
`;

const downloadPDF = () => {
  const link = document.createElement("a");
  link.href = `${process.env.PUBLIC_URL}/paolojayyasay_cv.pdf`;
  link.download = "paolojayyasay_cv.pdf";
  link.click();
};

const headerVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Experience = () => {
  return (
    <>
      <ExperienceMainWrapper id="mycv">
        <GlobalStyle />
        <HeaderWrapper>
          <motion.h2
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            View my CV
          </motion.h2>
          <Download
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onClick={() => downloadPDF()}
          >
            Download PDF <FiDownload />
          </Download>
        </HeaderWrapper>
        <SamplePdf />
      </ExperienceMainWrapper>
    </>
  );
};

export default Experience;
