import styled from "styled-components";
import philippineFlag from "../assets/phi.png";
import uaeFlag from "../assets/uae.png";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 50px;
  }
`;

const ExperienceWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;

const CountryWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 30%;
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

const Date = styled.p`
  padding: 0;
  margin: 0;
`;

const Company = styled.h4`
  margin: 0;
  font-size: 1.2rem;
`

const Position = styled.p`
margin: 0 !important;
`

const Flags = styled.img`
  height: 20px;
`;

const Ul = styled.ul`
  margin: 20px 0;
  padding: 0;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`

const Skill = styled.li`
    list-style: none;
    color: #fff;
    border: 1px solid #ddd;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 12px;
`

const Experiences = () => {
  const myExperiences = [
    {
      country: "United Arab Emirates",
      company: "Holiday Factory",
      position: "Frontend Developer",
      duration: "May 2021 - Present",
      flagSrc: uaeFlag,
      flagAlt: "Dubai Flag",
      date: "2021 - Present",
      experience: [
        "Managing and maintaining frontend of Holiday Factory's website, converting PSD/Figma designs to a mobile-responsive platform. Led the implementation of new products, <a href='https://holidayfactorypremium.com/' class='test'>Holiday Factory Premium</a> and Holiday Factory Georgia websites from scratch. Successfully launched bank campaigns, public holiday promotions, and online voucher purchasing pages.",
      ],
      technology: [
        "HTML",
        "CSS",
        "Grid",
        "Flexbox",
        "JavaScript",
        "React",
        "Fetch API",
        "jQuery",
        "Git / Github",
        "Jira",
        "Figma",
        "Photoshop",
      ],
    },
    {
      country: "Philippines",
      flagSrc: philippineFlag,
      flagAlt: "Philippines Flag",
      date: "2010 - 2021",
      experience: [
        "Recruited as Web Developer (2014) and got promoted to Intermediate Web Developer (2017) and had the opportunity to lead a team. Responsible for developing and maintaining websites, product launches, E-commerce solutions, and leading a group of Developers in Manila.  Established good stakeholder relationships by implementing what the business needs.",
      ],
      technology: [
        "HTML",
        "CSS",
        "JavaScript",
        "Contentful"
      ],
    },
  ];
  return (
    <>
      {myExperiences.map((experience, index) => (
        <FlexWrapper>
          <CountryWrapper>
            <CountryHeader>
              {experience.country}{" "}
              <Flags src={experience.flagSrc} alt={experience.flagAlt} />
            </CountryHeader>
            <Date>{experience.date}</Date>
          </CountryWrapper>
          <ExperienceWrapper className="remove-margin">
            <Company>{experience.company}</Company>
            <Position>{experience.position}</Position>
            {experience.experience.map((experience, index) => (
              <p key={index} dangerouslySetInnerHTML={{__html: experience}} className="with-link"></p>
            ))}
            <Ul>
              {experience.technology.map((technology) => (
                <Skill>{technology} </Skill>
              ))}
            </Ul>
          </ExperienceWrapper>
        </FlexWrapper>
      ))}
    </>
  );
};

export default Experiences;
