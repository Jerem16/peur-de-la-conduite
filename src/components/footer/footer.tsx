import Link from "next/link";
import SocialLinks from "../../home/contact-section/contactCard/SocialLinks";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="ft_p-1">
                    <nav>
                        <Link href="/mentions-legales">Mentions légales</Link>
                        <Link href="/informations-legales">
                            Informations légales
                        </Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                    <p>Peur-de-la-conduite.fr © 2024. Tous droits réservés.</p>
                </div>
                <div className="ft_p-2">
                    <SocialLinks />
                </div>
            </div>
        </footer>
    );
}
