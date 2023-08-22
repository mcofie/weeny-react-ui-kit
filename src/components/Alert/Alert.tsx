import React from "react";
import styled from "styled-components";

//Alert Title
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

// @ts-ignore
function Alert(data: IAlert) {
  return (
    <>
      <Title>{data.title}</Title>
    </>
  );
}

export default Alert;
