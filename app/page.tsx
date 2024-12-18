import Contact from "../src/components/contact/Contact";

export default function Home() {
    return (
        <>
            <section className="section" id="slider">
                <div className="fixed-menu"></div>
                <h2>Main Page</h2>
                <div className="s1">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui doloremque rerum quod aut ipsa consectetur quaerat
                        cupiditate voluptate quae sapiente odit dolorum sit
                        natus dicta molestias, ea error porro optio.
                    </p>
                </div>
            </section>
            <section className="section" id="about">
                <div className="fixed-menu"></div>
                <h2>À propos</h2>
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
            <section className="section" id="services">
                <div className="fixed-menu"></div>
                <h2>Services</h2>
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
            <section className="section" id="contact">
                <Contact />
            </section>
        </>
    );
}
