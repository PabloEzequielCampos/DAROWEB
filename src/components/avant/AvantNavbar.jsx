import React from 'react';
import { Compass, Sparkles, Command, ArrowUpRight } from 'lucide-react';

export function AvantNavbar({ activeCategory, onSelectCategory }) {
  return (
    <header className="sticky top-11 z-40 w-full avant-liquid-glass border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3.5 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-lime-400 via-emerald-400 to-teal-500 p-0.5 shadow-lg shadow-lime-500/10 flex items-center justify-center">
            <div className="w-full h-full bg-[#08080c] rounded-[14px] flex items-center justify-center">
              <span className="font-syne font-extrabold text-lime-400 text-base">D.</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-syne font-extrabold text-xl text-white tracking-tight">
                DARO<span className="text-lime-400">STUDIO</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-lime-400/10 text-lime-300 border border-lime-400/30">
                2026
              </span>
            </div>
            <p className="text-[11px] font-mono text-zinc-400 tracking-wider">
              GRAPHIC FICTION // VISUAL LAB
            </p>
          </div>
        </div>

        {/* Floating Capsule Nav */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl">
          <button
            onClick={() => onSelectCategory('Todos')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === 'Todos'
                ? 'bg-lime-400 text-black shadow-md shadow-lime-400/30'
                : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            Índice Global
          </button>
          <button
            onClick={() => onSelectCategory('Cómics')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === 'Cómics'
                ? 'bg-lime-400 text-black shadow-md shadow-lime-400/30'
                : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            Series & Cómics
          </button>
          <button
            onClick={() => onSelectCategory('Ilustración')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === 'Ilustración'
                ? 'bg-lime-400 text-black shadow-md shadow-lime-400/30'
                : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            Láminas de Arte
          </button>
        </nav>

        {/* Spatial Action */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping"></span>
            <span>NEXT GEN</span>
          </div>
          <button
            onClick={() => alert('Modo Visor Espacial 2026 preparado para despliegue')}
            className="px-3.5 py-1.5 rounded-xl text-xs font-syne font-bold bg-white text-black hover:bg-lime-400 transition-all flex items-center gap-1.5 shadow-lg shadow-white/5"
          >
            <span>Conectar</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
