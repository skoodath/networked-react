import React from "react";
import { FellowshipPara } from '../../../styles/fellowshipstyle';

const FellowshipDesc = React.forwardRef((props, ref) => {

  const {text} = props;
  return (
    <>
      <FellowshipPara ref={ref}>
        {text}
      </FellowshipPara>

    </>
  );
});

export default FellowshipDesc;