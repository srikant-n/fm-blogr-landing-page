import React from "react";
import styled from "styled-components";
import { Heading, Padding, Paragraph, Space } from "./commonComponents";
import editorMobile from "../../images/illustration-editor-mobile.svg";
import editorDesktop from "../../images/illustration-editor-desktop.svg";

/**
 * Main div for padding
 */
const Background = styled(Padding)`
  position: relative;
  padding-top: 45px;

  @media (min-width: 900px) {
    height: 935px;
  }
`;

/**
 * Section title
 */
const MainHeading = styled(Heading)`
  text-align: center;
  margin-top: 58px;

  @media (min-width: 900px) {
    margin: 110px 0;
    font-size: 2.35em;
  }
`;

/**
 * Content holder for different layout based on size
 */
const Content = styled.div`
  @media (min-width: 900px) {
    margin-right: 51%;
  }
`;

/**
 * Illustration on mobile
 */
const EditorImageMobile = styled.img.attrs(() => ({ src: editorMobile, alt: "Editor" }))`
  width: 405px;
  margin: 30px 0 30px 0;
  height: auto;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 900px) {
    display: none;
  }
`;

/**
 * Illustration on desktop
 */
const EditorImageDesktop = styled.img.attrs(() => ({ src: editorDesktop, alt: "Editor"  }))`
  position: absolute;
  width: auto;
  height: auto;
  display: none;
  /* right: -275px; */
  left: 50%;
  /* top: 67%; */
  top: 70px;

  @media (min-width: 900px) {
    display: block;
  }
`;

/**
 * Features of Blogr
 */
class Features extends React.Component {
  render() {
    return (
      <Background id="features">
        <MainHeading>Designed for the future</MainHeading>
        <EditorImageMobile />
        <EditorImageDesktop />
        <Content>
          <Heading>Introducing an extensible editor</Heading>
          <Paragraph>
            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The
            editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos,
            and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the
            looks of a blog.
          </Paragraph>
          <Space height="25px" desktop="35px" />
          <Heading>Robust content management</Heading>
          <Paragraph>
            Flexible content management enables users to easily move through posts. Increase the usability of your blog
            by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
          </Paragraph>
        </Content>
        <Space height="80px" desktop="0" />
      </Background>
    );
  }
}

export default Features;
