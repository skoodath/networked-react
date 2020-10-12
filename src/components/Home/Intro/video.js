import React from 'react'
import styled from 'styled-components';
import introvideo from '../../../videos/networkedexplainer.mp4';

const Styledvideo = styled.div`
    background: #272727;
    padding: 0;
    margin: 0;
    video{
        width: 100vw;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;

const IntroVideo = () => (
  <Styledvideo>
    <video autoPlay loop muted controls>
      <source src={introvideo} type="video/mp4" />
    </video>
  </Styledvideo>
);

export default IntroVideo;