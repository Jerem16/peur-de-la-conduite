// Services.tsx
"use client";
import React from "react";
import Image from "next/image";
import DriveQuestions from "./questions/driveQuestions";
import AccQuestions from "./questions/accompanistQuestions";
import PermitStatus from "./permitStatus";

const Services: React.FC = () => {
    return (
        <>
            <div className="services content-wrapper">
                <div className="card_bg"></div>
                <div className="segment segment-title">
                    <div className="card_empty"></div>
                    <h2 className="card_title">Nos Services</h2>
                </div>
                <div className="segment">
                    <div className="card_header flx-c">
                        <Image
                            className="srv-img_typo"
                            src="/img/services/TYPO-LOGO.svg"
                            alt="Image cours de conduite"
                            width={360}
                            height={83}
                            loading="lazy"
                            priority={false}
                        />
                        <Image
                            className="srv-img_lesson"
                            src="/img/services/cours-de-conduite.webp"
                            alt="Image cours de conduite"
                            width={288}
                            height={265}
                            loading="lazy"
                            priority={false}
                        />
                    </div>
                    <div className="card_content">
                        <p>
                            Découvre un aperçu de mes services conçus
                            spécialement pour répondre aux besoins des
                            conducteurs débutants et confirmés :
                        </p>
                        <DriveQuestions />
                    </div>
                    {/**
                     * //! if hasPermit === true && supervisedDriving === true
                     * //! return <AccQuestions/>
                     */}
                    <AccQuestions />
                </div>
            </div>
            {/**
             * //! if hasPermit === true  => <Confirmed />
             * //! if hasPermit === false => <Beginner />
             */}
            <PermitStatus />
        </>
    );
};

export default Services;
