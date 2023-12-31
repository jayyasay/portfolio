import "./App.css";
import Navigation from "./components/Navigation";
import Experience from "./pages/Experience";
import MyCv from "./pages/MyCv";
import About from "./pages/About";
import styled from "styled-components";
import { Analytics } from "@vercel/analytics/react";
import { pdfjs } from "react-pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.js";
import Gallery from "./components/Gallery";
import PoweredBy from "./components/PoweredBy";
import { motion, useScroll } from "framer-motion";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const Main = styled.main`
  position: relative;
  top: 72.813px;
  z-index: 1;
`;

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Navigation />
      <motion.div style={{ scaleX: scrollYProgress }} className="progress-bar" />
      <Main>
        <About />
        <Experience />
        <Gallery />
        <MyCv />
        <PoweredBy />
      </Main>
      <Analytics />
      {/* Add other sections here */}
    </>
  );
}

export default App;
