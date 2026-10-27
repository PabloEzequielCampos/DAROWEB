import React, { useState } from 'react';
import { Eye, Heart, Sparkles, Flame, BookOpen, Layers } from 'lucide-react';

export function AnimePostCard({ post, onSelectPost, onSelectTag }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const placeholderFallback =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000' fill='%230f0821'><rect width='100%25' height='100%25' fill='%230f0821'/><circle cx='400' cy='450' r='140' fill='%23221144'/><polygon points='400,320 490,480 310,480' fill='%23f43f5e'/><text x='50%25' y='650' font-family='sans-serif' font-weight='bold' font-size='32' fill='%23f43f5e' text-anchor='middle'>MANGA ART</text><text x='50%25' y='700' font-family='sans-serif' font-size='20' fill='%23a855f7' text-anchor='middle'>DARO COMICS</text></svg>";

  return (
    <article
      onClick={() => onSelectPost(post)}
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer bg-[#140b2b] border border-purple-500/30 anime-card-glow transition-all duration-300"
    >
      {/* Miniatura con Efectos Anime */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0a0517]">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-[#160d33] animate-pulse flex items-center justify-center text-pink-400 text-xs font-bold">
            ⚡ CARGANDO LIENZO...
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
          className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Gradiente de Viñeta Anime */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140b2b] via-transparent to-black/40 pointer-events-none" />

        {/* Badge de Categoría Anime */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/40">
            {post.category}
          </span>
          {post.pages > 1 && (
            <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-md bg-black/70 backdrop-blur-md text-cyan-300 border border-cyan-500/40">
              {post.pages}P
            </span>
          )}
        </div>

        {/* Action Sticker / Flame */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-0.5 rounded-full bg-yellow-400 text-black text-[10px] font-extrabold tracking-wider shadow-md uppercase flex items-center gap-1 animate-bounce">
            <Flame className="w-3 h-3 fill-black" />
            POP!
          </span>
        </div>

        {/* Stats flotantes */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-lg text-purple-200 border border-purple-500/20 text-[11px]">
            <Eye className="w-3 h-3 text-cyan-400" />
            <span>{post.views}</span>
          </div>
          <div className="flex items-center gap-1 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-lg text-pink-300 border border-pink-500/20 text-[11px]">
            <Heart className="w-3 h-3 text-pink-400 fill-pink-400/30" />
            <span>{post.likes}</span>
          </div>
        </div>
      </div>

      {/* Contenido / Metadatos Anime */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3 bg-gradient-to-b from-[#140b2b] to-[#0e0722]">
        <div>
          <div className="flex items-center justify-between text-xs text-purple-300/80 mb-1.5">
            <span className="font-bold text-pink-400 tracking-wide">
              BY @{post.author.toUpperCase()}
            </span>
            <span className="text-[11px] font-mono text-purple-400">
              {post.date}
            </span>
          </div>

          <h3 className="font-anime font-extrabold text-base text-white group-hover:text-pink-300 transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>

          {post.summary && (
            <p className="text-xs text-purple-200/70 line-clamp-2 mt-1.5 leading-relaxed">
              {post.summary}
            </p>
          )}
        </div>

        {/* Tags Anime */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-purple-500/20">
          {post.tags?.map((tag) => (
            <button
              key={tag}
              onClick={(e) => {
                e.stopPropagation();
                onSelectTag(tag);
              }}
              className="text-[10px] font-bold text-purple-300 hover:text-cyan-300 bg-purple-950/80 hover:bg-purple-900/90 border border-purple-500/30 px-2 py-0.5 rounded-md transition-colors"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}
