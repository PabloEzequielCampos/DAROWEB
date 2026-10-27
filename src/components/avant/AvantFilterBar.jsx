import React from 'react';
import { Search, X, SlidersHorizontal, Tag as TagIcon, Sparkles } from 'lucide-react';

export function AvantFilterBar({
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
      {/* Search Capsule */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por término visual, atmósfera, personaje..."
            className="w-full pl-11 pr-12 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.1] text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-lime-400 focus:bg-white/[0.06] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs font-mono">
          <span className="text-zinc-400">
            RESULTADOS: <strong className="text-lime-300 font-bold">{totalResults}</strong>
          </span>
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-lime-300 border border-lime-400/30 transition-all flex items-center gap-1 text-[11px]"
            >
              <X className="w-3 h-3" />
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Categories Capsules */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => onSelectCategory(cat.name)}
              className={`px-4 py-2 rounded-xl text-xs font-syne font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-lime-400 text-black shadow-lg shadow-lime-400/20 font-bold'
                  : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                  isSelected ? 'bg-black/20 text-black' : 'bg-white/5 text-zinc-400'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tags Chips */}
      {availableTags && availableTags.length > 0 && (
        <div className="flex items-center gap-1.5 flex-wrap pt-1 text-xs">
          <span className="text-zinc-400 font-mono text-[11px] uppercase mr-1">
            Tags //
          </span>
          {availableTags.slice(0, 10).map((tag) => {
            const isTagSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => onSelectTag(isTagSelected ? null : tag)}
                className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all ${
                  isTagSelected
                    ? 'bg-lime-400/20 text-lime-300 border border-lime-400/50 font-bold'
                    : 'bg-white/[0.02] text-zinc-400 hover:text-zinc-200 border border-white/[0.06]'
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
