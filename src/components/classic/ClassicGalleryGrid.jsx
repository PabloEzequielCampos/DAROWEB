import React from 'react';
import { ClassicPostCard } from './ClassicPostCard';
import { ClassicSidebar } from './ClassicSidebar';
import { AlertCircle, RotateCcw } from 'lucide-react';

export function ClassicGalleryGrid({
  posts,
  onSelectPost,
  onSelectTag,
  onSelectCategory,
  onResetFilters,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Columna Principal: Entradas del Blog / Tiras Cómicas (8 cols) */}
      <div className="lg:col-span-8 space-y-6">
        {posts.length === 0 ? (
          <div className="bg-white border-2 border-[#1a1614] shadow-[5px_5px_0px_#1a1614] p-10 text-center font-typewriter">
            <AlertCircle className="w-10 h-10 text-[#1a1614] mx-auto mb-3" />
            <h3 className="font-classic text-xl font-bold text-[#1a1614] mb-2">
              NO SE HALLARON VIÑETAS EN EL ARCHIVO
            </h3>
            <p className="font-classic text-xs text-[#5a5247] max-w-md mx-auto mb-5 leading-relaxed">
              La búsqueda o filtro aplicado no arrojó resultados en la presente edición. Por favor, revisá los términos o restablecé el filtro.
            </p>
            <button
              onClick={onResetFilters}
              className="px-4 py-2 bg-[#ffd166] border-2 border-[#1a1614] text-[#1a1614] font-bold text-xs shadow-[3px_3px_0px_#1a1614] hover:bg-[#ffc233] transition-all"
            >
              Restablecer Filtros de Búsqueda
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {posts.map((post) => (
              <ClassicPostCard
                key={post.id}
                post={post}
                onSelectPost={onSelectPost}
                onSelectTag={onSelectTag}
              />
            ))}
          </div>
        )}
      </div>

      {/* Columna Lateral: Sidebar Clásico del Blog (4 cols) */}
      <div className="lg:col-span-4">
        <ClassicSidebar
          onSelectCategory={onSelectCategory}
          onSelectTag={onSelectTag}
        />
      </div>
    </div>
  );
}
