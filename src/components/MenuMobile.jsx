import React from "react";
import styled from "styled-components";
import arrowUrl from "../../images/icon-arrow-dark.svg";
import hamburgerUrl from "../../images/icon-hamburger.svg";
import { Button } from "./commonComponents";

const Background = styled.div`
  width: 100%;
  margin-top: 35px;
  background-color: white;
  border-radius: 8px;
  box-shadow: -10px 10px 30px 10px rgba(0, 0, 0, 0.1), 10px 10px 20px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px;
`;

/**
 * Menu title and submenu holder
 */
const MenuItem = styled.div`
  padding: 5px;
  /* width: 100%; */
  text-align: center;
`;

/**
 * Menu name
 */
const MenuTitle = styled.h3`
position: relative;
  margin: auto;
  padding: 7px 7px 7px 7px;
  
  color: hsl(207, 13%, 34%);
  font-family: "Ubuntu", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    color: hsl(207, 23%, 55%);
    cursor: pointer;
  }
`;

/**
 * Arrow next to menu to display expanded state
 */
const MenuArrow = styled.div`
position: absolute;
  right: -20px;
  width: 30px;
  height: 10px;
  background: url(${arrowUrl}) no-repeat center;

  ${MenuItem}[aria-expanded=true] & {
    transform: rotate(180deg);
  }
`;

/**
 * Buttons inside the menu category
 */
const SubMenu = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  box-sizing: border-box;
  background-color: hsl(240, 2%, 95%);
  border-radius: 5px;
  opacity: 0;
  line-height: 0;
  transition: ease 0.5s;

  ${MenuItem}[aria-expanded=true] + & {
    display: block;
    position: relative;
    opacity: 1;
    line-height: 1;
    margin: 25px 0;
    padding: 15px;
  }
`;

/**
 * Each item in the submenu
 */
const SubMenuItem = styled.p`
  text-transform: capitalize;
  margin: 0;
  padding: 0;
  font-weight: 600;
  color: hsl(207, 13%, 34%);
  transition: ease 0.5s;

  &:hover {
    color: hsl(207, 23%, 55%);
    cursor: default;
  }

  ${MenuItem}[aria-expanded=true] + ${SubMenu} > & {
    margin: 4px;
    padding: 8px;
    line-height: 1;
    &:hover {
      cursor: pointer;
  }
  }
`;

/**
 * Horizontal Line
 */
const Line = styled.hr`
  width: 100%;
  margin-top: 0;
`;

/**
 * Login button
 */
const LoginButton = styled(Button).attrs(() => ({value:"Login"}))`
margin: 5px;
  color: hsl(207, 13%, 34%);
  &:hover {
    color: hsl(207, 23%, 55%);
  }
`;

/**
 * Filled button based on Button
 */
 const SignupButton = styled(Button).attrs(() => ({value:"Signup"}))`
 margin: 5px;
 background: linear-gradient(90deg, hsl(13, 100%, 72%) 0%, hsl(353, 100%, 62%) 100%);
 color: white;
 :hover {
  color: hsl(356, 100%, 66%);
 }
`;

/**
 * Nav menu displayed in mobile
 */
class MenuMobile extends React.Component {
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
    console.log(this.state);
    this.setState((state) => ({ selected: name === state.selected ? "" : name }));
  }

  render() {
    return (
      <Background>
        <MenuItem aria-expanded={this.state.selected === "product"} onClick={() => this.onClickMenuItem("product")}>
          <MenuTitle>
            Product <MenuArrow />
          </MenuTitle>
        </MenuItem>
        <SubMenu show={this.state.selected === "product"}>
            <SubMenuItem>Overview</SubMenuItem>
            <SubMenuItem>Pricing</SubMenuItem>
            <SubMenuItem>Marketplace</SubMenuItem>
            <SubMenuItem>Features</SubMenuItem>
            <SubMenuItem>Integrations</SubMenuItem>
          </SubMenu>
        <MenuItem>
          <MenuTitle aria-expanded={this.state.selected === "company"} onClick={() => this.onClickMenuItem("company")}>
            Company <MenuArrow />
          </MenuTitle>
          <SubMenu show={this.state.selected === "company"}>
            <SubMenuItem>About</SubMenuItem>
            <SubMenuItem>Team</SubMenuItem>
            <SubMenuItem>Blog</SubMenuItem>
            <SubMenuItem>Careers</SubMenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem>
          <MenuTitle aria-expanded={this.state.selected === "connect"} onClick={() => this.onClickMenuItem("connect")}>
            Connect <MenuArrow />
          </MenuTitle>
          <SubMenu show={this.state.selected === "connect"}>
            <SubMenuItem>Contact</SubMenuItem>
            <SubMenuItem>Newsletter</SubMenuItem>
            <SubMenuItem>LinkedIn</SubMenuItem>
          </SubMenu>
        </MenuItem>
        <Line />
        <LoginButton />
        <SignupButton />
      </Background>
    );
  }
}

export default MenuMobile;
