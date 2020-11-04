import React from 'react';
import IntroVideo from './Intro/video';
import IntroText from './Intro/introtext';
import SubText from '../subtext';
import { Styledintro } from '../../styles/introstyle';

const Intro = () => {

    return (
      <>
        <Styledintro>
          <SubText
            text={`NetworkED is an initiative for children to discover how everything is connected in the world around them. 
            The method integrates the core principles of Network Theory, complex adaptive systems and Relational Thinking, enabling children to explore complexity with ease`}
          />
        </Styledintro>
        <Styledintro>
          <IntroVideo />
        </Styledintro>
        <Styledintro>
          <IntroText />
        </Styledintro>
      </>
    );
}

export default Intro;


