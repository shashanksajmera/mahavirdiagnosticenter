import {Noto_Sans,Noto_Sans_Devanagari, Yatra_One} from "next/font/google";
import localfont from "next/font/local";

export const headingTextEn =  localfont({
    src: './fonts/Benguiat Bold.woff2',
    weight : "700",
    display: "swap",
    fallback: ["sans-serif"]
});

export const textEn = Noto_Sans({
    subsets:['latin'],
    style: ['normal', 'italic'],
    display: "swap"
})

export const headingTextMR = Yatra_One({
    subsets: ["devanagari"],
    weight: "400",
    display: "swap"
})

export const textMR = Noto_Sans_Devanagari({
    subsets: ["devanagari"],
    weight : ["300","400"],
    display: "swap"
})