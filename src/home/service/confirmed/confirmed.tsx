import React from "react";
import Image from "next/image";
import Space from "../../../utils/Space";

const Confirmed = () => {
    return (
        <div className="services content-wrapper content-srv" id="confirmed">
            <Image
                className="road-confirmed"
                src="/img/services/road-confirmed.svg"
                alt={`Logo background`}
                width={1706.7} //1706.7 2596.4
                height={2596.4}
                loading="lazy"
                priority={false}
            />
            <div className="card_bg"></div>
            <div className="segment segment-title">
                <div className="card_empty flx-c">
                    <h2 className="card_title">Conducteurs confirmés</h2>
                </div>
                <div className="card_title"></div>
            </div>
            <div className="segment">
                <div className="card_header flx-c">
                    <p>
                        Prenez la route en toute sérénité !
                        <Space />
                        <span>
                            Boostez votre confiance et renforcez votre maîtrise du volant !
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
                            Redécouvrez
                            <br />
                            Le plaisir de conduire !
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
                            Coaching peur de la conduite (Amaxophobie)
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
                            Perfectionnement et amélioration de la conduite
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

export default Confirmed;
