'use client'
import React from 'react'
import containerStyles from "@/styles/container.module.css"
import textStyles from "@/styles/text.module.css"
import { textEn, textMR } from '@/app/fonts'
import { useLanguage } from '@/context/language_context'
export default function TopBar(){
    const  {language,setLanguage} = useLanguage();
    const  textClass = ((language != "en" ? textEn : textMR)).className;
    const  fontClass:string = ((language != 'en') ? `${textStyles.langEn}` : `${textStyles.langMr}`) + ` ${textStyles.fontSize16}`;
    const  changeLanguage = () => {
        setLanguage((language == "en" ? "mr" : "en"));
    }
    return (
        <div className={`${containerStyles.containerTopBar}`}>
            <button onClick={changeLanguage} className={containerStyles.switch}>
            <div className={`${textClass} ${fontClass}`}>{ language == "en" ? 'भाषा मराठीत बदला' : 'Switch Language to English'}</div>
            </button>
        </div>
    )
}