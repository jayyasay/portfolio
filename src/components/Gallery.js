import styled from "styled-components";
import GalleryThumbnails from "./GalleryThumbnails";
import { motion } from "framer-motion";

const H2 = styled.h2`
  text-align: center;
  & + p {
    text-align: center;
  }
`;

const Wrapper = styled(motion.div)``; // removed visibility:hidden

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 50 }
};

const Gallery = () => {
  return (
    <>
      <Wrapper
        id="portfolio"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }} // triggers when half of the element is in view
      >
        <H2>My Work</H2>
        <p>Click thumbnails below to know more.</p>
        <GalleryThumbnails />
      </Wrapper>
    </>
  );
};


export default Gallery;
