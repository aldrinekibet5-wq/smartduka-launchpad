import { Button } from "@/components/ui/button";
import phoneMockup from "@/assets/phone-mockup.png";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient relative min-h-screen overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12 lg:flex-row lg:gap-12 lg:py-20">
        {/* Text Content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge */}
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Trusted by 10,000+ shopkeepers
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: "0.1s" }}>
            Smart<span className="text-gradient">Duka</span>
          </h1>

          {/* Tagline */}
          <p className="animate-fade-up mt-4 text-xl font-medium text-primary-foreground/90 sm:text-2xl md:text-3xl" style={{ animationDelay: "0.2s" }}>
            Shop tracking made easy
          </p>

          {/* Description */}
          <p className="animate-fade-up mt-6 max-w-md text-base text-primary-foreground/70 sm:text-lg" style={{ animationDelay: "0.3s" }}>
            Track daily sales, expenses, procurement cycles, cash float, and profit — all from your phone. Simple, fast, reliable.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up mt-8 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "0.4s" }}>
            <Button variant="cta" size="lg" className="group">
              Start Using SmartDuka
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-up mt-10 flex items-center gap-6 text-primary-foreground/60" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">4.9 Rating</span>
            </div>
            <div className="h-4 w-px bg-primary-foreground/20" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">100% Free</span>
            </div>
            <div className="h-4 w-px bg-primary-foreground/20" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Works Offline</span>
            </div>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="animate-scale-in relative mt-12 flex flex-1 items-center justify-center lg:mt-0" style={{ animationDelay: "0.3s" }}>
          <div className="animate-float relative">
            {/* Glow Effect */}
            <div className="absolute -inset-8 rounded-[3rem] bg-accent/20 blur-3xl" />
            
            {/* Phone Frame */}
            <div className="relative z-10 rounded-[2.5rem] bg-gradient-to-b from-gray-800 to-gray-900 p-2 shadow-phone">
              <div className="overflow-hidden rounded-[2rem] bg-white">
                <img
                  src={phoneMockup}
                  alt="SmartDuka App - Daily Summary Screen"
                  className="h-auto w-[280px] sm:w-[320px] lg:w-[340px] object-cover"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -left-8 top-1/4 rounded-2xl bg-card p-3 shadow-card animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-lg">📈</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Today's Profit</p>
                  <p className="font-display text-sm font-bold text-primary">+KES 9,250</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 bottom-1/3 rounded-2xl bg-card p-3 shadow-card animate-float" style={{ animationDelay: "2s" }}>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                  <span className="text-lg">💰</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Cash Float</p>
                  <p className="font-display text-sm font-bold text-accent-foreground">KES 5,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(210 20% 98%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
