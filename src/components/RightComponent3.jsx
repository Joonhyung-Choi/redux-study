import React from 'react';
import styled from 'styled-components';

function RightComponent3() {
  return (
    <Wrapper>
      <H2>Right3</H2>
    </Wrapper>
  );
}

export default RightComponent3;

const Wrapper = styled.div`
  width: 90%;
  height: 60%;
  border: 1px solid;
  box-sizing: border-box;
  margin: auto;
`;

const H2 = styled.h2`
  text-align: center;
`;
