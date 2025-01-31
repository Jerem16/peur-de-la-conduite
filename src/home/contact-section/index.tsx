import React from "react";
import ContactBackGround from "./contactBackGround";
import ContactCard from "./contactCard";
import ContactForm from "./contactForm";

const ContactHome: React.FC = () => {
    return (
        <div className="contact content-wrapper">
            <ContactBackGround />
            <div className="ctc-content">
                <div className="ctc-layout">
                    <ContactCard />
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactHome;
