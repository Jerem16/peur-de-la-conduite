import React from "react";
import ContactInfo from "./contactInfo";
import ContactAnnouncement from "./contactAnnouncement";
import { contactAnnouncements } from "../../assets/data/content/contact";
const ContactForm = () => {
    return (
        <div className="ctc-content">
            <div className="ctc-layout">
                <h2>Me Contacter ?</h2>
                <ContactAnnouncement
                    message={contactAnnouncements[0].message}
                />
                <ContactInfo />
                <ContactAnnouncement
                    message={contactAnnouncements[1].message}
                />
                {/* <form>


                <fieldset>
                    <legend>Vous résidez à moins de 50 km du Havre ?</legend>
                    <label>
                        <input
                            type="checkbox"
                            id="residence-oui"
                            name="residence"
                            value="oui"
                            required
                        />
                        Oui
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            id="residence-non"
                            name="residence"
                            value="non"
                            required
                        />
                        Non
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Vous avez le permis ?</legend>
                    <label>
                        <input
                            type="checkbox"
                            id="permis-oui"
                            name="permis"
                            value="oui"
                            required
                        />
                        Oui
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            id="permis-non"
                            name="permis"
                            value="non"
                            required
                        />
                        Non
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Conduite accompagnée ou supervisée ?</legend>
                    <label>
                        <input
                            type="checkbox"
                            id="conduite-accompagnee"
                            name="conduite"
                            value="accompagnee"
                            required
                        />
                        Accompagnée
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            id="conduite-supervisee"
                            name="conduite"
                            value="supervisee"
                            required
                        />
                        Supervisée
                    </label>
                </fieldset>

                <label>
                    <input type="checkbox" name="conditions" required /> J'ai lu
                    et accepté les conditions d'utilisation.
                </label>
                <label>
                    <input type="checkbox" name="info" /> Je souhaite être
                    informé des prochains évènements.
                </label>

                <button type="submit">En voiture !</button>
            </form> */}
            </div>
        </div>
    );
};

export default ContactForm;
