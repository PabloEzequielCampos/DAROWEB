import React from 'react';
import { Search, X, Zap, Sparkles, Hash } from 'lucide-react';

export function AnimeFilterBar({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onSelectCategory,
  availableTags,
  selectedTag,
  onSelectTag,
  totalResults,
  onResetFilters,
}) {
  const hasActiveFilters = searchQuery.trim() !== '' || selectedCategory !== 'Todos' || selectedTag !== null;

  return (
    <div className="space-y-4 mb-8">
      {/* Search Bar & Results Counter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por título, waifu, mecha, autor..."
            className="w-full pl-10 pr-10 py-3 rounded-2xl bg-[#140b2b] border border-pink-500/30 text-sm text-pink-100 placeholder-purple-400/60 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/40 transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-purple-400 hover:text-pink-300 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1b0f3b] border border-purple-500/30 text-purple-200">
            <Zap className="w-3.5 h-3.5 text-yellow-400" />
            <span>
              <strong className="text-white font-bold">{totalResults}</strong> Obras en catálogo
            </span>
          </div>

          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="px-3 py-1.5 rounded-xl bg-pink-950/60 hover:bg-pink-900/80 text-pink-300 border border-pink-500/40 transition-colors flex items-center gap-1 font-bold text-xs"
            >
              <X className="w-3.5 h-3.5" />
              Limpiar
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => onSelectCategory(cat.name)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white shadow-lg shadow-pink-500/40 scale-105'
                  : 'bg-[#150c2e] text-purple-300 hover:text-pink-200 hover:bg-[#201344] border border-purple-500/20'
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                  isSelected ? 'bg-black/30 text-white' : 'bg-purple-950 text-purple-300'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tags Anime */}
      {availableTags && availableTags.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap pt-1 text-xs">
          <span className="text-pink-400 font-bold flex items-center gap-1 text-[11px] uppercase tracking-wider">
            <Hash className="w-3 h-3" /> Tags:
          </span>
          {availableTags.slice(0, 10).map((tag) => {
            const isTagSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => onSelectTag(isTagSelected ? null : tag)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                  isTagSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30'
                    : 'bg-[#150c2e] text-purple-300 hover:text-cyan-300 border border-purple-500/20 hover:border-cyan-500/40'
                }`}
              >
                #{tag}
                {isTagSelected && <X className="inline-block w-3 h-3 ml-1" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
