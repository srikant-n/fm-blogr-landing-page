import React from "react";
import styled from "styled-components";
import { Heading, Padding, Paragraph, Space } from "./commonComponents";
import editorMobile from "../../images/illustration-editor-mobile.svg";

const Background = styled(Padding)`
  padding-top: 90px;
`;

const EditorImage = styled.img.attrs(() => ({ src: editorMobile }))`
  /* position: relative; */
  width: 405px;
  /* left: -37px; */
  margin: 30px 0 30px -37px;
  height: auto;
`;

class Features extends React.Component {
  render() {
    return (
      <Background>
        <Heading>Designed for the future</Heading>
        <EditorImage />
        <Heading>Introducing an extensible editor</Heading>
        <Paragraph>
          Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The
          editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos,
          and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks
          of a blog.
        </Paragraph>
        <Space height="20px" />
        <Heading>Robust content management</Heading>
        <Paragraph>
          Flexible content management enables users to easily move through posts. Increase the usability of your blog by
          adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
        </Paragraph>
        <Space height="60px" />
      </Background>
    );
  }
}

export default Features;
