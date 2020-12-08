import React from 'react';
import { ContactLinks, MailIcon, MyEmail } from '../../styles/aboutstyle';
import { EmailTitle } from '../../styles/aboutstyle';


const ContactUs = React.forwardRef((props, ref) => {
    return (
            <ContactLinks
                ref={ref}
            >
                <EmailTitle>Email</EmailTitle>
                <MyEmail>
                    <MailIcon /> archana@networked.in
                </MyEmail>
            </ContactLinks>
        )
    });

export default ContactUs;
