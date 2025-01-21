import Contact from "../../src/components/contact/Contact";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact",
};
export default function Page() {
    return (
        <section className="section">
            <Contact />
        </section>
    );
}
