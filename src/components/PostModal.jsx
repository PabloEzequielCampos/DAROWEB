import React, { useEffect, useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  User,
  Calendar,
  Layers,
  Heart,
  Share2,
  Sparkles,
  Zap,
  Feather,
  Compass,
  Sprout,
  Coffee,
} from 'lucide-react';
import { THEMES } from './DesignSwitcher';

export function PostModal({
  post,
  allPosts = [],
  onClose,
  onSelectPost,
  onSelectTag,
  theme = THEMES.DESIGN_1,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post?.likes || 0);

  useEffect(() => {
    setCurrentPage(1);
    setLiked(false);
    setLikeCount(post?.likes || 0);
  }, [post]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPost();
      } else if (e.key === 'ArrowRight') {
        handleNextPost();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [post, allPosts]);

  if (!post) return null;

  const currentIndex = allPosts.findIndex((p) => p.id === post.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allPosts.length - 1;

  const handlePrevPost = () => {
    if (hasPrev) onSelectPost(allPosts[currentIndex - 1]);
  };

  const handleNextPost = () => {
    if (hasNext) onSelectPost(allPosts[currentIndex + 1]);
  };

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount((c) => c - 1);
    } else {
      setLiked(true);
      setLikeCount((c) => c + 1);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace del post copiado al portapapeles!');
    }
  };

  // ==============================================================
  // TEMA 4: AVANT-GARDE 2026 (SPATIAL LIQUID GLASS)
  // ==============================================================
  if (theme === THEMES.DESIGN_4_AVANT) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        <div onClick={onClose} className="fixed inset-0 bg-[#060608]/90 backdrop-blur-2xl transition-opacity" />

        {hasPrev && (
          <button
            onClick={handlePrevPost}
            title="Publicación anterior"
            className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/[0.05] hover:bg-lime-400 hover:text-black text-white border border-white/[0.1] transition-all shadow-2xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {hasNext && (
          <button
            onClick={handleNextPost}
            title="Siguiente publicación"
            className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/[0.05] hover:bg-lime-400 hover:text-black text-white border border-white/[0.1] transition-all shadow-2xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        <div className="relative w-full max-w-5xl bg-[#09090d] border border-white/[0.12] rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[92vh]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-white/[0.1] text-zinc-300 border border-white/10 backdrop-blur-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="md:w-3/5 bg-[#050507] flex flex-col items-center justify-center relative p-4 min-h-[360px] md:min-h-[560px]">
            <img
              src={post.coverImage}
              alt={post.title}
              className="max-h-[65vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/[0.06]"
            />
            {post.pages > 1 && (
              <div className="mt-3 flex items-center gap-3 bg-white/[0.05] px-4 py-1.5 rounded-full border border-white/10 text-xs font-mono">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="text-zinc-400 hover:text-white disabled:opacity-30"
                >
                  ◀ Previo
                </button>
                <span className="text-lime-300 font-bold">
                  {currentPage} / {post.pages}
                </span>
                <button
                  disabled={currentPage === post.pages}
                  onClick={() => setCurrentPage((p) => Math.min(post.pages, p + 1))}
                  className="text-zinc-400 hover:text-white disabled:opacity-30"
                >
                  Siguiente ▶
                </button>
              </div>
            )}
          </div>

          <div className="md:w-2/5 p-6 flex flex-col justify-between overflow-y-auto bg-[#0a0a0f] text-zinc-200 border-t md:border-t-0 md:border-l border-white/[0.08]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-syne font-bold uppercase rounded-full bg-lime-400/20 text-lime-300 border border-lime-400/30">
                  {post.category}
                </span>
                <span className="text-xs font-mono text-zinc-400">{post.date}</span>
              </div>

              <h2 className="font-syne font-extrabold text-2xl text-white leading-tight">
                {post.title}
              </h2>

              <div className="flex items-center gap-2.5 py-2 border-y border-white/[0.08] text-xs font-mono">
                <div className="w-8 h-8 rounded-xl bg-lime-400 text-black flex items-center justify-center font-bold text-xs">
                  {post.author.slice(0, 1)}
                </div>
                <div>
                  <p className="font-bold text-white">@{post.author.toUpperCase()}</p>
                  <p className="text-[11px] text-zinc-400">CREATOR // 2026 LAB</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  Descripción //
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  {post.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  Etiquetas //
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags?.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        onSelectTag(tag);
                        onClose();
                      }}
                      className="text-xs font-mono text-zinc-300 hover:text-lime-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] px-2.5 py-1 rounded-lg transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-3 mt-4">
              <button
                onClick={toggleLike}
                className={`flex-1 py-2.5 px-3 rounded-2xl border text-xs font-syne font-bold flex items-center justify-center gap-1.5 transition-all ${
                  liked
                    ? 'bg-lime-400 text-black border-lime-300 shadow-lg shadow-lime-400/30'
                    : 'bg-white/[0.04] text-zinc-200 border-white/10 hover:bg-white/[0.08]'
                }`}
              >
                <Heart className={`w-4 h-4 ${liked ? 'fill-black' : ''}`} />
                <span>{likeCount} Me gusta</span>
              </button>
              <button
                onClick={handleShare}
                className="py-2.5 px-3 rounded-2xl border border-white/10 bg-white/[0.04] text-zinc-200 hover:text-white text-xs font-syne font-bold flex items-center justify-center gap-1.5"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==============================================================
  // TEMA 5: MUSGO & MADRIGUERA (TOUCH GRASS & COZY BURROW)
  // ==============================================================
  if (theme === THEMES.DESIGN_5_MOSS) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        <div onClick={onClose} className="fixed inset-0 bg-[#0c140f]/90 backdrop-blur-md transition-opacity" />

        {hasPrev && (
          <button
            onClick={handlePrevPost}
            title="Lámina anterior"
            className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-2xl bg-[#1b2b21] hover:bg-[#2d4937] text-emerald-100 border border-[#3b5944] shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {hasNext && (
          <button
            onClick={handleNextPost}
            title="Lámina siguiente"
            className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-2xl bg-[#1b2b21] hover:bg-[#2d4937] text-emerald-100 border border-[#3b5944] shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        <div className="relative w-full max-w-5xl bg-[#152219] border border-[#2d4536] rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[92vh]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#121c16]/80 hover:bg-[#233829] text-[#9ab5a2] border border-[#3b5944] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="md:w-3/5 bg-[#0f1712] flex flex-col items-center justify-center relative p-4 min-h-[360px] md:min-h-[560px]">
            <img
              src={post.coverImage}
              alt={post.title}
              className="max-h-[65vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-[#2d4536]"
            />
            {post.pages > 1 && (
              <div className="mt-3 flex items-center gap-3 bg-[#19291f] px-4 py-1.5 rounded-full border border-[#3b5944] text-xs font-fraunces">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="text-[#8ca895] hover:text-white disabled:opacity-30"
                >
                  ◀ Página Anterior
                </button>
                <span className="text-emerald-300 font-bold">
                  {currentPage} de {post.pages}
                </span>
                <button
                  disabled={currentPage === post.pages}
                  onClick={() => setCurrentPage((p) => Math.min(post.pages, p + 1))}
                  className="text-[#8ca895] hover:text-white disabled:opacity-30"
                >
                  Página Siguiente ▶
                </button>
              </div>
            )}
          </div>

          <div className="md:w-2/5 p-6 flex flex-col justify-between overflow-y-auto bg-[#17251d] text-[#edf6f0] border-t md:border-t-0 md:border-l border-[#2d4536]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-fraunces font-bold rounded-full bg-[#243a2c] text-emerald-200 border border-[#3b5944]">
                  {post.category}
                </span>
                <span className="text-xs font-fraunces text-[#8ca895]">{post.date}</span>
              </div>

              <h2 className="font-fraunces font-bold text-2xl text-white leading-tight">
                {post.title}
              </h2>

              <div className="flex items-center gap-2.5 py-2 border-y border-[#2d4536] text-xs font-fraunces">
                <div className="w-8 h-8 rounded-full bg-[#294232] text-emerald-200 flex items-center justify-center font-bold text-xs border border-[#3f654d]">
                  {post.author.slice(0, 1)}
                </div>
                <div>
                  <p className="font-bold text-white">{post.author}</p>
                  <p className="text-[11px] text-[#8ca895]">Dibujante de la Madriguera</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-fraunces font-bold text-[#8ca895] mb-1">
                  Notas de lectura:
                </h4>
                <p className="text-sm text-[#c8ded0] leading-relaxed font-sans">
                  {post.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-fraunces font-bold text-[#8ca895] mb-1">
                  Semillas / Etiquetas:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags?.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        onSelectTag(tag);
                        onClose();
                      }}
                      className="text-xs text-emerald-200 hover:text-white bg-[#101b14] hover:bg-[#253b2d] border border-[#2d4536] px-2.5 py-1 rounded-xl transition-colors font-sans"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#2d4536] flex items-center justify-between gap-3 mt-4 font-fraunces">
              <button
                onClick={toggleLike}
                className={`flex-1 py-2.5 px-3 rounded-2xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  liked
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                    : 'bg-[#213527] text-emerald-200 border-[#3f654d] hover:bg-[#2b4433]'
                }`}
              >
                <Heart className={`w-4 h-4 ${liked ? 'fill-rose-400' : ''}`} />
                <span>{likeCount} Me gusta</span>
              </button>
              <button
                onClick={handleShare}
                className="py-2.5 px-3 rounded-2xl border border-[#3f654d] bg-[#213527] text-emerald-200 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <Share2 className="w-4 h-4" />
                <span>Compartir</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==============================================================
  // TEMA 3: CLASSIC OLD SCHOOL BLOG
  // ==============================================================
  if (theme === THEMES.DESIGN_3_CLASSIC) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        <div onClick={onClose} className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity" />

        {hasPrev && (
          <button
            onClick={handlePrevPost}
            title="Publicación anterior"
            className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 p-3 bg-[#ffd166] border-2 border-[#1a1614] text-[#1a1614] font-bold shadow-[4px_4px_0px_#1a1614] hover:bg-[#ffc233]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {hasNext && (
          <button
            onClick={handleNextPost}
            title="Siguiente publicación"
            className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 p-3 bg-[#ffd166] border-2 border-[#1a1614] text-[#1a1614] font-bold shadow-[4px_4px_0px_#1a1614] hover:bg-[#ffc233]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        <div className="relative w-full max-w-5xl bg-white border-4 border-[#1a1614] shadow-[8px_8px_0px_#1a1614] overflow-hidden z-10 flex flex-col md:flex-row max-h-[92vh] font-typewriter">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 p-1.5 bg-[#ffd166] hover:bg-[#ffc233] text-[#1a1614] border-2 border-[#1a1614] shadow-[2px_2px_0px_#1a1614]"
            title="Cerrar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="md:w-3/5 bg-[#ece5d4] flex flex-col items-center justify-center relative p-4 border-b-2 md:border-b-0 md:border-r-2 border-[#1a1614] min-h-[360px] md:min-h-[560px]">
            <img
              src={post.coverImage}
              alt={post.title}
              className="max-h-[65vh] w-auto max-w-full object-contain border-2 border-[#1a1614] shadow-[4px_4px_0px_#1a1614]"
            />
            {post.pages > 1 && (
              <div className="mt-3 flex items-center gap-3 bg-white px-3 py-1 border-2 border-[#1a1614] text-xs font-bold shadow-[2px_2px_0px_#1a1614]">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="hover:underline disabled:opacity-30"
                >
                  ◀ Anterior
                </button>
                <span>
                  Lámina {currentPage} de {post.pages}
                </span>
                <button
                  disabled={currentPage === post.pages}
                  onClick={() => setCurrentPage((p) => Math.min(post.pages, p + 1))}
                  className="hover:underline disabled:opacity-30"
                >
                  Siguiente ▶
                </button>
              </div>
            )}
          </div>

          <div className="md:w-2/5 p-6 flex flex-col justify-between overflow-y-auto bg-[#fdfbf7] text-[#1a1614]">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b-2 border-dashed border-[#1a1614]/40">
                <span className="bg-[#ffd166] text-[#1a1614] px-2 py-0.5 border border-[#1a1614] font-bold text-xs uppercase">
                  {post.category}
                </span>
                <span className="text-xs font-bold text-[#5a5247]">{post.date}</span>
              </div>

              <h2 className="font-classic font-bold text-2xl text-[#1a1614] leading-tight">
                {post.title}
              </h2>

              <div className="flex items-center gap-2 py-2 border-y border-[#1a1614]/30 text-xs">
                <div className="w-8 h-8 rounded-none bg-[#1a1614] text-[#ffd166] flex items-center justify-center font-bold text-xs border border-[#1a1614]">
                  {post.author.slice(0, 1)}
                </div>
                <div>
                  <p className="font-bold text-[#1a1614]">{post.author}</p>
                  <p className="text-[11px] text-[#5a5247]">Artista & Historietista</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#5a5247] mb-1">
                  Crónica / Resumen:
                </h4>
                <p className="font-classic text-sm text-[#332c25] leading-relaxed">
                  "{post.summary}"
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#5a5247] mb-1">
                  Etiquetas:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {post.tags?.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        onSelectTag(tag);
                        onClose();
                      }}
                      className="text-xs bg-[#f0ebe1] hover:bg-[#ffd166] border border-[#1a1614] px-2 py-0.5 transition-colors font-bold"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-[#1a1614] flex items-center justify-between gap-3 mt-4">
              <button
                onClick={toggleLike}
                className="flex-1 py-2 px-3 bg-[#ffd166] hover:bg-[#ffc233] border-2 border-[#1a1614] text-xs font-bold text-[#1a1614] shadow-[2px_2px_0px_#1a1614] flex items-center justify-center gap-1.5"
              >
                <Heart className={`w-4 h-4 ${liked ? 'fill-red-700 text-red-700' : ''}`} />
                <span>{likeCount} Recomendaciones</span>
              </button>
              <button
                onClick={handleShare}
                className="py-2 px-3 bg-white hover:bg-[#f0ebe1] border-2 border-[#1a1614] text-xs font-bold text-[#1a1614] shadow-[2px_2px_0px_#1a1614] flex items-center justify-center gap-1.5"
              >
                <Share2 className="w-4 h-4" />
                <span>Difundir</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==============================================================
  // TEMA 2: ANIME MODERNO (NEON POP)
  // ==============================================================
  if (theme === THEMES.DESIGN_2_ANIME) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        <div onClick={onClose} className="fixed inset-0 bg-[#090417]/90 backdrop-blur-md transition-opacity" />

        {hasPrev && (
          <button
            onClick={handlePrevPost}
            title="Capítulo anterior"
            className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-2xl bg-[#190d36] hover:bg-pink-600 text-white border border-pink-500/40 shadow-xl shadow-pink-900/30 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        {hasNext && (
          <button
            onClick={handleNextPost}
            title="Siguiente capítulo"
            className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-2xl bg-[#190d36] hover:bg-pink-600 text-white border border-pink-500/40 shadow-xl shadow-pink-900/30 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        <div className="relative w-full max-w-5xl bg-[#140b2b] border-2 border-pink-500/40 rounded-3xl shadow-2xl shadow-pink-950/60 overflow-hidden z-10 flex flex-col md:flex-row max-h-[92vh]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-pink-600 text-pink-200 border border-pink-500/30 backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="md:w-3/5 bg-[#0a0517] flex flex-col items-center justify-center relative p-4 min-h-[360px] md:min-h-[560px]">
            <img
              src={post.coverImage}
              alt={post.title}
              className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-purple-500/20"
            />
            {post.pages > 1 && (
              <div className="mt-3 flex items-center gap-3 bg-[#170e30] px-4 py-1.5 rounded-full border border-purple-500/30 text-xs">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="text-purple-400 hover:text-cyan-300 disabled:opacity-30 font-bold"
                >
                  ◀ Pág. Anterior
                </button>
                <span className="font-mono font-bold text-pink-300">
                  {currentPage} / {post.pages}
                </span>
                <button
                  disabled={currentPage === post.pages}
                  onClick={() => setCurrentPage((p) => Math.min(post.pages, p + 1))}
                  className="text-purple-400 hover:text-cyan-300 disabled:opacity-30 font-bold"
                >
                  Siguiente ▶
                </button>
              </div>
            )}
          </div>

          <div className="md:w-2/5 p-6 flex flex-col justify-between overflow-y-auto bg-[#170e30]/90 text-purple-100 border-t md:border-t-0 md:border-l border-purple-500/20">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 text-xs font-extrabold uppercase rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/30">
                  {post.category}
                </span>
                <span className="text-xs font-mono text-purple-400">{post.date}</span>
              </div>

              <h2 className="font-manga text-2xl text-white leading-tight">
                {post.title}
              </h2>

              <div className="flex items-center gap-2.5 py-2 border-y border-purple-500/20 text-xs">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-500 to-cyan-400 flex items-center justify-center font-bold text-white shadow-md">
                  {post.author.slice(0, 1)}
                </div>
                <div>
                  <p className="font-bold text-white">@{post.author.toUpperCase()}</p>
                  <p className="text-[11px] text-pink-400">Mangaka & Artista</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-purple-400 mb-1">
                  Sinopsis del Capítulo:
                </h4>
                <p className="text-sm text-purple-200/80 leading-relaxed font-anime">
                  {post.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-purple-400 mb-1">
                  Tags Anime:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags?.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        onSelectTag(tag);
                        onClose();
                      }}
                      className="text-xs font-bold text-pink-300 hover:text-white bg-purple-950/80 hover:bg-pink-600 border border-purple-500/30 px-2.5 py-1 rounded-lg transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-purple-500/20 flex items-center justify-between gap-3 mt-4">
              <button
                onClick={toggleLike}
                className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  liked
                    ? 'bg-pink-600 text-white border-pink-400 shadow-lg shadow-pink-600/40'
                    : 'bg-[#1b0f3b] text-pink-300 border-purple-500/40 hover:bg-[#251552]'
                }`}
              >
                <Heart className={`w-4 h-4 ${liked ? 'fill-white' : ''}`} />
                <span>{likeCount} Me gusta</span>
              </button>
              <button
                onClick={handleShare}
                className="py-2.5 px-3 rounded-xl border border-purple-500/40 bg-[#1b0f3b] text-purple-200 hover:text-white text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <Share2 className="w-4 h-4" />
                <span>Compartir</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ==============================================================
  // TEMA 1: DARK SLATE STUDIO (ORIGINAL POR DEFECTO)
  // ==============================================================
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div onClick={onClose} className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" />

      {hasPrev && (
        <button
          onClick={handlePrevPost}
          title="Publicación anterior"
          className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-canvas-800/80 hover:bg-accent text-white border border-canvas-700 hover:border-accent transition-all shadow-xl"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {hasNext && (
        <button
          onClick={handleNextPost}
          title="Siguiente publicación"
          className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-canvas-800/80 hover:bg-accent text-white border border-canvas-700 hover:border-accent transition-all shadow-xl"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      <div className="relative w-full max-w-5xl bg-canvas-800 border border-canvas-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[92vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-canvas-900/80 hover:bg-rose-500/20 hover:text-rose-300 text-ink-300 border border-white/10 backdrop-blur-sm transition-colors"
          title="Cerrar (Esc)"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="md:w-3/5 bg-canvas-900/90 flex flex-col items-center justify-center relative p-4 min-h-[360px] md:min-h-[560px]">
          <div className="relative max-h-[70vh] flex items-center justify-center w-full h-full">
            <img
              src={post.coverImage}
              alt={post.title}
              className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {post.pages > 1 && (
            <div className="mt-3 flex items-center gap-3 bg-canvas-800/90 px-4 py-1.5 rounded-full border border-canvas-700 text-xs">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="text-ink-400 hover:text-white disabled:opacity-30 transition-colors"
              >
                Página anterior
              </button>
              <span className="font-mono text-ink-200">
                Pág. {currentPage} de {post.pages}
              </span>
              <button
                disabled={currentPage === post.pages}
                onClick={() => setCurrentPage((p) => Math.min(post.pages, p + 1))}
                className="text-ink-400 hover:text-white disabled:opacity-30 transition-colors"
              >
                Siguiente página
              </button>
            </div>
          )}
        </div>

        <div className="md:w-2/5 p-6 flex flex-col justify-between overflow-y-auto bg-canvas-800/60 border-t md:border-t-0 md:border-l border-canvas-700/80">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-md bg-accent/20 text-accent-light border border-accent/30">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-ink-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
            </div>

            <h2 className="font-display font-bold text-xl md:text-2xl text-ink-50 leading-snug">
              {post.title}
            </h2>

            <div className="flex items-center gap-2.5 py-2 border-y border-canvas-700/60">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-purple-600 flex items-center justify-center font-bold text-xs text-white">
                {post.author.slice(0, 1)}
              </div>
              <div>
                <p className="text-xs font-medium text-ink-200">{post.author}</p>
                <p className="text-[11px] text-ink-400">Creador & Artista</p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-1.5">
                Descripción
              </h4>
              <p className="text-sm text-ink-200 leading-relaxed">
                {post.summary}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-1.5">
                Etiquetas
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {post.tags?.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      onSelectTag(tag);
                      onClose();
                    }}
                    className="text-xs font-medium text-ink-300 hover:text-white bg-canvas-700/60 hover:bg-accent/40 border border-canvas-600/50 px-2.5 py-1 rounded-md transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-canvas-700/60 flex items-center justify-between gap-3 mt-4">
            <button
              onClick={toggleLike}
              className={`flex-1 py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                liked
                  ? 'bg-rose-500/20 border-rose-500/50 text-rose-400'
                  : 'bg-canvas-700/40 hover:bg-canvas-700 border-canvas-600/60 text-ink-200'
              }`}
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-rose-400' : ''}`} />
              <span>{likeCount} Me gusta</span>
            </button>

            <button
              onClick={handleShare}
              className="py-2 px-3 rounded-xl border border-canvas-600/60 bg-canvas-700/40 hover:bg-canvas-700 text-ink-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
            >
              <Share2 className="w-4 h-4" />
              <span>Compartir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
