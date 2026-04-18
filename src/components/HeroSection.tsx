const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center text-center pt-20 pb-12 px-4">
      {/* Glow effect behind avatar */}
      <div className="hero-glow absolute top-8 left-1/2 -translate-x-1/2" style={{ animation: 'pulse-glow 4s ease-in-out infinite' }} />
      
      {/* Logo with animated ring */}
      <div className="relative mb-6">
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-150" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />
        <div className="relative w-20 h-20 rounded-full p-[2px]" style={{ background: 'var(--gradient-primary)' }}>
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
            <img src="https://ugc.production.linktr.ee/9680d600-d651-4b3a-974f-8e567f2622ff_IMG-8220.png?io=true&size=avatar-v3_0" alt="Jill's American English" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute -bottom-1 -right-1 glow-dot" />
      </div>

      <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
        Jill's American
        <span className="gradient-text block mt-1">English</span>
      </h1>
      
      <div className="flex items-center gap-3 mt-5">
        <span className="h-px w-8 bg-border" />
        <p className="text-muted-foreground font-medium text-xs tracking-[0.25em] uppercase">
          One Voice · One Vision · One World
        </p>
        <span className="h-px w-8 bg-border" />
      </div>

      <p className="text-muted-foreground text-sm mt-5 max-w-md leading-relaxed">
        Access all learning resources, join our community, and master English with
        comprehensive lessons and modern teaching methods.
      </p>

    </section>
  );
};

export default HeroSection;
