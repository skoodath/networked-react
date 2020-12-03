import React from 'react';
import { IntroParaWrapper, Styledintropara } from '../../../styles/introstyle';

const IntroText = React.forwardRef((props, ref) => {

    return (
        <IntroParaWrapper>
            <Styledintropara ref={ref}>
                Our minds make connections all the time, trying to make
                sense of the patterns we see and the information we absorb.
            </Styledintropara>
            <Styledintropara ref={ref}>
                These
                interconnections when taught to be viewed holistically, can open up young minds to immense possibilities, fuel
                curiosity and enhance their learning appetite.
            </Styledintropara>
            <Styledintropara ref={ref} fontsize fontwght bposition>
                networkED introduces this new way of thinking to
                children, using networks interconnecting the real world.
            </Styledintropara>
        </IntroParaWrapper>
    );
});

export default IntroText;
