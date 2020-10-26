import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import {
    JoinForm,
    FormLabel,
    FormInput,
    FormMsgBox,
    SubmitForm,
    FormErrorMsg
} from './../../styles/About/joinformstyle';


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
                    }, 400);
                 }}
                >
                    {props => (
                        <JoinForm>
                            <Form>
                            <MyInputField
                                label="First Name"
                                name="firstName"
                                type="text"
                            />
                            <MyInputField
                                label="Last Name"
                                name="lastName"
                                type="text"
                            />
                            <MyInputField
                                label="Email"
                                name="email"
                                type="email"
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
