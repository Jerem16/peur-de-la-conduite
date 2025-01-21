import Contact from "../src/components/contact/Contact";
import Slider from "../src/components/slider/Slider";
import About from "../src/components/about/about";
import { SliderProvider } from "../src/utils/context/SliderContext";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Accueil | Peur de la conduite",
};

export default function Home() {
    return (
        <>
            <section className="section slider-bg" id="slider">
                <SliderProvider>
                    <Slider />
                </SliderProvider>
            </section>
            <section className="section" id="about">
                <div className="fixed-menu"></div>
                <About />
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
