import React from 'react';
import { ContactLinks, MailIcon, MyEmail } from '../../styles/aboutstyle';


const ContactUs = React.forwardRef((props, ref) => {
    return (
            <ContactLinks
                ref={ref}
            >
                <MyEmail>
                    <MailIcon /> <a href="mailto:archana@networked.in">archana@networked.in</a>
                </MyEmail>
            </ContactLinks>
        )
    });

export default ContactUs;
