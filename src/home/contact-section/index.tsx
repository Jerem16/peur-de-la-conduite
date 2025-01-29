import React from "react";
import Image from "next/image";
import ContactForm from "./contactForm";

const ContactHome = () => {
    return (
        <div className="contact content-wrapper">
            {/* Background Section */}
            <div className="contact-bg">
                <Image
                    className="contact-bg"
                    src="/img/contact/bg-contact.svg"
                    alt="Decorative background for contact section"
                    width={1440}
                    height={1587}
                    loading="lazy"
                    // style={{ objectFit: "cover" }}
                />
            </div>
            <ContactForm />
        </div>
    );
};

export default ContactHome;
