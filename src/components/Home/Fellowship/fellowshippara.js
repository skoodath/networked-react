import React from "react";
import { FellowshipPara } from '../../../styles/fellowshipstyle';

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