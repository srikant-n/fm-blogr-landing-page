import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";
import hamburgerUrl from "../../images/icon-hamburger.svg";
import closeUrl from "../../images/icon-close.svg";
import MenuMobile from "./MenuMobile.jsx";

/**
 * Container for disabling on desktop.
 */
const Container = styled.div`
  display: block;

  @media (min-width: 700px) {
    display: none;
  }
`;

/**
 * Header components with flex.
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

/**
 * Button to open/close menu.
 */
const MenuButton = styled.button`
  width: 35px;
  height: 35px;
  background: url(${(props) => (props.showMenu ? closeUrl : hamburgerUrl)}) no-repeat center;
  background-size: 100%;
  outline: none;
  border: none;
  cursor: pointer;
`;

/**
 * Header for the application when viewed on mobile.
 * Contains logo and menu.
 */
class HeaderMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.onClickMenu = this.onClickMenu.bind(this);
  }

  onClickMenu() {
    this.setState((state) => ({ showMenu: !state.showMenu }));
  }

  render() {
    return (
      <Container>
        <StyledHeader>
          <LogoHolder>
            <Logo />
          </LogoHolder>
          <MenuButton showMenu={this.state.showMenu} onClick={this.onClickMenu} />
        </StyledHeader>
        {this.state.showMenu && <MenuMobile />}
      </Container>
    );
  }
}

export default HeaderMobile;
