import React from "react";
import styled from "styled-components";
import { Padding, Heading, Pragraph, Space, Paragraph } from "./commonComponents";
import laptopMobile from "../../images/illustration-laptop-mobile.svg";
import laptopDesktop from "../../images/illustration-laptop-desktop.svg";

/**
 * Laptop illustration on Mobile
 */
const IllustrationMobile = styled.img.attrs(() => ({ src: laptopMobile }))`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 18px;

  @media (min-width: 700px) {
    display: none;
  }
`;

/**
 * Laptop illustration on Desktop
 */
const IllustrationDesktop = styled.img.attrs(() => ({ src: laptopDesktop }))`
  position: absolute;
  left: -280px;
  display: none;

  @media (min-width: 700px) {
    display: block;
  }
`;

/**
 * Div for layouts
 */
const Content = styled.div`
  @media (min-width: 700px) {
    margin-left: 51%;
    padding-top: 185px;
  }
`;

class Integrations extends React.Component {
  render() {
    return (
      <div id="integrations">
        <Padding>
          <IllustrationMobile />
          <IllustrationDesktop />
          <Content>
            <Heading>Free, open, simple</Heading>
            <Paragraph>
              Blogr is a free and open source application backed by a large community of helpful developers. It supports
              features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting
              tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to
              learn.
            </Paragraph>
            <Space height="30px" />
            <Heading>Powerful tooling</Heading>
            <Paragraph>
              Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment
              a breeze, but capable of producing even the most complicated sites.
            </Paragraph>
          </Content>
        </Padding>
        <Space height="85px" desktop="250px" />
      </div>
    );
  }
}

export default Integrations;
