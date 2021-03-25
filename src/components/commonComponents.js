import styled from "styled-components";

export const Padding = styled.div`
padding-left: 6%;
padding-right: 6%;
box-sizing: border-box;
`;

export const HORIZONTAL_PADDING = 6;

/**
 * Default button, used for login and as base for other buttons
 */
export const Button = styled.button `
  font-family: "Ubuntu", sans-serif;
  border-radius: 50%;
  border:none;
  background-color: transparent;
  color: white;
  :hover {
      color: hsl(355, 100%, 74%);
  }
`;


export const Heading = styled.h2`
  color: hsl(208, 49%, 24%);
`;

export const Paragraph = styled.p`
  color: hsl(207, 13%, 34%);
  font-size: 16px;
`;