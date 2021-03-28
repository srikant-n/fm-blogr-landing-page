import React from "react";
import Credit from "./Credit.jsx";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import { CompanySubMenu, ConnectSubMenu, MenuTitle, ProductSubMenu, SubMenuBackground } from "./SubMenus.jsx";
import { Padding } from "./commonComponents.js";

/**
 * Menu title
 */
const MenuTitleFooter = styled(MenuTitle)`
  position: relative;
  color: white;
  margin: 0;
  padding: 0 7px;
  font-size: 18px;
  text-align: center;
  &::after {
    content: none;
  }
`;

/**
 * Submenu container
 */
const SubMenuFooter = styled(SubMenuBackground)`
  position: relative;
  width: 150px;
  text-align: center;
  box-sizing: border-box;
  background-color: transparent;
  margin: 15px 0;
  padding: 8px;

  @media (min-width: 700px) {
    text-align: left;
    padding: 0 0 20px 0;
  }
`;

/**
 * Background
 */
const Background = styled.div`
  background-color: black;
  border-top-right-radius: 100px;
  margin-top: 20px;
  width: 100%;
  height: 900px;
  text-align: center;

  @media (min-width: 700px) {
    margin-top: 40px;
    text-align: left;
    height: 350px;
  }
`;

const MenuContainer = styled.div``;

const PaddingFooter = styled(Padding)`
  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 65px;
  }
`;

/**
 * Logo
 */
const Logo = styled.img.attrs(() => ({ src: logo }))`
  position: relative;
  width: 100px;
  height: auto;
  margin: 75px 0;

  @media (min-width: 700px) {
    margin: 0;
  }
`;

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Background>
        <PaddingFooter>
          <Logo />
          {/* <br /> */}
          <MenuContainer>
            <MenuTitleFooter>Product</MenuTitleFooter>
            <SubMenuFooter show={true}>
              <ProductSubMenu show={true} color="#aaa" />
            </SubMenuFooter>
          </MenuContainer>
          <MenuContainer>
            <MenuTitleFooter>Company</MenuTitleFooter>
            <SubMenuFooter show={true}>
              <CompanySubMenu show={true} color="#aaa" />
            </SubMenuFooter>
          </MenuContainer>
          <MenuContainer>
            <MenuTitleFooter>Connect</MenuTitleFooter>
            <SubMenuFooter show={true}>
              <ConnectSubMenu show={true} color="#aaa" />
            </SubMenuFooter>
          </MenuContainer>
          <MenuContainer />
        </PaddingFooter>

        <Credit />
      </Background>
    );
  }
}

export default Footer;
