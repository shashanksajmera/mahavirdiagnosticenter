import SectionHeading from "@/components/section_headline";
import MultilingualText from "@/components/text"
import { useLanguage } from "@/context/language_context";
import containerStyles from "@/styles/container.module.css"
import fontStyles from "@/styles/text.module.css"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export default function AboutUs() {
    const ref = useRef<HTMLDivElement>(null);
    let [isExpanded, setExpanded] = useState(false);
    useEffect(() => {
        if (typeof window === "undefined") return;
        const width = window.innerWidth;
        if(width < 600){
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
                <div ref={ref} className={`${containerStyles.aboutText} ${isExpanded ? containerStyles.unclamped : containerStyles.clamped} `}>
                    <MultilingualText
                        englishText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus velit, ornare sed nisi sed, efficitur vulputate lacus. Donec eleifend, elit sed dignissim feugiat, risus lacus varius nisi, eget feugiat leo est et sapien. Proin nibh enim, pellentesque quis rhoncus in, pulvinar vitae sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut orci lectus, eleifend id egestas a, cursus aliquam lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean a consectetur velit. Pellentesque pellentesque dictum lorem eget commodo. Duis non suscipit massa, sit amet pretium quam. Quisque convallis ligula eu mi mattis, vel dictum odio sagittis. Nam congue sem eu faucibus eleifend. Aliquam id ipsum nec nibh vestibulum gravida. Praesent porta congue lectus. Vivamus volutpat turpis urna, vel tristique "}
                        marathiText={"लोरेम इप्सम डलर सीत अमेत, कन्सेक्टेटर अॅडिपिसिंग एलिट. सेड टेलस वेळीत, ओरणारे सेड निसी सेड, एफिसिटर वुल्पुटते लाकस. डोनेक एलीफेंड, एलिट सेड डिग्निसिम फ्युगियात, रिसस लाकस व्हेरियस निसी, एगेट फ्युगियात लिओ इएसटी ईटी सॅपियन. प्रोईन निभ एनिम, पेलेंटेस्क क्विस र्होंकस आयएन, पुलविणार विटे सॅपियन. वेस्टिब्युलम अंते इप्सम प्रिमिस आयएन फॉसिबस ओआरसीआय लक्टस ईटी अल्ट्रिसेस पोसुएरे क्युबिलिया क्यूरे; उत ओआरसीआय लेक्टस, एलीफेंड आयडी इजेस्टस ए, कर्सस अलिक्यूम लेक्टस. पेलेंटेस्क हॅबिटंट मोरबी ट्रिस्टीक सेनेक्टस ईटी नेटस ईटी मलेसुआडा फेम्स एसी टर्पिस इजेस्टस. लोरेम इप्सम डलर सीत अमेत, कन्सेक्टेटर अॅडिपिसिंग एलिट. सेड टेलस वेळीत, ओरणारे सेड निसी सेड, एफिसिटर वुल्पुटते लाकस. डोनेक एलीफेंड, एलिट सेड डिग्निसिम फ्युगियात, रिसस लाकस व्हेरियस निसी, एगेट फ्युगियात लिओ इएसटी ईटी सॅपियन. प्रोईन निभ एनिम, पेलेंटेस्क क्विस र्होंकस आयएन, पुलविणार विटे सॅपियन. वेस्टिब्युलम अंते इप्सम प्रिमिस आयएन फॉसिबस "}
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