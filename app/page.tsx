import Contact from "../src/components/contact/Contact";
import Slider from "../src/home/slider/Slider";
import About from "../src/home/about/about";
import Services from "../src/home/service/services";
import { SliderProvider } from "../src/utils/context/SliderContext";
import { Metadata } from "next";
import ScrollSectionsWrapper from "./ScrollSectionsWrapper";
export const metadata: Metadata = {
    title: "Accueil | Peur de la conduite",
};

export default function Home() {
    return (
        <ScrollSectionsWrapper>
            <section className="section slider-bg" id="slider">
                <SliderProvider>
                    <Slider />
                </SliderProvider>
            </section>
            <section className="section about-bg" id="about">
                <div className="fixed-menu"></div>
                <About />
            </section>
            <section className="section" id="services">
                <div className="fixed-menu"></div>
                <Services />
            </section>
            <section className="section" id="contact">
                <Contact />
            </section>
        </ScrollSectionsWrapper>
    );
}
