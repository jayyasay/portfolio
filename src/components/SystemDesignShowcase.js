import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiBriefcase,
  FiGrid,
  FiMonitor,
  FiFileText,
  FiTool,
  FiGlobe,
} from "react-icons/fi";

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const experienceData = [
  {
    region: "Australia (Remote)",
    period: "December 2024 – Present",
    company: "Wellness Marketing",
    title: "Web Developer",
    bullets: [
      "Maintained and improved multiple client websites across WordPress and Shopify.",
      "Built custom front-end sections, reusable content blocks, and booking-related UX flows.",
      "Supported responsive polish, content updates, and feature delivery across active client projects.",
    ],
    stack: ["WordPress", "Shopify", "PHP", "Liquid", "JavaScript"],
  },
  {
    region: "United Arab Emirates",
    period: "February 2021 – November 2024",
    company: "Holiday Factory",
    title: "Frontend Developer",
    bullets: [
      "Built booking flows and dynamic travel experiences for high-volume eCommerce journeys.",
      "Worked on voucher logic, pricing behavior, payment-related UI, and internal product tools.",
      "Partnered with design and product teams to launch polished, conversion-focused experiences.",
    ],
    stack: ["React", "JavaScript", "SCSS", "CMS", "UX"],
  },
  {
    region: "Philippines",
    period: "June 2010 – March 2021",
    company: "TELUS / HSBC",
    title: "Web Developer / Team Lead",
    bullets: [
      "Delivered CMS features, production updates, launch support, and process improvements.",
      "Led developers, documented workflows, and supported quality delivery across teams.",
      "Built a strong foundation in front-end execution, release accuracy, and mentoring.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Rails", "CMS"],
  },
];

const projectTabs = [
  "WooCommerce Booking Logic",
  "Holiday Factory",
  "Shopify Custom UX",
  "Appointment Request",
  "Quiz App",
  "Business Website",
];

const tools = [
  { label: "Vite", icon: <FiMonitor /> },
  { label: "React", icon: <FiGrid /> },
  { label: "Next.js", icon: <FiGlobe /> },
  { label: "JavaScript", icon: <FiFileText /> },
  { label: "WordPress", icon: <FiBriefcase /> },
  { label: "Styled Components", icon: <FiTool /> },
];

const guidelines = [
  {
    title: "Foundation tokens",
    text: "Use one light canvas, one dark showcase surface, one strong primary blue, rounded 24–32px corners, soft borders, and long shadows.",
  },
  {
    title: "Section rhythm",
    text: "Keep each section framed like a product card with generous spacing, a compact hierarchy, and one clear visual anchor.",
  },
  {
    title: "Card language",
    text: "Mix soft white cards for information and dark glass cards for storytelling. That contrast carries the whole visual system.",
  },
  {
    title: "Interaction style",
    text: "Buttons, badges, tabs, and pills should share the same softened shape language. Motion should feel polished, not noisy.",
  },
];

export default function SystemDesignShowcase() {
  return (
    <Wrapper>
      <TopBar>
        <NavPill>
          <BrandPill>Paolo Jay Yasay</BrandPill>

          <NavLinks>
            <NavItem>About</NavItem>
            <NavItem>Experience</NavItem>
            <NavItem>My Work</NavItem>
            <NavItem>CV</NavItem>
          </NavLinks>

          <NavIcons>
            <MiniCircle />
            <MiniCircle />
            <MiniCircle />
            <MiniCircle />
          </NavIcons>
        </NavPill>
      </TopBar>

      <MainContent>
        <SectionContainer
          as={motion.section}
          variants={sectionFade}
          initial="hidden"
          animate="visible"
        >
          <SurfaceCard>
            <HeroGrid>
              <ProfileVisual>
                <ProfileFrame>
                  <ProfileShape />
                </ProfileFrame>
              </ProfileVisual>

              <HeroContent>
                <Eyebrow>Available for work</Eyebrow>
                <HeroTitle>
                  Frontend Developer building clean, fast web experiences.
                </HeroTitle>
                <HeroText>
                  I specialize in React, Next.js, Shopify, and WordPress,
                  creating modern interfaces, scalable UI systems, and
                  high-performance marketing or eCommerce websites that are easy
                  to use and easy to grow.
                </HeroText>

                <ButtonRow>
                  <PrimaryButton>
                    Download CV <FiDownload />
                  </PrimaryButton>
                  <SecondaryButton>
                    View My Work <FiArrowRight />
                  </SecondaryButton>
                </ButtonRow>

                <BadgeRow>
                  <Badge>React / Next.js</Badge>
                  <Badge>Shopify</Badge>
                  <Badge>WordPress</Badge>
                  <Badge>UI Systems</Badge>
                  <Badge>Performance</Badge>
                </BadgeRow>
              </HeroContent>
            </HeroGrid>
          </SurfaceCard>
        </SectionContainer>

        <SectionContainer
          as={motion.section}
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <DarkPanel>
            <GridOverlay />
            <DarkInner>
              <SectionHeader>
                <SectionLabel light>My Journey</SectionLabel>
                <SectionTitle light>Experiences</SectionTitle>
                <SectionDescription light>
                  A snapshot of the teams, regions, and products I’ve worked on
                  across frontend development, digital experiences, and web
                  operations.
                </SectionDescription>
              </SectionHeader>

              <ExperienceList>
                {experienceData.map((item) => (
                  <GlassCard key={item.company}>
                    <ExperienceGrid>
                      <ExperienceMeta>
                        <ExperienceRegion>{item.region}</ExperienceRegion>
                        <ExperiencePeriod>{item.period}</ExperiencePeriod>
                      </ExperienceMeta>

                      <ExperienceBody>
                        <ExperienceCompany>{item.company}</ExperienceCompany>
                        <ExperienceRole>{item.title}</ExperienceRole>

                        <BulletList>
                          {item.bullets.map((bullet) => (
                            <BulletItem key={bullet}>
                              <BulletDot />
                              <span>{bullet}</span>
                            </BulletItem>
                          ))}
                        </BulletList>

                        <TagRow>
                          {item.stack.map((tag) => (
                            <DarkTag key={tag}>{tag}</DarkTag>
                          ))}
                        </TagRow>
                      </ExperienceBody>
                    </ExperienceGrid>
                  </GlassCard>
                ))}
              </ExperienceList>
            </DarkInner>
          </DarkPanel>
        </SectionContainer>

        <SectionContainer
          as={motion.section}
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SectionHeader split>
            <div>
              <SectionLabel>My Work</SectionLabel>
              <SectionTitle>
                Frontend work powering real bookings, real stores, and real
                businesses.
              </SectionTitle>
            </div>

            <SectionDescription>
              A curated collection of projects across eCommerce, booking
              platforms, and custom web applications. Designed, built, and
              shaped for companies that needed things to actually work.
            </SectionDescription>
          </SectionHeader>

          <SurfaceCard>
            <ShowcaseOuter>
              <ShowcaseInner>
                <ShowcaseTop>
                  <div>
                    <SmallLabel>Commerce / UX Work</SmallLabel>
                    <ShowcaseTitle>WooCommerce Booking Logic</ShowcaseTitle>
                  </div>

                  <FeatureTag>FEATURED WORK</FeatureTag>
                </ShowcaseTop>

                <ShowcaseImage />

                <ShowcaseBottom>
                  <ShowcaseDescription>
                    Custom product and booking interactions for more structured
                    and user-friendly flows. Built for real-world eCommerce
                    behavior, not decorative nonsense.
                  </ShowcaseDescription>

                  <InfoCard>
                    <InfoBlock>
                      <SmallLabel>Project Type</SmallLabel>
                      <InfoValue>WooCommerce / Booking UX</InfoValue>
                    </InfoBlock>

                    <InfoBlock>
                      <SmallLabel>Focus</SmallLabel>
                      <InfoValue>
                        UI clarity, dynamic pricing, booking flow
                      </InfoValue>
                    </InfoBlock>
                  </InfoCard>
                </ShowcaseBottom>
              </ShowcaseInner>
            </ShowcaseOuter>

            <TabsRow>
              {projectTabs.map((tab, index) => (
                <ProjectTab key={tab} active={index === 0}>
                  {tab}
                </ProjectTab>
              ))}
            </TabsRow>
          </SurfaceCard>
        </SectionContainer>

        <SectionContainer
          as={motion.section}
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SurfaceCard>
            <CvGrid>
              <CvText>
                <SectionLabel>Curriculum Vitae</SectionLabel>
                <CvTitle>View my CV at a glance.</CvTitle>
                <CvDescription>
                  A concise snapshot of my experience across frontend
                  development, eCommerce builds, UI implementation, and
                  real-world client work. Preview it here or download the PDF.
                </CvDescription>

                <BadgeRow>
                  <Badge>React / Next.js</Badge>
                  <Badge>WordPress / Shopify</Badge>
                  <Badge>UI Systems</Badge>
                </BadgeRow>

                <PrimaryButton style={{ marginTop: "24px" }}>
                  Download PDF <FiDownload />
                </PrimaryButton>
              </CvText>

              <CvPreview
                as={motion.div}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <BrowserDots>
                  <Dot pink />
                  <Dot yellow />
                  <Dot green />
                </BrowserDots>

                <DocumentShell>
                  <DocumentContent>
                    <DocumentName>Paolo Jay Yasay</DocumentName>
                    <DocumentRole>
                      Frontend Developer • React / WordPress / Shopify
                    </DocumentRole>

                    <DocumentLines>
                      <Line />
                      <Line width="88%" />
                      <Line width="76%" />
                    </DocumentLines>

                    <DocumentSection>
                      <SectionStub />
                      <Line />
                      <Line width="90%" />
                      <Line width="72%" />
                    </DocumentSection>

                    <DocumentSection>
                      <SectionStub width="150px" />
                      <Line />
                      <Line width="92%" />
                      <Line width="83%" />
                      <Line width="69%" />
                    </DocumentSection>
                  </DocumentContent>
                </DocumentShell>
              </CvPreview>
            </CvGrid>
          </SurfaceCard>
        </SectionContainer>

        <SectionContainer
          as={motion.section}
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <DarkPanel>
            <GridOverlay />
            <DarkInner>
              <SectionHeader centered>
                <SectionLabel light>My Stack</SectionLabel>
                <SectionTitle light>
                  Carefully chosen tools behind this portfolio.
                </SectionTitle>
                <SectionDescription light centered>
                  Designed and developed with a frontend stack focused on speed,
                  reusability, motion, and polished user experience.
                </SectionDescription>
              </SectionHeader>

              <ToolsGrid>
                {tools.map((tool) => (
                  <ToolCard key={tool.label}>
                    <ToolIcon>{tool.icon}</ToolIcon>
                    <ToolLabel>{tool.label}</ToolLabel>
                  </ToolCard>
                ))}
              </ToolsGrid>
            </DarkInner>
          </DarkPanel>
        </SectionContainer>

        <SectionContainer
          as={motion.section}
          variants={sectionFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ marginBottom: "72px" }}
        >
          <GuidelinesGrid>
            {guidelines.map((item) => (
              <SurfaceCard key={item.title}>
                <GuidelineTitle>{item.title}</GuidelineTitle>
                <GuidelineText>{item.text}</GuidelineText>
              </SurfaceCard>
            ))}
          </GuidelinesGrid>
        </SectionContainer>
      </MainContent>
    </Wrapper>
  );
}

/* -------------------- styled components -------------------- */

const Wrapper = styled.div`
  min-height: 100vh;
  background: #efeff3;
  color: #0f172a;
`;

const TopBar = styled.div`
  padding: 20px 16px 0;
  display: flex;
  justify-content: center;
`;

const NavPill = styled.div`
  width: fit-content;
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  @media (max-width: 767px) {
    gap: 8px;
    padding: 8px 10px;
  }
`;

const BrandPill = styled.div`
  background: #0f172a;
  color: #fff;
  padding: 10px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 767px) {
    display: none;
  }
`;

const NavItem = styled.button`
  border: none;
  background: transparent;
  color: #64748b;
  font-size: 12px;
  font-weight: 600;
  padding: 10px 14px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f5f9;
    color: #0f172a;
  }
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const MiniCircle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
`;

const MainContent = styled.main`
  padding: 20px 0 40px;
`;

const SectionContainer = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 16px;
  margin-top: 28px;

  @media (min-width: 768px) {
    padding: 0 24px;
    margin-top: 44px;
  }
`;

const SurfaceCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 28px;
  padding: 24px;
  box-shadow: 0 16px 50px rgba(15, 23, 42, 0.08);

  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  gap: 32px;

  @media (min-width: 900px) {
    grid-template-columns: 180px 1fr;
    align-items: center;
  }
`;

const ProfileVisual = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileFrame = styled.div`
  width: 140px;
  height: 176px;
  border-radius: 30px;
  padding: 10px;
  background: radial-gradient(circle at top, #dbeafe, #bfdbfe 35%, #94a3b8 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
`;

const ProfileShape = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 22px;
  background: linear-gradient(180deg, #dbeafe 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: 92px;
    height: 92px;
    border-radius: 999px;
    background: rgba(148, 163, 184, 0.65);
  }
`;

const HeroContent = styled.div``;

const Eyebrow = styled.div`
  display: inline-flex;
  padding: 8px 12px;
  background: #f1f5f9;
  color: #64748b;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

const HeroTitle = styled.h1`
  margin: 14px 0 0;
  font-size: 40px;
  line-height: 0.95;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: #1d4ed8;
  max-width: 760px;

  @media (max-width: 767px) {
    font-size: 34px;
    line-height: 1;
  }
`;

const HeroText = styled.p`
  margin: 18px 0 0;
  max-width: 760px;
  font-size: 15px;
  line-height: 1.9;
  color: #64748b;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
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
    background: #1e293b;
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled(BaseButton)`
  background: #ffffff;
  color: #0f172a;
  border: 1px solid rgba(15, 23, 42, 0.14);

  &:hover {
    background: #f8fafc;
    transform: translateY(-1px);
  }
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
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

const DarkPanel = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  padding: 28px 20px;
  background:
    radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.32), transparent 28%),
    radial-gradient(circle at 80% 40%, rgba(59, 130, 246, 0.18), transparent 24%),
    linear-gradient(180deg, #081222 0%, #09162c 38%, #07111f 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 30px 80px rgba(2, 6, 23, 0.4);

  @media (min-width: 768px) {
    padding: 40px 32px;
  }
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 36px 36px;
  opacity: 0.22;
  pointer-events: none;
`;

const DarkInner = styled.div`
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  display: grid;
  gap: 16px;
  margin-bottom: 28px;

  ${(props) =>
    props.split &&
    `
    @media (min-width: 900px) {
      grid-template-columns: 1.35fr 0.8fr;
      align-items: end;
      gap: 32px;
    }
  `}

  ${(props) =>
    props.centered &&
    `
    max-width: 780px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  `}
`;

const SectionLabel = styled.div`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: ${(props) => (props.light ? "rgba(255,255,255,0.55)" : "#64748b")};
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 44px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: ${(props) => (props.light ? "#ffffff" : "#0f172a")};

  @media (max-width: 767px) {
    font-size: 34px;
    line-height: 1.05;
  }
`;

const SectionDescription = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.9;
  color: ${(props) => (props.light ? "rgba(255,255,255,0.72)" : "#64748b")};
  max-width: ${(props) => (props.centered ? "640px" : "unset")};

  ${(props) =>
    props.centered &&
    `
    margin-left: auto;
    margin-right: auto;
  `}
`;

const ExperienceList = styled.div`
  display: grid;
  gap: 16px;
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 22px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
`;

const ExperienceGrid = styled.div`
  display: grid;
  gap: 24px;

  @media (min-width: 900px) {
    grid-template-columns: 180px 1fr;
  }
`;

const ExperienceMeta = styled.div``;

const ExperienceRegion = styled.div`
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;
`;

const ExperiencePeriod = styled.div`
  margin-top: 6px;
  color: rgba(255, 255, 255, 0.45);
  font-size: 12px;
`;

const ExperienceBody = styled.div``;

const ExperienceCompany = styled.h3`
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

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
  display: grid;
  gap: 10px;
`;

const BulletItem = styled.li`
  display: flex;
  gap: 12px;
  color: rgba(255, 255, 255, 0.74);
  font-size: 14px;
  line-height: 1.8;
`;

const BulletDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #93c5fd;
  margin-top: 10px;
  flex-shrink: 0;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
`;

const DarkTag = styled.div`
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.72);
  font-size: 11px;
  font-weight: 600;
`;

const ShowcaseOuter = styled.div`
  border-radius: 22px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 10px;
`;

const ShowcaseInner = styled.div`
  border-radius: 18px;
  background: #ffffff;
  padding: 18px;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
`;

const ShowcaseTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 18px;
  margin-bottom: 16px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const SmallLabel = styled.div`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #94a3b8;
`;

const ShowcaseTitle = styled.h3`
  margin: 6px 0 0;
  color: #0f172a;
  font-size: 22px;
  font-weight: 800;
`;

const FeatureTag = styled.div`
  padding: 8px 12px;
  border-radius: 999px;
  background: #eff6ff;
  color: #1d4ed8;
  font-size: 11px;
  font-weight: 800;
  white-space: nowrap;
`;

const ShowcaseImage = styled.div`
  width: 100%;
  height: 260px;
  border-radius: 18px;
  background: linear-gradient(135deg, #dbeafe, #e2e8f0 45%, #cbd5e1);

  @media (min-width: 768px) {
    height: 360px;
  }
`;

const ShowcaseBottom = styled.div`
  display: grid;
  gap: 18px;
  margin-top: 18px;

  @media (min-width: 900px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
`;

const ShowcaseDescription = styled.p`
  margin: 0;
  color: #64748b;
  font-size: 15px;
  line-height: 1.9;
`;

const InfoCard = styled.div`
  background: #f8fafc;
  border-radius: 18px;
  padding: 18px;
  display: grid;
  gap: 14px;
`;

const InfoBlock = styled.div``;

const InfoValue = styled.div`
  margin-top: 6px;
  color: #0f172a;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.6;
`;

const TabsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
`;

const ProjectTab = styled.button`
  border-radius: 18px;
  padding: 11px 14px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid
    ${(props) => (props.active ? "#bfdbfe" : "rgba(15, 23, 42, 0.1)")};
  background: ${(props) => (props.active ? "#eff6ff" : "#ffffff")};
  color: ${(props) => (props.active ? "#1d4ed8" : "#64748b")};

  &:hover {
    transform: translateY(-1px);
    color: #0f172a;
  }
`;

const CvGrid = styled.div`
  display: grid;
  gap: 28px;

  @media (min-width: 900px) {
    grid-template-columns: 0.92fr 1.08fr;
    align-items: center;
  }
`;

const CvText = styled.div``;

const CvTitle = styled.h3`
  margin: 8px 0 0;
  color: #0f172a;
  font-size: 48px;
  line-height: 0.98;
  font-weight: 900;
  letter-spacing: -0.04em;

  @media (max-width: 767px) {
    font-size: 36px;
    line-height: 1;
  }
`;

const CvDescription = styled.p`
  margin: 18px 0 0;
  max-width: 500px;
  color: #64748b;
  font-size: 15px;
  line-height: 1.9;
`;

const CvPreview = styled.div`
  max-width: 460px;
  width: 100%;
  margin: 0 auto;
  border-radius: 28px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 20px;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
`;

const BrowserDots = styled.div`
  display: flex;
  gap: 6px;
  padding: 0 6px;
  margin-bottom: 14px;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: ${(props) =>
    props.pink ? "#fda4af" : props.yellow ? "#fcd34d" : "#86efac"};
`;

const DocumentShell = styled.div`
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  background: linear-gradient(180deg, #ffffff, #f8fafc);
  padding: 16px;
`;

const DocumentContent = styled.div`
  min-height: 420px;
  border-radius: 16px;
  background: linear-gradient(180deg, #ffffff, #f8fafc);
  padding: 16px;
`;

const DocumentName = styled.div`
  color: #0f172a;
  font-size: 20px;
  font-weight: 800;
`;

const DocumentRole = styled.div`
  margin-top: 6px;
  color: #94a3b8;
  font-size: 12px;
`;

const DocumentLines = styled.div`
  margin-top: 22px;
  display: grid;
  gap: 8px;
`;

const DocumentSection = styled.div`
  margin-top: 24px;
  display: grid;
  gap: 8px;
`;

const Line = styled.div`
  width: ${(props) => props.width || "100%"};
  height: 8px;
  border-radius: 999px;
  background: #e2e8f0;
`;

const SectionStub = styled.div`
  width: ${(props) => props.width || "120px"};
  height: 12px;
  border-radius: 999px;
  background: #cbd5e1;
  margin-bottom: 2px;
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-top: 28px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const ToolCard = styled.div`
  border-radius: 22px;
  padding: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

const ToolIcon = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bfdbfe;
  font-size: 20px;
`;

const ToolLabel = styled.div`
  margin-top: 14px;
  font-size: 14px;
  font-weight: 700;
`;

const GuidelinesGrid = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GuidelineTitle = styled.h4`
  margin: 0;
  color: #0f172a;
  font-size: 20px;
  font-weight: 800;
`;

const GuidelineText = styled.p`
  margin: 12px 0 0;
  color: #64748b;
  font-size: 15px;
  line-height: 1.8;
`;