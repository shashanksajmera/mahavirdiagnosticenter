import SectionHeading from "@/components/section_headline";
import TestimonialCard, { Testimonial } from "@/components/testimonial_card";
import containerStyles from "@/styles/container.module.css"
import { useEffect, useRef, useState } from "react";
export default function Testimonials() {
    var [testimonials, setData] = useState<Testimonial[]>();
    const scrollRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("./testimonials.csv");
                const text = await res.text();

                const lines = text.trim().split('\n');
                var data: Testimonial[] = [];
                for (var i = 1; i < lines.length; i++) {
                    var parts = lines[i].split("/,/");
                    if (parts.length != 4) {
                        throw new Error("CSV File not Formatted Correctly");
                    }
                    data.push({
                        author: {
                            en: parts[0],
                            mr: parts[1]
                        },
                        testimonial: {
                            en: parts[2],
                            mr: parts[3]
                        }
                    })
                }
                console.log(data);
                setData([...data,...data])
            }
            catch (e) {
                console.log(e)
            }
        }
        fetchData();
    }, [])
    useEffect(() => {
       const container = scrollRef.current;
  const card = cardRef.current;
  if (!container || !card || testimonials?.length === 0) return;

  const style = getComputedStyle(card);
  const marginLeft = parseFloat(style.marginLeft);
  const marginRight = parseFloat(style.marginRight);
  const cardWidth = card.offsetWidth + marginLeft + marginRight;

  const intervalDuration = 3000;
  let timeoutId: ReturnType<typeof setTimeout>;

  const scroll = () => {
    const halfway = container.scrollWidth / 2;

    if (container.scrollLeft>= halfway) {
      // Reset instantly without smooth
      container.style.scrollBehavior = "auto";
      container.scrollLeft = 0;

      // Restore smooth on next frame
      requestAnimationFrame(() => {
        container.style.scrollBehavior = "smooth";
      });

      // Scroll immediately after reset without waiting full interval
      timeoutId = setTimeout(scroll, 50); // small delay to ensure layout update
    } else {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });

      // Schedule next scroll after full intervalDuration
      timeoutId = setTimeout(scroll, intervalDuration);
    }
  };

  // Start scrolling after initial delay (optional)
  timeoutId = setTimeout(scroll, intervalDuration);

  return () => clearTimeout(timeoutId);
    }, [testimonials]);
    return (
        <div className={containerStyles.fullSection}>
            <SectionHeading headingEn={"Trusted by Our Community"} headingMr="आमच्या समुदायाद्वारे विश्वासार्ह" className={containerStyles.sectionHeading} />
            <div className={containerStyles.carouselWrapper} ref={scrollRef}>
                <div className={containerStyles.testimonialTrack} >
                    { testimonials?.map((testimonial,index)=><TestimonialCard ref={index === 0 ? cardRef : null}key = {`testimonial-card-${index}`} testimonial={testimonial}/>)}
                </div>
            </div>
        </div>
    )
}