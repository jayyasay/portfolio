import styled from "styled-components";
import philippineFlag from "../assets/phi.png";
import uaeFlag from "../assets/uae.png";
import ausFlag from "../assets/aus.png";
import { motion } from "framer-motion";

const Section = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 72px 20px;
  background: radial-gradient(circle at 50% 50%, #1e3a8a 0%, #0b0d12 100%);
  border-radius: 32px;
  @media screen and (min-width: 768px) {
    padding: 72px 40px;
  }
`;

const SectionTitle = styled(motion.h2)`
  margin: 0 0 16px;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  color: #f8fafc;
`;

const SectionDesc = styled.p`
  margin: 0 0 32px;
  max-width: 58ch;
  color: #94a3b8;
  line-height: 1.75;
  font-size: 1rem;
`;

const CountryCard = styled(motion.div)`
  margin-bottom: 20px;
  padding: 22px;
  border-radius: 28px;
  background: radial-gradient(
    circle at 30% 0%,
    rgba(30, 58, 138, 0.15) 0%,
    #10141c 60%
  );
  border: 1px solid rgba(30, 58, 138, 0.3);
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.35),
    0 1px 0 rgba(255, 255, 255, 0.03) inset;

  @media screen and (min-width: 768px) {
    padding: 28px;
    margin-bottom: 24px;
  }
`;

const CountryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 260px minmax(0, 1fr);
    gap: 28px;
    align-items: start;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InnerWrapper = styled.div`
  width: 100%;
`;

const ExperienceWrapper = styled.div`
  transition: all 0.25s ease;
  padding: 18px;
  border-radius: 22px;
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(30, 58, 138, 0.2);

  @media screen and (min-width: 768px) {
    padding: 22px;
  }

  &:hover {
    background: rgba(19, 26, 35, 0.7);
    border-color: rgba(30, 58, 138, 0.35);
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.28);
  }

  .with-link {
    margin: 14px 0 0;
    color: #cbd5e1;
    line-height: 1.75;
    font-size: 0.98rem;
  }

  .with-link a {
    color: #ffffff;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .with-link a:hover {
    color: #e2e8f0;
  }
`;

const CountryHeader = styled.h3`
  align-self: flex-start;
  font-size: 1.2rem;
  margin: 0;
  display: inline-flex;
  gap: 10px;
  align-items: center;
  color: #f8fafc;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Date = styled.p`
  padding: 0;
  margin: 8px 0 0;
  color: #94a3b8;
  line-height: 1.5;
  font-size: 0.95rem;
`;

const Company = styled.h4`
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.25;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Position = styled.p`
  margin: 6px 0 0 !important;
  color: #cbd5e1;
  font-size: 0.97rem;
  line-height: 1.5;
`;

const Flags = styled.img`
  height: 20px;
  width: auto;
  border-radius: 4px;
`;

const Ul = styled.ul`
  margin: 18px 0 0;
  padding: 0;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Skill = styled.li`
  list-style: none;
  color: #e2e8f0;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 12px;
  line-height: 1;
`;

const ExperienceDate = styled.span`
  display: inline-flex;
  align-self: flex-start;
  margin-bottom: 10px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #94a3b8;
  font-size: 12px;
  font-weight: 600;
`;

const headerVariants = {
  hidden: { x: -40, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const wrapperVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Experiences = () => {
  const myExperiences = [
    {
      country: "Australia (Remote)",
      flagAlt: "Australian Flag",
      flagSrc: ausFlag,
      date: "December 2024 - Present",
      experiences: [
        {
          company: "Wellness Marketing",
          position: "Web Developer / Consultant",
          duration: "December 2024 - Present",
          experience: [
            "Maintaining and enhancing multiple client websites across WordPress and Shopify, ensuring consistent UI/UX and responsive behavior across devices.",
            "Customizing WordPress themes and site functionality using HTML, CSS, and JavaScript, handling bug fixes, layout improvements, and ongoing site updates.",
            "Developing and customizing Shopify storefront pages using Liquid templates and sections, collaborating remotely with designers and stakeholders while performing QA checks before release.",
          ],
          technology: [
            "WordPress",
            "Shopify",
            "Liquid",
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design",
            "Theme Customization",
            "Plugin Maintenance",
            "QA / Testing",
          ],
        },
      ],
    },
    {
      country: "United Arab Emirates",
      flagAlt: "Dubai Flag",
      flagSrc: uaeFlag,
      date: "2021 - Present",
      experiences: [
        {
          company: "Holiday Factory",
          position: "Frontend Developer",
          duration: "May 2021 - October 2025",
          experience: [
            "Managing and maintaining the frontend of Holiday Factory's booking platform, translating PSD/Figma designs into responsive interfaces.",
            "Developed OTP verification flows and integrated API-driven booking data, improving reliability and reducing manual price updates by 95%.",
            "Refactored booking engine pages using Vanilla JavaScript, jQuery, and JSP, creating reusable components and reducing form errors by 80% while supporting launches like Holiday Factory Premium and Holiday Factory Georgia.",
          ],
          technology: [
            "React",
            "JavaScript",
            "Vanilla JavaScript",
            "jQuery",
            "JSP",
            "HTML",
            "CSS",
            "Grid",
            "Flexbox",
            "Fetch API",
            "REST API",
            "Google Analytics",
            "MoEngage",
            "Git / GitHub",
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
          position: "Team Leader / Intermediate Web Developer",
          duration: "2014 - 2021",
          experience: [
            "Built and enhanced internal CMS features using Ruby on Rails, JavaScript, HTML, and CSS, collaborating through GitHub for version control and team development.",
            "Delivered high-volume product page launches using Contentful CMS within Agile workflows, ensuring consistent structure and quality across releases.",
            "Led and mentored a team of 9 Web Developers and 1 .NET Developer, supporting production delivery, QA standards, and team development.",
          ],
          technology: [
            "Ruby on Rails",
            "JavaScript",
            "HTML",
            "CSS",
            "Contentful",
            "CMS",
            "Git / GitHub",
            "Agile",
            "Team Leadership",
          ],
        },
        {
          company: "HSBC Electronic Data Processing Philippines",
          position: "Web Production Officer",
          duration: "2010 - 2014",
          experience: [
            "Managed website updates across multiple CMS platforms, ensuring accuracy and QA validation.",
            "Created training materials and ISO documentation to standardize workflows and improve operational efficiency.",
            "Implemented process improvements that reduced publishing errors and streamlined web production tasks.",
          ],
          technology: [
            "CMS",
            "HTML",
            "CSS",
            "Quality Assurance",
            "Documentation",
            "Process Improvement",
            "Web Production",
          ],
        },
      ],
    },
  ];

  return (
    <Section id="experiences">
      <SectionTitle
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        Experiences
      </SectionTitle>

      <SectionDesc>
        A snapshot of the teams, regions, and products I've worked on across
        frontend development, digital experiences, and web operations.
      </SectionDesc>

      {myExperiences.map((countryData) => (
        <CountryCard
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
                  key={`${experience.company}-${experience.position}-${experience.duration}`}
                >
                  <ExperienceWrapper>
                    {experience.duration && (
                      <ExperienceDate>{experience.duration}</ExperienceDate>
                    )}

                    <Company>{experience.company}</Company>
                    <Position>{experience.position}</Position>

                    <ul style={{ margin: "12px 0 0", paddingLeft: "20px" }}>
                      {experience.experience.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          style={{ marginBottom: "8px", color: "#cbd5e1" }}
                        >
                          <span dangerouslySetInnerHTML={{ __html: detail }} />
                        </li>
                      ))}
                    </ul>

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
        </CountryCard>
      ))}
    </Section>
  );
};

export default Experiences;
