import styled from "styled-components";
import HfImage from "../assets/holiday-factory-logo.png";
import HfPremiumImage from "../assets/holiday-factory-premium.png";
import TelusBusiness from "../assets/telus-business-logo.svg";

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

const Img = styled.img``;

const GalleryThumbnails = () => {
  return (
    <MainWrapper>
      <ImageWrapper>
        <Img src={HfImage} />
      </ImageWrapper>
      <ImageWrapper>
        <Img src={HfPremiumImage} />
      </ImageWrapper>
      <ImageWrapper>
        <Img src={TelusBusiness} />
      </ImageWrapper>
    </MainWrapper>
  );
};

export default GalleryThumbnails;
