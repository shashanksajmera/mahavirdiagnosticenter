import SectionHeading from "@/components/section_headline";
import containerStyles from "@/styles/container.module.css"
import data from "@/data/whyus.json"
import WhyUsCard, { WhyUsCardModel } from "@/components/why_us_card";
export default function WhyUs() {
    const cards = data as WhyUsCardModel[];
    return (
        <div className={containerStyles.section} id="why_us">
            <SectionHeading headingEn="Why Us" headingMr="आम्हीच का?" />
            <div className={containerStyles.whyUsFlex}>
                {cards.map((card) => {
                    return (
                        <WhyUsCard key={card.en.heading} card={card} />
                    )
                })}
            </div>
        </div>
    )
}