import React from 'react';
import { Introtextstyles } from '../../../styles/intro/introtextstyle';

const { Styledintro, Styledintropara } = Introtextstyles;

const IntroText = () => {
    return (
      <Styledintro>
        <Styledintropara>
          Our minds make connections all the time, trying to make
          sense of the patterns we see and the information we absorb. These
          interconnections when taught to be viewed holistically, as against
          in isolation, can open up young minds to immense possibilities, fuel
          curiosity and enhance their learning appetite significantly.
          NetworkED introduces this new way of thinking to
          children, using networks interconnecting the real world.
        </Styledintropara>
      </Styledintro>
    );
}

export default IntroText;
