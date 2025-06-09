import MultilingualText from "@/components/text"
import { useLanguage } from "@/context/language_context";
import containerStyles from "@/styles/container.module.css"
import fontStyles from "@/styles/text.module.css"
import { useEffect, useState } from "react";

export type WhyUsCardModel = {
    icon:string;
    en: {
        heading:string,text:string
    };
    mr: {
        heading:string,text:string
    }
};

export default function WhyUsCard({card} : {card:WhyUsCardModel}){
    const [svg,setSvg] = useState('');
    useEffect(()=>{
        fetch(`/icons/${card.icon}.svg`)
        .then((res)=>res.text())
        .then((text)=>setSvg(text));
    },[])
    return (
        <div className={containerStyles.whyUsCard}>
            <div className={containerStyles.whyUsIcon} dangerouslySetInnerHTML={{__html: svg}}></div>
            <MultilingualText 
            englishText={card.en.heading}
            marathiText={card.mr.heading}
            fontSizeClass={fontStyles.fontSize32}
            className={containerStyles.whyUsHeading}
            as="h4"
            />
            <MultilingualText 
            englishText={card.en.text}
            marathiText={card.mr.text}
            fontSizeClass={fontStyles.fontSize16}
            className= {`${containerStyles.whyUsText} ${useLanguage().language == "mr" ? fontStyles.textMr300 : ""}`}
            />
        </div>
    )
}