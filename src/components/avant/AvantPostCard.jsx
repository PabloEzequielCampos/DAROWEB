import React, { useState } from 'react';
import { Eye, Heart, Layers, ArrowUpRight } from 'lucide-react';

export function AvantPostCard({ post, onSelectPost, onSelectTag }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const placeholderFallback =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000' fill='%230a0a0f'><rect width='100%25' height='100%25' fill='%230a0a0f'/><circle cx='400' cy='450' r='140' fill='%2314141c'/><circle cx='400' cy='450' r='60' fill='%23bef264'/><text x='50%25' y='660' font-family='sans-serif' font-weight='900' font-size='28' fill='%23ffffff' text-anchor='middle'>AVANT GRAPHICS</text></svg>";

  return (
    <article
      onClick={() => onSelectPost(post)}
      className="group relative flex flex-col rounded-3xl overflow-hidden cursor-pointer avant-card bg-[#0b0b10] border border-white/[0.08]"
    >
      {/* Artwork Canvas */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#07070a]">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-white/[0.02] animate-pulse flex items-center justify-center text-zinc-400 font-mono text-xs">
            RENDERING ASSET...
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

        {/* Dynamic Vibe Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10] via-transparent to-black/30 pointer-events-none" />

        {/* Category Pill */}
        <div className="absolute top-3.5 left-3.5">
          <span className="px-3 py-1 text-[11px] font-syne font-bold uppercase tracking-wider rounded-full bg-black/60 backdrop-blur-xl text-white border border-white/10 shadow-lg">
            {post.category}
          </span>
        </div>

        {/* Pages indicator */}
        {post.pages > 1 && (
          <div className="absolute top-3.5 right-3.5 px-2.5 py-0.5 rounded-full bg-lime-400/20 backdrop-blur-xl text-[10px] font-mono text-lime-300 border border-lime-400/30">
            {post.pages} PÁGS
          </div>
        )}

        {/* Minimalist Metrics */}
        <div className="absolute bottom-3.5 right-3.5 flex items-center gap-2 text-xs font-mono">
          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-zinc-300 border border-white/10 text-[11px]">
            <Eye className="w-3 h-3 text-zinc-400" />
            <span>{post.views}</span>
          </div>
          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-zinc-300 border border-white/10 text-[11px]">
            <Heart className="w-3 h-3 text-lime-400" />
            <span>{post.likes}</span>
          </div>
        </div>
      </div>

      {/* Meta Content */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-3 bg-[#0b0b10]">
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
            <span>BY @{post.author.toUpperCase()}</span>
            <span>{post.date}</span>
          </div>

          <h3 className="font-syne font-bold text-lg text-white group-hover:text-lime-300 transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>

          {post.summary && (
            <p className="text-xs text-zinc-400 line-clamp-2 mt-2 leading-relaxed">
              {post.summary}
            </p>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
          {post.tags?.map((tag) => (
            <button
              key={tag}
              onClick={(e) => {
                e.stopPropagation();
                onSelectTag(tag);
              }}
              className="text-[10px] font-mono text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] px-2 py-0.5 rounded-md transition-colors"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}
