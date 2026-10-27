import React, { useState } from 'react';
import { Calendar, Eye, Heart, Layers, User } from 'lucide-react';

export function PostCard({ post, onSelectPost, onSelectTag }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Fallback visual en caso de desconexión o fallo de URL externa
  const placeholderFallback =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000' fill='%23111827'><rect width='100%25' height='100%25' fill='%23111827'/><circle cx='400' cy='450' r='120' fill='%231f2937'/><path d='M350 420 L450 420 L400 500 Z' fill='%236366f1'/><text x='50%25' y='650' font-family='sans-serif' font-size='26' fill='%2394a3b8' text-anchor='middle'>ARTE INDEPENDIENTE</text><text x='50%25' y='690' font-family='sans-serif' font-size='18' fill='%23475569' text-anchor='middle'>DARO COMICS</text></svg>";

  return (
    <article
      onClick={() => onSelectPost(post)}
      className="group flex flex-col glass-panel glass-panel-hover rounded-2xl overflow-hidden cursor-pointer border border-canvas-700/60 bg-canvas-800/50"
    >
      {/* Contenedor de Miniatura / Ilustración */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-canvas-900">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-canvas-800 animate-pulse flex items-center justify-center text-ink-600 text-xs">
            Cargando lienzo...
          </div>
        )}

        <img
          src={imageError ? placeholderFallback : post.coverImage}
          alt={post.title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
          className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Gradiente oscuro inferior para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-canvas-900/90 via-transparent to-black/20 pointer-events-none" />

        {/* Badge de Categoría */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-md bg-canvas-900/80 backdrop-blur-md text-accent-light border border-white/10 shadow-sm">
            {post.category}
          </span>
        </div>

        {/* Indicador de Páginas si es cómic / serie */}
        {post.pages > 1 && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-md bg-canvas-900/80 backdrop-blur-md text-[11px] text-ink-200 border border-white/10">
            <Layers className="w-3 h-3 text-accent-light" />
            <span>{post.pages} págs.</span>
          </div>
        )}

        {/* Indicadores rápidos de interacción en hover */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2.5 text-xs text-ink-200 opacity-90">
          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-md text-[11px]">
            <Eye className="w-3 h-3 text-ink-400" />
            <span>{post.views}</span>
          </div>
          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-md text-[11px]">
            <Heart className="w-3 h-3 text-rose-400" />
            <span>{post.likes}</span>
          </div>
        </div>
      </div>

      {/* Contenido / Metadatos */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3">
        <div>
          {/* Autor y Fecha */}
          <div className="flex items-center justify-between text-xs text-ink-400 mb-1.5">
            <span className="flex items-center gap-1.5 font-medium text-ink-200">
              <User className="w-3.5 h-3.5 text-accent" />
              {post.author}
            </span>
            <span className="flex items-center gap-1 text-[11px]">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
          </div>

          {/* Título */}
          <h3 className="font-display font-bold text-base text-ink-50 line-clamp-2 group-hover:text-accent-light transition-colors">
            {post.title}
          </h3>

          {/* Breve extracto */}
          {post.summary && (
            <p className="text-xs text-ink-400 line-clamp-2 mt-1.5 leading-relaxed font-normal">
              {post.summary}
            </p>
          )}
        </div>

        {/* Tags / Etiquetas */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-canvas-700/40">
          {post.tags?.map((tag) => (
            <button
              key={tag}
              onClick={(e) => {
                e.stopPropagation();
                onSelectTag(tag);
              }}
              className="text-[11px] font-medium text-ink-400 hover:text-accent-light bg-canvas-900/60 hover:bg-canvas-700/60 px-2 py-0.5 rounded transition-colors"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}
