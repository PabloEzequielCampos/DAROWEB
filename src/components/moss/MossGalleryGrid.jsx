import React from 'react';
import { MossPostCard } from './MossPostCard';
import { Sprout, RotateCcw } from 'lucide-react';

export function MossGalleryGrid({ posts, onSelectPost, onSelectTag, onResetFilters }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="py-24 text-center flex flex-col items-center justify-center rounded-3xl border border-[#2d4234] bg-[#142018]/60">
        <div className="w-12 h-12 rounded-2xl bg-[#1b2b21] border border-[#3b5944] flex items-center justify-center text-emerald-400 mb-3">
          <Sprout className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-fraunces font-bold text-[#edf6f0] mb-1">
          No brotaron historias con ese criterio
        </h3>
        <p className="text-sm text-[#8ca895] max-w-sm mb-5 font-sans">
          Probá buscando otra palabra o limpiando los filtros para volver a ver todas las láminas.
        </p>
        <button
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#294232] hover:bg-[#34543f] text-emerald-200 border border-[#3f654d] text-xs font-fraunces font-bold transition-all shadow-md"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Regar el jardín y reiniciar
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {posts.map((post) => (
        <MossPostCard
          key={post.id}
          post={post}
          onSelectPost={onSelectPost}
          onSelectTag={onSelectTag}
        />
      ))}
    </div>
  );
}
