import React, { useState } from 'react';
import { Calendar, Eye, Heart, BookOpen, User, ArrowUpRight } from 'lucide-react';

export function ClassicPostCard({ post, onSelectPost, onSelectTag }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const placeholderFallback =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000' fill='%23f4efe6'><rect width='100%25' height='100%25' fill='%23f4efe6'/><rect x='40' y='40' width='720' height='920' fill='none' stroke='%231a1614' stroke-width='8'/><circle cx='400' cy='460' r='140' fill='%23e0d7c5'/><text x='50%25' y='640' font-family='serif' font-weight='bold' font-size='32' fill='%231a1614' text-anchor='middle'>VIÑETA Nº 1</text><text x='50%25' y='685' font-family='monospace' font-size='18' fill='%23665c49' text-anchor='middle'>EDICIÓN DE PRENSA</text></svg>";

  return (
    <article
      onClick={() => onSelectPost(post)}
      className="group flex flex-col bg-white border-2 border-[#1a1614] shadow-[5px_5px_0px_0px_#1a1614] hover:shadow-[7px_7px_0px_0px_#1a1614] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 cursor-pointer overflow-hidden"
    >
      {/* Header de la tira con metadatos vintage */}
      <div className="bg-[#f0ebe1] px-3.5 py-2 border-b-2 border-[#1a1614] flex items-center justify-between font-typewriter text-xs">
        <span className="font-bold uppercase tracking-wider text-[#1a1614] bg-[#ffd166] px-1.5 py-0.5 border border-[#1a1614]">
          {post.category}
        </span>
        <span className="text-[11px] text-[#4a4239] font-bold">
          {post.date}
        </span>
      </div>

      {/* Ilustración / Viñeta con marco de cómic clásico */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e5dec9] border-b-2 border-[#1a1614]">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center font-typewriter text-xs text-[#5a5247] bg-[#f0ebe1]">
            [Revelando viñeta...]
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
          className={`w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Marca de Páginas Vintage */}
        {post.pages > 1 && (
          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-[#1a1614] text-white font-typewriter font-bold text-[10px] shadow-sm">
            TIRA: {post.pages} PÁGINAS
          </div>
        )}

        {/* Sello de Interacciones */}
        <div className="absolute bottom-2.5 right-2.5 flex items-center gap-2 bg-white/95 border border-[#1a1614] px-2 py-0.5 font-typewriter text-[11px] text-[#1a1614]">
          <span className="flex items-center gap-1 font-bold">
            <Eye className="w-3 h-3" /> {post.views}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-red-700 font-bold">
            <Heart className="w-3 h-3 fill-red-700" /> {post.likes}
          </span>
        </div>
      </div>

      {/* Contenido Editorial */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3 bg-white">
        <div>
          <div className="font-typewriter text-[11px] text-[#5a5247] mb-1 flex items-center gap-1">
            <User className="w-3 h-3" /> Firmado por: <strong className="text-[#1a1614]">{post.author}</strong>
          </div>

          <h3 className="font-classic font-bold text-lg text-[#1a1614] leading-snug group-hover:text-amber-900 transition-colors">
            {post.title}
          </h3>

          {post.summary && (
            <p className="font-classic text-xs text-[#4a4239] line-clamp-2 mt-2 leading-relaxed">
              "{post.summary}"
            </p>
          )}
        </div>

        {/* Tags / Pie de imprenta */}
        <div className="pt-2 border-t border-dashed border-[#1a1614]/30 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1">
            {post.tags?.slice(0, 3).map((tag) => (
              <button
                key={tag}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectTag(tag);
                }}
                className="font-typewriter text-[10px] text-[#1a1614] bg-[#f0ebe1] hover:bg-[#ffd166] border border-[#1a1614] px-1.5 py-0.5 transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>

          <span className="font-typewriter text-[11px] font-bold text-[#1a1614] flex items-center gap-0.5 group-hover:underline">
            Ver viñeta <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </article>
  );
}
