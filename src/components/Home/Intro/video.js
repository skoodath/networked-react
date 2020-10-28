import React from 'react'
import introvideo from '../../../videos/networkedexplainer.mp4';
import { Styledvideo } from '../../../styles/introstyle';


const IntroVideo = () => (
  <Styledvideo>
    <video muted controls>
      <source src={introvideo} type="video/mp4" />
    </video>
  </Styledvideo>
);

export default IntroVideo;