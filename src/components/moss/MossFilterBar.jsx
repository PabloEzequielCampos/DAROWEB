import React from 'react';
import { Search, X, Sprout, Tag as TagIcon, RotateCcw } from 'lucide-react';

export function MossFilterBar({
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
      {/* Search Input & Total Counter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar entre el musgo (título, autor, bosque)..."
            className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-[#17251d] border border-[#2d4234] text-sm text-[#edf6f0] placeholder-[#6f8b78] focus:outline-none focus:border-emerald-500 transition-all font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#6f8b78] hover:text-[#edf6f0]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-[#9ab5a2] font-fraunces">
          <span>
            Hojas en el cuaderno: <strong className="text-emerald-300 font-bold">{totalResults}</strong>
          </span>
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="px-3 py-1.5 rounded-xl bg-[#1e3025] hover:bg-[#273d2f] text-emerald-300 border border-[#3b5944] transition-colors flex items-center gap-1 font-sans text-xs"
            >
              <RotateCcw className="w-3 h-3" />
              Restablecer
            </button>
          )}
        </div>
      </div>

      {/* Categories Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => onSelectCategory(cat.name)}
              className={`px-4 py-2 rounded-2xl text-xs font-fraunces font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-[#2d4e3a] text-emerald-100 shadow-md border border-emerald-500/40'
                  : 'bg-[#17251d] text-[#8ca895] hover:text-[#edf6f0] hover:bg-[#1e3026] border border-[#2d4234]'
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isSelected ? 'bg-black/30 text-emerald-200' : 'bg-[#101913] text-[#718d79]'
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
          <span className="text-[#718d79] font-fraunces italic flex items-center gap-1 mr-1">
            <Sprout className="w-3 h-3 text-emerald-500" /> Semillas:
          </span>
          {availableTags.slice(0, 10).map((tag) => {
            const isTagSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => onSelectTag(isTagSelected ? null : tag)}
                className={`px-3 py-1 rounded-xl text-[11px] font-sans transition-colors ${
                  isTagSelected
                    ? 'bg-emerald-600/30 text-emerald-200 border border-emerald-500/50 font-bold'
                    : 'bg-[#17251d] text-[#8ca895] hover:text-[#edf6f0] border border-[#2d4234]'
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
