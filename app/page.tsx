"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CountdownTimer } from "./components/CountdownTimer";
import {
  LanguageSelector,
  SelectedLanguageDisplay,
} from "./components/LanguageSelector";
import Testimonials from "./components/TestimonialsCarousel";
import { CouponCopy } from "./components/CouponCopy";
import { FooterLinks } from "./components/FooterLinks";
import { cn } from "@/lib/utils";

export default function PedroPoliglotaPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [instagramCount, setInstagramCount] = useState(0);
  const [youtubeCount, setYoutubeCount] = useState(0);
  const [tiktokCount, setTiktokCount] = useState(0);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate Instagram counter
          const instagramTarget = 251;
          const youtubeTarget = 45;
          const tiktokTarget = 163;
          const duration = 2000; // 2 seconds
          const steps = 60;
          const stepDuration = duration / steps;
          
          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOutQuad = 1 - Math.pow(1 - progress, 3);
            
            setInstagramCount(Math.round(instagramTarget * easeOutQuad));
            setYoutubeCount(Math.round(youtubeTarget * easeOutQuad));
            setTiktokCount(Math.round(tiktokTarget * easeOutQuad));
            
            if (currentStep >= steps) {
              clearInterval(interval);
              setInstagramCount(instagramTarget);
              setYoutubeCount(youtubeTarget);
              setTiktokCount(tiktokTarget);
            }
          }, stepDuration);
        }
      },
      { threshold: 0.3 }
    );

    if (socialsRef.current) {
      observer.observe(socialsRef.current);
    }

    return () => {
      if (socialsRef.current) {
        observer.unobserve(socialsRef.current);
      }
    };
  }, [hasAnimated]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* HEADER */}
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-500",
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-3 shadow-lg shadow-slate-200/50"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a
              href="#top"
              className="flex items-center gap-3 hover:scale-105 transition-transform duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden relative">
                <Image
                  src="/pedro-poliglota/images/pedro.jpg"
                  alt="Pedro - LanguagesPedro"
                  fill
                  className="object-cover"
                  sizes="48px"
                  priority
                />
              </div>
              <div className="leading-tight">
                <div className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  LanguagesPedro
                </div>
                <div className="text-xs text-slate-500 font-bold tracking-wide">
                  Método i²
                </div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm font-bold">
              <a
                href="#idiomas"
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300"
              >
                Idiomas
              </a>
              <a
                href="#metodo"
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300"
              >
                Método
              </a>
              <a
                href="#testimonios"
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300"
              >
                Testimonios
              </a>
              <a
                href="#quien-soy"
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300"
              >
                Quién soy
              </a>
              <a
                href="#faq"
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300"
              >
                FAQs
              </a>
              <a
                href="#checkout"
                className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 font-black hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Inscríbete</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl">
              <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
                <a
                  href="#idiomas"
                  onClick={closeMobileMenu}
                  className="text-slate-700 hover:text-blue-600 font-bold text-lg py-3 px-4 rounded-lg hover:bg-blue-50 transition-all"
                >
                  Idiomas
                </a>
                <a
                  href="#metodo"
                  onClick={closeMobileMenu}
                  className="text-slate-700 hover:text-blue-600 font-bold text-lg py-3 px-4 rounded-lg hover:bg-blue-50 transition-all"
                >
                  Método
                </a>
                <a
                  href="#testimonios"
                  onClick={closeMobileMenu}
                  className="text-slate-700 hover:text-blue-600 font-bold text-lg py-3 px-4 rounded-lg hover:bg-blue-50 transition-all"
                >
                  Testimonios
                </a>
                <a
                  href="#quien-soy"
                  onClick={closeMobileMenu}
                  className="text-slate-700 hover:text-blue-600 font-bold text-lg py-3 px-4 rounded-lg hover:bg-blue-50 transition-all"
                >
                  Quién soy
                </a>
                <a
                  href="#faq"
                  onClick={closeMobileMenu}
                  className="text-slate-700 hover:text-blue-600 font-bold text-lg py-3 px-4 rounded-lg hover:bg-blue-50 transition-all"
                >
                  FAQs
                </a>
                <a
                  href="#checkout"
                  onClick={closeMobileMenu}
                  className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white px-6 py-4 rounded-full font-black text-center hover:shadow-xl hover:shadow-blue-500/40 transition-all"
                >
                  Inscríbete
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="pt-24">
        {/* HERO */}
        <section className="py-24 md:py-40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50/30 -z-10" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200/50 rounded-full text-xs md:text-sm font-black text-blue-700 mb-6 shadow-lg shadow-blue-100/50 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 animate-pulse">
                  <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-blue-500"></span>
                  </span>
                  <span className="hidden sm:inline">Lanzamiento • Plazas limitadas • Cierre: 18 de enero</span>
                  <span className="sm:hidden">Plazas limitadas • Cierre: 18/01</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-4 md:mb-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  De cero a conversación en 90 días con mi método i²
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed">
                  Este curso te enseña el camino para aprender un idioma fuera
                  del camino tradicional. Aprenderás en 3 meses (no 3 años) las
                  bases fundamentales y a comunicarte de manera efectiva desde
                  el día 1 con el mismo método con el que más de 200 personas
                  han aprendido y con el que yo mismo he alcanzado la fluidez en
                  9 idiomas diferentes.
                </p>

                <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                  <li className="flex items-center gap-4 group">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                      Diseñado específicamente para hispanohablantes
                    </span>
                  </li>
                  <li className="flex items-center gap-3 md:gap-4 group">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                      Progreso real en 3 meses (no en 3 años)
                    </span>
                  </li>
                  <li className="flex items-center gap-3 md:gap-4 group">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-base text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                      El inicio de tu camino políglota
                    </span>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-6">
                  <a
                    href="#checkout"
                    className="inline-flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full font-black text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group w-full sm:w-auto touch-manipulation"
                  >
                    <span className="relative z-10">INSCRÍBETE AHORA</span>
                    <svg className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                  <a
                    href="#idiomas"
                    className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white border-2 border-slate-300 text-slate-700 px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-full font-black text-sm sm:text-base hover:border-blue-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group w-full sm:w-auto touch-manipulation"
                  >
                    Ver idiomas
                    <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-500">
                  Plazas limitadas • Cierra el domingo 18 de enero (23:59,
                  Paraguay)
                </p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl border border-white/60 p-4 sm:p-6 md:p-8 hover:shadow-blue-200/50 transition-all duration-500 hover:scale-[1.02] group">
                <div className="aspect-[3/4] rounded-xl md:rounded-2xl border-2 border-blue-200/50 relative overflow-hidden shadow-inner group-hover:shadow-blue-200 transition-shadow">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                  <Image
                    src="/pedro-poliglota/images/pedro.jpg"
                    alt="Pedro - Políglota y fundador de LanguagesPedro"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COUNTDOWN */}
        <section className="py-16 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border-2 border-slate-200/50 rounded-3xl shadow-2xl shadow-slate-200/50 p-10 hover:shadow-blue-200/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-10" />
              <CountdownTimer />
            </div>
          </div>
        </section>

        {/* LANGUAGE SELECTOR */}
        <section id="idiomas" className="py-20 md:py-32 relative overflow-hidden bg-slate-50">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 -z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900">
                Elige tu curso por idioma
              </h2>
            </div>
            
            <LanguageSelector />

            {/* GUARANTEE SECTION */}

          </div>
        </section>

        {/* POR QUÉ DEBERÍAS ENTRAR */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              ¿Has probado de todo pero algo no termina de encajar?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200/50 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:shadow-red-200/30 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-300 rounded-full filter blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-4xl mb-6">🚫</div>
                  <p className="text-2xl md:text-3xl font-black mb-6 text-slate-900 leading-tight">
                    Te voy a ser sincero: llevas aprendiendo idiomas de la forma
                    equivocada <span className="text-red-600">AÑOS</span>.
                  </p>
                  <div className="h-px bg-gradient-to-r from-red-300 to-transparent my-6" />
                  <div className="space-y-4 text-slate-700 font-medium">
                    <p>
                      Olvídate de academias y de pagar eternamente para avanzar un
                      nivel por año.
                    </p>
                    <p>
                      Esto no es Duolingo para estar 30 minutos al día creyendo que
                      estás haciendo algo, sin ver resultados reales.
                    </p>
                    <p>
                      O una academia con un examen final que hay que aprobar.
                    </p>
                  </div>
                </div>
              </div>
              <div className="group bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200/50 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:shadow-green-200/30 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-300 rounded-full filter blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-4xl mb-6">✨</div>
                  <div className="space-y-6">
                    <p className="text-slate-700 font-medium">
                      Esto son los fundamentos que te van a hacer capaz de hablar
                      cualquier idioma,{" "}
                      <strong className="text-green-700">sin depender de nadie</strong>.
                    </p>
                    <div className="h-px bg-gradient-to-r from-green-300 to-transparent" />
                    <p className="text-2xl font-black text-slate-900 italic leading-relaxed">
                      "Vas a aprender el método con el que los políglotas
                      aprenden 3 veces más rápido."
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                      <a
                        href="#checkout"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-black hover:shadow-xl hover:shadow-green-500/30 transition-all hover:scale-105"
                      >
                        Quiero el método
                      </a>
                      <a
                        href="#metodo"
                        className="inline-flex items-center gap-2 bg-white border-2 border-green-300 text-green-700 px-8 py-4 rounded-full font-black hover:border-green-600 hover:text-green-900 transition-all hover:scale-105"
                      >
                        Ver cómo funciona
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ VAS A ENCONTRAR */}
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">¿Qué vas a encontrar dentro?</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-visible">
                <div className="absolute -top-4 left-6 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 6h10" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12h3" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 18h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 pt-3">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Sistema paso a paso</span>
                </h3>
                <p className="text-slate-700">
                  Mi método autodidacta explicado al detalle para que no improvises nunca más
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-visible">
                <div className="absolute -top-4 left-6 w-12 h-12 bg-rose-50 rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 1v8" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 5h8" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 11a7 7 0 0 0 14 0" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19v2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 pt-3">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Pronunciación</span>
                </h3>
                <p className="text-slate-700">
                  Explicada para hispanohablantes, para que nunca más tengas dudas de cómo pronunciar las palabras
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-visible">
                <div className="absolute -top-4 left-6 w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 18h6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a6 6 0 0 0-4 10l.5.5V15h7v-2.5l.5-.5A6 6 0 0 0 12 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 pt-3">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Lógica del idioma</span>
                </h3>
                <p className="text-slate-700">
                  Los conceptos que de verdad necesitas para poder expresarte desde el principio y entender de verdad a los nativos
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-visible">
                <div className="absolute -top-4 left-6 w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <rect x="2" y="7" width="12" height="10" rx="2" strokeWidth={1.5} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l6-3v10l-6-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 pt-3">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Una sesión en directo mensual</span>
                </h3>
                <p className="text-slate-700">
                  Respondiendo todas las dudas y mostrando en exclusiva mis técnicas de aprendizaje
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MÉTODO i² */}
        <section id="metodo" className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black mb-10 text-center">
              ¿En qué consiste el método i²?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-center mb-12">
              El <strong>método i²</strong> (ingeniería de idiomas) no va de
              estudiar un idioma, va de <strong>entender cómo funciona</strong>{" "}
              para poder usarlo.
            </p>

            {/* Flujo 1→4 (visual) */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 p-8 mb-16">
              <div className="grid md:grid-cols-4 gap-6" aria-label="Flujo del método i²">
                <div
                  className="bg-white border border-slate-200 rounded-xl p-6 relative"
                  data-step="1"
                >
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-white rounded-xl border-2 border-blue-600 flex items-center justify-center font-black text-blue-600 text-xl shadow-lg" aria-hidden="true">
                    1
                  </div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 4a3 3 0 0 0-3 3v1" />
                      <path d="M15 4a3 3 0 0 1 3 3v1" />
                      <path d="M7 9a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3" />
                      <path d="M17 9a3 3 0 0 1 0 6v1a3 3 0 0 1-3 3" />
                      <path d="M10 7h4" />
                      <path d="M10 11h4" />
                      <path d="M10 15h4" />
                    </svg>
                  </div>
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-xl font-black text-center mb-4 mt-8">COMPRENDER</div>
                  <div className="text-slate-700 text-center font-medium">
                    Analizamos las <strong>estructuras</strong> y palabras que
                    más se usan y cómo piensan los nativos.
                  </div>
                </div>

                <div
                  className="bg-white border border-slate-200 rounded-xl p-6 relative"
                  data-step="2"
                >
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-white rounded-xl border-2 border-blue-600 flex items-center justify-center font-black text-blue-600 text-xl shadow-lg" aria-hidden="true">
                    2
                  </div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z" />
                      <path d="M8 9h8" />
                      <path d="M8 13h6" />
                    </svg>
                  </div>
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-xl font-black text-center mb-4 mt-8">FRASES ÚTILES</div>
                  <div className="text-slate-700 text-center font-medium">
                    Trabajamos con frases y expresiones de{" "}
                    <strong>alta frecuencia</strong> que se usan en el día a
                    día.
                  </div>
                </div>

                <div
                  className="bg-white border border-slate-200 rounded-xl p-6 relative"
                  data-step="3"
                >
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-white rounded-xl border-2 border-blue-600 flex items-center justify-center font-black text-blue-600 text-xl shadow-lg" aria-hidden="true">
                    3
                  </div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M11 5 6 9H3v6h3l5 4Z" />
                      <path d="M15 9a4 4 0 0 1 0 6" />
                      <path d="M17.5 6.5a7 7 0 0 1 0 11" />
                    </svg>
                  </div>
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-xl font-black text-center mb-4 mt-8">HABLAR DESDE EL DÍA 1</div>
                  <div className="text-slate-700 text-center font-medium">
                    <strong>Producción activa</strong>, no solo comprensión
                    pasiva. Hablas desde el primer día.
                  </div>
                </div>

                <div
                  className="bg-white border border-slate-200 rounded-xl p-6 relative"
                  data-step="4"
                >
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-white rounded-xl border-2 border-blue-600 flex items-center justify-center font-black text-blue-600 text-xl shadow-lg" aria-hidden="true">
                    4
                  </div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 4c3 0 6 3 6 6-4 2-6 6-6 6s-4-2-6-6c0-3 3-6 6-6Z" />
                      <path d="M8 10l-4 2 4 2" />
                      <path d="M10 18l-2 4 4-2" />
                      <path d="M14 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-xl font-black text-center mb-4 mt-8">AVANZAR SIN FRICCIÓN</div>
                  <div className="text-slate-700 text-center font-medium">
                    Progresas de forma constante y autónoma, a tu ritmo, sin bloqueos ni frustración.
                  </div>
                </div>
              </div>

              <div className="text-center text-xl font-bold text-slate-700 mt-8">
                Hablas antes, avanzas sin fricción y eres autónomo.
              </div>
            </div>

            {/* Los 4 pilares */}
            <div className="mt-16">
              <div className="text-sm font-bold text-blue-600 text-center mb-4 tracking-widest uppercase">LA METODOLOGÍA</div>
              <div className="text-2xl md:text-3xl font-black text-center mb-6">Los 4 pilares del método i²</div>
              <div className="text-lg text-slate-600 text-center mb-12">
                No solo enseñamos un idioma. Re-ingenierizamos cómo lo procesas
                y cómo lo conviertes en conversación real.
              </div>

              <div className="grid md:grid-cols-2 gap-6" aria-label="Los 4 pilares">
                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                        <path d="M19.4 15a7.9 7.9 0 0 0 .1-1l2-1.2-2-3.5-2.3.6a7.3 7.3 0 0 0-1.7-1l-.3-2.4H11l-.3 2.4a7.3 7.3 0 0 0-1.7 1l-2.3-.6-2 3.5 2 1.2a7.9 7.9 0 0 0 .1 1 7.9 7.9 0 0 0-.1 1l-2 1.2 2 3.5 2.3-.6a7.3 7.3 0 0 0 1.7 1l.3 2.4h4l.3-2.4a7.3 7.3 0 0 0 1.7-1l2.3.6 2-3.5-2-1.2a7.9 7.9 0 0 0-.1-1Z" />
                      </svg>
                    </div>
                    <div className="text-xl font-black">Pronunciación</div>
                  </div>
                  <div className="text-slate-600">
                    Nos enfocamos en cómo se produce el idioma de verdad, enseñando a producir los sonidos más difíciles para hispanohablantes, para que tengas clara la pronunciación desde el minuto 1.
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
                      </svg>
                    </div>
                    <div className="text-xl font-black">Activación</div>
                  </div>
                  <div className="text-slate-600">
                    Practicas vocabulario de alta frecuencia en contextos y
                    tiempos verbales hasta que se vuelva reflejo. Menos
                    traducción mental, más automatización.
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
                        <path d="M7 8h10" />
                        <path d="M7 12h7" />
                      </svg>
                    </div>
                    <div className="text-xl font-black">Entendimiento</div>
                  </div>
                  <div className="text-slate-600">
                    Te voy a explicar cómo funciona el idioma por dentro, entender el por qué de las cosas que se usan en la vida real.
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22a10 10 0 1 0-10-10" />
                        <path d="M12 18a6 6 0 1 0-6-6" />
                        <path d="M12 14a2 2 0 1 0-2-2" />
                        <path d="M22 2 12 12" />
                      </svg>
                    </div>
                    <div className="text-xl font-black">Integración</div>
                  </div>
                  <div className="text-slate-600">
                    Aprende a pensar en bloques, no traduciendo palabra por palabra sino sabiendo el significado real de cada cosa a nivel estructural.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ES / NO ES */}
        <section className="py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">Antes de entrar: ¿encajas?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-black mb-4">ESTO ES PARA TI SI:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg">✅</span>
                    <span>Quieres saber cómo aprender cualquier idioma de la manera más eficiente desde cero por tu cuenta.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg">✅</span>
                    <span>Has aprendido un idioma durante mucho tiempo pero sientes que no puedes ni entenderlo ni hablarlo (false beginner) y por fin quieres tomártelo en serio.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg">✅</span>
                    <span>Quieres ser políglota y aprender múltiples idiomas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg">✅</span>
                    <span>Te comprometes a dedicar de 30 a 60 minutos diarios durante los próximos 3 meses.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg">✅</span>
                    <span>Quieres un método estructurado que te permita tener constancia.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-black mb-4">ESTO NO ES PARA TI SI:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg">⛔</span>
                    <span>Piensas que puedes hablar con total fluidez un idioma en solo unos meses.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg">⛔</span>
                    <span>Quieres un &quot;método mágico&quot; que solucione tus problemas sin poner trabajo de tu parte.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg">⛔</span>
                    <span>No estás dispuesto a mantener la constancia y el tiempo que requiere.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg">⛔</span>
                    <span>Ves los idiomas como algo a lo que dedicar tiempo de manera aislada y no como una parte que hay que integrar en tu día a día.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-lg">⛔</span>
                    <span>Sigues pensando que necesitas estudiar gramática y vocabulario como en el sistema tradicional.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section id="testimonios" className="py-20 md:py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-center">Testimonios</h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-center mb-12">
              Lo que dicen alumnos que ya han usado el método.
            </p>
            <Testimonials />
          </div>
        </section>

        {/* CHECKOUT */}
        <section id="checkout" className="py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
                  Inscríbete ahora (precio especial de lanzamiento)
                </h2>
                <div className="text-center my-8">
                  <div className="text-5xl font-black text-blue-600">297€</div>
                  <div className="text-2xl text-slate-400 line-through">397€</div>
                  <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm">25% DESCUENTO</div>
                </div>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  Elige tu idioma abajo (si ya lo elegiste arriba, te lo marco).
                </p>

                <div className="border-t border-slate-200 my-6"></div>

                <h3>Qué incluye</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-green-600">✔️</span>
                    <span>Mi método autodidacta al detalle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-green-600">✔️</span>
                    <span>La rutina paso a paso para llegar a la fluidez</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-green-600">✔️</span>
                    <span>Curso de pronunciación específico para hispanohablantes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-green-600">✔️</span>
                    <span>Toda la lógica del idioma explicada en detalle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-green-600">✔️</span>
                    <span>Soporte continuo para tus preguntas</span>
                  </li>
                </ul>

                <div className="border-t border-slate-200 my-6"></div>

                <h3 className="text-lg md:text-xl font-black mb-4">💥 BONUS (incluidos)</h3>
                <p className="text-slate-700 font-bold mb-2">💥 BONUS #1: Herramientas de IA exclusivas para potenciar tu aprendizaje</p>
                <p className="text-slate-700 font-bold mb-4">💥 BONUS #2: Un tracker de tu rutina para poder realizar seguimiento a tus metas</p>

                <div className="border-t border-slate-200 my-6"></div>

                <CouponCopy />

                <div className="text-sm text-slate-500 mt-4">
                  Aplica el cupón para ver el precio final de 297€.
                </div>

                <div className="border-t border-slate-200 my-6"></div>

                <div className="flex flex-wrap gap-4">
                  <a
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-blue-500/30 transition-all"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592092"
                    target="_blank"
                    rel="noopener"
                    data-track="checkout_pay_once"
                  >
                    PAGAR 297€ (1 pago)
                  </a>
                  <a
                    className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition-all"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592094"
                    target="_blank"
                    rel="noopener"
                    data-track="checkout_pay_3x"
                  >
                    PAGAR EN 3 PLAZOS (3×110€)
                  </a>
                </div>

                <div className="text-sm text-slate-500 mt-4">
                  Los botones te llevan al checkout en Teachable.
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
                <h3 className="text-lg font-bold mb-3">Tu selección actual</h3>
                <SelectedLanguageDisplay />
                <div className="border-t border-slate-200 my-6"></div>
                <p className="text-slate-600 mb-4">
                  Abajo tienes los 6 cursos. Cuando selecciones uno, lo resalto
                  para que sea imposible perderse.
                </p>
                <a
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-blue-500/30 transition-all"
                  href="#idiomas"
                  data-track="cta_checkout_to_languages"
                >
                  Elegir curso por idioma
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* IDIOMAS */}
        <section id="idiomas" className="py-20 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-center">Elige tu curso por idioma</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* EN */}
              <article className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg" id="idioma-en" data-lang-card="en">
                <div className="aspect-video rounded-xl border border-blue-100 relative mb-4 overflow-hidden">
                  <Image
                    src="/pedro-poliglota/images/ingles.jpeg"
                    alt="Curso de Inglés"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <div className="text-2xl font-black">INGLÉS</div>
                    <div className="text-sm">con el método i²</div>
                  </div>
                  <div className="absolute top-3 right-3 text-3xl" aria-hidden="true">
                    🇺🇸
                  </div>
                </div>
                <div className="border-t border-slate-200 my-6"></div>
                <p className="text-slate-600">
                  <strong>BONUS #1:</strong> Herramientas de IA exclusivas para
                  potenciar tu aprendizaje
                </p>
                <p className="text-slate-600">
                  <strong>BONUS #2:</strong> Un tracker de tu rutina para poder
                  realizar seguimiento a tus metas
                </p>
                <div className="flex flex-wrap gap-4" style={{ marginTop: "14px" }}>
                  <a
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-blue-500/30 transition-all"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592092"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_en_once"
                  >
                    Comprar 297€
                  </a>
                  <a
                    className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition-all"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592094"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_en_3x"
                  >
                    Pagar en 3×110€
                  </a>
                </div>
              </article>

              {/* DE */}
              <article className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg" id="idioma-de" data-lang-card="de">
                <div className="aspect-video rounded-xl border border-blue-100 relative mb-4 overflow-hidden">
                  <Image
                    src="/pedro-poliglota/images/aleman.jpeg"
                    alt="Curso de Alemán"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <div className="text-2xl font-black">ALEMÁN</div>
                    <div className="text-sm">con el método i²</div>
                  </div>
                  <div className="absolute top-3 right-3 text-3xl" aria-hidden="true">
                    🇩🇪
                  </div>
                </div>
                <div className="border-t border-slate-200 my-6"></div>
                <p className="text-slate-600">
                  <strong>BONUS #1:</strong> Herramientas de IA exclusivas para
                  potenciar tu aprendizaje
                </p>
                <p className="text-slate-600">
                  <strong>BONUS #2:</strong> Un tracker de tu rutina para poder
                  realizar seguimiento a tus metas
                </p>
                <div className="flex flex-wrap gap-4" style={{ marginTop: "14px" }}>
                  <a
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-blue-500/30 transition-all"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592092"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_de_once"
                  >
                    Comprar 297€
                  </a>
                  <a
                    className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition-all"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592094"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_de_3x"
                  >
                    Pagar en 3×110€
                  </a>
                </div>
              </article>

              {/* FR */}
              <article className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg" id="idioma-fr" data-lang-card="fr">
                <div className="aspect-video rounded-xl border border-blue-100 relative mb-4 overflow-hidden">
                  <Image
                    src="/pedro-poliglota/images/frances.jpeg"
                    alt="Curso de Francés"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <div className="text-2xl font-black">FRANCÉS</div>
                    <div className="text-sm">con el método i²</div>
                  </div>
                  <div className="absolute top-3 right-3 text-3xl" aria-hidden="true">
                    🇫🇷
                  </div>
                </div>
                <div className="border-t border-slate-200 my-6"></div>
                <p className="text-slate-600">
                  <strong>BONUS #1:</strong> Herramientas de IA exclusivas para
                  potenciar tu aprendizaje
                </p>
                <p className="text-slate-600">
                  <strong>BONUS #2:</strong> Un tracker de tu rutina para poder
                  realizar seguimiento a tus metas
                </p>
                <div className="flex flex-wrap gap-4" style={{ marginTop: "14px" }}>
                  <a
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-blue-500/30 transition-all"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592092"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_fr_once"
                  >
                    Comprar 297€
                  </a>
                  <a
                    className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition-all"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592094"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_fr_3x"
                  >
                    Pagar en 3×110€
                  </a>
                </div>
              </article>

              {/* IT */}
              <article className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg" id="idioma-it" data-lang-card="it">
                <div className="aspect-video rounded-xl border border-blue-100 relative mb-4 overflow-hidden">
                  <Image
                    src="/pedro-poliglota/images/italiano.jpeg"
                    alt="Curso de Italiano"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <div className="text-2xl font-black">ITALIANO</div>
                    <div className="text-sm">con el método i²</div>
                  </div>
                  <div className="absolute top-3 right-3 text-3xl" aria-hidden="true">
                    🇮🇹
                  </div>
                </div>
                <div className="border-t border-slate-200 my-6"></div>
                <p className="text-slate-600">
                  <strong>BONUS #1:</strong> Herramientas de IA exclusivas para
                  potenciar tu aprendizaje
                </p>
                <p className="text-slate-600">
                  <strong>BONUS #2:</strong> Un tracker de tu rutina para poder
                  realizar seguimiento a tus metas
                </p>
                <div className="flex flex-wrap gap-4" style={{ marginTop: "14px" }}>
                  <a
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-blue-500/30 transition-all"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592092"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_it_once"
                  >
                    Comprar 297€
                  </a>
                  <a
                    className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition-all"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592094"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_it_3x"
                  >
                    Pagar en 3×110€
                  </a>
                </div>
              </article>

              {/* PT */}
              <article className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg" id="idioma-pt" data-lang-card="pt">
                <div className="aspect-video rounded-xl border border-blue-100 relative mb-4 overflow-hidden">
                  <Image
                    src="/pedro-poliglota/images/portugues.jpeg"
                    alt="Curso de Portugués"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <div className="text-2xl font-black">PORTUGUÉS</div>
                    <div className="text-sm">con el método i²</div>
                  </div>
                  <div className="absolute top-3 right-3 text-3xl" aria-hidden="true">
                    🇵🇹
                  </div>
                </div>
                <div className="border-t border-slate-200 my-6"></div>
                <p className="text-slate-600">
                  <strong>BONUS #1:</strong> Herramientas de IA exclusivas para
                  potenciar tu aprendizaje
                </p>
                <p className="text-slate-600">
                  <strong>BONUS #2:</strong> Un tracker de tu rutina para poder
                  realizar seguimiento a tus metas
                </p>
                <div className="flex flex-wrap gap-4" style={{ marginTop: "14px" }}>
                  <a
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-blue-500/30 transition-all"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592092"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_pt_once"
                  >
                    Comprar 297€
                  </a>
                  <a
                    className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition-all"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592094"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_pt_3x"
                  >
                    Pagar en 3×110€
                  </a>
                </div>
              </article>

              {/* RU */}
              <article className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg" id="idioma-ru" data-lang-card="ru">
                <div className="aspect-video rounded-xl border border-blue-100 relative mb-4 overflow-hidden">
                  <Image
                    src="/pedro-poliglota/images/ruso.jpeg"
                    alt="Curso de Ruso"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <div className="text-2xl font-black">RUSO</div>
                    <div className="text-sm">con el método i²</div>
                  </div>
                  <div className="absolute top-3 right-3 text-3xl" aria-hidden="true">
                    🇷🇺
                  </div>
                </div>
                <div className="border-t border-slate-200 my-6"></div>
                <p className="text-slate-600">
                  <strong>BONUS #1:</strong> Herramientas de IA exclusivas para
                  potenciar tu aprendizaje
                </p>
                <p className="text-slate-600">
                  <strong>BONUS #2:</strong> Un tracker de tu rutina para poder
                  realizar seguimiento a tus metas
                </p>
                <div className="flex flex-wrap gap-4" style={{ marginTop: "14px" }}>
                  <a
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-blue-500/30 transition-all"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592092"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_ru_once"
                  >
                    Comprar 297€
                  </a>
                  <a
                    className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition-all"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592094"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_ru_3x"
                  >
                    Pagar en 3×110€
                  </a>
                </div>
              </article>
            </div>

            {/* GUARANTEE SECTION */}
            <div className="max-w-4xl mx-auto mt-16">
              <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 border-2 border-green-300 rounded-2xl p-8 shadow-xl shadow-green-100/50 overflow-hidden">
                {/* Background decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full filter blur-3xl opacity-30" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2">Garantía 7 días (sin riesgo)</h3>
                      <p className="text-slate-700 text-lg leading-relaxed">
                        Pruébalo durante 7 días. Si no estás satisfecho, me escribes
                        y te devuelvo el dinero. <strong className="text-green-700">Sin preguntas.</strong>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-6 pt-6 border-t border-green-200">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-bold text-green-700 uppercase tracking-wide">100% Garantizado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUIÉN SOY */}
        <section id="quien-soy" className="py-20 md:py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">Quién soy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg shadow-blue-500/30 relative">
                    <Image
                      src="/pedro-poliglota/images/pedro-pg.jpeg"
                      alt="Pedro"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">Pedro</h3>
                    <p className="text-sm text-slate-500 font-semibold">Políglota & Creador del Método i²</p>
                  </div>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  Hola! Soy Pedro y a mis 22 años, puedo hablar 9 idiomas con fluidez. Mi objetivo es ayudar a hispanohablantes a romper las barreras con el idioma y aprender lenguas de un modo fácil, rápido y eficaz, sin frustración.
                </p>
                <div className="border-t border-slate-200 my-6"></div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Sígueme en:</div>
                <div ref={socialsRef} className="grid grid-cols-3 gap-4">
                  <a
                    href="#"
                    className="group bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 rounded-xl p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
                  >
                    <div className="mb-2 flex justify-center">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
                        <defs>
                          <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor: '#FD5949'}} />
                            <stop offset="50%" style={{stopColor: '#D6249F'}} />
                            <stop offset="100%" style={{stopColor: '#285AEB'}} />
                          </linearGradient>
                        </defs>
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <strong className="block text-sm text-slate-900 group-hover:text-pink-600 transition-colors">Instagram</strong>
                    <div className="text-xs text-slate-500 mt-1 font-bold tabular-nums">{instagramCount}K</div>
                  </a>
                  <a
                    href="#"
                    className="group bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-xl p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
                  >
                    <div className="mb-2 flex justify-center">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FF0000">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                    <strong className="block text-sm text-slate-900 group-hover:text-red-600 transition-colors">YouTube</strong>
                    <div className="text-xs text-slate-500 mt-1 font-bold tabular-nums">{youtubeCount}K</div>
                  </a>
                  <a
                    href="#"
                    className="group bg-gradient-to-br from-slate-50 to-gray-50 border-2 border-slate-200 rounded-xl p-4 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
                  >
                    <div className="mb-2 flex justify-center">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#000000">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </div>
                    <strong className="block text-sm text-slate-900 group-hover:text-slate-700 transition-colors">TikTok</strong>
                    <div className="text-xs text-slate-500 mt-1 font-bold tabular-nums">{tiktokCount}K</div>
                  </a>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8 shadow-lg flex flex-col justify-center items-center">
                <div
                  className="w-full rounded-xl border-2 border-blue-200 shadow-inner relative overflow-hidden"
                  style={{ height: "320px" }}
                  role="img"
                  aria-label="Foto de Pedro"
                >
                  <Image
                    src="/pedro-poliglota/images/pedro.jpg"
                    alt="Pedro - Políglota que habla 9 idiomas"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-black tracking-wide uppercase mb-4">
                Preguntas Frecuentes
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">FAQs</h2>
              <p className="text-lg text-slate-600">Resuelve todas tus dudas antes de empezar</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <details open className="group bg-white border-2 border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-lg text-slate-900 group-open:text-blue-600">
                  <span>¿Qué nivel voy a tener haciendo el curso?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Después de hacer el curso, independientemente de tu nivel inicial, tendrás un nivel conversacional básico. Es decir, nivel para poder 'defenderte en el idioma' en conversaciones del día a día.
                </p>
              </details>
              <details className="group bg-white border-2 border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-lg text-slate-900 group-open:text-blue-600">
                  <span>¿Puedo hacer el curso mientras estudio o trabajo a tiempo completo?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Por supuesto que puedes, de hecho la mayoría de los estudiantes (95%) trabajan o estudian a tiempo completo.
                </p>
              </details>
              <details className="group bg-white border-2 border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-lg text-slate-900 group-open:text-blue-600">
                  <span>¿El acceso del curso es para toda la vida?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  El curso tiene acceso durante 1 año en la plataforma.
                </p>
              </details>
              <details className="group bg-white border-2 border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-lg text-slate-900 group-open:text-blue-600">
                  <span>¿Necesito algún conocimiento previo?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  No, este curso es para cualquier persona, tenga o no experiencia. Quiero que cuando entres olvides todo lo que relacionas al aprendizaje de idiomas porque vas a aprender una nueva óptica que nunca te han enseñado antes.
                </p>
              </details>
              <details className="group bg-white border-2 border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-lg text-slate-900 group-open:text-blue-600">
                  <span>¿El curso tiene una edad mínima?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  El curso está destinado a personas de al menos 15 años. Como adultos, desarrollamos una lógica para aprender idiomas en la que necesitamos entender lo que estamos haciendo y el método está diseñado para adultos.
                </p>
              </details>
              <details className="group bg-white border-2 border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-lg text-slate-900 group-open:text-blue-600">
                  <span>Horario</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Puedes ver las clases grabadas en cualquier momento y las veces que quieras. Además, todas las sesiones en directo se resubirán también!
                </p>
              </details>
              <details className="group bg-white border-2 border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-lg text-slate-900 group-open:text-blue-600">
                  <span>¿Cuánto necesito trabajar por día?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Recomiendo un mínimo de 30-60 minutos diarios. Lo importante es la constancia, no hacerlo "perfecto"
                </p>
              </details>
              <details className="group bg-white border-2 border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-lg text-slate-900 group-open:text-blue-600">
                  <span>¿Qué pasa si me quedo atascado o pierdo motivación?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  El programa está diseñado específicamente para que avances progresivamente. Si en algún momento te atascas, puedes tomarte más tiempo para realizar las tareas y completarlo a tu ritmo. El objetivo no es "terminar el curso", sino avanzar de forma constante.
                </p>
              </details>
              <details className="group bg-white border-2 border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-lg text-slate-900 group-open:text-blue-600">
                  <span>Duración</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  El curso se va a ir desbloqueando semana a semana con nuevos módulos. Está pensado para realizarse en 90 días, pero puedes ir a tu ritmo y adaptarlo como mejor te convenga a tu rutina.
                </p>
              </details>
              <details className="group bg-white border-2 border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-lg text-slate-900 group-open:text-blue-600">
                  <span>¿Enseñas gramática?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Durante el curso aprenderás a adquirir la gramática de manera natural. Olvídate de cómo has aprendido idiomas hasta ahora, este método integral te va a hacer aprender gramática sin darte cuenta.
                </p>
              </details>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8 shadow-xl mt-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">¿Aún tienes dudas?</h3>
                  <p className="text-slate-700 text-lg mb-6">
                    Escríbeme por WhatsApp y te responderé personalmente.
                  </p>
                  <a
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl hover:shadow-green-500/30 transition-all hover:scale-105"
                    href="https://wa.me/message/KHQEYGOHFHNTE1"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="whatsapp_click"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Contactar por WhatsApp
                  </a>
                  <div className="flex items-center gap-2 mt-2">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-semibold text-slate-700">Respondo personalmente a todos los mensajes 💬</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-16 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 shadow-xl shadow-blue-500/25 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
                </div>
                <div>
                  <strong className="text-xl font-black">PedroPolíglota</strong>
                  <div className="text-xs text-slate-400 font-bold">Método i²</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Aprende idiomas de forma eficiente y conversacional. De cero a fluidez en 90 días.
              </p>
              <div className="text-sm text-slate-500 mt-4">
                © 2026 Todos los derechos reservados
              </div>
            </div>
            <div>
              <h4 className="font-black text-lg mb-4">Enlaces</h4>
              <FooterLinks />
            </div>
            <div>
              <h4 className="font-black text-lg mb-4">Sígueme</h4>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-sm font-semibold">Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-sm font-semibold">YouTube</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                  <span className="text-sm font-semibold">TikTok</span>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="text-xs text-slate-500 mb-2">
                  <strong className="text-slate-400">Analítica:</strong> Añade tu pixel/GA4 donde prefieras.
                </div>
                <div className="text-xs text-slate-500">
                  <strong className="text-slate-400">Eventos:</strong> JS básicos incluidos en consola.
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <div className="text-center mb-6">
              <a
                href="https://wa.me/message/KHQEYGOHFHNTE1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-green-600/30 hover:shadow-green-600/50 transition-all transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Contáctame por WhatsApp
              </a>
            </div>
            <p className="text-sm text-slate-500 text-center">
              Hecho con 💙 para ayudarte a aprender idiomas de forma efectiva
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 md:p-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-110 transition-all duration-300 group"
          aria-label="Back to top"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}



