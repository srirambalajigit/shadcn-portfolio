import {
  Hero,
  About,
  Skills,
  Testimonials,
  Projects,
  Contact,
} from "@/components/sections";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BackgroundGradientAnimation } from "@/components/bg-gradient";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <BackgroundGradientAnimation>
        <div className="absolute inset-0 z-50 h-full w-full">
          <div className="flex min-h-[100dvh] flex-col">
            <Header />
            <main className="flex-1">
              <Hero />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </main>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}
