import React from "react";
import styled from "styled-components";
import { Button } from "./commonComponents";
import {ReactComponent as Logo} from "../../images/logo.svg";
import bgUrl from "../../images/bg-pattern-intro.svg";
// require("svg-url-loader!../../images/bg-pattern-intro.svg");
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

const Background = styled.div`
  background: url(${bgUrl}) -440px -1350px no-repeat, linear-gradient(90deg, hsl(13, 100%, 72%) 0%, hsl(353, 100%, 62%) 100%);
  /* background: url(${bgUrl}) -440px -1350px no-repeat; */
  /* background-size: 200%; */
  width:100%;
  height: 600px;
  border-bottom-left-radius: 100px;
`;


class Intro extends React.Component {

    render() {
        return <Background>
            <Logo />
        </Background>;
    }
}

export default Intro;