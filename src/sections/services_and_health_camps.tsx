import SectionHeading from "@/components/section_headline";
import containerStyles from "@/styles/container.module.css"
import data from "@/data/services.json"
import ServiceCard, { ServiceCardModel } from "@/components/service_card";
export default function ServiceAndHealthCamps(){
    const cards = data as ServiceCardModel[]
    return (
        <div className={containerStyles.section} id="services">
            <SectionHeading headingEn="Services And Health Camps" headingMr="सेवा आणि आरोग्य शिबिरे"/>
            <div className={containerStyles.services}>
                {cards.map((card,index)=>{
                    return (
                    <ServiceCard key = {index} service = {card}/>
                    )
                })}
            </div>
        </div>
    )
}