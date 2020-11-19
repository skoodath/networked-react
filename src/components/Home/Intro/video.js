import React from 'react'
import introvideo from '../../../videos/networkedexplainer.mp4';
import { Styledvideo, Styledintro } from '../../../styles/introstyle';


const IntroVideo = React.forwardRef((props, ref) => {
  return(
    <Styledintro
      ref={ref}
      topBottom='0'
      leftRight='0'
      hgt='auto'
      bgColor="#999"
    >
      <Styledvideo>
        <video muted controls autoPlay>
          <source src={introvideo} type="video/mp4" />
        </video>
      </Styledvideo>
    </Styledintro>
    
  )
});


export default IntroVideo;