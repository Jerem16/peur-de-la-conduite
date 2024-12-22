// src/assets/data/content/index.ts
import { sliderContent } from "./slider";
import { aboutContent } from "./about";
import { Content } from "../interfaces/content";

export const contentIndex: Record<string, Content[]> = {
    "#slider": sliderContent,
    "#about": aboutContent,
};
