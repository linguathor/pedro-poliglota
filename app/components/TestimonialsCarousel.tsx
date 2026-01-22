"use client";

import React from "react";

const testimonials = [
  {
    text: "Llevaba aprendiendo alemán durante un año. Había estudiado muchas palabras, la gramática… pero no podía hablar con fluidez. Sin embargo, desde que entré en el curso mi nivel ha mejorado muchísimo.",
    name: "José Antonio",
    course: "alumno de Alemán",
    videoId: "k_5dWjOEUMs",
  },
  {
    text: "En 2 meses he conseguido empezar a hablar y entender un idioma tan desafiante como es el polaco. Me encanta cómo Pedro explica conceptos difíciles de forma sencilla.",
    name: "Ángel",
    course: "alumno de Polaco",
    videoId: "mFb1aCb3CpA",
  },
  {
    text: "Soy médico y hasta trabajando a tiempo completo he conseguido avanzar aprendiendo alemán. El método de Pedro realmente funciona, lo recomiendo a todos!",
    name: "Josep María",
    course: "alumno de Alemán",
    videoId: "crGHX08D5lE",
  },
  {
    text: "El enfoque de Pedro es completamente contrario al tradicional, totalmente práctico. Vivo en Suiza y fue diferencial poder expresarme desde el primer momento.",
    name: "Juan Carlos",
    course: "alumno de Alemán",
    videoId: "--bIndt5cuw",
  },
  {
    text: "Trabajo en el sector tecnológico y el método de Pedro revolucionó la manera en la que entendía el inglés y me ayudó mucho a prepararme para entrevistas de trabajo.",
    name: "Carlos",
    course: "alumno de Inglés",
    videoId: "OxG31Yhfg8s",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full max-w-2xl mx-auto flex flex-col gap-10 py-8">
      {testimonials.map((t, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center bg-background rounded-xl shadow-md px-4 py-6 gap-4"
        >
          <div className="w-full flex justify-center">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-900/5 border border-slate-100 max-w-md w-full">
              <div className="aspect-[9/16] relative bg-slate-900">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${t.videoId}`}
                  title={`Testimonial from ${t.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="absolute inset-0 pointer-events-none border-4 border-white/10 rounded-3xl" />
            </div>
          </div>
          <blockquote className="text-lg md:text-xl text-center font-medium">“{t.text}”</blockquote>
          <div className="text-sm text-muted-foreground text-center">
            <span className="font-semibold">{t.name}</span> – {t.course}
          </div>
        </div>
      ))}
    </section>
  );
}

