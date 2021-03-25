import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 35px;
  background-color: white;
  border-radius: 8px;
  box-shadow: -10px 10px 30px 10px rgba(0, 0, 0, 0.1), 10px 10px 20px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

class MenuMobile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Background>asd</Background>;
  }
}

export default MenuMobile;
