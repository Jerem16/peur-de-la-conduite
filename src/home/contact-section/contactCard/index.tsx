import React from "react";
import ContactInfo from "./contactInfo";
import ContactAnnouncement from "./contactAnnouncement";
import { contactAnnouncements } from "../../../assets/data/content/contact";

const ContactCard = () => {
    return (
        <React.Fragment>
            <h2>Me Contacter ?</h2>
            <ContactAnnouncement message={contactAnnouncements[0].message} />
            <ContactInfo />
            <ContactAnnouncement message={contactAnnouncements[1].message} />
        </React.Fragment>
    );
};

export default ContactCard;
