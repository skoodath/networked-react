import React from "react";
import styled from "styled-components";

const FellowshipPara = styled.p`
  width: 80%;
  margin: 2rem auto;
  border-bottom: 2px solid #ffd54d;
  padding: 0 0 2rem 0;
  letter-spacing: 2px;
  line-height: 2;
  font-size: 1.1rem;
`;

const FellowshipDesc = ({text}) => {
  return (
    <>
      <FellowshipPara>
        {text}
      </FellowshipPara>

    </>
  );
};

export default FellowshipDesc;