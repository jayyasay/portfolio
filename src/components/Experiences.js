import styled from "styled-components";
import philippineFlag from "../assets/phi.png";
import uaeFlag from "../assets/uae.png";
import { motion } from "framer-motion";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: 70%;
    &:first-child {
      width: 30%;
    }
  }
`;

const InnerWrapper = styled.div`
  width; 100%;
`;

const ExperienceWrapper = styled.div`
  transition: all 0.3s ease-in-out;
  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 10px;
  }
  &:hover {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease-in-out;
  }
`;

const CountryWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    gap: 30px;
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
`;

const Position = styled.p`
  margin: 0 !important;
`;

const Flags = styled.img`
  height: 20px;
`;

const Ul = styled.ul`
  margin: 20px 0;
  padding: 0;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

const Skill = styled.li`
  list-style: none;
  color: #fff;
  border: 1px solid #ddd;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
`;

const Experiences = () => {
  const myExperiences = [
    {
      country: "United Arab Emirates",
      flagAlt: "Dubai Flag",
      flagSrc: uaeFlag,
      date: "2021 - Present",
      experiences: [
        {
          company: "Holiday Factory",
          position: "Frontend Developer",
          duration: "May 2021 - Present",
          experience: [
            "Managing and maintaining frontend of <a href='https://www.holiday-factory.com/' class='test' target='_blank'>Holiday Factory's website</a>, converting PSD/Figma designs to a mobile-responsive platform. Led the implementation of new products, <a href='https://holidayfactorypremium.com/' class='test' target='_blank'>Holiday Factory Premium</a> and <a href='https://holidayfactory.ge/book/home?lang=en' class='test' target='_blank'>Holiday Factory Georgia</a> websites from scratch. Successfully launched bank campaigns, public holiday promotions, and online voucher purchasing pages.",
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
      ],
    },
    {
      country: "Philippines",
      flagSrc: philippineFlag,
      flagAlt: "Philippines Flag",
      date: "2010 - 2021",
      experiences: [
        {
          company: "TELUS International Philippines",
          position: "Team Leader/Intermediate Web Developer",
          experience: [
            "Recruited as Web Developer (2014) and got promoted to Intermediate Web Developer (2017) and had the opportunity to lead a team. Responsible for developing and maintaining websites, product launches, E-commerce solutions, and leading a group of Developers in Manila.  Established good stakeholder relationships by implementing what the business needs.",
          ],
          technology: [
            "HTML",
            "CSS",
            "JavaScript",
            "Contentful",
            "Ruby on Rails",
            "Git / Github",
            "Jira",
          ],
        },
        {
          company: "HSBC Electronic Data Processing Philippines",
          position: "Web Production Officer",
          experience: [
            "Recruited as Web Associate (2010) and got promoted to Web Production Officer (2013). Responsible for maintaining public and intranet websites. One of the quality champions (ISO certification) that produced documentation and streamlined the department’s processes.",
          ],
          technology: [
            "HTML",
            "CSS",
            "Content Management System",
            "Site in a Box (Internal CMS)",
            "GCMS (Internal CMS)",
          ],
        },
      ],
    },
  ];

  const headerVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const wrapperVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.9 } },
  };
  return (
    <>
      <motion.h2
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        Experiences
      </motion.h2>
      {myExperiences.map((countryData) => (
        <motion.div
          key={countryData.country}
          variants={wrapperVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <CountryWrapper>
            <FlexWrapper>
              <CountryHeader>
                {countryData.country}
                <Flags src={countryData.flagSrc} alt={countryData.flagAlt} />
              </CountryHeader>
              <Date>{countryData.date}</Date>
            </FlexWrapper>
            <FlexWrapper>
              {countryData.experiences.map((experience) => (
                <InnerWrapper
                  key={`${experience.company}-${experience.position}-${experience.date}`}
                >
                  <Date>{experience.date}</Date>
                  <ExperienceWrapper className="remove-margin">
                    <Company>{experience.company}</Company>
                    <Position>{experience.position}</Position>
                    {experience.experience.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        dangerouslySetInnerHTML={{ __html: detail }}
                        className="with-link"
                      ></p>
                    ))}
                    <Ul>
                      {experience.technology.map((technology, techIndex) => (
                        <Skill key={techIndex}>{technology}</Skill>
                      ))}
                    </Ul>
                  </ExperienceWrapper>
                </InnerWrapper>
              ))}
            </FlexWrapper>
          </CountryWrapper>
        </motion.div>
      ))}
    </>
  );
};

export default Experiences;
