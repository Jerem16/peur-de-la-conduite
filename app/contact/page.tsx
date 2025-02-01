import ContactHome from "../../src/home/contact-section";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact",
};
export default function Page() {
    return (
        <section className="section">
            <div className="fixed-menu"></div>
            <ContactHome />
        </section>
    );
}
