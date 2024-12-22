// src/assets/data/interfaces/content.ts

// Interface pour le contenu "About"
export interface AboutCardIdentity {
    firstName: string;
    name: string;
    profession: string;
}

export interface AboutCardContent {
    description: string[];
}

export interface AboutContent {
    cardIdentity: AboutCardIdentity;
    cardContent: AboutCardContent;
}

// Interface pour le contenu "Slider"
export interface SliderContent {
    h2: string;
    h2bold: string;
    description: string;
}

// Type pour l'index des contenus
export type Content = SliderContent | AboutContent;
