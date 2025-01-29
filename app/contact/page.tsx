import ContactHome from "../../src/home/contact-section";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact",
};
export default function Page() {
    return (
        <section className="section">
            <ContactHome />
        </section>
    );
}
