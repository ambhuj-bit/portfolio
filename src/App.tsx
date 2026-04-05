import { useState, useEffect, ReactNode, useRef, MouseEvent as ReactMouseEvent } from 'react';
import { motion, useScroll, useSpring, useMotionValue, useTransform, AnimatePresence } from 'motion/react';
import { 
  Linkedin, 
  Github, 
  Instagram, 
  Mail, 
  MapPin, 
  ChevronRight,
  Send,
  Phone,
  Briefcase,
  User,
  ArrowDown,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Globe,
  Sparkles,
  Command,
  Layers,
  Zap,
  Sun,
  Moon
} from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO, SKILLS, EXPERIENCE_EDUCATION } from './constants';

const RevealOnScroll = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-primary/30 rounded-full pointer-events-none z-[9999] mix-blend-screen backdrop-blur-sm border border-white/20 hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
};

const MagneticButton = ({ children, onClick }: { children: ReactNode, onClick: () => void }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: ReactMouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set(clientX - centerX);
    y.set(clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: mouseX, y: mouseY }}
      className="group relative px-12 py-6 bg-primary text-white rounded-full font-black text-sm tracking-widest uppercase hover:scale-105 transition-all duration-500 shadow-2xl shadow-primary/20 overflow-hidden"
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    </motion.button>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative min-h-screen bg-mesh overflow-x-hidden selection:bg-primary selection:text-white transition-colors duration-500`}>
      <CustomCursor />
      
      {/* Noise Overlay */}
      <div className="fixed inset-0 noise z-50 pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 grid-pattern z-0 pointer-events-none opacity-20" />

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-2 bg-linear-to-r from-primary via-secondary to-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <nav className="flex items-center gap-1 p-1.5 glass-nav rounded-2xl">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id || 
              (item.id === 'about' && (activeSection === 'skills' || activeSection === 'experience'));
            
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-6 py-2.5 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-500 ${
                  isActive 
                    ? 'nav-item-active' 
                    : 'text-slate-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
        
        <button
          onClick={toggleTheme}
          className="p-3 glass-nav rounded-2xl text-primary hover:scale-110 transition-all duration-500"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-50 relative z-10">
        
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12 max-w-5xl"
          >

            <h1 className="text-8xl md:text-[14rem] font-black tracking-tighter leading-[0.8] mix-blend-difference">
              {["A", "M", "B", "H", "U", "J"].map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block text-white"
                >
                  {char}
                </motion.span>
              ))}<br/>
              <span className="text-gradient">
                {["S", "H", "A", "R", "M", "A"].map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            <div className="space-y-6">
              <p className="text-slate-400 text-xl md:text-3xl leading-relaxed max-w-3xl mx-auto font-medium tracking-tight">
                A <span className="text-heading font-bold">{PERSONAL_INFO.title}</span> crafting high-performance, visually stunning web architectures.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12">
                <MagneticButton onClick={() => scrollTo('contact')}>
                  Get In Touch
                </MagneticButton>
                
                <div className="flex items-center gap-6">
                  {[
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/ambhuj-sharma1999' },
                    { icon: Github, href: "https://github.com/ambhuj-bit" },
                    { icon: Mail, href: `mailto:${PERSONAL_INFO.email}` }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      className="p-5 bg-white/5 text-slate-500 rounded-full hover:text-primary hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 border border-white/5"
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Abstract SVG Background */}
          <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-30 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1000 1000" className="max-w-6xl animate-pulse-slow">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'var(--color-primary)', stopOpacity: 0.2 }} />
                  <stop offset="100%" style={{ stopColor: 'var(--color-accent)', stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>
              <circle cx="500" cy="500" r="400" fill="none" stroke="url(#grad1)" strokeWidth="0.5" strokeDasharray="10 20" />
              <circle cx="500" cy="500" r="300" fill="none" stroke="url(#grad1)" strokeWidth="0.5" strokeDasharray="5 15" />
              <path d="M100,500 Q500,100 900,500 T100,500" fill="none" stroke="url(#grad1)" strokeWidth="0.5" />
            </svg>
          </div>

          {activeSection === 'home' && (
            <div className="pointer-events-none fixed bottom-10 inset-x-0 z-30 flex justify-center">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-3 text-slate-600"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Explore</span>
                <ArrowDown size={14} />
              </motion.div>
            </div>
          )}
        </section>

        {/* Bento Grid Identity */}
        <section id="about" className="relative isolate">
          <h2 className="section-title-bg">Expereince</h2>
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Profile Card */}
              <div className="md:col-span-8 bento-card hover-glow group">
                <div className="flex items-center gap-6 text-primary mb-10">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Terminal size={32} />
                  </div>
                  <h3 className="text-4xl font-black tracking-tighter uppercase">The Profile</h3>
                </div>
                <p className="text-2xl text-slate-400 leading-relaxed font-medium mb-10">
                  {PERSONAL_INFO.bio}
                </p>
                <div className="flex flex-wrap gap-4">
                  {PERSONAL_INFO.expertIn.map(skill => (
                    <span key={skill} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all duration-300 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
              </div>

              {/* Experience Card */}
              <div className="md:col-span-4 bento-card bg-primary text-white flex flex-col justify-between group overflow-hidden">
                <div className="relative z-10">
                  <div className="p-4 bg-black/10 rounded-2xl w-fit mb-12">
                    <Briefcase size={32} />
                  </div>
                  <h4 className="text-8xl font-black tracking-tighter mb-4 leading-none">{PERSONAL_INFO.experience}</h4>
                  <p className="font-white text-white uppercase tracking-[0.2em] text-xs opacity-70">Years of <br/>Experience</p>
                </div>
                <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              </div>

              {/* Location Card */}
              <div className="md:col-span-4 bento-card hover-glow flex flex-col justify-between">
                <div className="p-4 bg-accent/10 text-accent rounded-2xl w-fit mb-12">
                  <MapPin size={32} />
                </div>
                <div>
                  <h4 className="text-3xl font-black mb-2 uppercase tracking-tight">{PERSONAL_INFO.location.split(',')[0]}</h4>
                  <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">{PERSONAL_INFO.location.split(',').slice(1).join(',')}</p>
                </div>
              </div>

              {/* Status Card */}
              <div className="md:col-span-4 bento-card hover-glow flex flex-col justify-between">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-secondary/10 text-secondary rounded-2xl w-fit">
                    <Zap size={32} />
                  </div>
                  <div className="px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-[10px] font-black tracking-widest uppercase border border-green-500/20 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    {PERSONAL_INFO.status}
                  </div>
                </div>
                <div>
                  <h4 className="text-3xl font-black mb-2 uppercase tracking-tight">Open to Work</h4>
                  <p className="text-slate-500 font-black uppercase tracking-[0.2em] text-[10px]">Remote & On-site</p>
                </div>
              </div>

              {/* Connect Card */}
              <div className="md:col-span-4 bento-card bg-heading text-bg-grey flex flex-col justify-between hover:bg-primary hover:text-white transition-all duration-700 group cursor-pointer" onClick={() => scrollTo('contact')}>
                <div className="p-4 bg-black/5 rounded-2xl w-fit mb-12 group-hover:bg-white/10 transition-colors">
                  <Command size={32} />
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="text-3xl font-black uppercase tracking-tight">Let's Connect</h4>
                  <ChevronRight size={32} className="group-hover:translate-x-4 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* Tech Stack Section */}
        <section id="skills" className="relative pt-20 isolate">
          <h2 className="section-title-bg">Skills</h2>
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
              <div className="space-y-6">
                <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-none">TECH <br/><span className="text-gradient">STACK</span></h2>
                <p className="text-slate-500 text-2xl font-medium max-w-xl">A curated selection of technologies I've mastered to build scalable architectures.</p>
              </div>
              <div className="flex gap-6">
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-primary/30 transition-colors"><Code2 className="text-primary" size={32} /></div>
                <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-secondary/30 transition-colors"><Layers className="text-secondary" size={32} /></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {SKILLS.map((skill, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -15, scale: 1.05 }}
                  className="p-10 rounded-[3rem] glass-card flex flex-col items-center gap-8 hover-glow group relative"
                >
                  <div className="w-24 h-24 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:rotate-[360deg]">
                    <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain" />
                  </div>
                  <span className="font-black text-slate-500 group-hover:text-heading text-xs uppercase tracking-[0.2em] transition-colors">{skill.name}</span>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem] -z-10" />
                </motion.div>
              ))}
            </div>
          </RevealOnScroll>
        </section>

        {/* Experience Section */}
        <section id="experience" className="relative pt-20 isolate">
          <h2 className="section-title-bg">History</h2>
          <RevealOnScroll>
            <div className="space-y-20">
              <div className="flex items-center gap-10">
                <h3 className="text-5xl font-black tracking-tighter uppercase whitespace-nowrap">Professional Journey</h3>
                <div className="h-px flex-1 bg-white/5" />
              </div>

              <div className="grid grid-cols-1 gap-12">
                {EXPERIENCE_EDUCATION.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 30 }}
                      className="group flex flex-col md:flex-row gap-16 p-12 rounded-[4rem] glass-card hover-glow relative overflow-hidden"
                    >
                      <div className="md:w-1/4 space-y-6">
                        <span className="inline-block px-6 py-2 bg-white/5 text-primary text-[10px] font-black rounded-full border border-white/10 uppercase tracking-[0.3em]">
                          {item.period}
                        </span>
                        <div className="p-6 bg-white/5 text-heading rounded-[2rem] w-fit group-hover:bg-primary group-hover:text-white transition-all duration-700">
                          <Icon size={40} />
                        </div>
                      </div>
                      <div className="md:w-3/4 space-y-8">
                        <h3 className="text-5xl font-black leading-tight tracking-tighter group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-400 text-xl leading-relaxed font-medium max-w-4xl">
                          {item.description}
                        </p>
                      </div>
                      <div className="absolute top-0 left-0 w-2 h-full bg-primary/10 group-hover:bg-primary transition-all duration-700" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative pt-20 pb-10 isolate">
          <h2 className="section-title-bg">Connect</h2>
          <RevealOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-16">
                <div className="space-y-8">
                  <h2 className="text-8xl md:text-[10rem] font-black tracking-tighter leading-[0.8]">
                    LET'S <br/>
                    <span className="text-gradient">TALK.</span>
                  </h2>
                  <p className="text-slate-400 text-2xl leading-relaxed max-w-lg font-medium tracking-tight">
                    I'm currently accepting new projects and collaborations. Let's build something extraordinary together.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-10">
                  {[
                    { label: "Email", value: PERSONAL_INFO.email, icon: Mail },
                    { label: "Phone", value: PERSONAL_INFO.phone, icon: Phone },
                    { label: "LinkedIn", value: PERSONAL_INFO.linkedin, icon: Linkedin },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-8 group">
                      <div className="p-6 bg-white/5 text-slate-600 rounded-[2rem] group-hover:text-primary group-hover:bg-white/10 transition-all duration-500 border border-white/5">
                        <item.icon size={28} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-600 tracking-[0.4em] mb-2 uppercase">{item.label}</p>
                        <p className="font-black text-heading text-xl tracking-tight">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-16 rounded-[5rem] glass-card space-y-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                <h3 className="text-3xl font-black tracking-tighter uppercase">Send a Message</h3>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-600 tracking-[0.3em] uppercase ml-4">Name</label>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-heading placeholder:text-slate-700"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-600 tracking-[0.3em] uppercase ml-4">Email</label>
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-bold text-heading placeholder:text-slate-700"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-600 tracking-[0.3em] uppercase ml-4">Message</label>
                    <textarea 
                      placeholder="Tell me about your vision..." 
                      rows={6}
                      className="w-full px-8 py-6 bg-white/5 border border-white/10 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all resize-none font-bold text-heading placeholder:text-slate-700"
                    ></textarea>
                  </div>
                  <button className="group relative w-full px-12 py-8 bg-primary text-white font-black text-lg tracking-widest uppercase rounded-[2rem] hover:scale-[1.02] transition-all duration-500 shadow-2xl overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      Send Message <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-32 border-t border-white/5 bg-black/40 backdrop-blur-3xl relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-20">
          <div className="space-y-8 text-center md:text-left">
            <h2 className="text-5xl font-black tracking-tighter">
              AMBHUJ<span className="text-primary">.</span>
            </h2>
            <p className="text-slate-500 font-medium tracking-tight max-w-sm text-lg">
              Architecting the future of the Software with precision, passion, and performance.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-10">
            <div className="flex gap-8">
              {[Linkedin, Github, Instagram, Mail].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-600 hover:text-primary transition-all duration-500 hover:-translate-y-2">
                  <Icon size={28} />
                </a>
              ))}
            </div>
            <p className="text-slate-700 text-[10px] font-black tracking-[0.5em] uppercase">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
