import React from 'react';
import { AvantPostCard } from './AvantPostCard';
import { Compass, RotateCcw } from 'lucide-react';

export function AvantGalleryGrid({ posts, onSelectPost, onSelectTag, onResetFilters }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="py-24 text-center flex flex-col items-center justify-center rounded-3xl border border-white/[0.08] bg-white/[0.02]">
        <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-zinc-400 mb-3">
          <Compass className="w-6 h-6 text-lime-400" />
        </div>
        <h3 className="text-lg font-syne font-bold text-white mb-1">
          Zero Records Found // 00
        </h3>
        <p className="text-sm text-zinc-400 max-w-sm mb-5">
          No hay obras que coincidan con los parámetros de búsqueda activos.
        </p>
        <button
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime-400 hover:bg-lime-300 text-black text-xs font-syne font-bold shadow-lg shadow-lime-400/20 transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Restablecer Filtros
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {posts.map((post) => (
        <AvantPostCard
          key={post.id}
          post={post}
          onSelectPost={onSelectPost}
          onSelectTag={onSelectTag}
        />
      ))}
    </div>
  );
}
