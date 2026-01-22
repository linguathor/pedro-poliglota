"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* HEADER */}
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3"
            : "bg-transparent py-4"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a
              href="#top"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20" />
              <div className="leading-tight">
                <div className="text-lg font-black tracking-tight">
                  PedroPol├¡glota
                </div>
                <div className="text-xs text-slate-500 font-semibold">
                  M├®todo i┬▓
                </div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
              <a
                href="#idiomas"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Idiomas
              </a>
              <a
                href="#metodo"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                M├®todo
              </a>
              <a
                href="#testimonios"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                Testimonios
              </a>
              <a
                href="#faq"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                FAQs
              </a>
              <a
                href="#checkout"
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all font-bold"
              >
                Inscr├¡bete
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* HERO */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-blue-700 mb-6">
                  ÔÜí´©Å Lanzamiento ÔÇó Plazas limitadas ÔÇó Cierre: este domingo
                  (Paraguay)
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                  De cero a conversaci├│n en 90 d├¡as con mi m├®todo i┬▓
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                  Este curso te ense├▒a el camino para aprender un idioma fuera
                  del camino tradicional. Aprender├ís en 3 meses (no 3 a├▒os) las
                  bases fundamentales y a comunicarte de manera efectiva desde
                  el d├¡a 1 con el mismo m├®todo con el que m├ís de 200 personas
                  han aprendido y con el que yo mismo he alcanzado la fluidez en
                  9 idiomas diferentes.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span className="text-slate-600">
                      Dise├▒ado espec├¡ficamente para hispanohablantes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span className="text-slate-600">
                      Progreso real en 3 meses (no en 3 a├▒os)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <span className="text-slate-600">
                      El inicio de tu camino pol├¡glota
                    </span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4 mb-4">
                  <a
                    href="#checkout"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5"
                  >
                    INSCR├ìBETE AHORA
                  </a>
                  <a
                    href="#idiomas"
                    className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition-all"
                  >
                    Ver idiomas
                  </a>
                </div>

                <p className="text-sm text-slate-500">
                  Plazas limitadas ÔÇó Cierra el domingo 18 de enero (23:59,
                  Paraguay)
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 flex items-center justify-center text-slate-400 font-semibold mb-4">
                  [Foto o imagen principal]
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-sm text-slate-600">
                    Ô£à Acceso inmediato ÔÇó Ô£à Ruta diaria clara ÔÇó Ô£à Hablas desde
                    el d├¡a 1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COUNTDOWN */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl shadow-xl p-8">
              <CountdownTimer />
            </div>
          </div>
        </section>

        {/* LANGUAGE SELECTOR */}
        <section id="idiomas" className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">
              ELIGE TU IDIOMA
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Selecciona el idioma y te llevo directamente al curso
              correspondiente.
            </p>
            <LanguageSelector />
          </div>
        </section>

        {/* POR QU├ë DEBER├ìAS ENTRAR */}
        <section>
          <div className="container">
            <h2 className="section-title">
              ┬┐Has probado de todo pero algo no termina de encajar?
            </h2>
            <div className="grid-2">
              <div className="card">
                <p className="lead">
                  Te voy a ser sincero: llevas aprendiendo idiomas de la forma
                  equivocada <strong>A├æOS</strong>.
                </p>
                <div className="hr"></div>
                <p className="muted">
                  Olv├¡date de academias y de pagar eternamente para avanzar un
                  nivel por a├▒o.
                </p>
                <p className="muted">
                  Esto no es Duolingo para estar 30 minutos al d├¡a creyendo que
                  est├ís haciendo algo, sin ver resultados reales.
                </p>
                <p className="muted">
                  O una academia con un examen final que hay que aprobar.
                </p>
              </div>
              <div className="card">
                <p className="muted">
                  Esto son los fundamentos que te van a hacer capaz de hablar
                  cualquier idioma,{" "}
                  <strong>sin depender de nadie</strong>.
                </p>
                <div className="hr"></div>
                <p className="quote">
                  &quot;Vas a aprender el m├®todo con el que los pol├¡glotas
                  aprenden 3 veces m├ís r├ípido.&quot;
                </p>
                <div className="cta-row" style={{ marginTop: "14px" }}>
                  <a
                    className="btn btn-primary"
                    href="#checkout"
                    data-track="cta_problem"
                  >
                    Quiero el m├®todo
                  </a>
                  <a
                    className="btn"
                    href="#metodo"
                    data-track="cta_problem_method"
                  >
                    Ver c├│mo funciona
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QU├ë VAS A ENCONTRAR */}
        <section>
          <div className="container">
            <h2 className="section-title">┬┐Qu├® vas a encontrar dentro?</h2>
            <div className="grid-3" style={{ marginTop: "14px" }}>
              <div className="card">
                <h3>Ô£ª Sistema paso a paso</h3>
                <p>
                  Mi m├®todo autodidacta explicado para que no improvises nunca
                  m├ís.
                </p>
              </div>
              <div className="card">
                <h3>Ô£ª Pronunciaci├│n (para hispanohablantes)</h3>
                <p>
                  La fon├®tica hecha simple: entiendes, imitas y corriges desde
                  el inicio.
                </p>
              </div>
              <div className="card">
                <h3>Ô£ª L├│gica del idioma + conversaci├│n</h3>
                <p>
                  Lo que de verdad necesitas para hablar en el d├¡a a d├¡a, desde
                  el d├¡a 1.
                </p>
              </div>
            </div>
            <ul className="list">
              <li>Programa de conversaci├│n desde el primer d├¡a</li>
              <li>Resoluci├│n de dudas en cada clase en la plataforma</li>
            </ul>
          </div>
        </section>

        {/* M├ëTODO i┬▓ */}
        <section id="metodo">
          <div className="container">
            <h2 className="section-title">
              ┬┐En qu├® consiste el m├®todo i┬▓?
            </h2>
            <p className="lead">
              El <strong>m├®todo i┬▓</strong> (ingenier├¡a de idiomas) no va de
              estudiar un idioma, va de <strong>entender c├│mo funciona</strong>{" "}
              para poder usarlo.
            </p>

            {/* Flujo 1ÔåÆ4 (visual) */}
            <div className="flow-panel" style={{ marginTop: "18px" }}>
              <div className="flow-cards" aria-label="Flujo del m├®todo i┬▓">
                <div
                  className="flow-card flow-step-1"
                  data-step="1"
                >
                  <div className="flow-num" aria-hidden="true">
                    1
                  </div>
                  <div className="flow-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M9 4a3 3 0 0 0-3 3v1" />
                      <path d="M15 4a3 3 0 0 1 3 3v1" />
                      <path d="M7 9a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3" />
                      <path d="M17 9a3 3 0 0 1 0 6v1a3 3 0 0 1-3 3" />
                      <path d="M10 7h4" />
                      <path d="M10 11h4" />
                      <path d="M10 15h4" />
                    </svg>
                  </div>
                  <div className="flow-band">COMPRENDER</div>
                  <div className="flow-text">
                    Analizamos las <strong>estructuras</strong> y palabras que
                    m├ís se usan y c├│mo piensan los nativos.
                  </div>
                </div>

                <div
                  className="flow-card flow-step-2"
                  data-step="2"
                >
                  <div className="flow-num" aria-hidden="true">
                    2
                  </div>
                  <div className="flow-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Z" />
                      <path d="M8 9h8" />
                      <path d="M8 13h6" />
                    </svg>
                  </div>
                  <div className="flow-band">FRASES ├ÜTILES</div>
                  <div className="flow-text">
                    Trabajamos con frases y expresiones de{" "}
                    <strong>alta frecuencia</strong> que se usan en el d├¡a a
                    d├¡a.
                  </div>
                </div>

                <div
                  className="flow-card flow-step-3"
                  data-step="3"
                >
                  <div className="flow-num" aria-hidden="true">
                    3
                  </div>
                  <div className="flow-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M11 5 6 9H3v6h3l5 4Z" />
                      <path d="M15 9a4 4 0 0 1 0 6" />
                      <path d="M17.5 6.5a7 7 0 0 1 0 11" />
                    </svg>
                  </div>
                  <div className="flow-band">HABLAR DESDE EL D├ìA 1</div>
                  <div className="flow-text">
                    <strong>Producci├│n activa</strong>, no solo comprensi├│n
                    pasiva. Hablas desde el primer d├¡a.
                  </div>
                </div>

                <div
                  className="flow-card flow-step-4"
                  data-step="4"
                >
                  <div className="flow-num" aria-hidden="true">
                    4
                  </div>
                  <div className="flow-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M14 4c3 0 6 3 6 6-4 2-6 6-6 6s-4-2-6-6c0-3 3-6 6-6Z" />
                      <path d="M8 10l-4 2 4 2" />
                      <path d="M10 18l-2 4 4-2" />
                      <path d="M14 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="flow-band">AVANZAR SIN FRICCI├ôN</div>
                  <div className="flow-text">
                    Progresas de forma constante y aut├│noma, aplicando el m├®todo
                    a cualquier idioma.
                  </div>
                </div>
              </div>

              <div className="flow-tagline">
                Hablas antes, avanzas sin fricci├│n y eres aut├│nomo.
              </div>
            </div>

            {/* Los 4 pilares */}
            <div className="methodology" style={{ marginTop: "18px" }}>
              <div className="kicker">LA METODOLOG├ìA</div>
              <div className="method-title">Los 4 pilares del m├®todo i┬▓</div>
              <div className="method-sub">
                No solo ense├▒amos un idioma. Re-ingenierizamos c├│mo lo procesas
                y c├│mo lo conviertes en conversaci├│n real.
              </div>

              <div className="pillar-grid" aria-label="Los 4 pilares">
                <div className="pillar">
                  <div className="pillar-head">
                    <div className="pillar-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                        <path d="M19.4 15a7.9 7.9 0 0 0 .1-1l2-1.2-2-3.5-2.3.6a7.3 7.3 0 0 0-1.7-1l-.3-2.4H11l-.3 2.4a7.3 7.3 0 0 0-1.7 1l-2.3-.6-2 3.5 2 1.2a7.9 7.9 0 0 0 .1 1 7.9 7.9 0 0 0-.1 1l-2 1.2 2 3.5 2.3-.6a7.3 7.3 0 0 0 1.7 1l.3 2.4h4l.3-2.4a7.3 7.3 0 0 0 1.7-1l2.3.6 2-3.5-2-1.2a7.9 7.9 0 0 0-.1-1Z" />
                      </svg>
                    </div>
                    <div className="pillar-title">Mec├ínica</div>
                  </div>
                  <div className="pillar-text">
                    Quitamos las reglas &quot;de libro&quot; y nos enfocamos en
                    c├│mo se produce el idioma de verdad: sonidos, ritmo y c├│mo se
                    conectan las frases.
                  </div>
                </div>

                <div className="pillar">
                  <div className="pillar-head">
                    <div className="pillar-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
                      </svg>
                    </div>
                    <div className="pillar-title">Activaci├│n</div>
                  </div>
                  <div className="pillar-text">
                    Practicas vocabulario de alta frecuencia en contextos y
                    tiempos verbales hasta que se vuelva reflejo. Menos
                    traducci├│n mental, m├ís automatizaci├│n.
                  </div>
                </div>

                <div className="pillar">
                  <div className="pillar-head">
                    <div className="pillar-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
                        <path d="M7 8h10" />
                        <path d="M7 12h7" />
                      </svg>
                    </div>
                    <div className="pillar-title">Producci├│n</div>
                  </div>
                  <div className="pillar-text">
                    Pasas de &quot;entender&quot; a hablar: tareas cortas y
                    espont├íneas (mini-di├ílogos, opiniones, historias) usando
                    conectores y estructuras reales.
                  </div>
                </div>

                <div className="pillar">
                  <div className="pillar-head">
                    <div className="pillar-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M12 22a10 10 0 1 0-10-10" />
                        <path d="M12 18a6 6 0 1 0-6-6" />
                        <path d="M12 14a2 2 0 1 0-2-2" />
                        <path d="M22 2 12 12" />
                      </svg>
                    </div>
                    <div className="pillar-title">Integraci├│n</div>
                  </div>
                  <div className="pillar-text">
                    Auditor├¡as semanales y misiones &quot;mundo real&quot; para
                    que lo apliques donde importa: conversaciones, reuniones,
                    llamadas y situaciones cotidianas.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ES / NO ES */}
        <section>
          <div className="container">
            <h2 className="section-title">Antes de entrar: ┬┐encajas?</h2>
            <div className="split" style={{ marginTop: "16px" }}>
              <div className="card good">
                <h3>Ô£à ESTO ES PARA TI SI:</h3>
                <ul className="list">
                  <li>
                    Quieres saber c├│mo aprender cualquier idioma de la manera
                    m├ís eficiente desde cero por tu cuenta.
                  </li>
                  <li>
                    Has aprendido un idioma durante mucho tiempo pero sientes
                    que no puedes ni entenderlo ni hablarlo (false beginner) y
                    por fin quieres tom├írtelo en serio.
                  </li>
                  <li>
                    Quieres ser pol├¡glota y aprender m├║ltiples idiomas.
                  </li>
                  <li>
                    Te comprometes a dedicar de 30 a 60 minutos diarios durante
                    los pr├│ximos 3 meses.
                  </li>
                  <li>
                    Quieres un m├®todo estructurado que te permita tener
                    constancia.
                  </li>
                </ul>
              </div>
              <div className="card bad">
                <h3>Ôøö ESTO NO ES PARA TI SI:</h3>
                <ul className="list">
                  <li>
                    Piensas que puedes hablar con total fluidez un idioma en
                    solo unos meses.
                  </li>
                  <li>
                    Quieres un &quot;m├®todo m├ígico&quot; que solucione tus
                    problemas sin poner trabajo de tu parte.
                  </li>
                  <li>
                    No est├ís dispuesto a mantener la constancia y el tiempo que
                    requiere.
                  </li>
                  <li>
                    Ves los idiomas como algo a lo que dedicar tiempo de manera
                    aislada y no como una parte que hay que integrar en tu d├¡a a
                    d├¡a.
                  </li>
                  <li>
                    Sigues pensando que necesitas estudiar gram├ítica y
                    vocabulario como en el sistema tradicional.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section id="testimonios">
          <div className="container">
            <h2 className="section-title">Testimonios</h2>
            <p className="lead">
              Lo que dicen alumnos que ya han usado el m├®todo.
            </p>
            <Testimonials />
          </div>
        </section>

        {/* CHECKOUT */}
        <section id="checkout">
          <div className="container">
            <div className="grid-2">
              <div className="card">
                <h2 className="section-title" style={{ marginBottom: "6px" }}>
                  Inscr├¡bete ahora (precio especial de lanzamiento)
                </h2>
                <div className="price">
                  <div className="now">347Çé¼</div>
                  <div className="was">é¼</div>
                  
                </div>

                <p className="lead">
                  Elige tu idioma abajo (si ya lo elegiste arriba, te lo marco).
                </p>

                <div className="hr"></div>

                <h3>Qu├® incluye</h3>
                <ul className="list">
                  <li>Mi m├®todo autodidacta al detalle</li>
                  <li>
                    La rutina paso a paso que te llevar├í a la fluidez
                    conversacional
                  </li>
                  <li>Una comunidad de estudiantes comprometidos</li>
                </ul>

                <div className="hr"></div>

                <h3 style={{ marginBottom: "6px" }}>BONUS (incluidos)</h3>
                <p className="muted">
                  <strong>BONUS #1:</strong> Herramientas de IA exclusivas para
                  potenciar tu aprendizaje
                </p>
                <p className="muted">
                  <strong>BONUS #2:</strong> Un tracker de tu rutina para poder
                  realizar seguimiento a tus metas
                </p>

                <CouponCopy />

                <div className="small" style={{ marginTop: "10px" }}>
                  Aplica el cup├│n para ver el precio final de 347Çé¼.
                </div>

                <div className="hr"></div>

                <div className="cta-row">
                  <a
                    className="btn btn-primary"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592092"
                    target="_blank"
                    rel="noopener"
                    data-track="checkout_pay_once"
                  >
                    PAGAR 347Çé¼ (1 pago)
                  </a>
                  <a
                    className="btn"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592094"
                    target="_blank"
                    rel="noopener"
                    data-track="checkout_pay_3x"
                  >
                    PAGAR EN 3 PLAZOS (3├ù110Ôé¼)
                  </a>
                </div>

                <div className="small" style={{ marginTop: "10px" }}>
                  Los botones te llevan al checkout en Teachable.
                </div>
              </div>

              <div className="card">
                <h3>Tu selecci├│n actual</h3>
                <SelectedLanguageDisplay />
                <div className="hr"></div>
                <p className="muted">
                  Abajo tienes los 6 cursos. Cuando selecciones uno, lo resalto
                  para que sea imposible perderse.
                </p>
                <div className="hr"></div>
                <a
                  className="btn btn-primary"
                  href="#idiomas"
                  data-track="cta_checkout_to_languages"
                >
                  Elegir curso por idioma
                </a>

                <div className="hr"></div>

                <div
                  className="card"
                  style={{
                    background: "rgba(57,255,136,0.07)",
                    borderColor: "rgba(57,255,136,0.22)",
                  }}
                >
                  <h3 style={{ marginTop: 0 }}>Garant├¡a 7 d├¡as (sin riesgo)</h3>
                  <p className="muted">
                    Pru├®balo durante 7 d├¡as. Si no est├ís satisfecho, me escribes
                    y te devuelvo el dinero. Sin preguntas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IDIOMAS */}
        <section id="idiomas">
          <div className="container">
            <h2 className="section-title">Elige tu curso por idioma</h2>

            <div className="lang-cards" style={{ marginTop: "18px" }}>
              {/* EN */}
              <article className="card" id="idioma-en" data-lang-card="en">
                <div className="cover">
                  <div>
                    <div className="cover-title">INGL├ëS</div>
                    <div className="cover-sub">con el m├®todo i┬▓</div>
                  </div>
                  <div className="cover-flag" aria-hidden="true">
                    ­ƒç║­ƒç©
                  </div>
                </div>
                <ul className="list">
                  <li>Curso de Pronunciaci├│n para Hispanohablantes</li>
                  <li>Todos los tiempos verbales</li>
                  <li>
                    <strong>Mapa para entender a los nativos</strong>
                  </li>
                </ul>
                <div className="hr"></div>
                <p className="muted">
                  <strong>BONUS #1:</strong> Herramientas de IA exclusivas para
                  potenciar tu aprendizaje
                </p>
                <p className="muted">
                  <strong>BONUS #2:</strong> Un tracker de tu rutina para poder
                  realizar seguimiento a tus metas
                </p>
                <div className="cta-row" style={{ marginTop: "14px" }}>
                  <a
                    className="btn btn-primary"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592092"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_en_once"
                  >
                    Comprar 347Çé¼
                  </a>
                  <a
                    className="btn"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592094"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_en_3x"
                  >
                    Pagar en 3├ù110Ôé¼
                  </a>
                </div>
              </article>

              {/* DE */}
              <article className="card" id="idioma-de" data-lang-card="de">
                <div className="cover">
                  <div>
                    <div className="cover-title">ALEM├üN</div>
                    <div className="cover-sub">con el m├®todo i┬▓</div>
                  </div>
                  <div className="cover-flag" aria-hidden="true">
                    ­ƒç®­ƒç¬
                  </div>
                </div>
                <ul className="list">
                  <li>Curso de Pronunciaci├│n para Hispanohablantes</li>
                  <li>Todos los tiempos verbales</li>
                  <li>
                    <strong>An├ílisis completo de los casos gramaticales</strong>
                  </li>
                </ul>
                <div className="hr"></div>
                <p className="muted">
                  <strong>BONUS #1:</strong> Herramientas de IA exclusivas para
                  potenciar tu aprendizaje
                </p>
                <p className="muted">
                  <strong>BONUS #2:</strong> Un tracker de tu rutina para poder
                  realizar seguimiento a tus metas
                </p>
                <div className="cta-row" style={{ marginTop: "14px" }}>
                  <a
                    className="btn btn-primary"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592092"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_de_once"
                  >
                    Comprar 347Çé¼
                  </a>
                  <a
                    className="btn"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592094"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_de_3x"
                  >
                    Pagar en 3├ù110Ôé¼
                  </a>
                </div>
              </article>

              {/* FR */}
              <article className="card" id="idioma-fr" data-lang-card="fr">
                <div className="cover">
                  <div>
                    <div className="cover-title">FRANC├ëS</div>
                    <div className="cover-sub">con el m├®todo i┬▓</div>
                  </div>
                  <div className="cover-flag" aria-hidden="true">
                    ­ƒç½­ƒçÀ
                  </div>
                </div>
                <ul className="list">
                  <li>Curso de Pronunciaci├│n para Hispanohablantes</li>
                  <li>Todos los tiempos verbales</li>
                  <li>
                    <strong>
                      Aprovecha el espa├▒ol que sabes para aprender
                    </strong>
                  </li>
                </ul>
                <div className="hr"></div>
                <p className="muted">
                  <strong>BONUS #1:</strong> Herramientas de IA exclusivas para
                  potenciar tu aprendizaje
                </p>
                <p className="muted">
                  <strong>BONUS #2:</strong> Un tracker de tu rutina para poder
                  realizar seguimiento a tus metas
                </p>
                <div className="cta-row" style={{ marginTop: "14px" }}>
                  <a
                    className="btn btn-primary"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592092"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_fr_once"
                  >
                    Comprar 347Çé¼
                  </a>
                  <a
                    className="btn"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592094"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_fr_3x"
                  >
                    Pagar en 3├ù110Ôé¼
                  </a>
                </div>
              </article>

              {/* IT */}
              <article className="card" id="idioma-it" data-lang-card="it">
                <div className="cover">
                  <div>
                    <div className="cover-title">ITALIANO</div>
                    <div className="cover-sub">con el m├®todo i┬▓</div>
                  </div>
                  <div className="cover-flag" aria-hidden="true">
                    ­ƒç«­ƒç╣
                  </div>
                </div>
                <ul className="list">
                  <li>Curso de Pronunciaci├│n para Hispanohablantes</li>
                  <li>Todos los tiempos verbales</li>
                  <li>
                    <strong>
                      Aprovecha el espa├▒ol que sabes para aprender
                    </strong>
                  </li>
                </ul>
                <div className="hr"></div>
                <p className="muted">
                  <strong>BONUS #1:</strong> Herramientas de IA exclusivas para
                  potenciar tu aprendizaje
                </p>
                <p className="muted">
                  <strong>BONUS #2:</strong> Un tracker de tu rutina para poder
                  realizar seguimiento a tus metas
                </p>
                <div className="cta-row" style={{ marginTop: "14px" }}>
                  <a
                    className="btn btn-primary"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592092"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_it_once"
                  >
                    Comprar 347Çé¼
                  </a>
                  <a
                    className="btn"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592094"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_it_3x"
                  >
                    Pagar en 3├ù110Ôé¼
                  </a>
                </div>
              </article>

              {/* PT */}
              <article className="card" id="idioma-pt" data-lang-card="pt">
                <div className="cover">
                  <div>
                    <div className="cover-title">PORTUGU├ëS</div>
                    <div className="cover-sub">con el m├®todo i┬▓</div>
                  </div>
                  <div className="cover-flag" aria-hidden="true">
                    ­ƒçÁ­ƒç╣
                  </div>
                </div>
                <ul className="list">
                  <li>Curso de Pronunciaci├│n para Hispanohablantes</li>
                  <li>Todos los tiempos verbales</li>
                  <li>
                    <strong>
                      Aprovecha el espa├▒ol que sabes para aprender
                    </strong>
                  </li>
                </ul>
                <div className="hr"></div>
                <p className="muted">
                  <strong>BONUS #1:</strong> Herramientas de IA exclusivas para
                  potenciar tu aprendizaje
                </p>
                <p className="muted">
                  <strong>BONUS #2:</strong> Un tracker de tu rutina para poder
                  realizar seguimiento a tus metas
                </p>
                <div className="cta-row" style={{ marginTop: "14px" }}>
                  <a
                    className="btn btn-primary"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592092"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_pt_once"
                  >
                    Comprar 347Çé¼
                  </a>
                  <a
                    className="btn"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592094"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_pt_3x"
                  >
                    Pagar en 3├ù110Ôé¼
                  </a>
                </div>
              </article>

              {/* RU */}
              <article className="card" id="idioma-ru" data-lang-card="ru">
                <div className="cover">
                  <div>
                    <div className="cover-title">RUSO</div>
                    <div className="cover-sub">con el m├®todo i┬▓</div>
                  </div>
                  <div className="cover-flag" aria-hidden="true">
                    ­ƒçÀ­ƒç║
                  </div>
                </div>
                <ul className="list">
                  <li>Curso de Pronunciaci├│n para Hispanohablantes</li>
                  <li>Todos los tiempos verbales</li>
                  <li>
                    <strong>An├ílisis completo de los casos gramaticales</strong>
                  </li>
                </ul>
                <div className="hr"></div>
                <p className="muted">
                  <strong>BONUS #1:</strong> Herramientas de IA exclusivas para
                  potenciar tu aprendizaje
                </p>
                <p className="muted">
                  <strong>BONUS #2:</strong> Un tracker de tu rutina para poder
                  realizar seguimiento a tus metas
                </p>
                <div className="cta-row" style={{ marginTop: "14px" }}>
                  <a
                    className="btn btn-primary"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592092"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_ru_once"
                  >
                    Comprar 347Çé¼
                  </a>
                  <a
                    className="btn"
                    href="https://pedro-rodriguez-trigo-s-school.teachable.com/purchase?product_id=6592094"
                    target="_blank"
                    rel="noopener"
                    data-track="buy_ru_3x"
                  >
                    Pagar en 3├ù110Ôé¼
                  </a>
                </div>
              </article>
            </div>

            <div className="card" style={{ marginTop: "18px" }}>
              <h3 style={{ marginTop: 0 }}>Garant├¡a 7 d├¡as (sin riesgo)</h3>
              <p className="muted">
                Pru├®balo durante 7 d├¡as. Si no est├ís satisfecho, me escribes y
                te devuelvo el dinero. Sin preguntas.
              </p>
            </div>
          </div>
        </section>

        {/* QUI├ëN SOY */}
        <section id="quien-soy">
          <div className="container">
            <h2 className="section-title">Qui├®n soy</h2>
            <div className="grid-2" style={{ marginTop: "16px" }}>
              <div className="card">
                <h3>Pedro (placeholder)</h3>
                <p className="muted">
                  Soy Pedro, y en los ├║ltimos a├▒os he aprendido 7+ idiomas. Hoy
                  te ense├▒o el m├®todo exacto que uso para pasar de cero a
                  conversaci├│n en 90 d├¡as.
                </p>
                <div className="hr"></div>
                <div className="grid-3">
                  <div
                    className="card"
                    style={{
                      padding: "14px",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <strong>Instagram</strong>
                    <div className="small">(n├║mero aqu├¡)</div>
                  </div>
                  <div
                    className="card"
                    style={{
                      padding: "14px",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <strong>YouTube</strong>
                    <div className="small">(n├║mero aqu├¡)</div>
                  </div>
                  <div
                    className="card"
                    style={{
                      padding: "14px",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <strong>TikTok</strong>
                    <div className="small">(n├║mero aqu├¡)</div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="hero-media"
                  style={{ height: "320px" }}
                  role="img"
                  aria-label="Foto de Pedro"
                ></div>
                <div className="small" style={{ marginTop: "12px" }}>
                  Si prefieres, reemplaza esto por el carrusel original de tu
                  landing.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <div className="container">
            <h2 className="section-title">FAQs</h2>
            <div className="grid-2" style={{ marginTop: "16px" }}>
              <details open>
                <summary>
                  ┬┐Voy a aprender un idioma fluidamente haciendo el curso?
                </summary>
                <p>
                  Vas a construir una base s├│lida y conversacional en 90 d├¡as si
                  sigues la rutina (30ÔÇô60 min/d├¡a). La fluidez total depende de
                  tu constancia y de seguir us├índolo.
                </p>
              </details>
              <details>
                <summary>
                  ┬┐El acceso del curso es para toda la vida?
                </summary>
                <p>
                  Define aqu├¡ tu pol├¡tica real (recomendado: &quot;acceso
                  extendido&quot; o &quot;mientras el curso exista&quot;). En
                  esta versi├│n se elimin├│ &quot;1 a├▒o&quot; seg├║n las specs.
                </p>
              </details>
              <details>
                <summary>┬┐Necesito alg├║n conocimiento previo?</summary>
                <p>
                  No. Puedes empezar desde cero. Si eres false beginner, te
                  ayuda a├║n m├ís porque ordena lo que ya &quot;viste&quot; sin
                  resultados.
                </p>
              </details>
              <details>
                <summary>┬┐Cu├ínto necesito trabajar por d├¡a?</summary>
                <p>
                  Entre 30 y 60 minutos al d├¡a durante 3 meses. Lo importante es
                  la constancia, no hacerlo &quot;perfecto&quot;.
                </p>
              </details>
              <details>
                <summary>
                  ┬┐Qu├® pasa si me quedo atascado o pierdo motivaci├│n?
                </summary>
                <p>
                  Tienes comunidad y una rutina clara. Adem├ís, el tracker y las
                  herramientas de IA te ayudan a recuperar inercia r├ípidamente.
                </p>
              </details>
              <details>
                <summary>┬┐Ense├▒as gram├ítica?</summary>
                <p>
                  S├¡, pero como herramienta: la gram├ítica que necesitas para
                  hablar en la vida real, no teor├¡a infinita sin aplicaci├│n.
                </p>
              </details>
            </div>

            <div className="card" style={{ marginTop: "18px" }}>
              <h3 style={{ marginTop: 0 }}>┬┐A├║n tienes dudas?</h3>
              <p className="muted">
                Escr├¡beme por WhatsApp y te responder├® personalmente.
              </p>
              <div className="cta-row" style={{ marginTop: "12px" }}>
                <a
                  className="btn btn-primary"
                  href="https://wa.me/message/KHQEYGOHFHNTE1"
                  target="_blank"
                  rel="noopener"
                  data-track="whatsapp_click"
                >
                  Contactar por WhatsApp
                </a>
                <span className="small">

                </span>
              </div>
              <div className="small" style={{ marginTop: "10px" }}>
                Respondo personalmente a todos los mensajes ­ƒÆ¼
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="grid-3">
            <div>
              <strong>PedroPol├¡glota</strong>
              <div className="small">┬® 2026 Todos los derechos reservados</div>
            </div>
            <div>
              <FooterLinks />
            </div>
            <div>
              <div className="small">
                Anal├¡tica: a├▒ade tu pixel/GA4 donde prefieras.
              </div>
              <div className="small">
                Eventos JS b├ísicos incluidos en consola.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

