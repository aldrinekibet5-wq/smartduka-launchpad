import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="container px-4">
        <div className="relative overflow-hidden rounded-3xl hero-gradient p-8 sm:p-12 lg:p-16">
          {/* Background Elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              Ready to grow your business?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Join thousands of shopkeepers already using SmartDuka to track sales, manage expenses, and increase profits.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="cta" size="lg" className="group w-full sm:w-auto">
                <Download className="h-5 w-5" />
                Download Free App
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto group">
                Learn More
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <p className="mt-6 text-sm text-primary-foreground/60">
              Free forever • No credit card required • Works on any phone
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
