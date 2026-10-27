import React from 'react';
import { Flame, Sparkles, Zap, Heart } from 'lucide-react';

export function AnimeHero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-8 px-4 sm:px-6 lg:px-8 border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold mb-3 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-yellow-400 animate-bounce" />
              <span>MANGA & ART SHOWCASE • NEW RELEASES 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-manga tracking-tight text-white leading-none">
              HISTORIAS Y ARTE{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-300 to-cyan-400">
                A TODO COLOR
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-purple-200/80 max-w-2xl leading-relaxed font-anime font-medium">
              Explora capítulos de cómic cyberpunk, tiras cómicas espaciales y galerías de arte digital con estética anime de alto impacto.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-[#170e30]/90 p-4 rounded-2xl border border-purple-500/30 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-extrabold text-lg">
              🔥
            </div>
            <div>
              <p className="text-xs font-bold text-pink-400 uppercase tracking-wider">
                Capítulo en Tendencia
              </p>
              <p className="text-sm font-bold text-white">Cyber Ronin: Ep. 01</p>
              <p className="text-[11px] text-purple-300">Tinta digital & 6 páginas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
