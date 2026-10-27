import React from 'react';
import { Sparkles, Terminal, Layers, ArrowUpRight, Cpu } from 'lucide-react';

export function AvantHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-10 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-300 text-xs font-mono mb-4">
              <Cpu className="w-3.5 h-3.5 text-lime-400" />
              <span>AVANT-GARDE ARCHIVE 2026 // VISUAL COMPUTING</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-syne font-extrabold tracking-tight text-white leading-tight">
              NARRATIVA GRÁFICA{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-emerald-200 to-teal-300">
                DE ALTA PRECISIÓN.
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
              Curaduría visual de viñetas y mundos ilustrados. Interfaz líquida de baja latencia diseñada para la lectura inmersiva y reproducción fiel del trazo.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/[0.03] backdrop-blur-xl p-4 rounded-2xl border border-white/[0.08]">
            <div className="text-right">
              <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                Catálogo Indexado
              </p>
              <p className="text-2xl font-syne font-bold text-lime-300">8 Obras</p>
              <p className="text-[10px] text-zinc-400">100% Renderizado Nativo</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400">
              <Layers className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
