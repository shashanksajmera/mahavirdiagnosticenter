import SectionHeading from "@/components/section_headline";
import MultilingualText from "@/components/text"
import { useLanguage } from "@/context/language_context";
import containerStyles from "@/styles/container.module.css"
import fontStyles from "@/styles/text.module.css"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export default function AboutUs() {
    const ref = useRef<HTMLDivElement>(null);
    const [isExpanded, setExpanded] = useState(false);
    useEffect(() => {
        if (typeof window === "undefined") return;
        const width = window.innerWidth;
        console.log("Width: ", width);
        if (width < 600) {
            if (ref.current == null) {
                return;
            }
            if (isExpanded) {
                ref.current.style.maxHeight = "none"
            }
            else {
                ref.current.style.maxHeight = "8.4rem"
            }
        }
    }, [isExpanded])
    return (
        <div className={containerStyles.section} id="about">
            <SectionHeading headingEn="Who We Are" headingMr="आमची ओळख" />
            <div className={containerStyles.aboutUs}>
                <div ref={ref} className={`${containerStyles.aboutText}`}>
                    <MultilingualText
                        englishText={"Mahavir Diagnostic Center, run by Mahavir Eye Foundation in Chhatrapati Sambhajinagar, is a no-profit, no-loss healthcare facility started in March 2020. Despite the COVID-19 pandemic, it has continued to offer affordable, quality services supported by community donations. Spread across 1800 sq. ft., the center includes a pathology lab, digital X-ray, eye check-up unit, expert consultation services, medical equipment rental, and computerized consulting rooms. It provides home sample collection, has a trained staff, and offers expert consultation services across multiple specialties, while advanced scans are outsourced. The facility is air-conditioned, well-ventilated, and equipped to handle patient needs comfortably. It stands as a trusted health center focused on service, not profit."}
                        marathiText={"महावीर आय फाउंडेशनने छत्रपती संभाजीनगर येथे चालवलेले महावीर डायग्नोस्टिक सेंटर ही मार्च २०२० मध्ये सुरू केलेली एक ना-नफा, ना-तोटा आरोग्य सेवा सुविधा आहे. कोविड-१९ साथीच्या आजारानंतरही, ते समुदायाच्या देणग्यांद्वारे परवडणाऱ्या, दर्जेदार सेवा देत राहिले आहे. १८०० चौरस फूट क्षेत्रात पसरलेल्या या केंद्रात पॅथॉलॉजी लॅब, डिजिटल एक्स-रे, नेत्र तपासणी युनिट, तज्ञ सल्ला सेवा, वैद्यकीय उपकरणे भाड्याने देणे आणि संगणकीकृत सल्लागार कक्ष आहेत. ते घरी नमुना संकलन प्रदान करते, प्रशिक्षित कर्मचारी आहेत आणि अनेक विशेष सेवांमध्ये तज्ञ सल्ला सेवा देते, तर प्रगत स्कॅन आउटसोर्स केले जातात. ही सुविधा वातानुकूलित, हवेशीर आणि रुग्णांच्या गरजा आरामात हाताळण्यासाठी सुसज्ज आहे. ते नफ्यावर नव्हे तर सेवेवर लक्ष केंद्रित करणारे एक विश्वासार्ह आरोग्य केंद्र म्हणून उभे आहे."}
                        fontSizeClass={fontStyles.fontSize20}
                        className={(useLanguage().language == "mr" ? fontStyles.textMr300 : "")} />
                </div>
                <div className={containerStyles.aboutImg}>
                    <Image src="/assets/landingpage1.jpg" fill={true} sizes="100%" style={{ objectFit: "cover" }} alt="About" />
                </div>
            </div>
            <button onClick={() => { setExpanded(!isExpanded) }} className={containerStyles.readMore}>{!isExpanded ? "Read More" : "Read Less"}</button>
        </div>
    );
}