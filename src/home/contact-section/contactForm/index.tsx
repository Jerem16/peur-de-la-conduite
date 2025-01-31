import React from "react";
import ContactFormTitle from "./contactFormTitle";
import ContactQuestions from "./contactQuestions";

const ContactForm = () => {
    return (
        <div className="ctc-form">
            <ContactFormTitle />
            <ContactQuestions />
        </div>
    );
};

export default ContactForm;
