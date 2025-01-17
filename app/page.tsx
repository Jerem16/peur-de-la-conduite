import Contact from "../src/components/contact/Contact";
import Slider from "../src/components/slider/Slider";
import { SliderProvider } from "../src/utils/context/SliderContext";

export default function Home() {
    return (
        <>
            {/* <title>Accueil | Peur de la conduite</title> */}
            <section className="section slider-bg" id="slider">
                <SliderProvider>
                    <Slider />
                </SliderProvider>
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
