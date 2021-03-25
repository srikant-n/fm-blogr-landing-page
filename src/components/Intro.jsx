import React from "react";
import styled from "styled-components";
import { Button, Padding } from "./commonComponents";
import bgUrl from "../../images/bg-pattern-intro.svg";
import Header from "./Header.jsx";

/**
 * Filled button based on Button
 */
const ButtonFilled = styled(Button)`
  background-color: white;
  color: hsl(356, 100%, 66%);
  :hover {
    background-color: hsl(355, 100%, 74%);
    color: white;
  }
`;

/**
 * Outline button based on Button
 */
const ButtonOutline = styled(Button)`
  border: 1px solid white;
  :hover {
    background-color: white;
    color: hsl(356, 100%, 66%);
  }
`;

/**
 * Background for Intro, gradient and image
 */
const Background = styled.div`
  background: url(${bgUrl}) -370px -280px no-repeat,
    linear-gradient(90deg, hsl(13, 100%, 72%) 0%, hsl(353, 100%, 62%) 100%);
  background-size: 1400px;
  width: 100%;
  height: 600px;
  border-bottom-left-radius: 100px;

  @media (min-width: 700px) {
    background: url(${bgUrl}) -440px -1350px no-repeat,
      linear-gradient(90deg, hsl(13, 100%, 72%) 0%, hsl(353, 100%, 62%) 100%);
  }
`;

/**
 * Intro section
 */
class Intro extends React.Component {
  render() {
    return (
      <Background>
        <Padding>
          <Header />
        </Padding>
      </Background>
    );
  }
}

export default Intro;
