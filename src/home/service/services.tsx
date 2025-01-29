"use client";
import React from "react";
import Image from "next/image";
import DrivingForm from "./drivingForm";
import Beginner from "./beginner/beginner";
import Confirmed from "./confirmed/confirmed";
import Accompanist from "./accompanist";
import useLocalStorageState from "../../utils/localStorage/boolean-convertor/useLocalStorageBoolean";
const Services: React.FC = () => {
    const [hasPermit, setHasPermit] = useLocalStorageState(
        "Permis de conduire :",
        null
    );
    const [supervisedDriving, setSupervisedDriving] = useLocalStorageState(
        "Conduite accompagnée ou supervisée :",
        null
    );
    const [isAccompanist, setIsAccompanist] = useLocalStorageState(
        "Accompagnateur :",
        null
    );

    const onAccompanistChange = (value: boolean) => {
        setIsAccompanist(value);
    };

    return (
        <>
            <div className="services content-wrapper">
                <div className="card_bg"></div>
                <div className="segment">
                    <div className="card_empty"></div>
                    <h2 className="card_title">Nos Services</h2>
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
                        <DrivingForm
                            hasPermit={hasPermit}
                            supervisedDriving={supervisedDriving}
                            onPermitChange={setHasPermit}
                            onSupervisedChange={setSupervisedDriving}
                        />
                    </div>
                    {hasPermit === true && supervisedDriving === true && (
                        <Accompanist
                            isAccompanist={isAccompanist}
                            onAccompanistChange={onAccompanistChange}
                        />
                    )}
                </div>
            </div>
            {hasPermit === true && <Confirmed />}
            {hasPermit === false && <Beginner />}
        </>
    );
};

export default Services;
