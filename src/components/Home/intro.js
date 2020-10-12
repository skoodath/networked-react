import React from 'react';
import styled from 'styled-components';
import IntroVideo from './Intro/video';
import IntroText from './Intro/introtext';
import SubText from '../subtext';
import LearnMore from '../learnmore';

const Styledintro = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;
const StyledintroMore = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;


const Intro = () => {


    return (
      <>
        <Styledintro>
          <SubText
            text={`A new way of thinking to understand the world around us`}
          />
          <IntroVideo />
          <LearnMore />
        </Styledintro>
        <StyledintroMore>
          <IntroText />
        </StyledintroMore>
      </>
    );
}

export default Intro;


