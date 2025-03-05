import {
    ContactAnnouncement,
    ContactDetail,
    SocialLink,
} from "../interfaces/content";

export const contactAnnouncements: ContactAnnouncement[] = [
    {
        message:
            "Besoin de conseils ou de renseignements ? N'hésite pas à me contacter.",
    },
    { message: "Vous pouvez également me contacter via ce formulaire." },
];

export const contactDetails: ContactDetail[] = [
    {
        svg: "/img/contact/icon/clock.svg",
        text: "Du Lundi au Dimanche, 07h - 20h",
        alt: "Horaires",
    },
    {
        svg: "/img/contact/icon/phone.svg",
        text: "+33 6 74 25 91 81",
        link: "tel:+33674259181",
        alt: "Téléphonne",
    },
    {
        svg: "/img/contact/icon/mail.svg",
        text: "Envoyez-moi un mail",
        link: "mailto:contact.peurdelaconduite@gmail.com",
        alt: "Mail",
    },
    {
        svg: "/img/contact/icon/location.svg",
        text: "17 Allée Didier Daurat, 76620 LE HAVRE",
        link:
            "https://maps.google.com/?q=17+Allée+Didier+Daurat,+76620+LE+HAVRE",
        alt: "Addresse",
    },
];

export const socialLinks: SocialLink[] = [
    { svg: "Youtube", link: "http://www.youtube.com/@MounirBouakkaz-r4i" },
    { svg: "WhatsApp", link: "https://wa.me/33674259181" },
    {
        svg: "TikTok",
        link:
            "https://www.tiktok.com/@peur.de.la.condui?_t=ZN-8taHCRDnmnH&_r=1",
    },
    {
        svg: "Instagram",
        link: "https://www.instagram.com/peurdelaconduite.fr/",
    },
    {
        svg: "Facebook",
        link:
            "https://www.facebook.com/profile.php?id=61567260421073&mibextid=LQQJ4d&rdid=QuSBUDcJheDerFqF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1D3HEm7Z4G%2F%3Fmibextid%3DLQQJ4d",
    },
    {
        svg: "Linkedin",
        link:
            "https://www.tiktok.com/@peur.de.la.condui?_t=ZN-8taHCRDnmnH&_r=1",
    },
];
