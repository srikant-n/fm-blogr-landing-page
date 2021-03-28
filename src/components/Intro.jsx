import React from "react";
import styled from "styled-components";
import { Button, Padding, ButtonFilled } from "./commonComponents";
import bgUrl from "../../images/bg-pattern-intro.svg";
import HeaderMobile from "./HeaderMobile.jsx";
import Header from "./Header.jsx";

/**
 * Outline button based on Button
 */
const LearnMoreButton = styled(Button).attrs(() => ({ value: "Learn More" }))`
  border: 1px solid white;
  :hover {
    background-color: white;
    color: hsl(356, 100%, 66%);
  }
`;

/**
 * Background for Intro, gradient and image
 */
const Background = styled(Padding)`
  position: relative;
  background: url(${bgUrl}) -370px -280px no-repeat,
    linear-gradient(90deg, hsl(13, 100%, 72%) 0%, hsl(353, 100%, 62%) 100%);
  background-size: 1400px;
  width: 100%;
  height: 600px;
  border-bottom-left-radius: 100px;
  padding-top: 55px;

  @media (min-width: 700px) {
    padding-top: 60px;
    background: url(${bgUrl}) -440px -1350px no-repeat,
      linear-gradient(90deg, hsl(13, 100%, 72%) 0%, hsl(353, 100%, 62%) 100%);
  }
`;

/**
 * Main intro content holder
 */
const Content = styled.div`
  margin-top: 10px;
  position: absolute;
  width: 80%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

/**
 * Main text for intro
 */
const Heading = styled.h1`
  color: white;
  font-size: 2.1em;
  margin-bottom: 0;

  @media (min-width: 700px) {
    font-size: 3.75em;
  }
`;

/**
 * Subtext
 */
const Paragraph = styled.p`
  color: white;
  font-size: 1.1em;
  margin-bottom: 50px;

  @media (min-width: 700px) {
    font-size: 1.25em;
  }
`;

/**
 * Buttons container
 */
const Buttons = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

/**
 * Intro section
 */
class Intro extends React.Component {
  render() {
    return (
      <Background>
        <Header />
        <HeaderMobile />
        <Content>
          <Heading>A modern publishing platform</Heading>
          <Paragraph>Grow your audience and build your online brand</Paragraph>
          <Buttons>
            <ButtonFilled value="Start for Free" />
            <LearnMoreButton />
          </Buttons>
        </Content>
      </Background>
    );
  }
}

export default Intro;
