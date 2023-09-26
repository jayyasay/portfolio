import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle";
import philippineFlag from "../assets/phi.png";
import uaeFlag from "../assets/uae.png";

const ExperienceMainWrapper = styled.div`
@media screen and (min-width: 768px) {
  max-width: 1024px;
  margin: auto;
}
`;

const ExperienceWrapper = styled.div``;

const CountryWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const CountryHeader = styled.h3`
  align-self: flex-start;
  font-size: 1.5rem;
  margin: 0;
  display: inline-flex;
  gap: 10px;
  align-items: center;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 50px;
  }
`;


const Date = styled.p`
  padding: 0;
  margin: 0;
`;

const Flags = styled.img`
  height: 20px;
`

const Experience = () => {
  return (
    <>
      <ExperienceMainWrapper id="experiences">
        <GlobalStyle />
        <h2>Experiences</h2>
        <FlexWrapper>
          <CountryWrapper>
            <CountryHeader>United Arab Emirates <Flags src={uaeFlag} alt="Dubai Flag" /></CountryHeader>
            <Date>2021 - Present</Date>
          </CountryWrapper>
          <ExperienceWrapper className="remove-margin">
            <p>
              Hey there! I'm Jay. I've been dabbling in web development for 13
              years, and I've got some chops in Express/Serverless on the
              back-end side too.
            </p>
            <p>
              I rocked a 10-year stint at a big company doing web stuff and
              teaming up with folks from all over the world.
            </p>
            <p>
              Then, my family landed to Dubai for a fresh start and found a job
              to jazz up a travel website.
            </p>
            <p>Scroll on to see my detailed experiences!</p>
            <p>Got questions? Shoot me an email.</p>
          </ExperienceWrapper>
        </FlexWrapper>
        <FlexWrapper>
          <CountryWrapper>
            <CountryHeader>Philippines <Flags src={philippineFlag} alt="Dubai Flag" /></CountryHeader>
            <Date>2010 - 2021</Date>
          </CountryWrapper>
          <ExperienceWrapper className="remove-margin">
            <p>
              Hey there! I'm Jay. I've been dabbling in web development for 13
              years, and I've got some chops in Express/Serverless on the
              back-end side too.
            </p>
            <p>
              I rocked a 10-year stint at a big company doing web stuff and
              teaming up with folks from all over the world.
            </p>
            <p>
              Then, my family landed to Dubai for a fresh start and found a job
              to jazz up a travel website.
            </p>
            <p>Scroll on to see my detailed experiences!</p>
            <p>Got questions? Shoot me an email.</p>
          </ExperienceWrapper>
        </FlexWrapper>
      </ExperienceMainWrapper>
    </>
  );
};

export default Experience;
