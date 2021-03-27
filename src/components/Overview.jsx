import React from "react";
import styled from "styled-components";
import { Heading, Padding, Paragraph, Space } from "./commonComponents";
import phones from "../../images/illustration-phones.svg";
import bgPattern from "../../images/bg-pattern-circles.svg";

/**
 * Background with colour and pattern
 */
const Backdrop = styled(Padding)`
  position: absolute;
  background: linear-gradient(180deg, hsl(237, 17%, 21%) 0%, hsl(237, 23%, 32%) 100%);
  width: 100%;
  height: 625px;
  border-bottom-left-radius: 100px;
  border-top-right-radius: 100px;
  margin-top: 205px;
  overflow: clip;
  z-index: -1;

  @media (min-width: 700px) {
    background: linear-gradient(90deg, hsl(237, 17%, 21%) 0%, hsl(237, 23%, 32%) 100%);
    height: 400px;
    margin-top: 75px;
  }
`;

/**
 * Pattern on the background
 */
const BgPattern = styled.img.attrs(() => ({ src: bgPattern }))`
  position: relative;
  left: 50%;
  top: -36%;
  transform: translateX(-50%);
  width: auto;
  height: 95%;

  @media (min-width: 700px) {
    height: 250%;
    left: 12%;
    top: -122%;
  }
`;

/**
 * Illustration
 */
const Phones = styled.img.attrs(() => ({ src: phones }))`
  width: auto;
  margin: 20px 0 0 -25px;
  height: 400px;

  @media (min-width: 700px) {
    position: absolute;
    height: 580px;
    margin: 5px 0 0 -40px;
  }
`;

const Content = styled.div`
  @media (min-width: 700px) {
    padding: 190px 0 0 51%;
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
      <div id="overview">
        <Backdrop>
          <BgPattern />
        </Backdrop>

        <Padding>
          <Phones />
          <Content>
            <MainHeading>State of the Art Infrastructure</MainHeading>
            <ParagraphWhite>
              With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast
              connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your
              site competitive.
            </ParagraphWhite>
          </Content>
        </Padding>

        <Space height="180px" />
      </div>
    );
  }
}

export default Overview;
