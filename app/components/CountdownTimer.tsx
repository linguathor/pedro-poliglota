"use client";

import { useEffect, useState } from "react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    // Target: Sunday Jan 18, 2026, 23:59 in America/Asuncion
    const closingDate = new Date("2026-01-19T02:59:00.000Z"); // UTC equivalent

    function tick() {
      const now = new Date();
      const totalSeconds = Math.floor(
        (closingDate.getTime() - now.getTime()) / 1000
      );

      if (totalSeconds <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true,
        });
        return;
      }

      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        expired: false,
      });
    }

    tick();
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 border-2 border-red-300 rounded-full">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <span className="text-sm font-black text-red-700 uppercase tracking-wide">
            Oferta de Lanzamiento
          </span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 px-4">
          Cierre de plazas
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl px-4">
          <span className="font-bold text-slate-900">Domingo 18 de enero — 23:59</span> (hora de Paraguay)
        </p>
        <p className="text-sm sm:text-base text-slate-500 px-4">
          Cuando se cierre, se acabó el precio de lanzamiento.
        </p>
      </div>

      {/* Countdown Display */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-6 w-full max-w-2xl px-2 sm:px-4">
        <div className="group">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-6 shadow-xl shadow-blue-500/30 border-2 border-blue-400/50 transform transition-all duration-300 hover:scale-105 md:hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50">
            <div className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-black text-white text-center mb-0.5 sm:mb-1 md:mb-2 tabular-nums">
              {pad2(timeLeft.days)}
            </div>
            <div className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-blue-100 text-center uppercase tracking-wider">
              Días
            </div>
          </div>
        </div>

        <div className="group">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-6 shadow-xl shadow-purple-500/30 border-2 border-purple-400/50 transform transition-all duration-300 hover:scale-105 md:hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
            <div className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-black text-white text-center mb-0.5 sm:mb-1 md:mb-2 tabular-nums">
              {pad2(timeLeft.hours)}
            </div>
            <div className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-purple-100 text-center uppercase tracking-wider">
              Horas
            </div>
          </div>
        </div>

        <div className="group">
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-6 shadow-xl shadow-orange-500/30 border-2 border-orange-400/50 transform transition-all duration-300 hover:scale-105 md:hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50">
            <div className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-black text-white text-center mb-0.5 sm:mb-1 md:mb-2 tabular-nums">
              {pad2(timeLeft.minutes)}
            </div>
            <div className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-orange-100 text-center uppercase tracking-wider">
              Min
            </div>
          </div>
        </div>

        <div className="group">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-6 shadow-xl shadow-green-500/30 border-2 border-green-400/50 transform transition-all duration-300 hover:scale-105 md:hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50">
            <div className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-black text-white text-center mb-0.5 sm:mb-1 md:mb-2 tabular-nums">
              {pad2(timeLeft.seconds)}
            </div>
            <div className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold text-green-100 text-center uppercase tracking-wider">
              Seg
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex flex-col items-center gap-3 md:gap-4 w-full px-4">
        <a
          href="#checkout"
          className="inline-flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white px-6 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 rounded-full font-black text-sm sm:text-base md:text-lg lg:text-xl hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group animate-pulse w-full sm:w-auto max-w-md touch-manipulation"
        >
          <span className="relative z-10">🔥 RESERVAR MI PLAZA AHORA</span>
          <svg className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
        
        <div 
          className={`inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full ${
            timeLeft.expired 
              ? "bg-red-100 border-2 border-red-300 text-red-700" 
              : "bg-green-100 border-2 border-green-300 text-green-700"
          }`}
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="text-sm font-bold">
            {timeLeft.expired ? "⛔ Plazas cerradas" : "⏳ Contando en tiempo real (Paraguay)"}
          </span>
        </div>
      </div>
    </div>
  );
}
