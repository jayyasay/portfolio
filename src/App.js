import "./App.css";
import Navigation from "./components/Navigation";
import Experience from "./pages/Experience";
import MyCv from "./pages/MyCv";
import About from "./pages/About";
import styled from "styled-components";
import { Analytics } from "@vercel/analytics/react";
import { pdfjs } from "react-pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.js";
import PoweredBy from "./components/PoweredBy";
import MyWorkCarousel from "./components/MyWorkCarousel";
import SectionTracker from "./components/SectionTracker";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const Main = styled.main`
  position: relative;
  z-index: 1;
  top: 40px;
`;

function App() {
  return (
    <>
      <Navigation />
      <Main>
        <About />
        <SectionTracker
          eventName="experience_view"
          eventParams={{ section_name: "Experience" }}
        >
          <Experience />
        </SectionTracker>

        <SectionTracker
          eventName="mywork_view"
          eventParams={{ section_name: "My Work" }}
        >
          <MyWorkCarousel />
        </SectionTracker>

        <SectionTracker
          eventName="cv_view"
          eventParams={{ section_name: "CV" }}
        >
          <MyCv />
        </SectionTracker>
        <PoweredBy />
      </Main>
      <Analytics />
    </>
  );
}

export default App;
