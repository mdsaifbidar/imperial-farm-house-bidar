import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Spaces from "@/components/Spaces";
import Gallery from "@/components/Gallery";
import CinematicBreak from "@/components/CinematicBreak";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

const marqueeItems = [
  "Weddings",
  "Receptions",
  "Sangeet",
  "Engagements",
  "Corporate Events",
  "Since 1985",
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee items={marqueeItems} />
        <Story />
        <Spaces />
        <Gallery />
        <CinematicBreak />
        <Events />
        <Testimonials />
        <Amenities />
        <Location />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}
