import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiDownload,
  FiGrid,
  FiBriefcase,
  FiTool,
  FiFileText,
  FiMonitor,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const colors = [
  { name: "Canvas", value: "#efeff3" },
  { name: "Surface", value: "#ffffff" },
  { name: "Text", value: "#0f172a" },
  { name: "Muted", value: "#64748b" },
  { name: "Primary", value: "#1d4ed8" },
  { name: "Dark Panel", value: "#081222" },
];

const tools = [
  { label: "React", icon: <FiGrid /> },
  { label: "WordPress", icon: <FiBriefcase /> },
  { label: "Styled Components", icon: <FiTool /> },
  { label: "Documentation", icon: <FiFileText /> },
  { label: "Performance", icon: <FiMonitor /> },
];

const tags = ["React", "Next.js", "Shopify", "WordPress", "Performance"];

export default function SystemDesign() {
  return (
    <Wrapper>
      <Inner>
        <BackLink to="/">
          <FiArrowLeft />
          Back to Portfolio
        </BackLink>
        <Intro
          as={motion.section}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <Eyebrow>Portfolio UI System</Eyebrow>
          <Title>Reusable Components That Power My Portfolio</Title>
          <Description>
            A collection of reusable UI pieces and visual foundations used
            throughout my portfolio. Designed to keep the interface consistent,
            scalable, and easy to extend.
          </Description>
        </Intro>

        <Section
          as={motion.section}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionHeading>
            <SectionLabel>Foundations</SectionLabel>
            <SectionTitle>
              Color, type, spacing, and surface language.
            </SectionTitle>
          </SectionHeading>

          <TwoColumnGrid>
            <SurfaceCard>
              <CardTitle>Color Palette</CardTitle>
              <CardText>
                A small set of colors used to keep the portfolio clean,
                readable, and visually consistent.
              </CardText>

              <ColorGrid>
                {colors.map((color) => (
                  <ColorItem key={color.name}>
                    <ColorSwatch style={{ background: color.value }} />
                    <ColorMeta>
                      <ColorName>{color.name}</ColorName>
                      <ColorValue>{color.value}</ColorValue>
                    </ColorMeta>
                  </ColorItem>
                ))}
              </ColorGrid>
            </SurfaceCard>

            <SurfaceCard>
              <CardTitle>Typography Scale</CardTitle>
              <CardText>
                A simple hierarchy for headlines, supporting text, labels, and
                smaller interface elements.
              </CardText>

              <TypeStack>
                <TypeDisplay>Display Heading</TypeDisplay>
                <TypeHeading>Section Heading</TypeHeading>
                <TypeBody>
                  Body text used for descriptions and supporting copy across the
                  portfolio.
                </TypeBody>
                <TypeSmall>Small labels, helper text, and metadata.</TypeSmall>
              </TypeStack>
            </SurfaceCard>
          </TwoColumnGrid>
        </Section>

        <Section
          as={motion.section}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionHeading>
            <SectionLabel>Core Components</SectionLabel>
            <SectionTitle>
              Buttons, tags, cards, and navigation pills.
            </SectionTitle>
          </SectionHeading>

          <ThreeColumnGrid>
            <SurfaceCard>
              <CardTitle>Buttons</CardTitle>
              <CardText>
                Primary and secondary actions used across sections like hero,
                CV, and project highlights.
              </CardText>

              <ButtonRow>
                <PrimaryButton>
                  Download CV <FiDownload />
                </PrimaryButton>

                <SecondaryButton>
                  View Work <FiArrowRight />
                </SecondaryButton>
              </ButtonRow>
            </SurfaceCard>

            <SurfaceCard>
              <CardTitle>Tags / Badges</CardTitle>
              <CardText>
                Small reusable tags for stacks, categories, and feature labels.
              </CardText>

              <BadgeRow>
                {tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </BadgeRow>
            </SurfaceCard>

            <SurfaceCard>
              <CardTitle>Navigation Pill</CardTitle>
              <CardText>
                A soft pill-based navigation style used to keep the interface
                light and premium.
              </CardText>

              <NavPreview>
                <MiniBrand>Paolo Jay Yasay</MiniBrand>
                <MiniNavItem active>About</MiniNavItem>
                <MiniNavItem>Experience</MiniNavItem>
                <MiniNavItem>Work</MiniNavItem>
              </NavPreview>
            </SurfaceCard>
          </ThreeColumnGrid>
        </Section>

        <Section
          as={motion.section}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionHeading>
            <SectionLabel>Portfolio Components</SectionLabel>
            <SectionTitle>
              Reusable patterns built for this portfolio.
            </SectionTitle>
          </SectionHeading>

          <PortfolioGrid>
            <SurfaceCard>
              <CardTitle>Project Card</CardTitle>
              <ProjectCard>
                <ProjectThumb />
                <ProjectContent>
                  <ProjectMeta>WooCommerce / Booking UX</ProjectMeta>
                  <ProjectTitle>WooCommerce Booking Logic</ProjectTitle>
                  <ProjectDescription>
                    A reusable project card pattern for showcasing real work
                    with structured content, tags, and clear visual hierarchy.
                  </ProjectDescription>

                  <BadgeRow>
                    <Badge>WordPress</Badge>
                    <Badge>WooCommerce</Badge>
                    <Badge>UX</Badge>
                  </BadgeRow>
                </ProjectContent>
              </ProjectCard>
            </SurfaceCard>

            <DarkCard>
              <CardTitleLight>Experience Card</CardTitleLight>
              <ExperienceCard>
                <ExperienceMetaCol>
                  <ExperienceCountry>United Arab Emirates</ExperienceCountry>
                  <ExperienceDate>2021 – 2024</ExperienceDate>
                </ExperienceMetaCol>

                <ExperienceContent>
                  <ExperienceCompany>Holiday Factory</ExperienceCompany>
                  <ExperienceRole>Frontend Developer</ExperienceRole>

                  <ExperienceList>
                    <li>Built booking flows and frontend features.</li>
                    <li>
                      Worked on pricing behavior and user-facing journeys.
                    </li>
                    <li>Supported polished, conversion-focused experiences.</li>
                  </ExperienceList>

                  <DarkBadgeRow>
                    <DarkBadge>React</DarkBadge>
                    <DarkBadge>JavaScript</DarkBadge>
                    <DarkBadge>SCSS</DarkBadge>
                  </DarkBadgeRow>
                </ExperienceContent>
              </ExperienceCard>
            </DarkCard>

            <SurfaceCard>
              <CardTitle>Tool Card</CardTitle>
              <ToolGrid>
                {tools.map((tool) => (
                  <ToolCard key={tool.label}>
                    <ToolIcon>{tool.icon}</ToolIcon>
                    <ToolName>{tool.label}</ToolName>
                  </ToolCard>
                ))}
              </ToolGrid>
            </SurfaceCard>

            <SurfaceCard>
              <CardTitle>CV Preview Card</CardTitle>
              <CvCard>
                <CvHeader>
                  <CvDot pink />
                  <CvDot yellow />
                  <CvDot green />
                </CvHeader>

                <CvPaper>
                  <CvName>Paolo Jay Yasay</CvName>
                  <CvRole>
                    Frontend Developer • React / WordPress / Shopify
                  </CvRole>

                  <CvLine />
                  <CvLine width="86%" />
                  <CvLine width="70%" />

                  <CvStub />
                  <CvLine />
                  <CvLine width="90%" />
                  <CvLine width="72%" />
                </CvPaper>
              </CvCard>
            </SurfaceCard>
          </PortfolioGrid>
        </Section>
      </Inner>
    </Wrapper>
  );
}

/* layout */

const Wrapper = styled.div`
  width: 100%;
  padding: 60px 0;
  background: #efeff3;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
  font-size: 14px;
  font-weight: 600;
  color: #64748b;
  text-decoration: none;
  transition: all 0.2s ease;

  svg {
    font-size: 16px;
  }

  &:hover {
    color: #0f172a;
    transform: translateX(-2px);
  }
`;

const Inner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    padding: 0 24px;
  }
`;

const Intro = styled.div`
  max-width: 780px;
  margin-bottom: 40px;
`;

const Section = styled.section`
  margin-top: 40px;
`;

const SectionHeading = styled.div`
  margin-bottom: 20px;
`;

const SectionLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #64748b;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 42px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: #0f172a;

  @media screen and (max-width: 767px) {
    font-size: 34px;
  }
`;

const SectionTitle = styled.h3`
  margin: 0;
  font-size: 32px;
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #0f172a;

  @media screen and (max-width: 767px) {
    font-size: 26px;
  }
`;

const Description = styled.p`
  margin: 18px 0 0;
  color: #64748b;
  font-size: 15px;
  line-height: 1.9;
`;

const Eyebrow = styled.div`
  display: inline-block;
  padding: 8px 12px;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 999px;
  color: #64748b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 14px;
`;

/* cards */

const SurfaceCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 28px;
  padding: 24px;
  box-shadow: 0 16px 50px rgba(15, 23, 42, 0.08);
`;

const DarkCard = styled.div`
  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(37, 99, 235, 0.22),
      transparent 28%
    ),
    linear-gradient(180deg, #081222 0%, #09162c 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: 24px;
  box-shadow: 0 24px 60px rgba(2, 6, 23, 0.35);
`;

const CardTitle = styled.h4`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  color: #0f172a;
`;

const CardTitleLight = styled.h4`
  margin: 0 0 18px;
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
`;

const CardText = styled.p`
  margin: 10px 0 0;
  color: #64748b;
  font-size: 14px;
  line-height: 1.8;
`;

/* grids */

const TwoColumnGrid = styled.div`
  display: grid;
  gap: 16px;

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ThreeColumnGrid = styled.div`
  display: grid;
  gap: 16px;

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  gap: 16px;

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

/* colors */

const ColorGrid = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 18px;
`;

const ColorItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ColorSwatch = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  flex-shrink: 0;
`;

const ColorMeta = styled.div``;

const ColorName = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
`;

const ColorValue = styled.div`
  margin-top: 4px;
  font-size: 13px;
  color: #64748b;
`;

/* typography */

const TypeStack = styled.div`
  margin-top: 18px;
  display: grid;
  gap: 14px;
`;

const TypeDisplay = styled.div`
  font-size: 34px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: #0f172a;
`;

const TypeHeading = styled.div`
  font-size: 24px;
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #0f172a;
`;

const TypeBody = styled.div`
  font-size: 15px;
  line-height: 1.9;
  color: #64748b;
`;

const TypeSmall = styled.div`
  font-size: 13px;
  line-height: 1.7;
  color: #94a3b8;
`;

/* buttons */

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 18px;
`;

const BaseButton = styled.button`
  border: none;
  border-radius: 999px;
  padding: 14px 18px;
  font-size: 14px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const PrimaryButton = styled(BaseButton)`
  background: #0f172a;
  color: #ffffff;

  &:hover {
    transform: translateY(-1px);
    background: #1e293b;
  }
`;

const SecondaryButton = styled(BaseButton)`
  background: #ffffff;
  color: #0f172a;
  border: 1px solid rgba(15, 23, 42, 0.12);

  &:hover {
    transform: translateY(-1px);
    background: #f8fafc;
  }
`;

/* badges */

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
`;

const Badge = styled.div`
  padding: 8px 12px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  color: #475569;
  font-size: 12px;
  font-weight: 600;
`;

/* nav preview */

const NavPreview = styled.div`
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  padding: 10px;
  border-radius: 999px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
`;

const MiniBrand = styled.div`
  padding: 10px 14px;
  border-radius: 999px;
  background: #0f172a;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
`;

const MiniNavItem = styled.div`
  padding: 10px 14px;
  border-radius: 999px;
  background: ${(props) => (props.active ? "#ffffff" : "transparent")};
  color: ${(props) => (props.active ? "#0f172a" : "#64748b")};
  font-size: 12px;
  font-weight: 600;
  border: ${(props) =>
    props.active
      ? "1px solid rgba(15, 23, 42, 0.08)"
      : "1px solid transparent"};
`;

/* project card */

const ProjectCard = styled.div`
  margin-top: 18px;
  border: 1px solid #e2e8f0;
  border-radius: 22px;
  overflow: hidden;
  background: #ffffff;
`;

const ProjectThumb = styled.div`
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, #dbeafe, #e2e8f0 45%, #cbd5e1);
`;

const ProjectContent = styled.div`
  padding: 18px;
`;

const ProjectMeta = styled.div`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #94a3b8;
`;

const ProjectTitle = styled.h5`
  margin: 8px 0 0;
  font-size: 20px;
  font-weight: 800;
  color: #0f172a;
`;

const ProjectDescription = styled.p`
  margin: 10px 0 0;
  color: #64748b;
  font-size: 14px;
  line-height: 1.8;
`;

/* experience */

const ExperienceCard = styled.div`
  display: grid;
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 160px 1fr;
  }
`;

const ExperienceMetaCol = styled.div``;

const ExperienceCountry = styled.div`
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
`;

const ExperienceDate = styled.div`
  margin-top: 6px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
`;

const ExperienceContent = styled.div``;

const ExperienceCompany = styled.h5`
  margin: 0;
  color: #ffffff;
  font-size: 20px;
  font-weight: 800;
`;

const ExperienceRole = styled.div`
  margin-top: 6px;
  color: #bfdbfe;
  font-size: 14px;
  font-weight: 600;
`;

const ExperienceList = styled.ul`
  margin: 16px 0 0;
  padding-left: 18px;
  color: rgba(255, 255, 255, 0.76);
  font-size: 14px;
  line-height: 1.9;
`;

const DarkBadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`;

const DarkBadge = styled.div`
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.74);
  font-size: 12px;
  font-weight: 600;
`;

/* tool cards */

const ToolGrid = styled.div`
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ToolCard = styled.div`
  border-radius: 20px;
  padding: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
`;

const ToolIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1d4ed8;
  font-size: 18px;
`;

const ToolName = styled.div`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
`;

/* cv preview */

const CvCard = styled.div`
  margin-top: 18px;
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 16px;
  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.06);
`;

const CvHeader = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
`;

const CvDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: ${(props) =>
    props.pink ? "#fda4af" : props.yellow ? "#fcd34d" : "#86efac"};
`;

const CvPaper = styled.div`
  border-radius: 18px;
  border: 1px solid #e2e8f0;
  background: linear-gradient(180deg, #ffffff, #f8fafc);
  padding: 16px;
`;

const CvName = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: #0f172a;
`;

const CvRole = styled.div`
  margin-top: 6px;
  color: #94a3b8;
  font-size: 12px;
`;

const CvLine = styled.div`
  margin-top: 10px;
  width: ${(props) => props.width || "100%"};
  height: 8px;
  border-radius: 999px;
  background: #e2e8f0;
`;

const CvStub = styled.div`
  margin-top: 18px;
  width: 110px;
  height: 12px;
  border-radius: 999px;
  background: #cbd5e1;
`;
