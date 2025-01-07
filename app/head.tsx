import React from "react";
import Head from "next/head";

const CustomHead: React.FC = () => {
    return (
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="robots" content="index, follow" />
            <link
                rel="sitemap"
                type="application/xml"
                title="sitemap"
                href="sitemap.xml"
            />
            <meta charSet="UTF-8" />
            <title>Accueil - Jérémy Lemaignent</title>
            <meta
                name="description"
                content="Jérémy Lemaignent, Développeur front-end certifié, je crée des sites interactifs et réactifs transformant des idées en expériences web exceptionnelles avec HTML, CSS, JS et React JS. Envie de discuter de votre prochain projet web ? Contactez-moi dès aujourd'hui."
            />
            <meta name="author" content="Jérémy Lemaignent" />
            <link
                rel="icon"
                href="./icon-LG_JL.svg"
                sizes="32x32"
                type="image/x-icon"
            />
            <link rel="apple-touch-icon" href="./icon-LG_JL.svg" />
            <link rel="canonical" href="https://jeremy.lemaignent.com/" />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Accueil - Jérémy Lemaignent" />
            <meta
                property="og:description"
                content="Jérémy Lemaignent, Développeur web front-end certifié, je crée des expériences web exceptionnelles avec HTML, CSS, JavaScript et React JS. Découvrez mes réalisations. Je transforme des idées en sites interactifs et réactifs. Envie de discuter de votre prochain projet web ? Contactez-moi dès aujourd'hui."
            />
            <meta property="og:url" content="https://jeremy.lemaignent.com/" />
            <meta property="og:site_name" content="Jérémy Lemaignent" />
            <meta property="og:image" content="./profile-4k.webp" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@JLem707" />
            <meta name="twitter:creator" content="@JLem707" />
            <meta
                name="google-site-verification"
                content="NscKRlakox2UloPzipOluKbqobU94o1qee5_5MCdA4Q"
            />
        </Head>
    );
};

export default CustomHead;
