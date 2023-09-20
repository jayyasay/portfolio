import styled from "styled-components";
import jay from "../assets/jay.jpg";

const AboutWrapper = styled.div`
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

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div``;

const Home = () => {
  return (
    <>
      <AboutWrapper>
        <h2>Kamusta?</h2>
        <InnerWrapper>
          <MyPhoto src={jay} alt="Jay" />
          <TextWrapper>
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
          </TextWrapper>
        </InnerWrapper>
      </AboutWrapper>
    </>
  );
};

export default Home;
