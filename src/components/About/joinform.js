import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const JoinForm = styled.div`
    width: 80%;
    margin: auto;
    
    form{
        display: flex;
        flex-direction: column;
    }
`;
const FormLabel = styled.label`
    font-weight: 300;
    letter-spacing: 2px;
    margin: 1rem 0 0 0;
`;
const FormInput = styled.input`
    padding: 0.3rem;
    width: 100%;
    border-radius: 5px;
    border: none;
    background: #efefef;
    font-size: 1.2rem;
    &:focus{
        outline: none;
    }
`;
const FormMsgBox = FormInput.withComponent('textarea');

const SubmitForm = styled.button`
    border: none;
    background: #ffd54d;
    padding: 0.5rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    cursor: pointer;
    margin: 1rem 0 0 0;
    border-radius: 5px;
`;
const FormErrorMsg = styled.p`
    color: #ff1e1e;
`;

const MyInputField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log(meta, field);
    return (
        <>
            <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
            <FormInput {...field} {...props} />
                {meta.touched && meta.error ? (
                        <FormErrorMsg>{meta.error}</FormErrorMsg>
                ): null }
        </>
    )
}

const JoinUs = () => {
    return(

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                    .min(1, "Atleast One Character")
                    .max(25, "Should not be more than 25 Characters")
                    .required("First Name cannot be blank"),
                    lastName: Yup.string()
                    .min(1, "Atleast One Character")
                    .max(25, "Should not be more than 25 Characters")
                    .required("First Name cannot be blank"),
                    email: Yup.string()
                    .email("Please enter a valid email address")
                    .required("Email address cannot be blank"),
                    message: Yup.string()
                    .max(150, "Should not be more than 150 Characters")
                })}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false);
                    }, 4000);
                 }}
                >
                    {props => (
                        <JoinForm>
                            <Form>
                            <MyInputField
                                label="First Name"
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                            />
                            <MyInputField
                                label="Last Name"
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                            />
                            <MyInputField
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Email"
                            />
                            <FormLabel htmlFor="email">Send us a note</FormLabel>
                            <FormMsgBox
                                id="message"
                                name="message"
                            />
                            
                            <SubmitForm
                                type="submit"
                            >
                                {props.isSubmitting? 'Sending' : 'Send'}
                            </SubmitForm>
                            
                            </Form>
                        </JoinForm>
                    )}
                    
                </Formik>
    )

}

export default JoinUs;
