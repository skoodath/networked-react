import styled from 'styled-components';
import { device } from './device';


export const Styledabout = styled.section`
  display: flex;
  flex-direction: column;
  height: ${({hgt}) => hgt};
  justify-content: center;
  background-color: ${ props => props.theme.main };
  margin: 0 auto;
  width: 80%;
  max-width: 1280px;
`;

Styledabout.defaultProps = {
  theme: {
    main: "#fff"
  }
}



/* About paragraph styling */

export const Aboutus = styled.p`
  margin: 2rem auto;
  border-bottom: 2px solid #ffd54d;
  padding: 0 0 2rem 0;
  letter-spacing: 2px;
  line-height: 2;
  font-size: 1.1rem;
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
font-size: 1.1em;
justify-self: flex-start;
align-self: flex-start;
`;

/* Join Us form

export const JoinForm = styled.div`
    width: 100%;
    margin: auto;
    
    form{
        display: flex;
        flex-direction: column;
    }
`;
export const FormLabel = styled.label`
    font-weight: 300;
    letter-spacing: 1px;
    margin: 1rem 0 0 0;
    position: relative;
    display: block;
`;
export const FormInput = styled.input`
    padding: 0.3rem;
    width: 100%;
    border-radius: 5px;
    border: 3px solid transparent;
    background: #ddd;
    font-size: 1.1rem;
    display: block;
    position: relative;
    transition-timing-function: ease-in-out;
    transition-property: border-bottom;
    transition-duration: 0.5s;

    &:focus{
        outline: none;
        background: #fff;
        border-radius: 0;
        border-bottom: 3px solid #ffd54d;
    }
`;
export const FormMsgBox = FormInput.withComponent('textarea');

export const SubmitForm = styled.button`
    border: none;
    background: #ffd54d;
    padding: 0.5rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    cursor: pointer;
    margin: 1rem 0 0 0;
    border-radius: 5px;
`;
export const FormErrorMsg = styled.p`
    color: #ff1e1e;
`;*/

/* Community Benefits Styling */


export const BenefitContainer = styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 4rem 1rem;
    display: flex;
    flex-direction: column;
`;

export const CardWrapper = styled.div`
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

export const CardItem = styled.div`
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
    font-size: 1.2rem;
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
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  transition-property: opacity;
  transition-duration: 0.7s;
  transition-timing-function: cubic-bezier(0.75, 0.82, 0.165, 1);
  p{
    color: #fff;
    font-size: 1.2rem;
    @media ${device.laptop} {
      font-size: 0.9rem;
    }
  }
  &:hover {
    opacity: 1;
  }
`;

/* New Form */

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  margin: 0 auto 0 0;
  span{
    color: #ff0000;
  }
`
;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0 0;
`
export const InputFields = styled.input`
    padding: 0.3rem;
    width: 100%;
    border-radius: 5px;
    border: 3px solid transparent;
    background: #ddd;
    font-size: 1.1rem;
    font-family: 'montserrat';
    display: block;
    position: relative;
    transition-timing-function: ease-in-out;
    transition-property: border-bottom;
    transition-duration: 0.5s;

    &:focus{
        outline: none;
        background: #fff;
        border-radius: 0;
        border-bottom: 3px solid #ffd54d;
    }
`;

export const InputLabels = styled.label`
  letter-spacing: 0;
  font-size: 0.9rem;
`;

export const MessageBox = InputFields.withComponent('textarea');

export const SendButton = styled.button`
    border: none;
    background: #ffd54d;
    padding: 0.5rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    cursor: pointer;
    margin: 1rem 0 0 0;
    border-radius: 5px;
`;

