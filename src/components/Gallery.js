import styled from "styled-components";
import { register } from "swiper/element/bundle";
import { Pagination } from "swiper/modules";
import GalleryThumbnails from "./GalleryThumbnails";
import "swiper/css";
import "swiper/css/pagination";

register();

// import required modules

const H2 = styled.h2`
text-align: center;

& + p {
    text-align: center;
    }
}
`;

const SwiperContainer = styled("swiper-container")`
  width: 100%;
  background-color: #ccc;
`;

const ParentWrapper = styled.div`
  display: flex;
`;

const ChildrenWrapper = styled.div`
  display: flex;
`;

const contents = [
  {
    image: "https://picsum.photos/200/300",
    title: "Title 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "https://picsum.photos/200/300",
    title: "Title 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Gallery = () => {
  return (
    <>
      <div id="portfolio">
        <H2>My Work</H2>
        <p>Click thumbnails below to know more.</p>
        <GalleryThumbnails />
        {/* <SwiperContainer
        id="portfolio"
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {contents.map((content) => (
          <swiper-slide>
            <ParentWrapper>
              <ChildrenWrapper>
                <img src={content.image} />
              </ChildrenWrapper>
              <ChildrenWrapper>
                <h3>{content.title}</h3>
                <p>{content.text}</p>
              </ChildrenWrapper>
            </ParentWrapper>
          </swiper-slide>
        ))}
      </SwiperContainer> */}
      </div>
    </>
  );
};

export default Gallery;
