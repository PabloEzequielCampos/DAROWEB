import React from 'react';
import { Newspaper, Feather, Bookmark, Coffee, BookOpen } from 'lucide-react';

export function ClassicNavbar({ activeCategory, onSelectCategory }) {
  return (
    <header className="w-full bg-[#fdfbf7] text-[#1a1614] border-b-4 border-[#1a1614] shadow-sm">
      {/* Top Banner Ticker */}
      <div className="bg-[#1a1614] text-[#f7f3ea] px-4 py-1.5 text-xs font-typewriter flex items-center justify-between tracking-wider">
        <div className="flex items-center gap-2">
          <span className="bg-[#ffd166] text-black px-1.5 py-0.2 font-bold text-[10px]">
            EDICIÓN PERIÓDICA
          </span>
          <span>VOL. 1 — FECHA: 26 DE OCTUBRE DE 2026</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px]">
          <span>DISTRIBUCIÓN LIBRE & INDEPENDIENTE</span>
          <span>•</span>
          <span>TIRAS CÓMICAS Y DIBUJO TRADICIONAL</span>
        </div>
      </div>

      {/* Main Masthead Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center border-b-2 border-dashed border-[#1a1614]/40">
        <h1 className="font-classic text-4xl sm:text-6xl font-bold tracking-tight text-[#1a1614] uppercase">
          THE DARO CHRONICLES
        </h1>
        <p className="font-typewriter text-xs sm:text-sm text-[#4a4239] mt-1 tracking-widest uppercase">
          — La Gaceta Semanal de Cómics, Viñetas e Ilustración Gráfica —
        </p>
      </div>

      {/* Retro Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-xs font-bold font-typewriter">
        <div className="flex items-center gap-3 overflow-x-auto">
          <button
            onClick={() => onSelectCategory('Todos')}
            className={`px-3 py-1 border-2 border-[#1a1614] transition-all ${
              activeCategory === 'Todos'
                ? 'bg-[#1a1614] text-white shadow-[2px_2px_0px_0px_#1a1614]'
                : 'bg-white hover:bg-[#ffd166] text-[#1a1614]'
            }`}
          >
            [1] Portada Principal
          </button>
          <button
            onClick={() => onSelectCategory('Cómics')}
            className={`px-3 py-1 border-2 border-[#1a1614] transition-all flex items-center gap-1.5 ${
              activeCategory === 'Cómics'
                ? 'bg-[#1a1614] text-white shadow-[2px_2px_0px_0px_#1a1614]'
                : 'bg-white hover:bg-[#ffd166] text-[#1a1614]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            [2] Tiras Cómicas
          </button>
          <button
            onClick={() => onSelectCategory('Ilustración')}
            className={`px-3 py-1 border-2 border-[#1a1614] transition-all flex items-center gap-1.5 ${
              activeCategory === 'Ilustración'
                ? 'bg-[#1a1614] text-white shadow-[2px_2px_0px_0px_#1a1614]'
                : 'bg-white hover:bg-[#ffd166] text-[#1a1614]'
            }`}
          >
            <Feather className="w-3.5 h-3.5" />
            [3] Cuaderno de Arte
          </button>
        </div>

        <div className="hidden md:flex items-center gap-3 text-xs text-[#5a5247]">
          <span className="flex items-center gap-1">
            <Coffee className="w-3.5 h-3.5" /> Lectura sin algoritmos
          </span>
        </div>
      </div>
    </header>
  );
}
