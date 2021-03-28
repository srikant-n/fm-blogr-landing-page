import React from "react";
import styled from "styled-components";
import arrowUrl from "../../images/icon-arrow-dark.svg";
import { Button } from "./commonComponents";
import { MenuTitle, ProductSubMenu, CompanySubMenu, ConnectSubMenu, SubMenuBackground } from "./SubMenus.jsx";

const Container = styled.div`
  position: relative;
`;

/**
 * Background
 */
const Background = styled.div`
  position: absolute;
  width: 500px;
  max-width: 100%;
  margin-top: 35px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 8px;
  box-shadow: -10px 10px 30px 10px rgba(0, 0, 0, 0.1), 10px 10px 20px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 22px;
  z-index: 2;
`;

/**
 * Menu title and submenu holder
 */
const MenuItem = styled.div`
  padding: 10px;
  margin: 4px 0;
  width: 100%;
  text-align: center;
`;

const MenuTitleMobile = styled(MenuTitle)`
  position: relative;
  color: hsl(207, 13%, 34%);
  margin: 0;
  padding: 0;
  font-size: 18px;

  &::after {
    content: url(${arrowUrl});
  }

  &[aria-expanded="true"]::after {
    top: 5px;
  }
`;

const SubMenuMobile = styled(SubMenuBackground)`
  position: relative;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  background-color: hsl(240, 2%, 95%);
  margin: ${(props) => (props.show ? "25px 0" : 0)};
  padding: ${(props) => (props.show ? "15px" : 0)};
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
const LoginButton = styled(Button).attrs(() => ({ value: "Login" }))`
  margin: 5px;
  color: hsl(207, 13%, 34%);
  &:hover {
    color: hsl(207, 23%, 55%);
  }
`;

/**
 * Filled button based on Button
 */
const SignupButton = styled(Button).attrs(() => ({ value: "Signup" }))`
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
    this.setState((state) => ({ selected: name === state.selected ? "" : name }));
  }

  render() {
    return (
      <Container>
        <Background>
          <MenuItem>
            <MenuTitleMobile
              aria-expanded={this.state.selected === "product"}
              onClick={() => this.onClickMenuItem("product")}
            >
              Product
            </MenuTitleMobile>
            <SubMenuMobile show={this.state.selected === "product"}>
              <ProductSubMenu show={this.state.selected === "product"} />
            </SubMenuMobile>
          </MenuItem>
          <MenuItem>
            <MenuTitleMobile
              aria-expanded={this.state.selected === "company"}
              onClick={() => this.onClickMenuItem("company")}
            >
              Company
            </MenuTitleMobile>
            <SubMenuMobile show={this.state.selected === "company"}>
              <CompanySubMenu show={this.state.selected === "company"} />
            </SubMenuMobile>
          </MenuItem>
          <MenuItem>
            <MenuTitleMobile
              aria-expanded={this.state.selected === "connect"}
              onClick={() => this.onClickMenuItem("connect")}
            >
              Connect
            </MenuTitleMobile>
            <SubMenuMobile show={this.state.selected === "connect"}>
              <ConnectSubMenu show={this.state.selected === "connect"} />
            </SubMenuMobile>
          </MenuItem>
          <Line />
          <LoginButton />
          <SignupButton />
        </Background>
      </Container>
    );
  }
}

export default MenuMobile;
