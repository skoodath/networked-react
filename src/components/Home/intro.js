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
            text={`A new way of thinking to understand the world around us`}
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


