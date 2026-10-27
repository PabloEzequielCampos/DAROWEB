import React from 'react';
import { Palette, Zap, Newspaper, Compass, Sprout, Check } from 'lucide-react';

export const THEMES = {
  DESIGN_1: 'design-1',
  DESIGN_2_ANIME: 'design-2-anime',
  DESIGN_3_CLASSIC: 'design-3-classic',
  DESIGN_4_AVANT: 'design-4-avant',
  DESIGN_5_MOSS: 'design-5-moss',
};

export function DesignSwitcher({ activeTheme, onSelectTheme }) {
  const options = [
    {
      id: THEMES.DESIGN_1,
      label: 'DISEÑO 1',
      subtitle: 'Dark Studio (Original)',
      icon: Palette,
      color: 'from-indigo-600 to-violet-700',
      activeBorder: 'border-indigo-400 text-white bg-indigo-950/80 shadow-indigo-500/20',
    },
    {
      id: THEMES.DESIGN_2_ANIME,
      label: 'DISEÑO 2',
      subtitle: 'Anime Moderno (Neon Pop)',
      icon: Zap,
      color: 'from-pink-500 to-purple-600',
      activeBorder: 'border-pink-500 text-white bg-pink-950/80 shadow-pink-500/20',
    },
    {
      id: THEMES.DESIGN_3_CLASSIC,
      label: 'DISEÑO 3',
      subtitle: 'Classic Blog (Old School)',
      icon: Newspaper,
      color: 'from-amber-500 to-yellow-600',
      activeBorder: 'border-amber-400 text-amber-200 bg-amber-950/80 shadow-amber-500/20',
    },
    {
      id: THEMES.DESIGN_4_AVANT,
      label: 'DISEÑO 4',
      subtitle: 'Neo 2026 (Avant-Garde)',
      icon: Compass,
      color: 'from-lime-400 to-emerald-500 text-black',
      activeBorder: 'border-lime-400 text-lime-300 bg-lime-950/70 shadow-lime-500/20',
    },
    {
      id: THEMES.DESIGN_5_MOSS,
      label: 'DISEÑO 5',
      subtitle: 'Musgo & Pasto (Cozy Reader)',
      icon: Sprout,
      color: 'from-emerald-600 to-teal-800',
      activeBorder: 'border-emerald-400 text-emerald-200 bg-emerald-950/70 shadow-emerald-500/20',
    },
  ];

  return (
    <div className="w-full bg-[#07070b]/95 backdrop-blur-md border-b border-white/10 py-2 px-3 sm:px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest font-mono text-zinc-400 font-bold bg-white/5 px-2 py-0.5 rounded border border-white/10">
            Selector de Conceptos
          </span>
          <span className="text-xs text-zinc-300 hidden xl:inline">
            5 estilos visuales listos para producción:
          </span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
          {options.map((opt) => {
            const isActive = activeTheme === opt.id;
            const Icon = opt.icon;
            return (
              <button
                key={opt.id}
                onClick={() => onSelectTheme(opt.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? `${opt.activeBorder} shadow-lg ring-1 ring-white/10 scale-102`
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white border-white/[0.08] hover:bg-white/[0.07]'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded flex items-center justify-center bg-gradient-to-tr ${opt.color} shadow-sm`}
                >
                  <Icon className="w-2.5 h-2.5" />
                </div>
                <div className="text-left flex items-center gap-1">
                  <span className="tracking-wide font-bold">{opt.label}</span>
                  <span className="text-[10px] opacity-75 hidden sm:inline font-normal">
                    {opt.subtitle.split(' ')[0]}
                  </span>
                </div>
                {isActive && <Check className="w-3.5 h-3.5 text-emerald-400" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
