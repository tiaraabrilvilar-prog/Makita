import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Battery,
  Weight,
  Droplets,
  Timer,
  Coffee,
  Zap,
  Filter,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Thermometer,
  Plug,
  Box,
  CupSoda,
  Ruler,
  Gauge,
  Cable,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import heroImage from "@/assets/makita-coffee-maker.png";
import heroTransparent from "@/assets/hero-portada.png";
import sideTransparent from "@/assets/side-transparent.png";
import tankTransparent from "@/assets/tank-transparent.png";
import oppositeTransparent from "@/assets/opposite-transparent.png";
import tealVersion from "@/assets/teal-version.png";
import oliveVersion from "@/assets/olive-version.png";
import constructionImage from "@/assets/makita-construction-bg.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Makita DCM501 \u2014 Cafetera Inal\u00E1mbrica" },
      { name: "description", content: "La cafetera inal\u00E1mbrica definitiva de Makita. Sin cables, sin filtros de papel, impulsada por las mismas bater\u00EDas de tus herramientas." },
      { property: "og:title", content: "Makita DCM501 \u2014 Cafetera Inal\u00E1mbrica" },
      { property: "og:description", content: "La cafetera inal\u00E1mbrica definitiva de Makita." },
    ],
  }),
  component: Index,
});

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-darker/90 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="text-2xl tracking-wide text-foreground" style={{ fontFamily: "var(--font-logo)" }}>
            makita
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Características
          </a>
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Funciones
          </a>
          <a href="#includes" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Accesorios
          </a>
          <a href="#specs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Especificaciones
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface-darker/95 backdrop-blur-md border-t border-border/50 px-4 py-4 space-y-3">
          <a href="#about" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Características</a>
          <a href="#features" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Funciones</a>
          <a href="#includes" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Accesorios</a>
          <a href="#specs" className="block text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>Especificaciones</a>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-darker">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,_var(--makita-teal-glow),_transparent_50%)] opacity-20" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 sm:pt-32 sm:pb-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column - Text */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <p className="text-sm font-semibold tracking-[0.2em] text-makita-teal uppercase">
              Cafetera Inalámbrica Makita
            </p>
            <h1 className="text-4xl font-brand tracking-wider uppercase text-foreground sm:text-5xl lg:text-6xl leading-[1.05]">
              Tu café caliente,<br />donde sea que el<br /><span className="text-makita-teal">trabajo te lleve</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
              La DCM501 te permite disfrutar tu café caliente donde sea que el trabajo te lleve. Sin cables, sin filtros de papel, impulsada por las mismas baterías de tus herramientas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#includes"
                className="group inline-flex items-center gap-3 rounded-full bg-makita-teal px-8 py-4 text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-makita-teal/90 hover:scale-105"
              >
                Potenciá tus mañanas
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            {/* Glow layers */}
            <div className="absolute -inset-20 rounded-full bg-makita-teal/20 blur-[150px] animate-pulse-glow" />
            <div className="absolute -inset-12 rounded-full bg-makita-teal/10 blur-[100px]" />
            <div className="absolute inset-x-10 bottom-10 h-16 rounded-[50%] bg-makita-teal/30 blur-2xl" />

            {/* Steam wisps */}
            <div className="pointer-events-none absolute right-[18%] top-[35%] z-20 flex flex-col gap-2">
              <span className="block h-16 w-1.5 rounded-full bg-gradient-to-t from-white/0 via-white/40 to-white/0 blur-md animate-steam-1" />
              <span className="block h-20 w-2 rounded-full bg-gradient-to-t from-white/0 via-white/50 to-white/0 blur-md animate-steam-2" style={{ marginLeft: "10px" }} />
              <span className="block h-14 w-1.5 rounded-full bg-gradient-to-t from-white/0 via-white/30 to-white/0 blur-md animate-steam-3" style={{ marginLeft: "-8px" }} />
            </div>

            <div className="relative animate-float scale-110 lg:scale-125">
              <img
                src={heroTransparent}
                alt="Makita DCM501 cafetera inalámbrica con taza humeante"
                width={1024}
                height={1024}
                className="relative z-10 w-full max-w-2xl drop-shadow-[0_40px_90px_rgba(20,184,166,0.45)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="about" ref={ref} className="relative py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left - Image */}
          <div className={`flex items-center justify-center transition-all duration-700 delay-200 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-makita-teal/10 blur-3xl" />
              <img
                src={constructionImage}
                alt="Makita DCM501 en obra de construcción"
                width={1024}
                height={1024}
                className="relative w-full max-w-md rounded-2xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right - Text */}
          <div className={`flex flex-col gap-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="text-sm font-semibold tracking-[0.2em] text-makita-teal uppercase">
              Características
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Todo lo que necesitás
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              Diseñada para profesionales que no pueden detenerse. La DCM501 combina la robustez de Makita con la practicidad de un café recién hecho en cualquier lugar de obra. Funciona con baterías de iones de litio de 12V máx. CXT y 18V LXT.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainPointsSection() {
  const { ref, visible } = useInView(0.1);
  const pains = [
    {
      icon: <Thermometer className="h-8 w-8" />,
      text: "¿Cansado del café tibio de termo después de unas horas?",
    },
    {
      icon: <Plug className="h-8 w-8" />,
      text: "¿Perdés tiempo buscando un enchufe en la obra o el camping?",
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      text: "¿El café instantáneo ya no es una opción para vos?",
    },
  ];

  return (
    <section id="pain-points" ref={ref} className="relative py-20 sm:py-28 bg-surface-darker/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-makita-teal uppercase">
            Empatía
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Te entendemos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Antes de mostrarte la solución, sabemos que estos dolores te suenan familiares.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {pains.map((pain, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center gap-5 rounded-2xl border border-border/40 bg-surface-dark/40 p-8 transition-all duration-700 hover:border-makita-teal/20 hover:bg-surface-dark/60 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-makita-teal/10 text-makita-teal">
                {pain.icon}
              </div>
              <p className="text-lg font-medium text-foreground leading-relaxed">
                {pain.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const { ref, visible } = useInView(0.1);
  const features = [
    {
      icon: <Battery className="h-10 w-10" />,
      title: "Regulación de Energía",
      description: "Compatible con baterías 12V CXT y 18V LXT. Aprovechá la misma energía de tus herramientas Makita.",
    },
    {
      icon: <Filter className="h-10 w-10" />,
      title: "Control de Filtro",
      description: "Filtro permanente de malla fina que se limpia en segundos bajo la canilla. Sin filtros de papel.",
    },
    {
      icon: <Thermometer className="h-10 w-10" />,
      title: "Calor Optimizado",
      description: "Alcanza la temperatura ideal en minutos para extraer el máximo sabor de tu café.",
    },
  ];

  return (
    <section id="features" ref={ref} className="relative py-20 sm:py-28 bg-surface-darker/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-makita-teal uppercase">
            Funciones
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Cada función, una ventaja
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group flex flex-col items-center text-center gap-4 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-surface-dark/60 border border-border/40 flex items-center justify-center overflow-hidden group-hover:border-makita-teal/30 transition-colors">
                <div className="text-makita-teal/80 group-hover:text-makita-teal transition-colors transform group-hover:scale-110 duration-300">
                  {f.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-darker/80 to-transparent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IncludesSection() {
  const { ref, visible } = useInView(0.1);

  const items = [
    { icon: <Box className="h-6 w-6" />, title: "Taza de acero inoxidable", desc: "Incluye taza de 90 mm de altura con tapa.", delay: 100 },
    { icon: <Filter className="h-6 w-6" />, title: "Filtro permanente", desc: "Malla fina reutilizable, fácil de limpiar.", delay: 200 },
    { icon: <Plug className="h-6 w-6" />, title: "Adaptador de carga", desc: "Compatible con cargadores CXT y LXT.", delay: 300 },
    { icon: <CupSoda className="h-6 w-6" />, title: "Cuchara dosificadora", desc: "Medida exacta para tu café perfecto.", delay: 400 },
  ];

  return (
    <section id="includes" ref={ref} className="relative py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-makita-teal uppercase">
            Contenido
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Activá tu potencial
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            La Makita DCM501 incluye todo lo necesario para que disfrutes de tu café caliente en cualquier lugar de trabajo.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Left - Product image */}
          <div className={`flex items-center justify-center transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-makita-teal/10 blur-3xl" />
              <img
                src={tankTransparent}
                alt="Makita DCM501 tanque de agua extraíble"
                width={1024}
                height={1024}
                className="relative w-full max-w-sm drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>

          {/* Right - Features list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 rounded-xl border border-border/40 bg-surface-dark/40 p-5 transition-all duration-500 hover:border-makita-teal/20 hover:bg-surface-dark/60 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-makita-teal/10 text-makita-teal">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductDetailsSection() {
  const { ref, visible } = useInView(0.1);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  const details = [
    { id: 1, label: "Manija", top: "6.5%", left: "50%", side: "right" as const },
    { id: 2, label: "Tapa del tanque de agua", top: "25%", left: "28%", side: "left" as const },
    { id: 3, label: "Tanque de agua", top: "34%", left: "16%", side: "left" as const },
    { id: 4, label: "Portafiltros", top: "44%", left: "84%", side: "right" as const },
    { id: 5, label: "Tapa de la taza", top: "57%", left: "74%", side: "right" as const },
    { id: 6, label: "Taza de café", top: "73%", left: "72%", side: "right" as const },
    { id: 7, label: "Ranura de batería", top: "73%", left: "39%", side: "left" as const },
    { id: 8, label: "Descanso de copa", top: "86%", left: "69%", side: "left" as const },
    { id: 9, label: "Interruptor de encendido", top: "88%", left: "87%", side: "right" as const },
  ];

  const leftDetails = details.filter((d) => d.side === "left");
  const rightDetails = details.filter((d) => d.side === "right");

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-surface-darker/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-makita-teal uppercase">
            Detalles
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Conocé todos sus detalles
          </h2>
        </div>

        {/* Desktop: 3-column grid with connecting lines */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-0 max-w-6xl mx-auto items-stretch">
          {/* Left labels */}
          <div className="relative">
            {leftDetails.map((d) => {
              const isActive = hoveredId === d.id;
              return (
                <div
                  key={d.id}
                  onMouseEnter={() => setHoveredId(d.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="absolute flex items-center w-full cursor-pointer group"
                  style={{ top: d.top, transform: "translateY(-50%)" }}
                >
                  <span
                    className={`flex items-center gap-2 text-xs font-medium whitespace-nowrap px-2.5 py-1 rounded-md border transition-all duration-300 ${
                      isActive
                        ? "text-background bg-makita-teal border-makita-teal shadow-[0_0_20px_rgba(20,184,166,0.5)]"
                        : "text-foreground bg-surface-darker/90 border-border/30"
                    }`}
                  >
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold transition-colors ${
                        isActive ? "bg-background text-makita-teal" : "bg-makita-teal text-background"
                      }`}
                    >
                      {d.id}
                    </span>
                    {d.label}
                  </span>
                  <div
                    className={`flex-1 h-px transition-all duration-300 ${
                      isActive ? "bg-makita-teal shadow-[0_0_8px_rgba(20,184,166,0.8)]" : "bg-makita-teal/60"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Center image with hotspots and connecting lines */}
          <div className="relative w-[280px] lg:w-[340px]">
            <img
              src={heroImage}
              alt="Makita DCM501 con detalles"
              className="w-full relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            />

            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-full bg-makita-teal/5 blur-3xl" />

            {/* Connecting lines from column edge to hotspot */}
            {leftDetails.map((d) => {
              const isActive = hoveredId === d.id;
              return (
                <div
                  key={d.id}
                  className={`absolute h-px z-20 transition-all duration-300 ${
                    isActive ? "bg-makita-teal shadow-[0_0_8px_rgba(20,184,166,0.8)]" : "bg-makita-teal/60"
                  }`}
                  style={{ top: d.top, left: 0, width: d.left }}
                />
              );
            })}
            {rightDetails.map((d) => {
              const isActive = hoveredId === d.id;
              return (
                <div
                  key={d.id}
                  className={`absolute h-px z-20 transition-all duration-300 ${
                    isActive ? "bg-makita-teal shadow-[0_0_8px_rgba(20,184,166,0.8)]" : "bg-makita-teal/60"
                  }`}
                  style={{ top: d.top, right: 0, width: `calc(100% - ${d.left})` }}
                />
              );
            })}

            {/* Hotspot dots */}
            {details.map((d) => {
              const isActive = hoveredId === d.id;
              return (
                <div
                  key={d.id}
                  className={`absolute rounded-full -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-300 ${
                    isActive
                      ? "w-4 h-4 bg-makita-teal ring-4 ring-makita-teal/50 shadow-[0_0_20px_rgba(20,184,166,0.9)] animate-pulse"
                      : "w-2.5 h-2.5 bg-makita-teal ring-2 ring-makita-teal/40"
                  }`}
                  style={{ top: d.top, left: d.left }}
                />
              );
            })}
          </div>

          {/* Right labels */}
          <div className="relative">
            {rightDetails.map((d) => {
              const isActive = hoveredId === d.id;
              return (
                <div
                  key={d.id}
                  onMouseEnter={() => setHoveredId(d.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="absolute flex items-center w-full cursor-pointer group"
                  style={{ top: d.top, transform: "translateY(-50%)" }}
                >
                  <div
                    className={`flex-1 h-px transition-all duration-300 ${
                      isActive ? "bg-makita-teal shadow-[0_0_8px_rgba(20,184,166,0.8)]" : "bg-makita-teal/60"
                    }`}
                  />
                  <span
                    className={`flex items-center gap-2 text-xs font-medium whitespace-nowrap px-2.5 py-1 rounded-md border transition-all duration-300 ${
                      isActive
                        ? "text-background bg-makita-teal border-makita-teal shadow-[0_0_20px_rgba(20,184,166,0.5)]"
                        : "text-foreground bg-surface-darker/90 border-border/30"
                    }`}
                  >
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold transition-colors ${
                        isActive ? "bg-background text-makita-teal" : "bg-makita-teal text-background"
                      }`}
                    >
                      {d.id}
                    </span>
                    {d.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: image with interactive hotspots */}
        <div className="md:hidden mt-10 flex flex-col items-center gap-6">
          <div className="relative w-full max-w-[320px] mx-auto">
            <img
              src={heroImage}
              alt="Makita DCM501 con detalles"
              className="w-full relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            />
            <div className="absolute inset-0 rounded-full bg-makita-teal/5 blur-3xl" />

            {details.map((d) => {
              const isActive = activeId === d.id;
              return (
                <button
                  key={d.id}
                  type="button"
                  aria-label={d.label}
                  onClick={() => setActiveId(isActive ? null : d.id)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-makita-teal rounded-full"
                  style={{ top: d.top, left: d.left }}
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-5 h-5 bg-makita-teal ring-4 ring-makita-teal/40 shadow-[0_0_20px_rgba(20,184,166,0.8)]"
                        : "w-3.5 h-3.5 bg-makita-teal ring-2 ring-makita-teal/50 animate-pulse"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active detail label */}
          <div className="w-full max-w-sm mx-auto min-h-[60px] flex items-center justify-center rounded-2xl border border-border/40 bg-surface-dark/60 px-6 py-4 text-center">
            {activeId ? (
              <span className="text-base font-medium text-foreground">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-makita-teal text-background text-xs font-bold mr-2">
                  {activeId}
                </span>
                {details.find((d) => d.id === activeId)?.label}
              </span>
            ) : (
              <span className="text-sm text-muted-foreground">
                Tocá los puntos verdes para ver el nombre de cada parte
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecsSection() {
  const { ref, visible } = useInView(0.1);

  const performanceSpecs = [
    { label: "Capacidad del tanque", value: "240 ml", icon: <Droplets className="w-5 h-5 text-makita-teal" /> },
    { label: "Autonomía promedio", value: "Hasta 3 tazas", icon: <Coffee className="w-5 h-5 text-makita-teal" /> },
    { label: "Tiempo de preparación", value: "5 minutos", icon: <Timer className="w-5 h-5 text-makita-teal" /> },
    { label: "Temperatura de extracción", value: "~90°C", icon: <Thermometer className="w-5 h-5 text-makita-teal" /> },
  ];

  const compatibilitySpecs = [
    { label: "Baterías compatibles", value: "12V CXT / 18V LXT", icon: <Battery className="w-5 h-5 text-makita-teal" /> },
    { label: "Sistema de filtro", value: "Filtro permanente", icon: <Filter className="w-5 h-5 text-makita-teal" /> },
    { label: "Tipo de café", value: "Café molido", icon: <Coffee className="w-5 h-5 text-makita-teal" /> },
    { label: "Conexión", value: "Inalámbrica", icon: <Zap className="w-5 h-5 text-makita-teal" /> },
  ];

  const dimensionSpecs = [
    { label: "Peso (sin batería)", value: "1.5 kg", icon: <Weight className="w-5 h-5 text-makita-teal" /> },
    { label: "Altura máxima de taza", value: "90 mm", icon: <Box className="w-5 h-5 text-makita-teal" /> },
    { label: "Dimensiones (A×A×L)", value: "135 × 118 × 244 mm", icon: <Ruler className="w-5 h-5 text-makita-teal" /> },
  ];

  const tabs = [
    {
      id: "performance",
      label: "Rendimiento",
      icon: <Gauge className="w-4 h-4" />,
      specs: performanceSpecs,
    },
    {
      id: "compatibility",
      label: "Compatibilidad",
      icon: <Cable className="w-4 h-4" />,
      specs: compatibilitySpecs,
    },
    {
      id: "dimensions",
      label: "Dimensiones",
      icon: <Ruler className="w-4 h-4" />,
      specs: dimensionSpecs,
    },
  ];

  return (
    <section id="specs" ref={ref} className="relative py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-makita-teal uppercase">
            Ficha técnica
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Especificaciones técnicas
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="performance" className="w-full">
            <TabsList className="w-full grid grid-cols-3 bg-surface-dark/60 border border-border/40 p-1 rounded-xl h-auto mb-8 gap-1">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-2.5 px-1 sm:px-3 rounded-lg text-[11px] sm:text-sm font-medium text-muted-foreground data-[state=active]:bg-makita-teal data-[state=active]:text-background data-[state=active]:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 min-w-0"
                >
                  {tab.icon}
                  <span className="truncate">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <div className="grid gap-4 sm:grid-cols-2">
                  {tab.specs.map((spec, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 rounded-xl border border-border/40 bg-surface-dark/40 px-6 py-5 transition-all duration-500 hover:border-makita-teal/20 hover:bg-surface-dark/60 ${
                        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-makita-teal/10 border border-makita-teal/20 flex items-center justify-center">
                        {spec.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          {spec.label}
                        </span>
                        <span className="block text-lg font-bold text-foreground mt-1 break-words">
                          {spec.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

function VersionsSection() {
  const { ref, visible } = useInView(0.1);

  const versions = [
    {
      name: "Azul Turquesa",
      code: "DCM501Z",
      image: tealVersion,
      description:
        "Es el color institucional clásico de Makita. Es la versión más común y fácil de conseguir en la mayoría de las tiendas. Se comercializa bajo el código estándar DCM501Z.",
      badge: "Clásico",
      colorClass: "bg-[#14B8A6]/10 border-[#14B8A6]/20 text-[#14B8A6]",
    },
    {
      name: "Verde Oliva",
      code: "DCM501ZO",
      image: oliveVersion,
      description:
        'Edición especial lanzada dentro del catálogo "Lifestyle" de Makita. Diseño táctico y campestre ideal para campings o expediciones. La "O" final hace referencia a Olive.',
      badge: "Edición Especial",
      colorClass: "bg-[#6B8E23]/10 border-[#6B8E23]/20 text-[#6B8E23]",
    },
  ];

  return (
    <section id="versions" ref={ref} className="relative py-20 sm:py-28 bg-surface-darker/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-makita-teal uppercase">
            Versiones
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Elegí tu estilo
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            La DCM501 viene en dos versiones distintas para adaptarse a tu personalidad y entorno de trabajo.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
          {versions.map((v, i) => (
            <div
              key={i}
              className={`group relative flex flex-col rounded-2xl border border-border/40 bg-surface-dark/40 p-6 transition-all duration-700 hover:border-makita-teal/30 hover:bg-surface-dark/60 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="relative flex items-center justify-center mb-6">
                <div className="absolute inset-0 rounded-full bg-makita-teal/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={v.image}
                  alt={`Makita DCM501 ${v.name}`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="relative w-full max-w-[280px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${v.colorClass}`}
                >
                  {v.badge}
                </span>
                <span className="text-xs font-mono text-muted-foreground">{v.code}</span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">{v.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function CTASection() {
  const { ref, visible } = useInView(0.1);

  return (
    <section id="cta" ref={ref} className="relative py-24 sm:py-32 overflow-hidden bg-makita-teal/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--makita-teal-glow),_transparent_60%)] opacity-20" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          No vuelvas a tomar café frío.
        </h2>
        <p
          className={`mt-6 text-lg text-muted-foreground transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Llevá la potencia de Makita a tu taza.
        </p>
        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-makita-teal px-8 py-4 text-base font-bold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_8px_var(--makita-teal-glow)]"
          >
            Quiero mi Makita
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#specs"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/30 px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-card/50"
          >
            Ver especificaciones
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { ref, visible } = useInView(0.1);

  const contacts = [
    {
      icon: Phone,
      label: "Teléfono",
      value: "+54 9 11 5555-0199",
      note: "Atención de lunes a viernes de 9 a 18 h",
    },
    {
      icon: Mail,
      label: "Correo electrónico",
      value: "hola@makita-demo.local",
      note: "Respuesta en 24-48 h",
    },
    {
      icon: MapPin,
      label: "Dirección",
      value: "Av. Industrial 1234, Piso 5",
      note: "Buenos Aires, Argentina",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-28 bg-surface-darker">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Contacto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Datos de contacto de demostración.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((c, i) => (
            <div
              key={c.label}
              className={`rounded-2xl border border-border/40 bg-card/40 p-6 transition-all duration-700 hover:bg-card/60 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-makita-teal/10 p-3">
                <c.icon className="h-6 w-6 text-makita-teal" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">{c.label}</p>
              <p className="mt-1 text-lg font-semibold text-foreground">{c.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 bg-surface-darker py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="text-2xl tracking-wide text-foreground" style={{ fontFamily: "var(--font-logo)" }}>
              makita
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-makita-teal transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-makita-teal transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-makita-teal transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-makita-teal transition-colors"><Youtube className="h-5 w-5" /></a>
          </div>

          <p className="text-sm text-muted-foreground">© 2024 Makita. Derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PainPointsSection />
      <FeaturesSection />
      <IncludesSection />
      <ProductDetailsSection />
      <SpecsSection />
      <VersionsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
