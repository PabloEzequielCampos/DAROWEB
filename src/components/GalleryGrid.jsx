import React from 'react';
import { PostCard } from './PostCard';
import { ImageOff, RotateCcw } from 'lucide-react';

export function GalleryGrid({ posts, onSelectPost, onSelectTag, onResetFilters }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="py-20 text-center flex flex-col items-center justify-center rounded-2xl border border-dashed border-canvas-700 bg-canvas-800/30">
        <div className="w-12 h-12 rounded-full bg-canvas-800 flex items-center justify-center text-ink-400 mb-3">
          <ImageOff className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold text-ink-100 mb-1">
          No se encontraron publicaciones
        </h3>
        <p className="text-sm text-ink-400 max-w-sm mb-5">
          No hay ilustraciones o cómics que coincidan con los filtros o el término de búsqueda actual.
        </p>
        <button
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent hover:bg-accent-hover text-white text-xs font-semibold shadow-lg shadow-accent/20 transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Restablecer todos los filtros
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onSelectPost={onSelectPost}
          onSelectTag={onSelectTag}
        />
      ))}
    </div>
  );
}
