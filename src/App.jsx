import React from "react";
import Footer from "./components/Footer.jsx";
import styled from "styled-components";

const StyledApp = styled.div`
  font-family: "Overpass", sans-serif;
`;

class App extends React.Component {
  render() {
    return (
      <StyledApp>
        <Footer />
      </StyledApp>
    );
  }
}

export default App;
