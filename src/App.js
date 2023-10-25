import "./App.css";
import Navigation from "./components/Navigation";
import Experience from "./pages/Experience";
import MyCv from "./pages/MyCv";
import About from "./pages/About";
import styled from "styled-components";
import { Analytics } from "@vercel/analytics/react";
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const Main = styled.main`
  position: relative;
  top: 72.813px;
  z-index: 1;
`;

function App() {
  return (
    <>
      <Navigation />
      <Main>
        <About />
        <Experience />
        <MyCv />
      </Main>
      <Analytics />
      {/* Add other sections here */}
    </>
  );
}

export default App;
