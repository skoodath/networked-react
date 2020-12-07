import styled from 'styled-components';
import { device } from './device';
import { FaEnvelope } from 'react-icons/fa';
import { Element } from 'react-scroll';


export const Styledabout = styled(Element)`
  display: flex;
  flex-direction: column;
  height: ${({hgt}) => hgt? hgt : '100vh'};
  justify-content: center;
  background-color: #fff;
  margin: 0 auto;
  width: 80%;
  max-width: 1280px;
  
  @media ${device.laptop}{
    height: 100vh;
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
    @media ${device.laptop}{
      flex-direction: row;
    }
`;

export const StyledGetInvolved = styled.p`
width: 100%;
margin: 0;
padding: 0 0 2rem 0;
letter-spacing: normal;
line-height: 1.6;
font-size: 1rem;
justify-self: flex-start;
align-self: flex-start;
`;


/* Email contact styling */

export const EmailTitle = styled.h5`
    color: #272727;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0 0 0.5rem 0;
    border-bottom: 1px solid #272727;
`;

export const ContactLinks = styled.article`
    color: #272727;
    padding: 1em 0;
    margin: 2rem 0 0 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MyEmail = styled.span`
    color: #272727;
    display: flex;
    justify-content: center;
`;

export const MailIcon = styled(FaEnvelope)`
    fill: #ffd54d;
    height: 1.5rem;
    width: 1.5rem;
    display: inline-block;
    margin: 0 1rem 0 0;
`;

/* Community Benefits Styling */

export const BenefitContainer = styled.section`
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
`;

export const CardWrapper = styled.ul`
  display: grid;
  width: 100%;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: flex-start;
  @media ${device.laptop}{
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat()(12, 1fr);
  }
`;
export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  visibility: hidden;
  margin: 0.2rem 0;
  padding: 1rem 0;
  width: 100%;
  max-width: 400px;
  grid-column: 1 / -1;
  @media ${device.laptop}{
    margin: 0.1rem;
    width: 350px;
    grid-column-start: ${({colstart}) => colstart};
    grid-column-end: ${({colend}) => colend};
    grid-row-start: ${({rowstart}) => rowstart};
    grid-row-end: ${({rowend}) => rowend};
    margin: 1rem;
    justify-items: center;
    align-items: center;
  }

`;
export const CardHeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;


export const CardHeader = styled.h3`
    font-weight: bold;
    font-size: 1.1rem;
    align-self: flex-start;
    @media ${device.laptop}{
      font-size: 1rem;
    }
`;

export const CardImage = styled.img`
    width: 100px;
    height: 100px;
    display: block;
    border-radius: 50%;
    border: 2px solid #ffd54d;
`;
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  padding: 0;
  
  p{
    color: #272727;
    font-size: 1rem;
    letter-spacing: normal;
    
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
  height: 100%;
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

