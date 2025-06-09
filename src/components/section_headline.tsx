import MultilingualText from "./text";
import fontStyles from "@/styles/text.module.css"
export default function SectionHeading({headingEn,headingMr,className} : {headingEn:string,headingMr:string,className?:string}){
    return(
        <MultilingualText 
        englishText={headingEn} 
        marathiText={headingMr} 
        fontSizeClass={fontStyles.fontSize36} 
        className={`${fontStyles.sectionHeading} ${className}`}   
        as = "h2"     
        />
    )
}