import React from 'react';
import Subtitle from "./subtitle";
import { FaEnvelope } from "react-icons/fa";
import { ContactLinks, MyEmail } from '../../styles/footerstyle';


const ContactUs = () => {
    return (
            <ContactLinks>
                <Subtitle title={`Contact Us`} />
                <MyEmail>
                    <FaEnvelope /> archana@networked.in
                </MyEmail>
            </ContactLinks>
        )
    }

export default ContactUs;
