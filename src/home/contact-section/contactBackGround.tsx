import React from "react";
import Image from "next/image";


const ContactBackGround = () => {
    return (
            <div className="contact-bg">
                <Image
                    className="contact-bg"
                    src="/img/contact/bg-contact.svg"
                    alt="Decorative background for contact section"
                    width={1440}
                    height={1587}
                    loading="lazy"
                />
            </div>
    );
};

export default ContactBackGround;
