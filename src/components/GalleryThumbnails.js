import { useState } from "react";
import styled from "styled-components";
import HfImage from "../assets/holiday-factory-logo.png";
import HfPremiumImage from "../assets/holiday-factory-premium.png";
import TelusBusiness from "../assets/telus-business-logo.svg";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { BiLinkExternal } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

Modal.defaultStyles.overlay.background = "rgba(000, 000, 000, 0.5)";
Modal.defaultStyles.overlay.zIndex = "3";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  align-self: stretch;
  padding: 30px;
  &:hover {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease-in-out;
  }
  justify-content: center;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 0,
    width: "90%",
    color: "#fff",
    background: "#0E0E10",
    border: "none",
  },
};

const ImgSwiper = styled.img`
  height: 100%;
  width: unset;
`;

const ModalH3 = styled.h3`
  color: #fff;
`;

const CloseModal = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #fff;
  font-size: 25px;
  cursor: pointer;
`;

const SwiperContainer = styled(Swiper)`
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

const SwiperContainerContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

const SwiperTextWrapper = styled.div`
  margin-bottom: 10px;
`;

const SwiperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: unset;
    align-items: center;
  }
`;

const Ul = styled.ul`
  padding-left: 20px;
`;

const Li = styled.li`
  font-size: 12px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  text-decoration: none;
  margin-top: auto;
  border: 1px solid #ddd;
  padding: 5px 12px;
  border-radius: 15px;
  width: fit-content;
`;

const bulletsForHf = [
  "Successfully led the development and implementation of Holiday Factory Premium and Holiday Factory Georgia websites, creating code from scratch and ensuring full functionality including the implementation of a multi-language (Arabic and Georgian)",
  "Collaborated with the Marketing team to create webpages for bank campaigns, aligning website content with promotional activities.",
  "Implemented automated price updates by fetching data from the backend, reducing manual update time by 80%.",
  "Worked closely with designers to ensure the mobile-friendliness of the website and collaborated effectively with the backend team to achieve desired results.",
];

const detailedWorkContents = [
  {
    thumbnailImage: HfImage,
    imagesForSlider: [
      "https://media.licdn.com/dms/image/D4D2DAQFC_pxgF2TWww/profile-treasury-document-images_480/1/1688453862878?e=1699488000&v=beta&t=3f6aoQdQiRW58919YD5--MujkaA6D7JAZqrOgORFL9s",
      "https://media.licdn.com/dms/image/D4D2DAQFC_pxgF2TWww/profile-treasury-document-images_480/2/1688453862878?e=1699488000&v=beta&t=omBmofpwoG2APwfVlpc8xtEOLvIZsF8R-ptVBpNwQuE",
      "https://media.licdn.com/dms/image/D4D2DAQFC_pxgF2TWww/profile-treasury-document-images_480/3/1688453862878?e=1699488000&v=beta&t=wbZMPwXZiTkZyAZh-Qx_MimQbQ4stqL_5khMFNR58EQ",
      "https://media.licdn.com/dms/image/D4D2DAQFC_pxgF2TWww/profile-treasury-document-images_480/4/1688453862878?e=1699488000&v=beta&t=qfPVgL34qXZzIncveTUMl7hjKJpNPeH0UxOjIMy8tn4",
    ],
    title: "Holiday Factory",
    text: "Responsible for carrying out the implementation of fresh designs and complex functionalities, along with the integration of automated processes.",
    link: "https://www.holiday-factory.com/",
    bullets: bulletsForHf,
  },
  {
    thumbnailImage: HfPremiumImage,
    imagesForSlider: [
      "https://media.licdn.com/dms/image/D4D2DAQHBcsVGkEpQWw/profile-treasury-document-images_480/1/1688453894339?e=1699488000&v=beta&t=e4TswyntVIoJxNq-24Utyl0XVhyJPqWZeC-e2G_-m7o",
      "https://media.licdn.com/dms/image/D4D2DAQHBcsVGkEpQWw/profile-treasury-document-images_480/2/1688453894339?e=1699488000&v=beta&t=8eBNDNyrs1nl_Aqc4ULuo1-qNlHyclKrwbqEvmSR_MA",
      "https://media.licdn.com/dms/image/D4D2DAQHBcsVGkEpQWw/profile-treasury-document-images_480/3/1688453894339?e=1699488000&v=beta&t=RzQdxpee9pyaU9BjeyQ8V68JCf7eMEz24G-cr5GFyKE",
      "https://media.licdn.com/dms/image/D4D2DAQHBcsVGkEpQWw/profile-treasury-document-images_480/4/1688453894339?e=1699488000&v=beta&t=pO__u-NbdBFqdXf5ucqgsGUy0tVe8ANeVY2304hOjGQ",
    ],
    title: "Holiday Factory Premium",
    text: "Effectively spearheaded the development and execution of the Holiday Factory Premium website, constructing the code from the ground up and ensuring its complete functionality, which included the successful incorporation of a multi-language feature, specifically Arabic.",
    link: "https://www.holidayfactorypremium.com/",
    bullets: bulletsForHf,
  },
  {
    thumbnailImage: TelusBusiness,
    imagesForSlider: [],
    title: "TELUS Business",
    text: "Recruited as Web Developer (2014) and got promoted to Intermediate Web Developer (2017) and had the opportunity to lead a team. Responsible for developing and maintaining websites, product launches, E-commerce solutions, and leading a group of Developers in Manila. Established good stakeholder relationships by implementing what the business needs.",
    link: "https://www.telus.com/en/business/small",
    bullets: [
      "Launched countless devices on business segment including product page development, and creating plans that company has to offer",
      "Completed complex web content projects with a cross-functional team. Ensured all product pages are responsive on all device mediums",
      "Collaborated with clients to implement the requirements to capture content and design for page development efforts",
      "Taught Product Owner and QA in the team's process, usage of the content management system, and dealing with stakeholders. Supervised a growing team of nine Web Developers and one .NET developer",
    ],
  },
];

const GalleryThumbnails = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentContentIndex, setCurrentContentIndex] = useState(null);

  function openModal(index) {
    setModalIsOpen(true);
    setCurrentContentIndex(index);
  }

  function closeModal() {
    setModalIsOpen(false);
    setCurrentContentIndex(null);
  }

  const currentContent =
    currentContentIndex !== null
      ? detailedWorkContents[currentContentIndex]
      : null;

  return (
    <MainWrapper>
      {detailedWorkContents.map((content, index) => (
        <ImageWrapper key={content.title} onClick={() => openModal(index)}>
          <img src={content.thumbnailImage} />
        </ImageWrapper>
      ))}
      {currentContent && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          key={currentContent.title}
        >
          <ModalH3>{currentContent.title}</ModalH3>
          <SwiperWrapper>
            {currentContent.imagesForSlider.length !== 0 && (
              <SwiperContainer
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                lazy={true}
                slidesPerView={3}
                spaceBetween={30}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination]}
              >
                {currentContent.imagesForSlider.map((content) => (
                  <SwiperSlide>
                    <ImgSwiper src={content} key={content} loading="lazy" />
                  </SwiperSlide>
                ))}
              </SwiperContainer>
            )}
            <SwiperContainerContent>
              <SwiperTextWrapper>{currentContent.text}</SwiperTextWrapper>
              <Ul>
                {currentContent.bullets &&
                  currentContent.bullets.map((bullet) => (
                    <Li key={bullet}>{bullet}</Li>
                  ))}
              </Ul>
              {currentContent.link && (
                <Link href={currentContent.link} target="_blank">
                  View website <BiLinkExternal />
                </Link>
              )}
            </SwiperContainerContent>
          </SwiperWrapper>
          <CloseModal onClick={closeModal}>
            <AiOutlineCloseCircle />
          </CloseModal>
        </Modal>
      )}
    </MainWrapper>
  );
};

export default GalleryThumbnails;
