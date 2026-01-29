const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <span className="font-display text-lg font-bold text-primary-foreground">S</span>
            </div>
            <span className="font-display text-xl font-bold text-foreground">SmartDuka</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#features" className="text-muted-foreground transition-colors hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground transition-colors hover:text-primary">
              Pricing
            </a>
            <a href="#support" className="text-muted-foreground transition-colors hover:text-primary">
              Support
            </a>
            <a href="#privacy" className="text-muted-foreground transition-colors hover:text-primary">
              Privacy
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 SmartDuka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
