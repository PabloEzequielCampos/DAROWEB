import React from 'react';
import { Zap, Flame, Sparkles, BookOpen, Search } from 'lucide-react';

export function AnimeNavbar({ activeCategory, onSelectCategory }) {
  return (
    <header className="sticky top-11 z-40 w-full bg-[#0d071d]/90 backdrop-blur-xl border-b border-pink-500/20 shadow-lg shadow-pink-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between">
        {/* Anime Brand */}
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-400 rounded-xl blur-sm opacity-80 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative h-11 w-11 rounded-xl bg-[#0e0722] border border-pink-400/50 flex items-center justify-center">
              <Zap className="w-6 h-6 text-pink-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-manga text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-300 to-cyan-300">
                DARO
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/40 font-mono font-bold tracking-widest uppercase">
                ダロ • COMICS
              </span>
            </div>
            <p className="text-[11px] text-purple-300/80 font-medium tracking-wider">
              マンガ＆イラストレーション • MANGA HUB
            </p>
          </div>
        </div>

        {/* Anime Nav Links */}
        <nav className="hidden md:flex items-center gap-2 bg-[#170e30]/80 p-1.5 rounded-xl border border-purple-500/20">
          <button
            onClick={() => onSelectCategory('Todos')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeCategory === 'Todos'
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30'
                : 'text-purple-300 hover:text-white hover:bg-purple-900/40'
            }`}
          >
            🔥 Todo el Catálogo
          </button>
          <button
            onClick={() => onSelectCategory('Cómics')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeCategory === 'Cómics'
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30'
                : 'text-purple-300 hover:text-white hover:bg-purple-900/40'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            Capítulos Manga
          </button>
          <button
            onClick={() => onSelectCategory('Ilustración')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeCategory === 'Ilustración'
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/30'
                : 'text-purple-300 hover:text-white hover:bg-purple-900/40'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            Ilustración Pop
          </button>
        </nav>

        {/* Live Status Badge */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#190f33] border border-purple-500/30 text-xs text-purple-200">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-ping"></span>
            <span className="font-mono text-[11px] font-bold text-cyan-300">ON AIR</span>
          </div>
          <button
            onClick={() => alert('¡Suscripción a alertas de nuevos capítulos manga activada!')}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white shadow-md shadow-pink-600/30 transition-all flex items-center gap-1.5"
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Seguir</span>
          </button>
        </div>
      </div>
    </header>
  );
}
