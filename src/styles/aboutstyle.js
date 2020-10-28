import styled from 'styled-components';
import { device } from './device';

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
        flex-direction: row;
    }
`;

export const StyledInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem 0 0;
    justify-content: center;
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
`;

/* Join Us form */

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
`;

/* Community Benefits Styling */


export const BenefitContainer = styled.section`
    width: 80%;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(12, 1fr);
    margin: 0 auto;
    gap: 10px;
    padding: 4rem 0;
`;


export const GridItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin: 0 0 0.4rem 0;
  &:hover div {
    opacity: 1;
  }
  &:focus div {
    opacity: 1;
  }
`;


export const CardHeader = styled.h3`
    font-weight: bold;
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
  background: #fff;
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
  &:hover {
    opacity: 1;
  }
`;

