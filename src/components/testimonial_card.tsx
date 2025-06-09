import containerStyles from "@/styles/container.module.css"
import MultilingualText from "./text";
import fontStyles from "@/styles/text.module.css"
import { forwardRef } from "react";
export type Testimonial={
    author:{
        en:string,
        mr:string,
    };
    testimonial:{
        en:string,
        mr:string,
    };
}
type Props = {testimonial:Testimonial}
const TestimonialCard = forwardRef<HTMLDivElement,Props>(({testimonial},ref) =>{
    return (
        <div ref={ref} className={containerStyles.testimonialCard}>
            <MultilingualText 
                englishText={testimonial.testimonial.en} 
                marathiText={testimonial.testimonial.mr} 
                fontSizeClass={fontStyles.fontSize16} 
                className={""}    />
                <MultilingualText 
                englishText={`- ${testimonial.author.en}`} 
                marathiText={`- ${testimonial.author.mr}`} 
                fontSizeClass={fontStyles.fontSize20} 
                className={fontStyles.testimonialAuthor}    />
        </div>
    )
});
export default TestimonialCard;