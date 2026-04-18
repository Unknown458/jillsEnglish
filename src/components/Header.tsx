import ThemeToggle from "./ThemeToggle";
import { GraduationCap } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 flex items-center justify-between glass-card !rounded-none border-b border-white/10 dark:border-white/5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full p-[2px]" style={{ background: 'var(--gradient-primary)' }}>
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
            <img src="https://ugc.production.linktr.ee/9680d600-d651-4b3a-974f-8e567f2622ff_IMG-8220.png?io=true&size=avatar-v3_0" alt="Logo" className="w-full h-full object-cover" />
          </div>
        </div>
        <span className="font-bold text-lg tracking-tight text-foreground">Jill's American English</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          <GraduationCap className="h-4 w-4" />
          Programs
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
