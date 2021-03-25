import styled from "styled-components";

export const GradientDivRed = styled.div`
background: hsl(13, 100%, 72%);
background: linear-gradient(90deg, hsl(13, 100%, 72%) 0%, hsl(353, 100%, 62%) 100%);
`;

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