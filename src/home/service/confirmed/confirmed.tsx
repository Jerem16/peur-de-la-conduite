import React from "react";
import Image from "next/image";

const Confirmed = () => {
    return (
        <div className="services content-wrapper">
            <div className="card_bg"></div>
            <div className="segment">
                <div className="card_empty"></div>
                <h2 className="card_title">Nos Services</h2>
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
                    <h3>Vous avez le permis !</h3>
                    <p>
                        Explorez nos services avancés de coaching et de
                        perfectionnement.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Confirmed;
