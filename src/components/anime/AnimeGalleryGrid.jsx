import React from 'react';
import { AnimePostCard } from './AnimePostCard';
import { Sparkles, RotateCcw } from 'lucide-react';

export function AnimeGalleryGrid({ posts, onSelectPost, onSelectTag, onResetFilters }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="py-20 text-center flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-purple-500/40 bg-[#140b2b]/50">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white mb-3 shadow-lg shadow-pink-500/30">
          <Sparkles className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-manga text-white mb-1">
          ¡SIN RESULTADOS EN EL RADAR!
        </h3>
        <p className="text-sm text-purple-300 max-w-sm mb-5">
          No encontramos ninguna ilustración o manga que coincida con tus filtros actuales.
        </p>
        <button
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white text-xs font-bold shadow-lg shadow-pink-500/40 transition-all"
        >
          <RotateCcw className="w-4 h-4" />
          Reiniciar Filtros
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {posts.map((post) => (
        <AnimePostCard
          key={post.id}
          post={post}
          onSelectPost={onSelectPost}
          onSelectTag={onSelectTag}
        />
      ))}
    </div>
  );
}
