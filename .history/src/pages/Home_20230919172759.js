import styled from "styled-components";

const HomeWrapper = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 90%;
    margin: auto;
  }
`;

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <h2>Home</h2>
        <p>
          Experienced Content Manager, Frontend Web Developer, and Team Leader
          with 13 years of work experience. Proficient in CMS and optimizing
          processes.
        </p>
        <p>
          Demonstrated ability in building consumer- and business-focused web
          pages using latest technologies and CMS platforms like Contentful and
          WordPress.
        </p>
        <p>
          Adept product owner implementing Agile methodologies for successful
          project delivery, including product launches and e-commerce
          initiatives.
        </p>
        <p>
          Continuous self-improvement in frontend web development, mastering
          ReactJS and other frameworks to enhance technical expertise.
        </p>
      </HomeWrapper>
    </>
  );
};

export default Home;
