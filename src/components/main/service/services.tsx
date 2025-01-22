import React from "react";
import Image from "next/image";
import "./services.scss";

const Services = () => {
    return (
        <div className="services content-wrapper">
            <h2>Nos Services</h2>
            <div className="srv-card_bg"></div>
            <div className="segment">
                <div className="card_header flx-c">
                    <Image
                        className="srv-img_typo"
                        src="/img/services/TYPO-LOGO.svg"
                        alt={`Image cours de conduite`}
                        width={360}
                        height={83}
                        loading="lazy"
                        priority={false}
                    />
                    <Image
                        className="srv-img_lesson"
                        src="/img/services/cours-de-conduite.webp"
                        alt={`Image cours de conduite`}
                        width={288}
                        height={265}
                        loading="lazy"
                        priority={false}
                    />
                </div>
                <div className="card_content">
                    <p>
                        Découvre un aperçu de mes services conçus spécialement
                        pour répondre aux besoins des conducteurs débutants et
                        confirmés :
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
