import MultilingualText from "@/components/text"
import containerStyles from "@/styles/container.module.css"
import fontStyles from "@/styles/text.module.css"
import Image from "next/image"
export default function LandingPage() {
    return (
        <div className={`${containerStyles.landingPage} ${containerStyles.section}`}>
            <div className={containerStyles.welcomeText}>
                <MultilingualText
                    englishText="Welcome to"
                    marathiText="स्वागत आहे"
                    fontSizeClass={`${fontStyles.fontSize60}`}
                    className=""
                    as="span"
                />
                <MultilingualText
                    englishText={`Mahavir Diagonstic\nCenter`}
                    marathiText={"महावीर डायग्नोस्टिक \n सेंटर"}
                    isHeading={true}
                    fontSizeClass={`${fontStyles.fontSize72}`}
                    className=""
                    as="h1"
                />
                <MultilingualText
                    englishText=" Lorem ipsum dolor sit"
                    marathiText="लॉरेम इप्सम डोलर सिट"
                    fontSizeClass={`${fontStyles.fontSize36}`}
                    className={`${fontStyles.italic}`}
                    as="p"
                />
            </div>
            <div className={containerStyles.LPImages}>
                <div className={`${containerStyles.landingPageImage} ${containerStyles.image1}`}>
                <Image src={"/assets/landingpage1.jpg"} alt="Mahavir Diagnostic Center" priority fill={true} sizes="100%" style={{objectFit:"cover"}}/>
                </div>
                <div className={`${containerStyles.landingPageImage} ${containerStyles.image2}`}>
                <Image src={"/assets/landingpage2.jpg"} alt="Mahavir Diagnostic Center" fill={true} sizes="100%" style={{objectFit:"cover"}}/>
                </div>
            </div>
        </div>
    )
}