import React from "react";
import { FellowshipPara } from '../../../styles/Fellowship/fellowshiparastyle';

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