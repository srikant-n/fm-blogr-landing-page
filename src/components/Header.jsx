import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";
import hamburgerUrl from "../../images/icon-hamburger.svg";

/**
 * Header components with flex
 */
const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

/**
 * Logo div for sizing
 */
const LogoHolder = styled.div`
  width: 80px;
  height: 20px;
`;

const MenuButton = styled.button`
  width: 35px;
  height: 35px;
  background: url(${hamburgerUrl}) no-repeat center;
  background-size: 100%;
  outline: none;
  border: none;
`;

/**
 * Header for the application.
 * Contains logo and menu.
 */
class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <LogoHolder>
          <Logo />
        </LogoHolder>
        <MenuButton />
      </StyledHeader>
    );
  }
}

export default Header;
