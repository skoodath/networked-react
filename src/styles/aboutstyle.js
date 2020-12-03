import styled from 'styled-components';
import { device } from './device';


export const Styledabout = styled.section`
  display: flex;
  flex-direction: column;
  height: ${({hgt}) => hgt};
  justify-content: center;
  background-color: #fff;
  margin: 0 auto;
  width: 80%;
  max-width: 1280px;
  @media ${device.laptop}{
    height: ${({hgt}) => hgt};
  }
`;


/* About paragraph styling */

export const Aboutus = styled.p`
  margin: 0 0 2rem auto;
  padding: 0;
  letter-spacing: 2px;
  position: relative;
  line-height: 1.6;
  text-align: ${({ textalign })=> textalign? 'right' : 'left'};
  font-size: ${({ fontsize })=> fontsize? '1.2rem' : '1rem'};
  font-weight: ${({ fontwght })=> fontwght? '700' : '400'};
  &::before{
        position: ${({ bposition })=> bposition? 'absolute' : 'relative'};
        content: '';
        width: 20%;
        height: 10px;
        background-color: #ffd54d;
        left: 0;
        bottom: -10px;
        z-index: 0;
    }
`;

/* Get involved */


export const StyledGetInvolvedWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    @media ${device.laptop}{
        flex-direction: column;
    }
`;

export const StyledInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem 0 0;
    width: 100%;
`;

export const StyledGetInvolved = styled.p`
width: 100%;
border-bottom: 3px solid #ffd54d;
margin: 0;
padding: 0 0 2rem 0;
letter-spacing: 2px;
line-height: 2;
font-size: 1em;
justify-self: flex-start;
align-self: flex-start;
`;

/* Community Benefits Styling */


export const BenefitContainer = styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 4rem 1rem;
    display: flex;
    flex-direction: column;
    background-color: #ffd54d;
`;

export const CardWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  justify-content: space-around;
  align-items: center;
  @media ${device.laptop}{
    flex-direction: row;
  }
`;

export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin: 0.2rem 0;
  padding: 1rem 0;
  width: 100%;
  max-width: 400px;
  height: 200px;
  @media ${device.laptop}{
    margin: 0.1rem;
    width: 300px;
    height: 300px;
  }
  &:hover div {
    opacity: 1;
  }
  &:focus div {
    opacity: 1;
  }
`;


export const CardHeader = styled.h3`
    font-weight: bold;
    font-size: 1.1rem;
    @media ${device.laptop}{
      font-size: 1rem;
    }
`;

export const CardImage = styled.img`
    width: 120px;
    height: 120px;
    display: block;
`;
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #00155A;
  z-index: 1;
  visibility: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  
  p{
    color: #fff;
    font-size: 1.2rem;
    
    @media ${device.laptop} {
      font-size: 0.9rem;
    }
  }
`;

/* New Form */

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto 0 0;
  @media ${device.laptop}{
    width: 50vw;
    max-width: 600px;
  }

`;


export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0 0;
  position: relative;
  border-radius: 5px;
  
  span{
    color: #ff0000;
    display: block;
    transition-property: color, height;
    transition-duration: 500ms;
    transition-timing-function: ease-in-out;
  }

`;
export const InputFields = styled.input`
    padding: 0.2rem;
    width: 100%;
    border-radius: 5px;
    border: 5px solid transparent;
    background-color: #fff7df;
    font-size: 1rem;
    font-family: 'montserrat';
    display: block;
    position: relative;
    transition-timing-function: ease-in;
    transition-property: border-left;
    transition-duration: 0.5s;
    transform-origin: left center;
    resize: none;
    &:focus{
        outline: none;
        background: #fff;
        border-left: 5px solid #ffd54d;
    }
`;



export const InputLabels = styled.label`
  font-size: 0.9rem;
  z-index: 1;
  margin: 0 0 0 0.2rem;
  pointer-events: none;
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
  color: #272727;

`;



export const MessageBox = InputFields.withComponent('textarea');

export const SendButton = styled.button`
    border: none;
    background-color: #ffd54d;
    padding: 0.2rem 0.5rem;
    font-size: 1.3rem;
    text-transform: uppercase;
    cursor: pointer;
    margin: 1rem 0 0 0;
    border-radius: 5px;
    transition: background-color 0.7s ease-in-out;
    &:hover{
      background-color: #ffd54dab;
    }
    &:active{
      font-size: 1.2rem;
      padding: 0.25rem 0.55rem;
    }
`;

