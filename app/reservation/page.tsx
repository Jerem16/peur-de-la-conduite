import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Réservation",
};

export default async function Page() {
    // await new Promise((r) => setTimeout(r, 1000));
    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <h2>Réservation</h2>
            <div className="s1">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit aliquid provident magnam, delectus nobis est sunt iste
                    aut at error assumenda voluptas, harum sed consequuntur
                    voluptate soluta deleniti voluptatum consequatur.
                </p>
            </div>
        </section>
    );
}
