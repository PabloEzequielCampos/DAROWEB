import React from 'react';
import { Sprout, CloudRain, Coffee, Trees, BookOpen } from 'lucide-react';

export function MossNavbar({ activeCategory, onSelectCategory }) {
  return (
    <header className="sticky top-11 z-40 w-full bg-[#121c16]/90 backdrop-blur-xl border-b border-[#2d4234]/80 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#1b2b22] border border-[#3b5945] flex items-center justify-center text-emerald-400 shadow-inner">
            <Sprout className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-fraunces font-bold text-2xl text-[#edf6f0] tracking-tight">
                Daro<span className="text-emerald-400">.</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-600/40 font-mono">
                Madriguera & Pasto
              </span>
            </div>
            <p className="text-[11px] text-[#8ca895] font-fraunces italic">
              Cómics para leer con lluvia y pies descalzos
            </p>
          </div>
        </div>

        {/* Categories Capsule */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-2xl bg-[#18261e] border border-[#2d4234]">
          <button
            onClick={() => onSelectCategory('Todos')}
            className={`px-4 py-1.5 rounded-xl text-xs font-fraunces font-semibold transition-all ${
              activeCategory === 'Todos'
                ? 'bg-[#2f4f3c] text-emerald-100 shadow-sm'
                : 'text-[#8ca895] hover:text-[#edf6f0] hover:bg-[#1e3026]'
            }`}
          >
            🌿 Todo el Refugio
          </button>
          <button
            onClick={() => onSelectCategory('Cómics')}
            className={`px-4 py-1.5 rounded-xl text-xs font-fraunces font-semibold transition-all flex items-center gap-1.5 ${
              activeCategory === 'Cómics'
                ? 'bg-[#2f4f3c] text-emerald-100 shadow-sm'
                : 'text-[#8ca895] hover:text-[#edf6f0] hover:bg-[#1e3026]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            Tiras & Capítulos
          </button>
          <button
            onClick={() => onSelectCategory('Ilustración')}
            className={`px-4 py-1.5 rounded-xl text-xs font-fraunces font-semibold transition-all flex items-center gap-1.5 ${
              activeCategory === 'Ilustración'
                ? 'bg-[#2f4f3c] text-emerald-100 shadow-sm'
                : 'text-[#8ca895] hover:text-[#edf6f0] hover:bg-[#1e3026]'
            }`}
          >
            <Trees className="w-3.5 h-3.5 text-emerald-400" />
            Láminas de Bosque
          </button>
        </nav>

        {/* Ambient indicator */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#18261e] border border-[#2d4234] text-xs text-[#a3c2ad]">
            <CloudRain className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-fraunces italic">Lluvia en ventana</span>
          </div>
          <button
            onClick={() => alert('¡Preparaste una taza de té caliente! Disfrutá la lectura sin prisa.')}
            className="px-3.5 py-1.5 rounded-xl text-xs font-fraunces font-bold bg-[#294232] hover:bg-[#34543f] text-emerald-100 border border-[#3f654d] transition-all flex items-center gap-1.5"
          >
            <Coffee className="w-3.5 h-3.5 text-amber-300" />
            <span>Té Caliente</span>
          </button>
        </div>
      </div>
    </header>
  );
}
