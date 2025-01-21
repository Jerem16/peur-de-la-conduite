import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Blog",
};export default function Page() {
    return (
        <>
            <section className="section" id="s1">
                <div className="fixed-menu"></div>
                <h2>Le Blog</h2>
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
            <section className="section" id="s2">
                <div className="fixed-menu"></div>
                <h2>Page 2 : Section 2</h2>
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
            <section className="section" id="s3">
                <div className="fixed-menu"></div>
                <h2>Page 2 : Section 3</h2>
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
