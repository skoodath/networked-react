import React from 'react';
import Subtitle from "./subtitle";
import { ContactLinks, MailIcon, MyEmail } from '../../styles/footerstyle';


const ContactUs = () => {
    return (
            <ContactLinks>
                <Subtitle title={`Contact Us`} />
                <MyEmail>
                    <MailIcon /> archana@networked.in
                </MyEmail>
            </ContactLinks>
        )
    }

export default ContactUs;
