import ClientLogos from "@/app/components/home/ClientLogos";
import HeroSection from "@/app/components/home/HeroSection";
import ServicesOverview from "@/app/components/home/ServicesOverview";
import WhyChooseUs from "@/app/components/home/WhyChooseUs";
import NumbersSpeak from "./components/home/NumbersSpeak";
import Process from "./components/home/Process";
import NewsLetter from "./components/home/NewsLetter";

export default function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: `
          linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 25%, #4a1a5c 50%, #3d1a4f 75%, #1f0d3a 100%),
          radial-gradient(circle at 20% 80%, rgba(120, 50, 200, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(160, 70, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(100, 30, 180, 0.08) 0%, transparent 50%)
        `,
        backgroundAttachment: 'fixed'

      }}
    >
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      {/* <NumbersSpeak /> */}
      <Process />
      {/* <ClientLogos /> */}
      <NewsLetter />
    </div>
  );
}