import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle";
import Experiences from "../components/Experiences";

const ExperienceMainWrapper = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 1024px;
    margin: auto;
  }
`;

const Experience = () => {
  return (
    <>
      <ExperienceMainWrapper id="experiences">
        <GlobalStyle />
        <h2>Experiences</h2>
        <Experiences />
      </ExperienceMainWrapper>
    </>
  );
};

export default Experience;
