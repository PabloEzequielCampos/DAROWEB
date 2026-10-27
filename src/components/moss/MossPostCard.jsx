import React, { useState } from 'react';
import { Eye, Heart, Layers, Sprout, Feather } from 'lucide-react';

export function MossPostCard({ post, onSelectPost, onSelectTag }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const placeholderFallback =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000' fill='%23121c16'><rect width='100%25' height='100%25' fill='%23121c16'/><circle cx='400' cy='450' r='140' fill='%231b2b22'/><path d='M350 480 C370 410 430 410 450 480 C400 490 380 490 350 480 Z' fill='%2352b788'/><text x='50%25' y='660' font-family='serif' font-style='italic' font-size='28' fill='%23d8f3dc' text-anchor='middle'>BOTÁNICA & TINTA</text></svg>";

  return (
    <article
      onClick={() => onSelectPost(post)}
      className="group relative flex flex-col rounded-3xl overflow-hidden cursor-pointer moss-card shadow-lg"
    >
      {/* Miniatura Botánica */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0e1711]">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-[#16221a] animate-pulse flex items-center justify-center text-[#7da186] font-fraunces text-xs italic">
            🌿 Desenrollando pergamino...
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
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Gradiente Tierra Húmeda */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17241c] via-transparent to-black/30 pointer-events-none" />

        {/* Badge Categoría Vegetal */}
        <div className="absolute top-3.5 left-3.5">
          <span className="px-3 py-1 text-[11px] font-fraunces font-bold tracking-wide rounded-full bg-[#121c16]/80 backdrop-blur-md text-emerald-300 border border-[#3b5945] shadow-sm flex items-center gap-1">
            <Sprout className="w-3 h-3 text-emerald-400" />
            {post.category}
          </span>
        </div>

        {/* Cantidad de Páginas de Cómic */}
        {post.pages > 1 && (
          <div className="absolute top-3.5 right-3.5 px-2.5 py-0.5 rounded-full bg-[#121c16]/80 backdrop-blur-md text-[10px] font-mono text-[#b7e4c7] border border-[#3b5945]">
            {post.pages} páginas
          </div>
        )}

        {/* Métricas con toque cálido */}
        <div className="absolute bottom-3.5 right-3.5 flex items-center gap-2 text-xs font-fraunces">
          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[#c8ded0] text-[11px]">
            <Eye className="w-3 h-3 text-emerald-400" />
            <span>{post.views}</span>
          </div>
          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-rose-300 text-[11px]">
            <Heart className="w-3 h-3 fill-rose-400 text-rose-400" />
            <span>{post.likes}</span>
          </div>
        </div>
      </div>

      {/* Contenido / Metadatos */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-3 bg-[#17241c]">
        <div>
          <div className="flex items-center justify-between text-xs text-[#8ca895] font-fraunces mb-1.5">
            <span className="italic">Por {post.author}</span>
            <span>{post.date}</span>
          </div>

          <h3 className="font-fraunces font-bold text-lg text-[#edf6f0] group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>

          {post.summary && (
            <p className="text-xs text-[#9ab5a2] line-clamp-2 mt-2 leading-relaxed font-sans">
              {post.summary}
            </p>
          )}
        </div>

        {/* Tags Botánicos */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#2d4234]">
          {post.tags?.map((tag) => (
            <button
              key={tag}
              onClick={(e) => {
                e.stopPropagation();
                onSelectTag(tag);
              }}
              className="text-[10px] font-sans text-[#b7e4c7] hover:text-white bg-[#101b14] hover:bg-[#253b2d] border border-[#2d4234] px-2 py-0.5 rounded-lg transition-colors"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}
