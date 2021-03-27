import React from "react";
import styled from "styled-components";
import { Heading, Padding, Paragraph, Space } from "./commonComponents";
import editorMobile from "../../images/illustration-editor-mobile.svg";
import editorDesktop from "../../images/illustration-editor-desktop.svg";

/**
 * Main div for padding
 */
const Background = styled(Padding)`
  padding-top: 45px;
`;

/**
 * Section title
 */
const MainHeading = styled(Heading)`
  text-align: center;
  margin-top: 58px;
  @media (min-width: 700px) {
    margin: 110px 0;
    font-size: 2.35em;
  }
`;

/**
 * Content holder for different layout based on size
 */
const Content = styled.div`
  @media (min-width: 700px) {
    margin-right: 51%;
  }
`;

/**
 * Illustration on mobile
 */
const EditorImageMobile = styled.img.attrs(() => ({ src: editorMobile }))`
  width: 405px;
  margin: 30px 0 30px -37px;
  height: auto;

  @media (min-width: 700px) {
    display: none;
  }
`;

/**
 * Illustration on desktop
 */
const EditorImageDesktop = styled.img.attrs(() => ({ src: editorDesktop }))`
  position: absolute;
  width: auto;
  height: auto;
  display: none;
  right: -275px;
  top: 67%;

  @media (min-width: 700px) {
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
          <Space height="20px" desktop="35px" />
          <Heading>Robust content management</Heading>
          <Paragraph>
            Flexible content management enables users to easily move through posts. Increase the usability of your blog
            by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
          </Paragraph>
        </Content>

        <Space height="60px" desktop="160px" />
      </Background>
    );
  }
}

export default Features;
