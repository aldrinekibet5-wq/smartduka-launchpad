import { TrendingUp, Wallet, ShoppingCart, Calculator, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Daily Sales Tracking",
    description: "Record every sale instantly. See your daily revenue at a glance.",
  },
  {
    icon: Wallet,
    title: "Expense Management",
    description: "Track all business expenses. Know where your money goes.",
  },
  {
    icon: ShoppingCart,
    title: "Procurement Cycles",
    description: "Manage stock purchases and supplier payments effortlessly.",
  },
  {
    icon: Calculator,
    title: "Cash Float Control",
    description: "Start each day with accurate opening balances and track cash flow.",
  },
  {
    icon: BarChart3,
    title: "Profit Analytics",
    description: "Instant profit calculations. Daily, weekly, monthly reports.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your data is safe with us. Works offline, syncs when connected.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Features
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Everything you need to run your{" "}
            <span className="text-primary">duka</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Simple tools designed for busy shopkeepers. No accounting degree required.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Gradient */}
              <div className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
