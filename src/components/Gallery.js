import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Holiday Factory Booking Experience",
    subtitle:
      "Responsive booking flow focused on clarity, speed, and conversion.",
    description:
      "Worked on frontend implementation and maintenance for a high-traffic travel platform, improving booking interfaces, responsive behavior, and user flow consistency across multiple products.",
    impact: [
      "Improved usability across mobile and desktop booking steps",
      "Helped maintain scalable frontend patterns across multiple pages",
      "Supported conversion-focused UI updates and product launches",
    ],
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "Responsive UI", "Conversion"],
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1400&auto=format&fit=crop",
    liveLink: "#",
    caseStudyLink: "#",
  },
  {
    id: 2,
    title: "Shopify Custom Sections System",
    subtitle:
      "Flexible storefront sections built for easier content control and cleaner UX.",
    description:
      "Developed reusable Shopify sections with configurable layouts, content controls, and styling options so clients could update their website more easily without sacrificing visual consistency.",
    impact: [
      "Reduced dependency on developer edits for common content changes",
      "Improved reusability across multiple sections and templates",
      "Balanced design flexibility with maintainable theme structure",
    ],
    tags: ["Shopify", "Liquid", "CSS", "JavaScript", "Theme Customization"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
    liveLink: "#",
    caseStudyLink: "#",
  },
  {
    id: 3,
    title: "WooCommerce Booking & Product Logic",
    subtitle:
      "Custom frontend behavior for booking rules, product logic, and better checkout flow.",
    description:
      "Implemented custom WooCommerce and frontend logic for complex booking-related scenarios, including participant-based selections, pricing presentation, and more structured user interactions.",
    impact: [
      "Made complex product flows easier to understand",
      "Improved booking-related UX through clearer interactions",
      "Supported business rules without cluttering the interface",
    ],
    tags: ["WordPress", "WooCommerce", "PHP", "JavaScript", "UX"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
    liveLink: "#",
    caseStudyLink: "#",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const MyWork = () => {
  return (
    <Section id="portfolio">
      <Inner>
        <SectionIntro
          as={motion.div}
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Eyebrow>SELECTED WORK</Eyebrow>
          <Heading>Projects built for usability, conversion, and scale.</Heading>
          <IntroText>
            A curated selection of frontend work across booking systems,
            ecommerce builds, and business websites — designed to be clean,
            maintainable, and effective.
          </IntroText>
        </SectionIntro>

        <ProjectsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              as={motion.article}
              variants={itemVariants}
              $reverse={index % 2 !== 0}
              whileHover={{ y: -6 }}
            >
              <VisualWrap $reverse={index % 2 !== 0}>
                <VisualGlow />
                <BrowserFrame>
                  <BrowserTop>
                    <Dots>
                      <Dot />
                      <Dot />
                      <Dot />
                    </Dots>
                    <BrowserLabel>{project.title}</BrowserLabel>
                  </BrowserTop>

                  <ProjectImage src={project.image} alt={project.title} />
                </BrowserFrame>
              </VisualWrap>

              <Content>
                <ProjectMeta>Featured Project</ProjectMeta>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                <ProjectDescription>{project.description}</ProjectDescription>

                <ImpactList>
                  {project.impact.map((item, idx) => (
                    <ImpactItem key={idx}>{item}</ImpactItem>
                  ))}
                </ImpactList>

                <Tags>
                  {project.tags.map((tag, idx) => (
                    <Tag key={idx}>{tag}</Tag>
                  ))}
                </Tags>

                <Actions>
                  <PrimaryButton href={project.caseStudyLink}>
                    View Case Study
                  </PrimaryButton>
                  <SecondaryButton href={project.liveLink}>
                    Live Preview
                  </SecondaryButton>
                </Actions>
              </Content>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Inner>
    </Section>
  );
};

export default MyWork;

/* =========================
   Styled Components
========================= */

const Section = styled.section`
  width: 100%;
  padding: 70px 20px 100px;

  @media screen and (min-width: 768px) {
    padding: 90px 30px 120px;
  }
`;

const Inner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

const SectionIntro = styled.div`
  max-width: 760px;
  margin-bottom: 38px;

  @media screen and (min-width: 768px) {
    margin-bottom: 52px;
  }
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 999px;
  margin-bottom: 16px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: rgba(215, 223, 255, 0.82);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
`;

const Heading = styled.h2`
  margin: 0 0 14px;
  font-size: clamp(2rem, 4.5vw, 3.9rem);
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #f5f7ff;
`;

const IntroText = styled.p`
  margin: 0;
  max-width: 680px;
  font-size: 1rem;
  line-height: 1.75;
  color: rgba(225, 231, 255, 0.72);

  @media screen and (min-width: 768px) {
    font-size: 1.05rem;
  }
`;

const ProjectsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  @media screen and (min-width: 768px) {
    gap: 34px;
  }
`;

const ProjectCard = styled.article`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 20px;
  border-radius: 30px;
  background:
    radial-gradient(
      circle at top right,
      rgba(49, 91, 255, 0.18),
      transparent 30%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(83, 154, 255, 0.14),
      transparent 28%
    ),
    linear-gradient(180deg, #0c1220 0%, #0a1020 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);

  @media screen and (min-width: 992px) {
    grid-template-columns: ${({ $reverse }) =>
      $reverse ? "1fr 1.05fr" : "1.05fr 1fr"};
    align-items: center;
    gap: 34px;
    padding: 28px;
  }
`;

const VisualWrap = styled.div`
  position: relative;
  order: 1;

  @media screen and (min-width: 992px) {
    order: ${({ $reverse }) => ($reverse ? 2 : 1)};
  }
`;

const VisualGlow = styled.div`
  position: absolute;
  inset: auto;
  width: 180px;
  height: 180px;
  right: -30px;
  top: -30px;
  border-radius: 50%;
  background: rgba(82, 128, 255, 0.25);
  filter: blur(70px);
  pointer-events: none;
`;

const BrowserFrame = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
`;

const BrowserTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.04);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.22);
`;

const BrowserLabel = styled.span`
  font-size: 0.8rem;
  color: rgba(225, 231, 255, 0.65);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;

  @media screen and (min-width: 768px) {
    height: 340px;
  }

  @media screen and (min-width: 1200px) {
    height: 390px;
  }
`;

const Content = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 992px) {
    order: 1;
  }
`;

const ProjectMeta = styled.span`
  display: inline-block;
  margin-bottom: 12px;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8cabff;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 10px;
  font-size: clamp(1.6rem, 2vw, 2.4rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #f7f8fc;
`;

const ProjectSubtitle = styled.p`
  margin: 0 0 14px;
  font-size: 1.02rem;
  font-weight: 600;
  line-height: 1.6;
  color: rgba(230, 235, 255, 0.82);
`;

const ProjectDescription = styled.p`
  margin: 0 0 18px;
  font-size: 0.98rem;
  line-height: 1.8;
  color: rgba(221, 227, 246, 0.7);
`;

const ImpactList = styled.ul`
  padding: 0;
  margin: 0 0 20px;
  list-style: none;
  display: grid;
  gap: 10px;
`;

const ImpactItem = styled.li`
  position: relative;
  padding-left: 18px;
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(233, 237, 250, 0.72);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 10px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #7fa2ff;
    box-shadow: 0 0 12px rgba(127, 162, 255, 0.8);
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
`;

const Tag = styled.span`
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.82rem;
  color: rgba(239, 243, 255, 0.82);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const BaseButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 18px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 700;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const PrimaryButton = styled(BaseButton)`
  color: #09111f;
  background: linear-gradient(180deg, #f7f9ff 0%, #dfe8ff 100%);
  box-shadow: 0 10px 24px rgba(158, 184, 255, 0.18);

  &:hover {
    box-shadow: 0 12px 28px rgba(158, 184, 255, 0.26);
  }
`;

const SecondaryButton = styled(BaseButton)`
  color: #f3f6ff;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;