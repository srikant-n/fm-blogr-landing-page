import React from "react";
import Footer from "./components/Footer.jsx";
import styled from "styled-components";
import Intro from "./components/Intro.jsx";
import Features from "./components/Features.jsx";

const StyledApp = styled.div`
  font-family: "Overpass", sans-serif;
`;
class App extends React.Component {
  render() {
    return (
      <StyledApp>
        <Intro />
        <Features />
        <Footer />
      </StyledApp>
    );
  }
}

export default App;
