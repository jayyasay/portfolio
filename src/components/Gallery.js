import styled from "styled-components";
import GalleryThumbnails from "./GalleryThumbnails";

// import required modules

const H2 = styled.h2`
text-align: center;

& + p {
    text-align: center;
    }
}
`;

const Gallery = () => {
  return (
    <>
      <div id="portfolio">
        <H2>My Work</H2>
        <p>Click thumbnails below to know more.</p>
        <GalleryThumbnails />
      </div>
    </>
  );
};

export default Gallery;
