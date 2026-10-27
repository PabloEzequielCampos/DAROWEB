import React from 'react';
import { Search, X, Folder, Tag as TagIcon, RotateCcw } from 'lucide-react';

export function ClassicFilterBar({
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
    <div className="bg-[#ffffff] border-2 border-[#1a1614] shadow-[4px_4px_0px_#1a1614] p-4 mb-6 font-typewriter">
      {/* Search Bar & Archive Counter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4 pb-3 border-b-2 border-dashed border-[#1a1614]/30">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1614]/60 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar en el archivo (palabra clave, personaje)..."
            className="w-full pl-9 pr-8 py-2 bg-[#fdfbf7] border-2 border-[#1a1614] text-xs font-typewriter text-[#1a1614] placeholder-[#8a8175] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#1a1614]"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-[#1a1614]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
          <span className="bg-[#f0ebe1] px-2.5 py-1 border border-[#1a1614] font-bold">
            ARCHIVADOS: {totalResults} {totalResults === 1 ? 'ENTRADA' : 'ENTRADAS'}
          </span>
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="px-2.5 py-1 bg-[#ffd166] border border-[#1a1614] text-[#1a1614] hover:bg-[#ffc233] font-bold flex items-center gap-1 shadow-[2px_2px_0px_#1a1614]"
            >
              <RotateCcw className="w-3 h-3" />
              Restablecer
            </button>
          )}
        </div>
      </div>

      {/* Category Folders */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 mb-3">
        <span className="text-xs font-bold uppercase text-[#5a5247] mr-1 flex items-center gap-1">
          <Folder className="w-3.5 h-3.5" /> Sección:
        </span>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => onSelectCategory(cat.name)}
              className={`px-3 py-1 text-xs font-bold border-2 border-[#1a1614] whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-[#1a1614] text-white shadow-[2px_2px_0px_#ffd166]'
                  : 'bg-[#f7f3ea] hover:bg-[#ffe399] text-[#1a1614]'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          );
        })}
      </div>

      {/* Retro Tag Stamps */}
      {availableTags && availableTags.length > 0 && (
        <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-[#1a1614]/20 text-[11px]">
          <span className="font-bold text-[#5a5247] uppercase mr-1 flex items-center gap-1">
            <TagIcon className="w-3 h-3" /> Etiquetas:
          </span>
          {availableTags.slice(0, 10).map((tag) => {
            const isTagSelected = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => onSelectTag(isTagSelected ? null : tag)}
                className={`px-2 py-0.5 border border-[#1a1614] transition-colors ${
                  isTagSelected
                    ? 'bg-[#1a1614] text-[#ffd166] font-bold'
                    : 'bg-[#fdfbf7] hover:bg-[#ffd166] text-[#1a1614]'
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
