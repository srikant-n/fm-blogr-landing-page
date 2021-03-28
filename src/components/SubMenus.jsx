import React from "react";
import styled from "styled-components";
import arrowUrl from "../../images/icon-arrow-light.svg";

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
  outline: none;

  &::after {
    position: absolute;
    display: inline-block;
    margin-left: 8px;
    content: url(${arrowUrl});
  }

  &[aria-expanded="true"]::after {
    top: 10px;
    transform: rotate(180deg);
  }

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

/**
 * Sub menu holder
 */
const SubMenuBackground = styled.div`
  position: absolute;
  width: 150px;
  background-color: white;
  border-radius: 4px;
  margin: ${(props) => (props.show ? "28px 0 0 -20px" : 0)};
  padding: ${(props) => (props.show ? "20px 10px" : 0)};
  opacity: ${(props) => (props.show ? 1 : 0)};
  line-height: ${(props) => (props.show ? 1 : 0)};
  transition: ease 0.4s;
  z-index: 2;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * Each item in the submenu
 */
const SubMenuItem = styled.a`
  text-transform: capitalize;
  margin: ${(props) => (props.show ? "4px" : 0)};
  padding: ${(props) => (props.show ? "7px" : 0)};
  font-weight: 400;
  color: ${(props) => (props.color ? props.color : "hsl(207, 13%, 34%)")};
  transition: margin ease 0.4s, padding ease 0.4s;
  text-decoration: none;
  text-align: center;

  &:hover {
    font-weight: 600;
    cursor: ${(props) => (props.show ? "pointer" : "default")};
  }

  @media (min-width: 900px) {
    text-align: left;
    margin: 0;
  }
`;

function ProductSubMenu(props) {
  return (
    <Container>
      <SubMenuItem href="#overview" show={props.show} color={props.color}>
        Overview
      </SubMenuItem>
      <SubMenuItem href="#" show={props.show} color={props.color}>
        Pricing
      </SubMenuItem>
      <SubMenuItem href="#" show={props.show} color={props.color}>
        Marketplace
      </SubMenuItem>
      <SubMenuItem href="#features" show={props.show} color={props.color}>
        Features
      </SubMenuItem>
      <SubMenuItem href="#integrations" show={props.show} color={props.color}>
        Integrations
      </SubMenuItem>
    </Container>
  );
}

function CompanySubMenu(props) {
  return (
    <Container>
      <SubMenuItem href="#" show={props.show} color={props.color}>
        About
      </SubMenuItem>
      <SubMenuItem href="#" show={props.show} color={props.color}>
        Team
      </SubMenuItem>
      <SubMenuItem href="#" show={props.show} color={props.color}>
        Blog
      </SubMenuItem>
      <SubMenuItem href="#" show={props.show} color={props.color}>
        Careers
      </SubMenuItem>
    </Container>
  );
}

function ConnectSubMenu(props) {
  return (
    <Container>
      <SubMenuItem href="#" show={props.show} color={props.color}>
        Contact
      </SubMenuItem>
      <SubMenuItem href="#" show={props.show} color={props.color}>
        Newsletter
      </SubMenuItem>
      <SubMenuItem href="#" show={props.show} color={props.color}>
        LinkedIn
      </SubMenuItem>
    </Container>
  );
}

export { MenuTitle, SubMenuBackground, ProductSubMenu, CompanySubMenu, ConnectSubMenu };
