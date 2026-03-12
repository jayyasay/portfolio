import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import bookingEngine1 from "../assets/works/booking-engine1.webp";
import bookingEngine2 from "../assets/works/booking-engine2.webp";
import bookingEngine3 from "../assets/works/booking-engine3.webp";
import bookingEngine4 from "../assets/works/booking-engine4.webp";

const projects = [
  {
    id: 1,
    title: "Holiday Factory Booking Experience",
    category: "Travel / Booking Platform",
    subtitle:
      "Frontend work focused on clearer booking flow, responsive behavior, and conversion-led UI.",
    description:
      "Worked on frontend implementation and maintenance for a high-traffic travel platform, improving usability across booking steps and helping launch new frontend experiences across multiple products.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "Responsive UI"],
    images: [bookingEngine1, bookingEngine2, bookingEngine3, bookingEngine4],
    thumbnail: bookingEngine1,
    liveLink: "#",
    caseStudyLink: "#",
  },
  {
    id: 2,
    title: "Shopify Custom Sections System",
    category: "Ecommerce / Theme Customization",
    subtitle:
      "Reusable storefront sections designed for flexibility, cleaner UX, and easier client editing.",
    description:
      "Built configurable Shopify sections that let clients update content, layouts, and key visual elements without breaking consistency. Focused on balancing flexibility with maintainability.",
    tags: ["Shopify", "Liquid", "CSS", "JavaScript", "Theme System"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    liveLink: "#",
    caseStudyLink: "#",
  },
  {
    id: 3,
    title: "WooCommerce Booking Logic",
    category: "WordPress / Booking UX",
    subtitle:
      "Custom product and booking interactions for more structured and user-friendly flows.",
    description:
      "Implemented frontend and platform-level behavior for booking-related products, including structured selection logic, quantity-related flows, and clearer presentation of pricing and participant options.",
    tags: ["WordPress", "WooCommerce", "PHP", "JavaScript", "UX"],
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    liveLink: "#",
    caseStudyLink: "#",
  },
  {
    id: 4,
    title: "Business Website UI Builds",
    category: "Marketing / Lead Generation",
    subtitle:
      "Responsive client websites designed for trust, clarity, and stronger conversion flow.",
    description:
      "Delivered polished business-facing websites with attention to visual hierarchy, responsive behavior, and editable content structures for real-world client use.",
    tags: ["React", "WordPress", "Styled Components", "UI/UX"],
    images: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
    ],
    thumbnail:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop",
    liveLink: "#",
    caseStudyLink: "#",
  },
];

const slideVariants = {
  initial: { opacity: 0, y: 20, scale: 0.985 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.99,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

const MyWorkCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const activeProject = useMemo(() => projects[activeIndex], [activeIndex]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const openModal = (imageIndex = 0) => {
    setModalImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goModalPrev = () => {
    setModalImageIndex((prev) =>
      prev === 0 ? activeProject.images.length - 1 : prev - 1,
    );
  };

  const goModalNext = () => {
    setModalImageIndex((prev) =>
      prev === activeProject.images.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <Section id="work">
      <Inner>
        <Header>
          <HeaderLeft>
            <Eyebrow>My Work</Eyebrow>
            <Title>
              Frontend work powering real bookings, real stores, and real
              businesses.
            </Title>
          </HeaderLeft>

          <HeaderRight>
            <IntroText>
              A curated collection of projects across ecommerce, booking
              platforms, and custom web applications. Designed, built, and
              shipped for companies that needed things to actually work.
            </IntroText>
          </HeaderRight>
        </Header>

        <CarouselShell>
          <PreviewCard>
            <PreviewTop>
              <PreviewMeta>
                <MetaLabel>Currently Viewing</MetaLabel>
                <MetaTitle>{activeProject.category}</MetaTitle>
              </PreviewMeta>

              <Controls>
                <ArrowButton onClick={goPrev} aria-label="Previous project">
                  ←
                </ArrowButton>
                <ArrowButton onClick={goNext} aria-label="Next project">
                  →
                </ArrowButton>
              </Controls>
            </PreviewTop>

            <PreviewViewport>
              <AnimatePresence mode="wait">
                <Slide
                  key={activeProject.id}
                  as={motion.div}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <BrowserFrame onClick={() => openModal(0)}>
                    <BrowserTop>
                      <Dots>
                        <Dot />
                        <Dot />
                        <Dot />
                      </Dots>
                      <BrowserLabel>{activeProject.title}</BrowserLabel>
                    </BrowserTop>

                    <ThumbnailWrap onClick={() => openModal(0)}>
                      <ProjectImage
                        src={activeProject.thumbnail}
                        alt={activeProject.title}
                      />

                      <ImageOverlay>
                        <OverlayIcon>🔍</OverlayIcon>
                        <OverlayText>View Screens</OverlayText>
                      </ImageOverlay>
                    </ThumbnailWrap>
                  </BrowserFrame>
                </Slide>
              </AnimatePresence>
            </PreviewViewport>

            <ContentRow>
              <ContentMain>
                <ProjectTitle>{activeProject.title}</ProjectTitle>
                <ProjectSubtitle>{activeProject.subtitle}</ProjectSubtitle>
                <ProjectDescription>
                  {activeProject.description}
                </ProjectDescription>

                <Tags>
                  {activeProject.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </Tags>

                <Buttons>
                  <PrimaryButton href={activeProject.liveLink}>
                    Live Preview
                  </PrimaryButton>
                </Buttons>
              </ContentMain>

              <ContentSide>
                <SideCard>
                  <SideLabel>Project Type</SideLabel>
                  <SideValue>{activeProject.category}</SideValue>
                </SideCard>

                <SideCard>
                  <SideLabel>Focus</SideLabel>
                  <SideValue>
                    UX clarity, responsive implementation, and maintainable
                    frontend structure.
                  </SideValue>
                </SideCard>
              </ContentSide>
            </ContentRow>
          </PreviewCard>

          <ThumbRail>
            {projects.map((project, index) => (
              <ThumbCard
                key={project.id}
                onClick={() => goToSlide(index)}
                $active={index === activeIndex}
                as={motion.button}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                type="button"
              >
                <ThumbImageWrap>
                  <ThumbImage src={project.thumbnail} alt={project.title} />
                </ThumbImageWrap>

                <ThumbText>
                  <ThumbTitle $active={index === activeIndex}>
                    {project.title}
                  </ThumbTitle>
                  <ThumbCategory $active={index === activeIndex}>
                    {project.category}
                  </ThumbCategory>
                </ThumbText>
              </ThumbCard>
            ))}
          </ThumbRail>
        </CarouselShell>

        {createPortal(
          <AnimatePresence>
            {isModalOpen && (
              <ModalOverlay
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
              >
                <ModalContent
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ModalTop>
                    <ModalTitle>{activeProject.title}</ModalTitle>
                    <ModalCloseButton
                      onClick={closeModal}
                      aria-label="Close modal"
                    >
                      ✕
                    </ModalCloseButton>
                  </ModalTop>

                  <ModalImageWrap>
                    <ModalNavButton
                      type="button"
                      onClick={goModalPrev}
                      aria-label="Previous image"
                      $left
                    >
                      ←
                    </ModalNavButton>

                    <ModalImage
                      src={activeProject.images[modalImageIndex]}
                      alt={`${activeProject.title} screenshot ${modalImageIndex + 1}`}
                    />

                    <ModalNavButton
                      type="button"
                      onClick={goModalNext}
                      aria-label="Next image"
                    >
                      →
                    </ModalNavButton>
                  </ModalImageWrap>

                  <ModalFooter>
                    <ModalCount>
                      {modalImageIndex + 1} / {activeProject.images.length}
                    </ModalCount>

                    <ModalThumbs>
                      {activeProject.images.map((image, index) => (
                        <ModalThumbButton
                          key={index}
                          type="button"
                          onClick={() => setModalImageIndex(index)}
                          $active={index === modalImageIndex}
                        >
                          <ModalThumbImage
                            src={image}
                            alt={`${activeProject.title} thumbnail ${index + 1}`}
                          />
                        </ModalThumbButton>
                      ))}
                    </ModalThumbs>
                  </ModalFooter>
                </ModalContent>
              </ModalOverlay>
            )}
          </AnimatePresence>,
          document.body,
        )}
      </Inner>
    </Section>
  );
};

export default MyWorkCarousel;

const Section = styled.section`
  width: 100%;
  padding: 70px 0;
  background: #f7f8fc;
`;

const Inner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  margin-bottom: 32px;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: end;
    margin-bottom: 42px;
  }
`;

const HeaderLeft = styled.div``;

const HeaderRight = styled.div`
  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  margin-bottom: 14px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: #5b6475;
  background: rgba(16, 24, 40, 0.04);
  border: 1px solid rgba(16, 24, 40, 0.06);
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 0;
  max-width: 720px;
  font-size: clamp(2rem, 4.6vw, 3.8rem);
  line-height: 1.02;
  letter-spacing: -0.045em;
  font-weight: 800;
  background: radial-gradient(135% 135% at 50% 0%, #1e3a8a 0%, #0f172a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const IntroText = styled.p`
  margin: 0;
  max-width: 430px;
  font-size: 1rem;
  line-height: 1.8;
  color: #5f6b7c;
`;

const CarouselShell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const PreviewCard = styled.div`
  padding: 18px;
  border-radius: 32px;
  background: linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
  border: 1px solid rgba(15, 23, 42, 0.07);
  box-shadow:
    0 10px 30px rgba(15, 23, 42, 0.05),
    0 24px 60px rgba(15, 23, 42, 0.06);

  @media screen and (min-width: 768px) {
    padding: 24px;
  }

  @media screen and (min-width: 1100px) {
    padding: 28px;
  }
`;

const PreviewTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
`;

const PreviewMeta = styled.div``;

const MetaLabel = styled.div`
  margin-bottom: 5px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #7a8699;
`;

const MetaTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ArrowButton = styled.button`
  width: 46px;
  height: 46px;
  border: 0;
  border-radius: 999px;
  background: #ffffff;
  color: #111827;
  font-size: 1.15rem;
  cursor: pointer;
  box-shadow:
    0 6px 18px rgba(15, 23, 42, 0.06),
    inset 0 0 0 1px rgba(15, 23, 42, 0.08);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 10px 24px rgba(15, 23, 42, 0.08),
      inset 0 0 0 1px rgba(15, 23, 42, 0.1);
  }
`;

const PreviewViewport = styled.div`
  position: relative;
  min-height: 260px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    min-height: 420px;
  }

  @media screen and (min-width: 1200px) {
    min-height: 500px;
  }
`;

const Slide = styled.div`
  width: 100%;
`;

const BrowserFrame = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background: #f9fafc;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow:
    0 12px 28px rgba(15, 23, 42, 0.07),
    0 30px 60px rgba(15, 23, 42, 0.06);
  cursor: pointer;

  &:hover .image-overlay {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 6px;

  background: rgba(15, 23, 42, 0.35);
  backdrop-filter: blur(2px);

  opacity: 0;
  transform: translateY(6px);
  transition: all 0.25s ease;

  pointer-events: none;

  @media (hover: none) {
    opacity: 1;
    transform: none;
    background: rgba(15, 23, 42, 0.25);
  }
`;

const OverlayIcon = styled.div`
  font-size: 1.4rem;
  color: white;
`;

const OverlayText = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: white;
  letter-spacing: 0.04em;
`;

const BrowserTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  background: #ffffff;
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
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
  background: #ed6158;

  &:nth-child(2) {
    background: #fcc02e;
  }

  &:nth-child(3) {
    background: #5fc038;
  }
`;

const BrowserLabel = styled.span`
  max-width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.82rem;
  color: #667085;
`;

const ProjectImage = styled.img`
  display: block;
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.35s ease;

  @media screen and (min-width: 768px) {
    height: 400px;
  }

  @media screen and (min-width: 1200px) {
    height: 480px;
  }
`;

const ContentRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 28px;
    align-items: start;
  }
`;

const ContentMain = styled.div``;

const ProjectTitle = styled.h3`
  margin: 0 0 10px;
  font-size: clamp(1.7rem, 2vw, 2.5rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  font-weight: 800;
  color: #0f172a;
`;

const ProjectSubtitle = styled.p`
  margin: 0 0 14px;
  font-size: 1rem;
  line-height: 1.75;
  font-weight: 600;
  color: #344054;
`;

const ProjectDescription = styled.p`
  margin: 0 0 18px;
  font-size: 0.98rem;
  line-height: 1.85;
  color: #667085;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 22px;
`;

const Tag = styled.span`
  padding: 9px 12px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  color: #475467;
  background: #f4f6fa;
  border: 1px solid rgba(15, 23, 42, 0.06);
`;

const Buttons = styled.div`
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
  color: #ffffff;
  background: #111827;
  box-shadow: 0 10px 20px rgba(17, 24, 39, 0.14);

  &:hover {
    background: #0b1220;
  }
`;

const SecondaryButton = styled(BaseButton)`
  color: #111827;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.1);
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.04);

  &:hover {
    background: #f8fafc;
  }
`;

const ContentSide = styled.div`
  display: grid;
  gap: 14px;
`;

const SideCard = styled.div`
  padding: 18px;
  border-radius: 22px;
  background: #f8fafc;
  border: 1px solid rgba(15, 23, 42, 0.06);
`;

const SideLabel = styled.div`
  margin-bottom: 7px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #7a8699;
`;

const SideValue = styled.div`
  font-size: 0.96rem;
  line-height: 1.7;
  color: #344054;
`;

const ThumbRail = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ThumbCard = styled.button`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 12px;
  border-radius: 22px;
  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(17, 24, 39, 0.18)" : "rgba(15, 23, 42, 0.06)"};
  background: ${({ $active }) =>
    $active
      ? "radial-gradient(135% 135% at 50% 0%, #1e3a8a 0%, #0f172a 100%)"
      : "#fbfcff"};
  box-shadow: ${({ $active }) =>
    $active
      ? "0 10px 22px rgba(15, 23, 42, 0.07)"
      : "0 4px 12px rgba(15, 23, 42, 0.03)"};
  cursor: pointer;
  text-align: left;
  transition: all 0.25s ease;
  min-width: 0;
`;

const ThumbImageWrap = styled.div`
  flex: 0 0 82px;
  height: 62px;
  overflow: hidden;
  border-radius: 14px;
  background: #eef2f7;
`;

const ThumbImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ThumbText = styled.div`
  min-width: 0;
`;

const ThumbTitle = styled.div`
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ $active }) => ($active ? "#ffffff" : "#111827")};
`;

const ThumbCategory = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.82rem;
  color: ${({ $active }) => ($active ? "#ffffff" : "#667085")};
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(15, 23, 42, 0.72);
  backdrop-filter: blur(10px);
`;

const ModalContent = styled.div`
  width: min(1100px, 100%);
  max-height: 90vh;
  overflow: auto;
  border-radius: 28px;
  background: #ffffff;
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.28);
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 24px;
  }
`;

const ModalTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
`;

const ModalTitle = styled.h4`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #111827;
`;

const ModalCloseButton = styled.button`
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 999px;
  background: #f3f4f6;
  color: #111827;
  cursor: pointer;
  font-size: 1rem;
`;

const ModalImageWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  overflow: hidden;
  background: #f8fafc;
`;

const ModalImage = styled.img`
  display: block;
  width: 100%;
  max-height: 68vh;
  object-fit: contain;
  background: #f8fafc;
`;

const ModalNavButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ $left }) => ($left ? "left: 14px;" : "right: 14px;")}
  transform: translateY(-50%);
  width: 46px;
  height: 46px;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: #111827;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
`;

const ModalFooter = styled.div`
  margin-top: 16px;
`;

const ModalCount = styled.div`
  margin-bottom: 12px;
  font-size: 0.9rem;
  color: #667085;
`;

const ModalThumbs = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 4px;
`;

const ModalThumbButton = styled.button`
  flex: 0 0 auto;
  width: 84px;
  height: 60px;
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid
    ${({ $active }) => ($active ? "#1e3a8a" : "rgba(15, 23, 42, 0.08)")};
  background: #fff;
`;

const ModalThumbImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ThumbnailWrap = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: #f8fafc;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow:
    0 12px 28px rgba(15, 23, 42, 0.07),
    0 30px 60px rgba(15, 23, 42, 0.06);

  &:hover img {
    transform: scale(1.04);
  }

  &:hover div {
    opacity: 1;
    transform: translateY(0);
  }
`;
