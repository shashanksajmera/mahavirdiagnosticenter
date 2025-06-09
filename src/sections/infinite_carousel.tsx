import SectionHeading from "@/components/section_headline";
import containerStyles from "@/styles/container.module.css"
import Image from "next/image";
import { useEffect, useRef } from "react";
var images: string[] = [
  "/assets/carousel/image1.jpg",
  "/assets/carousel/image2.jpg",
  "/assets/carousel/image3.jpg",
  "/assets/carousel/image4.jpg",
  "/assets/carousel/image5.jpg",
  "/assets/carousel/image6.jpg",
  "/assets/carousel/image7.jpg",
  "/assets/carousel/image8.jpg",

];
export default function InfiniteCarsoul() {

  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const getSpeed = () => {
    if (typeof window === "undefined") return 0.5;
    const width = window.innerWidth;
    if (width < 600) return 1.2;
    else if (width < 1024) return 0.4;
    else return 0.5;
  };
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const speed = getSpeed();

    const animate = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += speed;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation after a short delay to allow layout
    const timeout = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, 10); // small delay for layout/images

    return () => {
      clearTimeout(timeout);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []); // for infinite illusion
  // Duplicate the image list for seamless infinite loop
  const allImages = [...images, ...images];

  return (
    <div className={containerStyles.fullSection}>
      <SectionHeading headingEn={"Mahavir Diagnostic Center in Pictures"} headingMr="चित्रांमध्ये महावीर डायग्नोस्टिक सेंटर" className={containerStyles.sectionHeading} />
      <div className={containerStyles.carouselWrapper} ref={scrollRef}>
        <div className={containerStyles.carouselTrack} >
          {
            allImages.map((image, index) => {
              return <div key={`carousel-image-${index}`} className={containerStyles.carouselImage}>
                <Image src={image} alt={`carousel-image-${index}`}fill={true} sizes="100%" />
              </div>
            }
            )
          }
        </div>
      </div>
    </div>
  )
}