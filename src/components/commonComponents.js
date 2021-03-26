import styled from "styled-components";

export const Padding = styled.div`
padding-left: 6%;
padding-right: 6%;
box-sizing: border-box;
`;

/**
 * Default button, used for login and as base for other buttons
 */
// export const Button = styled.button `
//   font-family: "Ubuntu", sans-serif;
//   border-radius: 25px;
//   border:none;
//   background-color: transparent;
//   color: white;
//   width: 140px;
//   height: 50px;
//   font-weight: 600;
//   font-size: 18px;
//   :hover {
//       color: hsl(355, 100%, 74%);
//       cursor: pointer;
//   }
// `;
export const Button = styled.input.attrs((props) => ({
  type: "button",
  value: props.value
  }))`
  font-family: "Ubuntu", sans-serif;
  border-radius: 25px;
  border:none;
  background-color: transparent;
  color: white;
  width: 140px;
  height: 50px;
  font-weight: 600;
  font-size: 18px;
  :hover {
      color: hsl(355, 100%, 74%);
      cursor: pointer;
  }
`;


export const Heading = styled.h2`
  color: hsl(208, 49%, 24%);
`;

export const Paragraph = styled.p`
  color: hsl(207, 13%, 34%);
  font-size: 16px;
`;