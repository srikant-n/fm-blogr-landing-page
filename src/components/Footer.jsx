import React from "react";
import Credit from "./Credit.jsx";
import styled from "styled-components";
import logo from "../../images/logo.svg";

/**
 * Background
 */
const Background = styled.div`
  background-color: black;
  border-top-right-radius: 100px;
  margin-top: 20px;
  height: 900px;
`;

const Logo = styled.img.attrs(() => ({ src: logo }))`
  position: relative;
  width: 100px;
  height: auto;
  margin: 75px 0;
  left: 50%;
  transform: translateX(-50%);
`;

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Background>
        <Logo />
        <Credit />
      </Background>
    );
  }
}

export default Footer;
