import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../images/logo.svg";
import { Button, ButtonFilled } from "./commonComponents";
import { CompanySubMenu, ConnectSubMenu, MenuTitle, ProductSubMenu, SubMenuBackground } from "./SubMenus.jsx";

/**
 * Container for disabling on mobile
 */
const Container = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: block;
  }
`;

/**
 * Header components with flex
 */
const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

/**
 * Logo
 */
const Logo = styled.div.attrs(() => ({ children: [<LogoSvg key="logo" />] }))`
  width: 100px;
  height: 30px;
  margin-right: 52px;
`;

/**
 * Login/Signup container
 */
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
`;

/**
 * Menu div
 */
const MenuItem = styled.div`
  position: relative;
  margin: 5px;
  font-family: "Ubuntu", sans-serif;
`;

/**
 * Header for the application when viewed on desktop.
 * Contains logo and menu.
 */
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
    };
    this.onClickMenuItem = this.onClickMenuItem.bind(this);
  }

  /**
   * Clicked on a menu item
   * @param {String} name menu item name
   */
  onClickMenuItem(name) {
    this.setState((state) => ({ selected: name === state.selected ? "" : name }));
  }

  render() {
    return (
      <Container>
        <StyledHeader>
          <Logo />
          <MenuItem>
            <MenuTitle
              aria-expanded={this.state.selected === "product"}
              onClick={() => this.onClickMenuItem("product")}
            >
              Product
            </MenuTitle>
            <SubMenuBackground show={this.state.selected === "product"}>
              <ProductSubMenu show={this.state.selected === "product"} />
            </SubMenuBackground>
          </MenuItem>
          <MenuItem>
            <MenuTitle
              aria-expanded={this.state.selected === "company"}
              onClick={() => this.onClickMenuItem("company")}
            >
              Company
            </MenuTitle>
            <SubMenuBackground show={this.state.selected === "company"}>
              <CompanySubMenu show={this.state.selected === "company"} />
            </SubMenuBackground>
          </MenuItem>
          <MenuItem>
            <MenuTitle
              aria-expanded={this.state.selected === "connect"}
              onClick={() => this.onClickMenuItem("connect")}
            >
              Connect
            </MenuTitle>
            <SubMenuBackground show={this.state.selected === "connect"}>
              <ConnectSubMenu show={this.state.selected === "connect"} />
            </SubMenuBackground>
          </MenuItem>
          <Buttons>
            <Button value="Login" />
            <ButtonFilled value="Sign Up" />
          </Buttons>
        </StyledHeader>
      </Container>
    );
  }
}

export default Header;
