import type { Metadata } from "next";
import localFont from "next/font/local";
import "../src/assets/styles/main.scss";
import { SearchProvider } from "../src/utils/context/SearchContext";
import { Suspense } from "react";
import HeaderProps from "./headerProps";

export const RobotoFlex = localFont({
    src: "/fonts/RobotoFlex.woff2",
    variable: "--RobotoFlex",
    weight: "100 900",
});

const Montserrat = localFont({
    src: "./fonts/Montserrat.woff2",
    variable: "--montserrat",
    weight: "100 900",
});

const Nunito = localFont({
    src: "./fonts/Nunito.woff2",
    variable: "--nunito",
    weight: "100 900",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://peur-de-la-conduite.lemaignent.com/"),
    title: {
        template: '%s | Peur de la conduite',
        default: 'Peur de la conduite',
      },
    description:
        "Jérémy Lemaignent, Développeur front-end certifié, je crée des sites interactifs et réactifs transformant des idées en expériences web exceptionnelles avec HTML, CSS, JS et React JS.",
    authors: [{ name: "Jérémy Lemaignent" }],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Peur de la conduite",
        description:
            "Jérémy Lemaignent, Développeur web front-end certifié, je crée des expériences web exceptionnelles avec HTML, CSS, JavaScript et React JS.",
        url: "https://jeremy.lemaignent.com/",
        siteName: "Jérémy Lemaignent",
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "./profile-4k.webp",
                width: 1200,
                height: 630,
                alt: "Image de profil de Jérémy Lemaignent",
            },
        ],
    },
    twitter: {
        card: "summary",
        site: "@JLem707",
        creator: "@JLem707",
    },
  icons: {
        apple: [
            { url: "img/favicon/apple-touch-icon.png" },  // 120x120
            { url: "img/favicon/logo.svg", sizes: "152x152", type: "image/png" },  // iPad
            { url: "img/favicon/logo.svg", sizes: "180x180", type: "image/png" },  // Retina
        ],

        icon : [
            { url: "img/favicon/logo.svg", type: "image/svg+xml" },
            { url: "img/favicon/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },  
            { url: "img/favicon/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },  
            { url: "img/favicon/icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },  
            { url: "img/favicon/icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }, 
            { url: "img/favicon/logo.svg", sizes: "48x48", type: "image/svg+xml" },  
            { url: "img/favicon/logo.svg", sizes: "64x64", type: "image/svg+xml" }, 
            { url: "img/favicon/logo.svg", sizes: "270x270", type: "image/svg+xml"  },  
            { url: "img/favicon/logo.svg", sizes: "310x310", type: "image/svg+xml"  }, 
            { url: "img/favicon/logo.svg", sizes: "152x152", type: "image/svg+xml"  },  
            { url: "img/favicon/logo.svg", sizes: "180x180", type: "image/svg+xml" }, 
        ],        
    },
    alternates: {
        canonical: "https://jeremy.lemaignent.com/",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr-FR">
            <body
                className={`${RobotoFlex.variable} ${Montserrat.variable} ${Nunito.variable}`}
                id="top"
            >
                <SearchProvider>
                        <Suspense fallback={<div>Chargement du header...</div>}>
                            <header>
                                <div className="content-wrapper">
                                    <HeaderProps />
                                </div>
                            </header>
                            <main>{children}</main>
                        </Suspense>
                </SearchProvider>
            </body>
        </html>
    );
}
