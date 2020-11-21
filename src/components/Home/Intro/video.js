import React from 'react'
import introvideo from '../../../videos/networkedexplainer.mp4';
import { Styledvideo } from '../../../styles/introstyle';


const IntroVideo = React.forwardRef((props, ref) => {
  return(
      <Styledvideo
        ref={ref}
      >
        <video muted loop autoPlay>
          <source src={introvideo} type="video/mp4" />
        </video>
      </Styledvideo>
    
  )
});


export default IntroVideo;