import React from "react";
import styled from "styled-components";

const Attribution = styled.div`
  font-size: 11px;
  text-align: center;
  margin: 10px auto;
  color: #aaa;
`;

const Link = styled.a`
  color: white;
`;

class Credit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Attribution>
        Challenge by{" "}
        <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </Link>
        . Coded by <Link href="https://srikant-n.github.io/">Srikant Nimmagadda</Link>.
      </Attribution>
    );
  }
}

export default Credit;