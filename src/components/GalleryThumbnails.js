import { useState } from "react";
import styled from "styled-components";
import HfImage from "../assets/holiday-factory-logo.png";
import HfPremiumImage from "../assets/holiday-factory-premium.png";
import TelusBusiness from "../assets/telus-business-logo.svg";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FreeMode, Pagination } from "swiper/modules";

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
  width: 60%;
`;
const SwiperTextWrapper = styled(Swiper)`
  width: 40%;
`;



const SwiperWrapper = styled.div`
  display: flex;
`;

const detailedWorkContents = [
  {
    thumbnailImage: HfImage,
    imagesForSlider: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
    title: "Holiday Factory",
    text: "Responsible for carrying out the implementation of fresh designs and complex functionalities, along with the integration of automated processes.",
  },
  {
    thumbnailImage: HfPremiumImage,
    imagesForSlider: [],
    title: "Holiday Factory Premium",
    text: "Effectively spearheaded the development and execution of the Holiday Factory Premium website, constructing the code from the ground up and ensuring its complete functionality, which included the successful incorporation of a multi-language feature, specifically Arabic.",
  },
  {
    thumbnailImage: TelusBusiness,
    imagesForSlider: [],
    title: "TELUS Business",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
        <ImageWrapper kay={content.title} onClick={() => openModal(index)}>
          <img src={content.thumbnailImage} />
        </ImageWrapper>
      ))}
      {currentContent && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalH3>{currentContent.title}</ModalH3>
          <SwiperWrapper>
            <SwiperContainer
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
            >
              {currentContent.imagesForSlider.map((content) => (
                <SwiperSlide>
                  <ImgSwiper src={content} />
                </SwiperSlide>
              ))}
            </SwiperContainer>
            <SwiperTextWrapper>{currentContent.text}</SwiperTextWrapper>
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
