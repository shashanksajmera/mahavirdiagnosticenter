'use client'
import TopBar from "../sections/topbar";
import Navbar from "@/sections/navbar";
import LandingPage from "@/sections/landing_page";
import AboutUs from "@/sections/about";
import WhyUs from "@/sections/why_us";
import ServiceAndHealthCamps from "@/sections/services_and_health_camps";
import InfiniteCarsoul from "@/sections/infinite_carousel";
import Testimonials from "@/sections/testimonials";
import Footer from "@/sections/footer";


export default function Home() {
  return (
    <div>
      <TopBar/>
      <Navbar/>
      <LandingPage/>
      <AboutUs/>
      <WhyUs/>
      <ServiceAndHealthCamps/>
      <InfiniteCarsoul/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}