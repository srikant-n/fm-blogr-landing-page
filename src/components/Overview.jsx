import React from "react";
import styled from "styled-components";
import { Heading, Padding, Paragraph } from "./commonComponents";
import phones from "../../images/illustration-phones.svg";
import bgPattern from "../../images/bg-pattern-circles.svg";

const Container = styled.div`
  position: relative;
  @media (min-width: 900px) {
    height: 500px;
  }
`;

/**
 * Background with colour and pattern
 */
const Backdrop = styled(Padding)`
  position: relative;
  background: linear-gradient(180deg, hsl(237, 17%, 21%) 0%, hsl(237, 23%, 32%) 100%);
  width: 100%;
  padding: 250px 0 110px 0;
  border-bottom-left-radius: 100px;
  border-top-right-radius: 100px;
  margin-top: 205px;
  overflow: hidden;

  @media (min-width: 900px) {
    background: linear-gradient(90deg, hsl(237, 17%, 21%) 0%, hsl(237, 23%, 32%) 100%);
    height: 400px;
    margin-top: 75px;
    padding: 10px 0;
  }
`;

/**
 * Pattern on the background
 */
const BgPattern = styled.img.attrs(() => ({ src: bgPattern, alt="" }))`
  position: absolute;
  left: 50%;
  top: -36%;
  transform: translateX(-50%);
  width: auto;
  height: 95%;

  @media (min-width: 900px) {
    height: 250%;
    left: 12%;
    top: -122%;
  }
`;

/**
 * Illustration
 */
const Phones = styled.img.attrs(() => ({ src: phones, alt="" }))`
  position: absolute;
  width: auto;
  margin: 20px 0;
  height: 400px;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  @media (min-width: 900px) {
    height: 580px;
    top: -80px;
    margin: 0;
    right: 51%;
    left: unset;
    transform: unset;
  }
`;

const Content = styled.div`
  @media (min-width: 900px) {
    padding: 60px 0 20px 51%;
  }
`;

/**
 * Heading
 */
const MainHeading = styled(Heading)`
  color: white;
  font-size: 2.5em;
  margin-top: 6px;
  letter-spacing: -1px;
`;

/**
 * Content
 */
const ParagraphWhite = styled(Paragraph)`
  color: white;
`;

/**
 * Overview content for Blogr
 */
class Overview extends React.Component {
  render() {
    return (
      <Container id="overview">
        <Phones />
        <Backdrop>
          <BgPattern />
          <Padding>
            <Content>
              <MainHeading>State of the Art Infrastructure</MainHeading>
              <ParagraphWhite>
                With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast
                connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your
                site competitive.
              </ParagraphWhite>
            </Content>
          </Padding>
        </Backdrop>
      </Container>
    );
  }
}

export default Overview;
