import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
    contactDetails,
    socialLinks,
} from "../../../assets/data/content/contact";
import { socialSvgComponents } from "../socialSvgComponents";

const ContactInfo = () => {
    return (
        <div className="ctc-info flx-c">
            {contactDetails.map((item, index) => (
                <React.Fragment key={index + "ctc-info"}>
                    {item.link ? (
                        <a
                            className="ctc-card"
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="flx-c">
                                <Image
                                    src={item.svg}
                                    alt={item.alt}
                                    width={45}
                                    height={45}
                                    loading="lazy"
                                />
                            </span>
                            <p>{item.text}</p>
                        </a>
                    ) : (
                        <div className="ctc-card">
                            <span className="flx-c">
                                <Image
                                    src={item.svg}
                                    alt={item.alt}
                                    width={45}
                                    height={45}
                                    loading="lazy"
                                />
                            </span>
                            <p>{item.text}</p>
                        </div>
                    )}
                </React.Fragment>
            ))}
            <div className="ctc-social_card">
                <p>Nous suivre</p>
                <div className="social-icons">
                    {socialLinks.map(({ svg, link }, index) => {
                        const IconComponent = socialSvgComponents[svg];
                        return (
                            <Link
                                key={index + "social-icons"}
                                rel="nofollow noreferrer"
                                href={link}
                                target="_blank"
                                className="flx-c social-icon"
                            >
                                {IconComponent && <IconComponent />}
                                <span className="visually-hidden">{link}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
