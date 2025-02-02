import { Metadata } from "next";
import ContactBackGround from "../../src/home/contact-section/contactBackGround";

export const metadata: Metadata = {
    title: "Nos Tarifs",
};

export default function Page() {
    return (
        <section className="section contact " id="prices">
            <div className="fixed-menu"></div>
            <ContactBackGround />
            <div className="container">
                <h1>Tarifs des Prestations</h1>

                <section className="individual-session">
                    <h2>Séance Individuelle</h2>
                    <p>
                        <strong>Séance sans pack</strong>: 50 €
                    </p>
                    <p>
                        <strong>Durée</strong>: 1 h
                    </p>
                </section>

                <section className="packs">
                    <h3>Présentation des Packs</h3>
                    {/* <h3 id="futurs-conducteurs-title">Futurs Conducteurs</h3> */}
                    <table
                        className="futurs-conducteurs"
                        aria-labelledby="futurs-conducteurs-title"
                    >
                        <caption>Futurs Conducteurs</caption>
                        <thead>
                            <tr>
                                <th>Prestations</th>
                                <th>Nombre de Séances</th>
                                <th>Durée (h)</th>
                                <th>Prix du Pack (€)</th>
                                <th>Coût Normal (€)</th>
                                <th>Remise (€)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pack coaching stress avant examen</td>
                                <td>3</td>
                                <td>3</td>
                                <td>120</td>
                                <td>150</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>
                                    Pack coaching situations de conduite en
                                    groupe (max 7)
                                </td>
                                <td>2H30</td>
                                <td>2.5</td>
                                <td>30</td>
                                <td>125</td>
                                <td>95</td>
                            </tr>
                            <tr>
                                <td>
                                    Pack coaching conduite
                                    accompagnée/Supervisée
                                </td>
                                <td>3</td>
                                <td>3</td>
                                <td>120</td>
                                <td>150</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>
                                    Pack coaching situation de conduite
                                    individuel
                                </td>
                                <td>2</td>
                                <td>2</td>
                                <td>80</td>
                                <td>100</td>
                                <td>20</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* <h3>Conducteurs Expérimentés</h3> */}
                    <table className="conducteurs-experimentes">
                        <caption>Conducteurs Expérimentés</caption>
                        <thead>
                            <tr>
                                <th>Prestations</th>
                                <th>Nombre de Séances</th>
                                <th>Durée (h)</th>
                                <th>Prix du Pack (€)</th>
                                <th>Coût Normal (€)</th>
                                <th>Remise (€)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pack coaching peur de la conduite</td>
                                <td>5</td>
                                <td>5</td>
                                <td>200</td>
                                <td>250</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Pack coaching situation de conduite</td>
                                <td>3</td>
                                <td>3</td>
                                <td>120</td>
                                <td>150</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>Pack coaching amélioration conduite</td>
                                <td>3</td>
                                <td>3</td>
                                <td>120</td>
                                <td>150</td>
                                <td>30</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </section>
    );
}
