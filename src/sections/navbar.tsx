'use client'
import MultilingualText from "@/components/text"
import containerStyles from "@/styles/container.module.css"
import navbarStyles from "@/styles/navbar.module.css"
import fontStyles from "@/styles/text.module.css"
import { useEffect, useRef, useState } from "react"
export default function Navbar() {
 const [navState, setNavState] = useState({
    show: true,
    menuOpen: false
  });
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setNavState(prev => ({
      ...prev,
      menuOpen: !prev.menuOpen,
      // Always show navbar when opening menu
      show: !prev.menuOpen ? true : prev.show
    }));
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollY.current;
      
      setNavState(prev => {
        // Don't hide navbar if menu is open
        if (prev.menuOpen) {
          return prev;
        }

        // Show navbar when scrolling up or near top, with some threshold to prevent flickering
        const scrollDiff = Math.abs(currentScrollY - previousScrollY);
        const isScrollingUp = currentScrollY < previousScrollY;
        const isNearTop = currentScrollY < 100; // Increased threshold
        const shouldShow = isScrollingUp || isNearTop;
        
        // Only update if scroll difference is significant (prevents tiny scroll jitters)
        if (scrollDiff > 5 && prev.show !== shouldShow) {
          return {
            ...prev,
            show: shouldShow
          };
        }
        
        return prev;
      });
      
      // Always update lastScrollY after comparison
      lastScrollY.current = currentScrollY;
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, []);
  return (
    <div className={`${containerStyles.containerNavBar} ${navState.show ? '' : containerStyles.hideNavbar}`}>
      <nav className={navbarStyles.navbar}>
        <div className={navbarStyles.navbarBrand}>
          <div className={navbarStyles.navbarLogo}></div>
          <MultilingualText
            englishText="Mahavir Diagnostic Center"
            marathiText="महावीर डायग्नोस्टिक सेंटर"
            fontSizeClass={`${fontStyles.fontSize24}`}
            isHeading={true}
            className={`${navbarStyles.navbarTitle}`}
          />
        </div>

        <button
          className={navbarStyles.navbarToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={navState.menuOpen}
        >
          <span className={navbarStyles.menuLine}></span>
          <span className={navbarStyles.menuLine}></span>
          <span className={navbarStyles.menuLine}></span>
        </button>
        <div className={`${navbarStyles.navMenuContainer} ${navState.menuOpen ? navbarStyles.openMenu : ''}`}>
          <ul className={`${navbarStyles.navbarLinks}`}>
            <li>
              <a className={navbarStyles.navLink} href="#about">
                <MultilingualText
                  englishText="Who We Are"
                  marathiText="आमची ओळख"
                  fontSizeClass={fontStyles.fontSize16}
                  className={fontStyles.navbarLink}
                  as="span"
                />
              </a></li>
            <li>
              <a className={navbarStyles.navLink} href="#why_us"><MultilingualText
                englishText="Why Us"
                marathiText="आम्हीच का?"
                fontSizeClass={fontStyles.fontSize16}
                className={fontStyles.navbarLink}
                as="span"
              /></a></li>
            <li>
              <a className={navbarStyles.navLink} href="#services"><MultilingualText
                englishText="Services & Health Camps"
                marathiText="सेवा आणि आरोग्य शिबिरे"
                fontSizeClass={fontStyles.fontSize16}
                className={fontStyles.navbarLink}
                as="span"
              /></a></li>
            <li>
              <a className={navbarStyles.navLink} href="#contact"><MultilingualText
                englishText="Contact Us"
                marathiText="संपर्क साधा"
                fontSizeClass={fontStyles.fontSize16}
                className={fontStyles.navbarLink}
                as="span"
              /></a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}