import React from 'react';
import { Search, X, Tag as TagIcon, SlidersHorizontal } from 'lucide-react';

export function FilterBar({
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
      {/* Search Bar & Stats */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por título, autor o palabras clave..."
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-canvas-800/90 border border-canvas-700 text-sm text-ink-100 placeholder-ink-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-ink-400 hover:text-ink-100 rounded-full"
              title="Borrar búsqueda"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-ink-400">
          <span>
            <strong className="text-ink-100 font-semibold">{totalResults}</strong> {totalResults === 1 ? 'publicación' : 'publicaciones'}
          </span>
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="px-2.5 py-1 rounded-md bg-canvas-800 hover:bg-canvas-700 text-accent-light border border-canvas-700 transition-colors flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              Restablecer
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => onSelectCategory(cat.name)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-accent text-white shadow-md shadow-accent/25'
                  : 'bg-canvas-800/80 text-ink-400 hover:text-ink-100 hover:bg-canvas-700/60 border border-canvas-700/60'
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-canvas-700 text-ink-400'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tags Filter Strip */}
      {availableTags && availableTags.length > 0 && (
        <div className="flex items-center gap-1.5 flex-wrap pt-1 text-xs">
          <span className="text-ink-400 flex items-center gap-1 mr-1 text-[11px] uppercase tracking-wider font-semibold">
            <TagIcon className="w-3 h-3" /> Tags:
          </span>
          {availableTags.slice(0, 10).map((tag) => {
            const isTagSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => onSelectTag(isTagSelected ? null : tag)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                  isTagSelected
                    ? 'bg-indigo-500/20 text-accent-light border border-accent/40 font-semibold'
                    : 'bg-canvas-800/60 text-ink-400 hover:text-ink-200 border border-canvas-700/40 hover:border-canvas-600'
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
