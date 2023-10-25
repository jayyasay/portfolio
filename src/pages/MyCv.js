import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle";
import SamplePdf from "../components/SamplePdf";
import { FiDownload } from "react-icons/fi";

const myCV = "/paolojayyasay_cv.pdf";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ExperienceMainWrapper = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 1024px;
    margin: auto;
  }
`;

const Download = styled.p`
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
  link.href = myCV;
  link.download = "paolojayyasay_cv.pdf";
  link.click();
};

const Experience = () => {
  return (
    <>
      <ExperienceMainWrapper id="mycv">
        <GlobalStyle />
        <HeaderWrapper>
          <h2>View my CV</h2>
          <Download onClick={() => downloadPDF()}>
            Download PDF <FiDownload />
          </Download>
        </HeaderWrapper>
        <SamplePdf />
      </ExperienceMainWrapper>
    </>
  );
};

export default Experience;
