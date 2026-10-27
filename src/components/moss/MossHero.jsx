import React, { useState } from 'react';
import { Sprout, CloudRain, Heart, Sparkles, Footprints } from 'lucide-react';

export function MossHero() {
  const [grassTouched, setGrassTouched] = useState(14);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const cozyQuotes = [
    'Leíste 3 viñetas bajo la manta. Pasto tocado mentalmente.',
    'Pisar tierra húmeda después de terminar un buen capítulo cura el alma.',
    'Ventana empañada, olor a eucalipto y 40 páginas por delante.',
    'No hay apuro: el mundo exterior puede esperar mientras pasás de página.',
  ];

  const handleTouchGrass = () => {
    setGrassTouched((prev) => Math.min(100, prev + 15));
    setQuoteIndex((prev) => (prev + 1) % cozyQuotes.length);
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-8 px-4 sm:px-6 lg:px-8 border-b border-[#2d4234]/60">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e3025] border border-[#3b5944] text-emerald-300 text-xs font-fraunces mb-3">
              <Sprout className="w-3.5 h-3.5 text-emerald-400" />
              <span>REFUGIO DEL LECTOR ERMITAÑO // AIRE LIBRE & TINTA</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-fraunces font-bold tracking-tight text-[#f0f7f2] leading-tight">
              Vivir encerrado leyendo,{' '}
              <span className="italic text-emerald-300 font-normal">
                pero sin olvidar tocar pasto.
              </span>
            </h1>

            <p className="mt-3 text-sm sm:text-base text-[#9ab5a2] max-w-2xl leading-relaxed font-sans">
              Una galería vegetal de cómics independientes, estudios de anatomía botánica y relatos ilustrados. Diseñado para desconectar del ruido algorítmico y reconectar con la calma.
            </p>
          </div>

          {/* Widget Interactivo: "Medidor de Tocar Pasto" */}
          <div className="w-full lg:w-auto bg-[#17251d] p-4 rounded-3xl border border-[#2d4234] shadow-xl flex flex-col gap-3 min-w-[280px]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-fraunces font-bold text-[#d8eadc] flex items-center gap-1.5">
                <Footprints className="w-4 h-4 text-emerald-400" />
                Pasto Tocado Hoy
              </span>
              <span className="font-mono text-xs font-bold text-emerald-300">
                {grassTouched}%
              </span>
            </div>

            {/* Barra de progreso */}
            <div className="w-full h-2.5 bg-[#0f1712] rounded-full overflow-hidden border border-[#2d4234]">
              <div
                className="h-full bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${grassTouched}%` }}
              />
            </div>

            <p className="text-[11px] text-[#8ca895] italic font-fraunces line-clamp-2">
              "{cozyQuotes[quoteIndex]}"
            </p>

            <button
              onClick={handleTouchGrass}
              className="w-full py-2 px-3 rounded-xl bg-[#294232] hover:bg-[#34543f] text-emerald-200 border border-[#3f654d] text-xs font-fraunces font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
            >
              <Sprout className="w-3.5 h-3.5" />
              <span>Tocar un poco de pasto (+15%)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
