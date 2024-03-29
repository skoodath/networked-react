import React from 'react'
import introvideo from '../../../videos/networkedexplainer.mp4';
import { StyledCloseBtn } from '../../../styles/introstyle';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const IntroVideo = ({openModal, setOpenModel}) => {

  const modalClose = () => {
    setOpenModel(false)
  }

  return(
      <ReactModal 
        isOpen={openModal}
        onRequestClose={modalClose}
        closeTimeoutMS={200}
        style={{
        overlay: {
          backgroundColor: 'rgba(39, 39, 39, 0.98)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        content: {
          position: 'static',
          padding: 0,
          top: 0,
          right: 0
        }
      }}>
        <StyledCloseBtn onClick={modalClose}>Close</StyledCloseBtn>
        <video loop autoPlay
          style={{
            width: '100%',
            height: 'auto'
          }}
        >
          <source src={introvideo} type="video/mp4" />
        </video>
      </ReactModal>
  )
};


export default IntroVideo;