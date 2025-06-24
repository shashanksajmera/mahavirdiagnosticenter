import MultilingualText from "@/components/text"
import containerStyles from "@/styles/container.module.css"
import fontStyles from "@/styles/text.module.css"
import Image from "next/image";

export type ServiceCardModel={
    image:string;
    en:{
        heading:string,
        text:string
    };
    mr:{
        heading:string,
        text:string
    };
}

export default function ServiceCard({service} : {service:ServiceCardModel}){
    return(
        <div className={containerStyles.serviceCard}>
            <div className={containerStyles.serviceImage}>
            <Image src={`/assets/services/${service.image}`}  alt = {service.en.heading} fill={true} sizes="100%" style={{objectFit:"cover"}}/>
            </div>
            <div className={containerStyles.serviceTextDiv}>
            <MultilingualText 
                englishText={service.en.heading} 
                marathiText={service.mr.heading} 
                fontSizeClass={fontStyles.fontSize36} className={""} 
                as = "h4" 
                />  
            <MultilingualText 
            englishText={service.en.text} 
            marathiText={service.mr.text} 
            fontSizeClass={fontStyles.fontSize20} 
            className={""} />    
            </div>
        </div>
    )
}