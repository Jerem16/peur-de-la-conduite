import React from "react";
import Image from "next/image";
import Space from "../../../utils/Space";

const Beginner = () => {
    return (
        <div className="services content-wrapper content-srv" id="beginner">
            <div className="card_bg">
                <Image
                    className="road-confirmed"
                    src="/img/services/road-Beginner.svg"
                    alt={`Logo background`}
                    width={1706.7} //1706.7 2596.4
                    height={2957.4}
                    loading="lazy"
                    priority={false}
                />
            </div>
            <div className="segment segment-title">
                <div className="card_empty flx-c">
                    <h2 className="card_title">Conducteurs novice</h2>
                </div>
                <div className="card_title"></div>
            </div>
            <div className="segment">
                <div className="card_header flx-c">
                    <p>
                        Mets toutes les chances de ton côté !
                        <Space />
                        <span>
                            Réussis ton examen et conduis en toute confiance !
                        </span>
                    </p>
                    <div className="aside-bg">
                        <Image
                            className="srv-aside-bg"
                            src="/img/services/aside-bg.svg"
                            alt={`Logo background`}
                            width={360}
                            height={860}
                            loading="lazy"
                            priority={false}
                        />
                    </div>
                </div>
                <div className="card_content">
                    <div className="flx-c srv-description o1">
                        <p>
                            Vise l’excellence
                            <br />
                            En route vers la réussite !
                        </p>
                        <div className="flx-c icon-description">
                            <Image
                                className="srv-aside-bg"
                                src="/img/services/Trophy.svg"
                                alt={`Logo Trophy`}
                                width={1145}
                                height={1145}
                                loading="lazy"
                                priority={false}
                            />
                        </div>
                    </div>

                    <div className="flx-c srv-description">
                        <a
                            href="./services#top"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gestion du stress avant examen
                        </a>
                        <div className="flx-c icon-description">
                            <Image
                                className="srv-aside-bg"
                                src="/img/services/Stress.svg"
                                alt={`Logo Gestion du stress avant examen`}
                                width={1145}
                                height={1145}
                                loading="lazy"
                                priority={false}
                            />
                        </div>
                    </div>
                    <div className="flx-c srv-description">
                        <a
                            href="./services#top"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gestion des situations de conduite difficiles
                        </a>
                        <div className="flx-c icon-description">
                            <Image
                                className="srv-aside-bg"
                                src="/img/services/SCD.svg"
                                alt={`Logo Gestion des situations de conduite difficiles`}
                                width={1145}
                                height={1145}
                                loading="lazy"
                                priority={false}
                            />
                        </div>
                    </div>
                    <div className="flx-c srv-description">
                        <a
                            href="./services#top"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Conduites accompagnée ou supervisée
                        </a>
                        <div className="flx-c icon-description">
                            <Image
                                className="srv-aside-bg"
                                src="/img/services/ACC.svg"
                                alt={`Logo Conduites accompagnée ou supervisée`}
                                width={1145}
                                height={1145}
                                loading="lazy"
                                priority={false}
                            />
                        </div>
                    </div>
                    <div className="flx-c srv-description">
                        <a
                            href="./services#top"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Coaching Concentration
                        </a>
                        <div className="flx-c icon-description">
                            <Image
                                className="srv-aside-bg"
                                src="/img/services/Concentration.svg"
                                alt={`Logo Coaching Concentration`}
                                width={1145}
                                height={1145}
                                loading="lazy"
                                priority={false}
                            />
                        </div>
                    </div>
                    <div className="flx-c srv-description">
                        <a
                            href="./services#top"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Maîtrise de la trajectoire
                        </a>
                        <div className="flx-c icon-description">
                            <Image
                                className="srv-aside-bg"
                                src="/img/services/TRAGECTOIRE.svg"
                                alt={`Logo Maîtrise de la trajectoire`}
                                width={1145}
                                height={1145}
                                loading="lazy"
                                priority={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Beginner;
