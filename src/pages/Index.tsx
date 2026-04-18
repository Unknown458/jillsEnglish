import HeroSection from "@/components/HeroSection";
import LinkCard from "@/components/LinkCard";
import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import {
  BookOpen,
  Youtube,
  MessageCircle,
  Camera,
  Mail,
  DollarSign,
  MessageSquare,
  Video,
  ShoppingCart,
} from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.16-3.44-3.37-3.46-5.7-.02-2.33 1.25-4.59 3.25-5.8 1.34-.82 2.94-1.1 4.51-.83v4.07c-.55-.07-1.12-.04-1.64.18-.73.32-1.31.96-1.52 1.74-.2.72-.07 1.52.37 2.15.54.77 1.53 1.21 2.47 1.08 1.02-.13 1.86-.96 2.06-1.97.08-.34.09-.7.09-1.05V.02z" />
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

const links = [
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "Jill’s Amazon Store Front",
    description: "Explore my recommended teaching supplies and items",
    href: "https://www.amazon.com/shop/jillsamericanenglish",
    gradient: "linear-gradient(135deg, #F59E0B, #EA580C)",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Weekly Workbook",
    description: "Download assignments and practice materials",
    href: "https://jillenglish.gumroad.com/l/suhpr",
    gradient: "linear-gradient(135deg, #6366F1, #8B5CF6)",
  },
  {
    icon: <Youtube className="h-6 w-6" />,
    title: "YouTube Channel",
    description: "Grammar tutorials and vocabulary lessons",
    href: "https://youtube.com/@jillsamericanenglish?si=gV3i9u1_sUiTLF9y&sub_confirmation=1",
    gradient: "linear-gradient(135deg, #EF4444, #F97316)",
  },
  {
    icon: <WhatsAppIcon className="h-6 w-6" />,
    title: "WhatsApp Group",
    description: "Daily tips and grammar rules",
    href: "/whatsapp",
    gradient: "linear-gradient(135deg, #22C55E, #10B981)",
  },
  {
    icon: <InstagramIcon className="h-6 w-6" />,
    title: "Instagram",
    description: "Language tips and community updates",
    href: "https://www.instagram.com/jillsamericanenglish?igsh=Zm1iYTczMHM0NmQ3&utm_source=qr",
    gradient: "linear-gradient(135deg, #EC4899, #F43F5E)",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Contact Email",
    description: "Get in touch with any questions",
    href: "#",
    gradient: "linear-gradient(135deg, #06B6D4, #3B82F6)",
  },

  {
    icon: <DiscordIcon className="h-6 w-6" />,
    title: "Discord Community",
    description: "Join our live chat and support group",
    href: "https://discord.gg/4MSKd4m9Jq",
    gradient: "linear-gradient(135deg, #8B5CF6, #6366F1)",
  },
  {
    icon: <TikTokIcon className="h-6 w-6" />,
    title: "TikTok",
    description: "Follow for short English lessons",
    href: "https://www.tiktok.com/@jillsamericanenglish",
    gradient: "linear-gradient(135deg, #111827, #FE2C55)",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-500 relative overflow-hidden flex items-start md:items-center justify-center">
      {/* Top gradient wash */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[500px]" style={{ background: 'var(--gradient-hero)' }} />
      
      <ParticleBackground />
      <Header />
      
      {/* Mobile: full bleed | Desktop: expanded grid */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-24 pb-16 md:pt-28 md:py-10">
        <div>
          <HeroSection />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {links.map((link, i) => (
            <div
              key={link.title}
              style={{ animation: `fade-in 0.5s ease-out ${i * 0.06}s both` }}
            >
              <LinkCard {...link} />
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold tracking-wider uppercase text-primary">Support My Work</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Donate to the Channel</h2>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-8">
            Your support helps me create more free lessons and resources for English learners worldwide.
          </p>
          <div className="flex justify-center">
            <div className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.66rem)] xl:w-[calc(25%-0.75rem)]" style={{ animation: `fade-in 0.5s ease-out 0.6s both` }}>
              <LinkCard
                icon={<DollarSign className="h-6 w-6" />}
                title="PayPal Donations"
                description="Support quality education"
                href="https://www.paypal.com/ncp/payment/9LASLA9VPNJGC"
                gradient="linear-gradient(135deg, #F59E0B, #EF4444)"
              />
            </div>
          </div>
        </div>

          <footer className="mt-16 text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <span className="h-px w-6 bg-border" />
              <p>© 2026 Jill's American English</p>
              <span className="h-px w-6 bg-border" />
            </div>
            <p className="text-muted-foreground/50 text-xs">Share this page with your students to access all resources.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
