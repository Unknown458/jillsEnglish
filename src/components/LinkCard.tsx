import { type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface LinkCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  gradient: string;
}

const LinkCard = ({ icon, title, description, href, gradient }: LinkCardProps) => {
  const isInternal = href.startsWith("/");
  
  const content = (
    <>
      <div className="flex items-start justify-between w-full">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-primary-foreground shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl"
          style={{
            background: gradient,
            boxShadow: `0 4px 15px -3px ${gradient.includes('#EF4444') ? 'rgba(239,68,68,0.3)' : gradient.includes('#22C55E') ? 'rgba(34,197,94,0.3)' : gradient.includes('#3B82F6') ? 'rgba(59,130,246,0.3)' : gradient.includes('#8B5CF6') ? 'rgba(139,92,246,0.3)' : gradient.includes('#EC4899') ? 'rgba(236,72,153,0.3)' : gradient.includes('#F59E0B') ? 'rgba(245,158,11,0.3)' : gradient.includes('#06B6D4') ? 'rgba(6,182,212,0.3)' : 'rgba(99,102,241,0.3)'}`,
          }}
        >
          {icon}
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      
      <div className="min-w-0 flex-1 flex flex-col justify-end mt-2">
        <h3 className="font-semibold text-card-foreground text-base">{title}</h3>
        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{description}</p>
      </div>
    </>
  );

  const className = "glass-card group flex flex-col gap-4 p-5 md:p-6 h-full relative overflow-hidden";

  if (isInternal) {
    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
    </a>
  );
};

export default LinkCard;
