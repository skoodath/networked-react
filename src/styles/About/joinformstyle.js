import styled from 'styled-components';

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
