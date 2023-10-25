import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  width: fit-content;
  background: #fff;
  filter: drop-shadow(-1px -2px 4px #ababab);
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 2;
`;

const Button = styled.button`
  border: 0;
  background: transparent;

  &:hover {
    cursor: pointer;
  }
`;

const Pagination = styled.p`
  color: #000;
  font-size: 10px;
`;

const RelativeBlock = styled.div`
  position: relative;
  width: 100%;
//   @media screen and (min-width: 768px) {
//     width: 612px;
//     margin: auto;
//   }
`;

export default function Test() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <RelativeBlock>
        <Document
          file={`${process.env.PUBLIC_URL}/paolojayyasay_cv.pdf`}
          //   file={myCV}
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Loading CV..."
          renderMode="canvas"
          className="pdfSize"
          style={{ position: "relative" }}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <Flex>
          <Button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            <HiArrowSmLeft />
          </Button>
          <Pagination>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </Pagination>
          <Button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            <HiArrowSmRight />
          </Button>
        </Flex>
      </RelativeBlock>
    </>
  );
}
