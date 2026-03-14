import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle";
import Experiences from "../components/Experiences";

const ExperienceMainWrapper = styled.div`
  margin: 2rem 0;
  padding: 0 20px;
  
  @media screen and (min-width: 768px) {
    width: 1120px;
    margin: auto;
    margin-bottom: 2rem;
    padding: 0;
  }
`;

const Experience = () => {
  return (
    <>
      <ExperienceMainWrapper id="experiences">
        <GlobalStyle />
        <Experiences />
      </ExperienceMainWrapper>
    </>
  );
};

export default Experience;
