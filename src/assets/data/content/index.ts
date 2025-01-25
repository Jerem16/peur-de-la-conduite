// src/assets/data/content/index.ts
import { sliderContent } from "./slider";
import { sliderInfo } from "./info";
import { aboutContent } from "./about";
import { serviceContent } from "./services";
import { Content } from "../interfaces/content";

export const contentIndex: Record<string, Content[]> = {
    "#slider": [...sliderContent, ...sliderInfo],
    "#about": aboutContent,
    "#services": serviceContent,
};
