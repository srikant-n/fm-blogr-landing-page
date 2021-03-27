import styled from "styled-components";

/**
 * Left and right padding
 */
export const Padding = styled.div`
  padding-left: 6%;
  padding-right: 6%;
  box-sizing: border-box;

  @media (min-width: 700px) {
    padding-left: 11.5%;
    padding-right: 11.5%;
  }
`;

/**
 * Vertical empty space
 */
export const Space = styled.div`
  height: ${props => props.height};
`;

/**
 * Borderless transparent button
 */
export const Button = styled.input.attrs((props) => ({
  type: "button",
  value: props.value,
}))`
  font-family: "Ubuntu", sans-serif;
  border-radius: 25px;
  border: none;
  background-color: transparent;
  color: white;
  width: 130px;
  height: 50px;
  font-weight: 600;
  font-size: 18px;
  :hover {
    color: hsl(355, 100%, 74%);
    cursor: pointer;
  }
`;

/**
 * Filled white button
 */
export const ButtonFilled = styled(Button)`
  background-color: white;
  color: hsl(356, 100%, 66%);
  :hover {
    background-color: hsl(355, 100%, 74%);
    color: white;
  }
`;

/**
 * Heading for content
 */
export const Heading = styled.h2`
  color: hsl(208, 49%, 24%);
  text-align: center;
  font-size: 1.7em;
  line-height: 1.2em;
  margin: 15px 20px;
  color: red;
`;

/**
 * Content
 */
export const Paragraph = styled.p`
  color: hsl(207, 13%, 34%);
  text-align: center;
  font-size: 16px;
  margin: 6px 20px;
  color: red;
  line-height: 1.75em;
`;