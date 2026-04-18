import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  ShieldAlert, 
  Users, 
  PhoneOff, 
  Phone, 
  Ban, 
  Mic, 
  SignalLow, 
  SignalMedium, 
  SignalHigh, 
  MessageSquare, 
  Handshake,
  CheckCircle2
} from "lucide-react";

interface Rule {
  icon: React.ReactNode;
  text: string;
}

interface WhatsAppGroup {
  level: string;
  title: string;
  moderator: string;
  link: string;
  icon: React.ReactNode;
  gradient: string;
}

const rules: Rule[] = [
  { icon: <Users className="h-5 w-5 text-primary" />, text: "This is a learner community (not a class)" },
  { icon: <ShieldAlert className="h-5 w-5 text-destructive" />, text: "No religion. No politics." },
  { icon: <PhoneOff className="h-5 w-5 text-destructive" />, text: "Do NOT call privately" },
  { icon: <Phone className="h-5 w-5 text-primary" />, text: "Calls inside the group only" },
  { icon: <Ban className="h-5 w-5 text-destructive" />, text: "No teaching, recruiting, or outside links" },
];

const groups: WhatsAppGroup[] = [
  {
    level: "Voice Chat",
    title: "LIVE Weekly Sessions",
    moderator: "Jill",
    link: "https://chat.whatsapp.com/EPUdHYAEpfYDjovSxrtNm6",
    icon: <Mic className="h-6 w-6" />,
    gradient: "linear-gradient(135deg, #6366F1, #8B5CF6)"
  },
  {
    level: "Level A",
    title: "Beginner English",
    moderator: "Jill",
    link: "https://chat.whatsapp.com/JXVwdF8wFyEB4ghhpTg0sH",
    icon: <SignalLow className="h-6 w-6" />,
    gradient: "linear-gradient(135deg, #22C55E, #10B981)"
  },
  {
    level: "Level B",
    title: "Intermediate English",
    moderator: "Jill",
    link: "https://chat.whatsapp.com/D5oRIb4Iuxp54gdTkIDzTV",
    icon: <SignalMedium className="h-6 w-6" />,
    gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)"
  },
  {
    level: "Level C",
    title: "Advanced English",
    moderator: "Dali",
    link: "https://chat.whatsapp.com/Kazj72y6Evm0PpbBq9ZstT",
    icon: <SignalHigh className="h-6 w-6" />,
    gradient: "linear-gradient(135deg, #8B5CF6, #EC4899)"
  },
  {
    level: "Speak English",
    title: "Advanced Conversation",
    moderator: "Jill",
    link: "https://chat.whatsapp.com/DJVoLJi2edP6v1hwyzEYwY",
    icon: <MessageSquare className="h-6 w-6" />,
    gradient: "linear-gradient(135deg, #F59E0B, #EF4444)"
  },
  {
    level: "Community",
    title: "Practice Community",
    moderator: "Fedenscly3",
    link: "https://chat.whatsapp.com/CDliryFmbxKFgMxZBtRbhh",
    icon: <Handshake className="h-6 w-6" />,
    gradient: "linear-gradient(135deg, #111827, #374151)"
  }
];

const WhatsApp = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-500 relative overflow-hidden flex flex-col items-center">
      <ParticleBackground />
      <Header />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pt-32 pb-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Hub
        </Link>

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold tracking-wider uppercase text-primary">Community Guidelines</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
            WhatsApp Group <span className="gradient-text">Rules</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
            Please read and follow these rules to maintain a respectful and productive learning environment for everyone.
          </p>
        </div>

        {/* Rules Card */}
        <div className="glass-card p-6 md:p-8 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {rules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-background shadow-sm border border-border/50">
                  {rule.icon}
                </div>
                <p className="text-foreground/90 font-medium text-sm md:text-base leading-snug pt-1">
                  {rule.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Groups Grid */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Select Your Level</h2>
          <p className="text-muted-foreground text-sm">Choose the group that best matches your English proficiency.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {groups.map((group, idx) => (
            <a
              key={idx}
              href={group.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group p-6 flex items-center gap-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              style={{ animation: `fade-in 0.5s ease-out ${idx * 0.1}s both` }}
            >
              <div 
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover:rotate-12"
                style={{ background: group.gradient }}
              >
                {group.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2 py-0.5 rounded-full bg-primary/10">
                    {group.level}
                  </span>
                  <span className="text-[10px] text-muted-foreground">Moderator: {group.moderator}</span>
                </div>
                <h3 className="font-bold text-lg text-foreground truncate">{group.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">Click to join the community</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsApp;
