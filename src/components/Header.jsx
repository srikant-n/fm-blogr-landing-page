import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../images/logo.svg";
import { Button, ButtonFilled } from "./commonComponents";
import arrowUrl from "../../images/icon-arrow-light.svg";

/**
 * Container for disabling on mobile
 */
const Container = styled.div`
  display: none;

  @media (min-width: 700px) {
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
 * Menu category
 */
const MenuTitle = styled.button`
  margin: 0;
  padding: 8px 28px 8px 10px;
  color: white;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 16px;
  border: none;
  background-color: transparent;

  &::after {
    position: absolute;
    display: inline-block;
    margin-left: 8px;
    content: url(${arrowUrl});
  }

  &[aria-expanded="true"]::after {
    top: 12px;
    transform: rotate(180deg);
  }

  &:hover {
    text-decoration: underline;
  }
`;

/**
 * Sub menu holder
 */
const SubMenu = styled.div`
  position: absolute;
  width: 150px;
  margin: 0;
  padding: 0;
  background-color: white;
  border-radius: 4px;
  opacity: 0;
  line-height: 0;
  transition: ease 0.5s;
  z-index: 2;

  ${MenuTitle}[aria-expanded=true] + & {
    opacity: 1;
    line-height: 1;
    margin: 28px 0 0 -20px;
    padding: 20px 10px;
  }
`;

/**
 * Each item in the submenu
 */
const SubMenuItem = styled.a`
  text-transform: capitalize;
  margin: 0;
  padding: 0;
  font-weight: 400;
  color: hsl(207, 13%, 34%);
  transition: margin ease 0.5s, padding ease 0.5s;
  text-decoration: none;

  &:hover {
    cursor: default;
  }

  ${MenuTitle}[aria-expanded=true] + ${SubMenu} > & {
    margin: 4px;
    padding: 7px;
    &:hover {
      font-weight: 600;
      cursor: pointer;
    }
  }
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
            <SubMenu>
              <SubMenuItem href="#overview">Overview</SubMenuItem>
              <SubMenuItem href="#pricing">Pricing</SubMenuItem>
              <SubMenuItem href="#">Marketplace</SubMenuItem>
              <SubMenuItem href="#features">Features</SubMenuItem>
              <SubMenuItem href="#integrations">Integrations</SubMenuItem>
            </SubMenu>
          </MenuItem>
          <MenuItem>
            <MenuTitle
              aria-expanded={this.state.selected === "company"}
              onClick={() => this.onClickMenuItem("company")}
            >
              Company
            </MenuTitle>
            <SubMenu>
              <SubMenuItem href="#">About</SubMenuItem>
              <SubMenuItem href="#">Team</SubMenuItem>
              <SubMenuItem href="#">Blog</SubMenuItem>
              <SubMenuItem href="#">Careers</SubMenuItem>
            </SubMenu>
          </MenuItem>
          <MenuItem>
            <MenuTitle
              aria-expanded={this.state.selected === "connect"}
              onClick={() => this.onClickMenuItem("connect")}
            >
              Connect
            </MenuTitle>
            <SubMenu>
              <SubMenuItem href="#">Contact</SubMenuItem>
              <SubMenuItem href="#">Newsletter</SubMenuItem>
              <SubMenuItem href="#">LinkedIn</SubMenuItem>
            </SubMenu>
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
