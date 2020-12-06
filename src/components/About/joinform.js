import React from 'react';
import { 
    ContactForm, 
    InputFields, 
    InputLabels, 
    MessageBox, 
    ContactWrapper, 
    SendButton } from '../../styles/aboutstyle';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useState } from 'react';

const schema = Yup.object().shape({
        fullname: Yup.string()
        .min(3, "Name must be atleast three characters")
        .max(35, "Not more than 35 Characters")
        .required("Name cannot be blank"),
        email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email address cannot be blank"),
        message: Yup.string()
        .max(200, "Should not be more than 200 Characters")
})

const Contact = () => {

    

    const {register, handleSubmit, errors, reset} = useForm({
        resolver: yupResolver(schema)   
    });

    

    const SubmitForm = (data, e) => {
        emailjs.sendForm('gmail', 'gmail_template', e.target, 'user_VxY4OJHzwej0Cv5B4mDg9')
        .then((result) =>    {
            console.log(result.text);
            reset({

            })
            alert('Thank you! We will be in touch');
        }, (error) => {
            console.log(error.text);
        });
        reset({
            fullname: "",
            email: "",
            message: ""
        })
    };
    const [mousedn, setMousedn] = useState(false);

    const animateCaption = () =>{
        setMousedn(!mousedn);
        setTimeout(()=>{
            setMousedn(mousedn)
        }, 1500);

    }

    return (
        <>
            <ContactForm 
                onSubmit={handleSubmit(SubmitForm)}
                >
                <ContactWrapper>
                    <InputLabels
                        htmlFor='fullname'
                    >
                        Full Name
                    </InputLabels>
                    <InputFields
                        type='text'
                        name='fullname'
                        id='fullName'
                        ref={register()}
                        
                    />
                    <span>{errors.fullname?.message}</span>
                </ContactWrapper>
                <ContactWrapper>
                    <InputLabels
                        htmlFor='email'
                    >
                        Email Address
                    </InputLabels>
                    <InputFields
                        type='email'
                        name='email'
                        id='email'
                        ref={register()}
                    />
                    <span>{errors.email?.message}</span>
                </ContactWrapper>
                <ContactWrapper>
                    <InputLabels
                        htmlFor='message'
                    >
                        Send a note
                    </InputLabels>
                    <MessageBox
                        type='text'
                        name='message'
                        id='message'
                        ref={register()}
                    />
                    <span>{errors.message?.message}</span>
                </ContactWrapper>
                    <SendButton
                        type='submit'
                        name='submit'
                        id='submit'
                        onClick={animateCaption}
                    >
                        {mousedn ? 'Sending...' : 'Send' }
                    </SendButton>
            </ContactForm>
        </>
    )
}

export default Contact;
