import React from 'react';
import { ContactLinks, MailIcon, MyEmail } from '../../styles/aboutstyle';
import { EmailTitle } from '../../styles/aboutstyle';


const ContactUs = () => {
    return (
            <ContactLinks>
                <EmailTitle>Email</EmailTitle>
                <MyEmail>
                    <MailIcon /> archana@networked.in
                </MyEmail>
            </ContactLinks>
        )
    }

export default ContactUs;
