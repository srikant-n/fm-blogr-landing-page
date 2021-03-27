import React from "react";
import Footer from "./components/Footer.jsx";
import styled from "styled-components";
import Intro from "./components/Intro.jsx";
import Features from "./components/Features.jsx";
import Overview from "./components/Overview.jsx";
import Integrations from "./components/Integrations.jsx";

const StyledApp = styled.div`
  font-family: "Overpass", sans-serif;
`;

class App extends React.Component {
  render() {
    return (
      <StyledApp>
        <Intro />
        <Features />
        <Overview />
        <Integrations />
        <Footer />
      </StyledApp>
    );
  }
}

export default App;
