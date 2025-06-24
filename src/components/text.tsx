'use client'
import { headingTextEn, headingTextMR, textEn, textMR } from '@/app/fonts';
import { useLanguage } from '@/context/language_context';
import React, { JSX } from 'react'
import fontstyles from "@/styles/text.module.css"
export default function MultilingualText({ 
    englishText,marathiText,isHeading = false,fontSizeClass = `${fontstyles.fontSize16}`,className, as: Component = 'div'} : {
    englishText: string, marathiText: string, isHeading?:boolean, fontSizeClass: string, className:string, as?: keyof JSX.IntrinsicElements
}
){
    const lang:string = useLanguage().language ?? 'en';
    const textClass = (isHeading ? (lang == "en" ? headingTextEn : headingTextMR) : (lang == "en" ? textEn : textMR)).className;
    const fontClass:string = ((lang == 'en') ? `${fontstyles.langEn}` : `${fontstyles.langMr}`) + " " +fontSizeClass;

    return (
        <Component
        className = {`${textClass} ${className} ${fontClass}`}>
            { lang == "en" ?englishText : marathiText}
        </Component>
    );
}