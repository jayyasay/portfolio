import "./App.css";
import Navigation from "./components/Navigation";
import Experience from "./pages/Experience";
import About from "./pages/About";
import styled from "styled-components";
import { Analytics } from "@vercel/analytics/react";

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
        <About />
        <Experience />
        <About />
        <Experience />
        <About />
        <Experience />
        <About />
        <Experience />
      </Main>
      <Analytics />
      {/* Add other sections here */}
    </>
  );
}

export default App;
