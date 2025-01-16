import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Services",
};

export default function Page() {
    return (
        <>
            <section className="section" id="s1">
                <div className="fixed-menu"></div>
                <h2>Nos Services</h2>
                <div className="s1">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit aliquid provident magnam, delectus nobis est sunt
                        iste aut at error assumenda voluptas, harum sed
                        consequuntur voluptate soluta deleniti voluptatum
                        consequatur.
                    </p>
                </div>
            </section>
            <section className="section" id="sans-permis">
                <div className="fixed-menu"></div>
                <h2>Sans permis</h2>
                <div className="s2">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit aliquid provident magnam, delectus nobis est sunt
                        iste aut at error assumenda voluptas, harum sed
                        consequuntur voluptate soluta deleniti voluptatum
                        consequatur.
                    </p>
                </div>
            </section>
            <section className="section" id="avec-permis">
                <div className="fixed-menu"></div>
                <h2>Avec permis</h2>
                <div className="s3">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit aliquid provident magnam, delectus nobis est sunt
                        iste aut at error assumenda voluptas, harum sed
                        consequuntur voluptate soluta deleniti voluptatum
                        consequatur.
                    </p>
                </div>
            </section>
        </>
    );
}
