import React from 'react';
import SubText from '../subtext';
import { Styledintro } from '../../styles/introstyle';

const Intro = React.forwardRef((props, ref) => {


    return (
      <>
        <Styledintro
          ref={ref}
          topBottom='0'
          leftRight='10%'
        >
          <SubText
            text={`NetworkED is an initiative for children to discover how everything is connected in the world around them. 
            The method integrates the core principles of Network Theory, complex adaptive systems and Relational Thinking, enabling children to explore complexity with ease`}
          />

        </Styledintro>
      </>
    );
})

export default Intro;


