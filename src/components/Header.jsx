import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LogoHolder = styled.div`
  width: 80px;
  height: 20px;
`;

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <LogoHolder>
          <Logo />
        </LogoHolder>
      </StyledHeader>
    );
  }
}

export default Header;
