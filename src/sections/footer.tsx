import containerStyles from "@/styles/container.module.css"
import MultilingualText from "@/components/text";
import fontStyles from "@/styles/text.module.css";
import Image from "next/image";
export default function Footer() {
    return (
        <footer className={`${containerStyles.fullSection} ${containerStyles.footer}`} id="contact">
            <div className={containerStyles.footerMainContent}>
                <div className={containerStyles.footerContactInfo}>
                    <div className={containerStyles.footerRow1}>
                      <div className={containerStyles.rowSection1}>
                        <MultilingualText englishText={"Get in Touch"} marathiText={"संपर्कात रहा"} fontSizeClass={fontStyles.fontSize24} className={fontStyles.footerTextMobile}/>  
                        <MultilingualText englishText={"+91 99999 99999"} marathiText={"+९१ ९९९९९ ९९९९९"} fontSizeClass={fontStyles.fontSize16} className={fontStyles.footerTextMobile}/>
                        <MultilingualText englishText={"mahaviraurangabad@gmail.com"} marathiText={"mahaviraurangabad@gmail.com"} fontSizeClass={fontStyles.fontSize16} className={fontStyles.footerTextMobile}/>

                        </div>
                      <div className={containerStyles.rowSection1}>
                        <MultilingualText englishText={"Support Us"} marathiText={"आम्हाला मदत करा"} fontSizeClass={fontStyles.fontSize24} className={fontStyles.footerTextMobile}/>  
                        <MultilingualText englishText={"+91 99999 99999"} marathiText={"+९१ ९९९९९ ९९९९९"} fontSizeClass={fontStyles.fontSize16} className={fontStyles.footerTextMobile}/>
                        <MultilingualText englishText={"mahaviraurangabad@gmail.com"} marathiText={"mahaviraurangabad@gmail.com"} fontSizeClass={fontStyles.fontSize16} className={fontStyles.footerTextMobile}/>

                    </div>
                      <div className={containerStyles.rowSection1}>
                        <MultilingualText englishText={"Visting Hours"} marathiText={"भेटीचे तास"} fontSizeClass={fontStyles.fontSize24} className={fontStyles.footerTextMobile}/>  
                        <MultilingualText englishText={"Monday to Saturday:\n9:00 AM to 6 PM "} marathiText={"सोमवार ते शनिवार:\nसकाळी ९:०० ते संध्याकाळी ६"} fontSizeClass={fontStyles.fontSize16} className={fontStyles.footerTextMobile}/>

                        </div>
                    </div>
                    <div className={containerStyles.footerRow2}>
                        <div className={containerStyles.footerBrand}>
                            <div className={containerStyles.footerLogo}>
                            <Image src="" alt="Logo" fill={true} sizes="100%" style={{objectFit:"cover"}}/>
                            </div>
                            <MultilingualText englishText={"Mahavir Diagnostic Center"} marathiText={"महावीर डायग्नोस्टिक सेंटर"} fontSizeClass={fontStyles.fontSize36} className={fontStyles.footerBrandText} isHeading={true}     />                 
                        </div>
                        <div className={containerStyles.rowSection2}>
                        <MultilingualText englishText={"Center's Address"} marathiText={"सेंटरचा पत्ता"} fontSizeClass={fontStyles.fontSize24} className={fontStyles.footerTextMobile}/>  
                        <MultilingualText englishText={"Raja Bazar Rd, Nawabpura, Mondha, Chhatrapati Sambhajinagar, Maharashtra 431005"} marathiText={"राजा बाजार रोड, नवाबपुरा, मोंढा, छत्रपती संभाजीनगर, महाराष्ट्र ४३१००५"} fontSizeClass={fontStyles.fontSize16} className={fontStyles.footerTextMobile}/>
                        </div>
                    </div>
                </div>
                <iframe className={containerStyles.footerIframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.9125311219104!2d75.33228327468491!3d19.8859150260491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3041b9f40cf%3A0xea193509370b353d!2sMAHAVIR%20DIAGNOSTIC%20CENTER!5e0!3m2!1sen!2sin!4v1747658511238!5m2!1sen!2sin" loading="lazy"></iframe>
            </div>
            <MultilingualText
                englishText={"This website is maintained by Mahavir Eye Foundation Chhatrapati Sambhajinagar (Aurangabad) Chapter "}
                marathiText={"या वेबसाईटची देखभाल महावीर आय फाउंडेशन छत्रपती संभाजीनगर (औरंगाबाद) चॅप्टरने केली आहे"}
                fontSizeClass={fontStyles.fontSizeSmall}
                className={containerStyles.footerDeclarationText} />
        </footer>
    )
}