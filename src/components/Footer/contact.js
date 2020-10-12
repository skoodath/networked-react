import React from 'react';
import styled from 'styled-components';
import Subtitle from "./subtitle";
import { FaEnvelope } from "react-icons/fa";

const ContactLinks = styled.article`
    color: #fff;
    padding: 1em 0;
    margin: 0 auto;
    width: 80%;
`;

const MyEmail = styled.span`
    color: #fff;
    svg{
        fill: #fff;
        height: 1.5rem;
        width: 1.5rem;
        vertical-align: middle;
    }
`;

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
