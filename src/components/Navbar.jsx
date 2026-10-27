import React from 'react';
import { Palette, BookOpen, Sparkles, Compass } from 'lucide-react';

export function Navbar({ activeCategory, onSelectCategory }) {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-canvas-700/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-accent to-purple-500 flex items-center justify-center shadow-lg shadow-accent/20">
            <Palette className="w-5 h-5 text-white" />
          </div>
          <div>
            <a href="/" className="font-display font-bold text-xl tracking-wider text-white hover:text-accent-light transition-colors">
              DARO<span className="text-accent">.</span>
            </a>
            <p className="text-xs text-ink-400 font-medium tracking-widest uppercase">
              Cómics & Ilustración
            </p>
          </div>
        </div>

        {/* Quick section links */}
        <nav className="hidden md:flex items-center gap-1 bg-canvas-800/80 p-1 rounded-full border border-canvas-700/60">
          <button
            onClick={() => onSelectCategory('Todos')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeCategory === 'Todos'
                ? 'bg-accent text-white shadow-sm'
                : 'text-ink-400 hover:text-ink-100 hover:bg-canvas-700/50'
            }`}
          >
            Galería General
          </button>
          <button
            onClick={() => onSelectCategory('Cómics')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeCategory === 'Cómics'
                ? 'bg-accent text-white shadow-sm'
                : 'text-ink-400 hover:text-ink-100 hover:bg-canvas-700/50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Cómics
          </button>
          <button
            onClick={() => onSelectCategory('Ilustración')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeCategory === 'Ilustración'
                ? 'bg-accent text-white shadow-sm'
                : 'text-ink-400 hover:text-ink-100 hover:bg-canvas-700/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Ilustración
          </button>
        </nav>

        {/* Production-ready badge */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-800 border border-canvas-700 text-xs text-ink-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Static MVP</span>
          </div>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              alert('Página de contacto / portfolio independiente. Preparado para alojar en tu propio VPS o servidor Nginx/Caddy.');
            }}
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-canvas-800 hover:bg-canvas-700 text-ink-100 border border-canvas-700 transition-colors"
          >
            Acerca de
          </a>
        </div>
      </div>
    </header>
  );
}
