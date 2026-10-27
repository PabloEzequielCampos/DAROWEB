import React, { useState, useEffect, useMemo } from 'react';
import { postsService } from './services/postsService';
import { DesignSwitcher, THEMES } from './components/DesignSwitcher';
import { PostModal } from './components/PostModal';

// ==========================================
// COMPONENTES DISEÑO 1 (Dark Slate Studio)
// ==========================================
import { Navbar as DarkNavbar } from './components/Navbar';
import { FilterBar as DarkFilterBar } from './components/FilterBar';
import { GalleryGrid as DarkGalleryGrid } from './components/GalleryGrid';

// ==========================================
// COMPONENTES DISEÑO 2 (Anime Moderno / Pop)
// ==========================================
import { AnimeNavbar } from './components/anime/AnimeNavbar';
import { AnimeHero } from './components/anime/AnimeHero';
import { AnimeFilterBar } from './components/anime/AnimeFilterBar';
import { AnimeGalleryGrid } from './components/anime/AnimeGalleryGrid';

// ==========================================
// COMPONENTES DISEÑO 3 (Classic Old School)
// ==========================================
import { ClassicNavbar } from './components/classic/ClassicNavbar';
import { ClassicFilterBar } from './components/classic/ClassicFilterBar';
import { ClassicGalleryGrid } from './components/classic/ClassicGalleryGrid';

// ==========================================
// COMPONENTES DISEÑO 4 (Neo 2026 Avant-Garde)
// ==========================================
import { AvantNavbar } from './components/avant/AvantNavbar';
import { AvantHero } from './components/avant/AvantHero';
import { AvantFilterBar } from './components/avant/AvantFilterBar';
import { AvantGalleryGrid } from './components/avant/AvantGalleryGrid';

// ==========================================
// COMPONENTES DISEÑO 5 (Musgo & Pasto / Cozy)
// ==========================================
import { MossNavbar } from './components/moss/MossNavbar';
import { MossHero } from './components/moss/MossHero';
import { MossFilterBar } from './components/moss/MossFilterBar';
import { MossGalleryGrid } from './components/moss/MossGalleryGrid';

import { Sparkles, Terminal, Heart, Sprout, Compass } from 'lucide-react';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Selector de Diseño (Persistente en localStorage)
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('daro_selected_theme') || THEMES.DESIGN_1;
  });

  const handleSelectTheme = (newTheme) => {
    setActiveTheme(newTheme);
    localStorage.setItem('daro_selected_theme', newTheme);
  };

  // Estados de filtrado y búsqueda
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedTag, setSelectedTag] = useState(null);

  // Visor modal
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const data = await postsService.getAll();
        setPosts(data);
      } catch (err) {
        console.error('Error al cargar posts:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const categories = useMemo(() => postsService.getCategories(posts), [posts]);
  const availableTags = useMemo(() => postsService.getUniqueTags(posts), [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'Todos' || post.category === selectedCategory;
      const matchesTag =
        !selectedTag || (post.tags && post.tags.includes(selectedTag));
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q) ||
        (post.summary && post.summary.toLowerCase().includes(q)) ||
        (post.tags && post.tags.some((t) => t.toLowerCase().includes(q)));

      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [posts, selectedCategory, selectedTag, searchQuery]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Todos');
    setSelectedTag(null);
  };

  // Clases del contenedor según el diseño activo
  const themeContainerClasses = {
    [THEMES.DESIGN_1]: 'bg-canvas-900 text-ink-100 min-h-screen',
    [THEMES.DESIGN_2_ANIME]: 'bg-anime-grid text-purple-100 min-h-screen selection:bg-pink-500 selection:text-white',
    [THEMES.DESIGN_3_CLASSIC]: 'bg-classic-paper text-[#1a1614] min-h-screen selection:bg-[#ffd166] selection:text-[#1a1614]',
    [THEMES.DESIGN_4_AVANT]: 'bg-avant-void text-zinc-100 min-h-screen selection:bg-lime-400 selection:text-black',
    [THEMES.DESIGN_5_MOSS]: 'bg-moss-sanctuary text-[#edf6f0] min-h-screen selection:bg-emerald-500 selection:text-black',
  }[activeTheme];

  return (
    <div className={`flex flex-col transition-colors duration-200 ${themeContainerClasses}`}>
      {/* Barra de Control de Diseños (Selector Principal con los 5 estilos) */}
      <DesignSwitcher
        activeTheme={activeTheme}
        onSelectTheme={handleSelectTheme}
      />

      {/* ============================================================== */}
      {/* DISEÑO 1: DARK SLATE STUDIO (ORIGINAL)                        */}
      {/* ============================================================== */}
      {activeTheme === THEMES.DESIGN_1 && (
        <>
          <DarkNavbar
            activeCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setSelectedTag(null);
            }}
          />

          <section className="relative overflow-hidden border-b border-canvas-800 bg-gradient-to-b from-canvas-800/40 via-canvas-900 to-canvas-900 pt-10 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-xs font-medium mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Diseño 1: Dark Slate Studio (Original)</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white max-w-3xl">
                Historias en viñetas, tinta y mundos ilustrados.
              </h1>
              <p className="mt-3 text-sm sm:text-base text-ink-400 max-w-2xl leading-relaxed">
                Galería visual de cómics independientes y portafolio de arte gráfico con estética minimalista oscura y glassmorphic.
              </p>
            </div>
          </section>

          <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
            {loading ? (
              <div className="py-24 text-center text-ink-400">
                <div className="inline-block w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-sm">Cargando catálogo visual...</p>
              </div>
            ) : (
              <>
                <DarkFilterBar
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                  availableTags={availableTags}
                  selectedTag={selectedTag}
                  onSelectTag={setSelectedTag}
                  totalResults={filteredPosts.length}
                  onResetFilters={handleResetFilters}
                />
                <DarkGalleryGrid
                  posts={filteredPosts}
                  onSelectPost={setActivePost}
                  onSelectTag={setSelectedTag}
                  onResetFilters={handleResetFilters}
                />
              </>
            )}
          </main>
        </>
      )}

      {/* ============================================================== */}
      {/* DISEÑO 2: ANIME MODERNO (NEON POP)                            */}
      {/* ============================================================== */}
      {activeTheme === THEMES.DESIGN_2_ANIME && (
        <>
          <AnimeNavbar
            activeCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setSelectedTag(null);
            }}
          />

          <AnimeHero />

          <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
            {loading ? (
              <div className="py-24 text-center text-pink-400">
                <div className="inline-block w-8 h-8 border-2 border-pink-500 border-t-transparent rounded-full animate-spin mb-4" />
                <p className="text-sm font-bold">CARGANDO RADAR ANIME...</p>
              </div>
            ) : (
              <>
                <AnimeFilterBar
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                  availableTags={availableTags}
                  selectedTag={selectedTag}
                  onSelectTag={setSelectedTag}
                  totalResults={filteredPosts.length}
                  onResetFilters={handleResetFilters}
                />
                <AnimeGalleryGrid
                  posts={filteredPosts}
                  onSelectPost={setActivePost}
                  onSelectTag={setSelectedTag}
                  onResetFilters={handleResetFilters}
                />
              </>
            )}
          </main>
        </>
      )}

      {/* ============================================================== */}
      {/* DISEÑO 3: CLASSIC BLOG (OLD SCHOOL EDITORIAL)                  */}
      {/* ============================================================== */}
      {activeTheme === THEMES.DESIGN_3_CLASSIC && (
        <>
          <ClassicNavbar
            activeCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setSelectedTag(null);
            }}
          />

          <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
            {loading ? (
              <div className="py-24 text-center font-typewriter text-[#1a1614]">
                <p className="text-sm font-bold">[Componiendo páginas de imprenta...]</p>
              </div>
            ) : (
              <>
                <ClassicFilterBar
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                  availableTags={availableTags}
                  selectedTag={selectedTag}
                  onSelectTag={setSelectedTag}
                  totalResults={filteredPosts.length}
                  onResetFilters={handleResetFilters}
                />
                <ClassicGalleryGrid
                  posts={filteredPosts}
                  onSelectPost={setActivePost}
                  onSelectTag={setSelectedTag}
                  onSelectCategory={setSelectedCategory}
                  onResetFilters={handleResetFilters}
                />
              </>
            )}
          </main>
        </>
      )}

      {/* ============================================================== */}
      {/* DISEÑO 4: NEO-DIGITAL AVANT-GARDE 2026                        */}
      {/* ============================================================== */}
      {activeTheme === THEMES.DESIGN_4_AVANT && (
        <>
          <AvantNavbar
            activeCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setSelectedTag(null);
            }}
          />

          <AvantHero />

          <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
            {loading ? (
              <div className="py-24 text-center text-lime-400 font-mono text-sm">
                INITIALIZING 2026 SPATIAL ENGINE...
              </div>
            ) : (
              <>
                <AvantFilterBar
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                  availableTags={availableTags}
                  selectedTag={selectedTag}
                  onSelectTag={setSelectedTag}
                  totalResults={filteredPosts.length}
                  onResetFilters={handleResetFilters}
                />
                <AvantGalleryGrid
                  posts={filteredPosts}
                  onSelectPost={setActivePost}
                  onSelectTag={setSelectedTag}
                  onResetFilters={handleResetFilters}
                />
              </>
            )}
          </main>
        </>
      )}

      {/* ============================================================== */}
      {/* DISEÑO 5: MUSGO & MADRIGUERA (TOUCH GRASS & COZY BURROW)       */}
      {/* ============================================================== */}
      {activeTheme === THEMES.DESIGN_5_MOSS && (
        <>
          <MossNavbar
            activeCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setSelectedTag(null);
            }}
          />

          <MossHero />

          <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
            {loading ? (
              <div className="py-24 text-center font-fraunces text-emerald-300 text-sm italic">
                🌿 Preparando el té y ordenando las hojas...
              </div>
            ) : (
              <>
                <MossFilterBar
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                  availableTags={availableTags}
                  selectedTag={selectedTag}
                  onSelectTag={setSelectedTag}
                  totalResults={filteredPosts.length}
                  onResetFilters={handleResetFilters}
                />
                <MossGalleryGrid
                  posts={filteredPosts}
                  onSelectPost={setActivePost}
                  onSelectTag={setSelectedTag}
                  onResetFilters={handleResetFilters}
                />
              </>
            )}
          </main>
        </>
      )}

      {/* Visor Modal de Post Adaptado al Tema Activo */}
      {activePost && (
        <PostModal
          post={activePost}
          allPosts={filteredPosts}
          onClose={() => setActivePost(null)}
          onSelectPost={setActivePost}
          onSelectTag={setSelectedTag}
          theme={activeTheme}
        />
      )}

      {/* Footer Adaptado según el tema activo */}
      {activeTheme === THEMES.DESIGN_5_MOSS ? (
        <footer className="border-t border-[#2d4234] bg-[#0d1610]/95 py-8 px-4 sm:px-6 lg:px-8 text-xs text-[#8ca895] font-fraunces">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-emerald-200">DARO.</span>
              <span>&copy; {new Date().getFullYear()} — La Madriguera del Lector & Creador de Cómics</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <Sprout className="w-4 h-4" />
              <span className="italic">Respirá hondo, leé una tira y tocá un poco de pasto hoy.</span>
            </div>
          </div>
        </footer>
      ) : activeTheme === THEMES.DESIGN_4_AVANT ? (
        <footer className="border-t border-white/[0.08] bg-[#060608]/95 py-8 px-4 sm:px-6 lg:px-8 text-xs font-mono text-zinc-400">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-syne font-bold text-white">DARO.LAB // 2026</span>
              <span>&copy; {new Date().getFullYear()} — GRAPHIC VISUAL LAB</span>
            </div>
            <div className="flex items-center gap-2 text-lime-400">
              <Compass className="w-3.5 h-3.5" />
              <span>DISEÑO 4: AVANT-GARDE 2026 READY</span>
            </div>
          </div>
        </footer>
      ) : activeTheme === THEMES.DESIGN_3_CLASSIC ? (
        <footer className="border-t-4 border-[#1a1614] bg-[#f0ebe1] py-8 px-4 sm:px-6 lg:px-8 text-xs font-typewriter text-[#1a1614]">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-bold">
              THE DAILY DARO &copy; {new Date().getFullYear()} — EDICIÓN IMPRESA & WEB INDEPENDIENTE
            </div>
            <div className="text-[11px] text-[#5a5247]">
              Tipografía: Lora & Courier Prime • Preparado para VPS / Servidor Propio
            </div>
          </div>
        </footer>
      ) : activeTheme === THEMES.DESIGN_2_ANIME ? (
        <footer className="border-t border-pink-500/20 bg-[#0d071d]/90 py-8 px-4 sm:px-6 lg:px-8 text-xs text-purple-300">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-manga font-bold text-pink-400">DARO COMICS // ダロ</span>
              <span>&copy; {new Date().getFullYear()} — ANIME & MANGA PRODUCTION</span>
            </div>
            <div className="flex items-center gap-2 text-pink-400 font-mono text-[11px]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DISEÑO 2: CYBERPUNK POP ANIME ACTIVADO</span>
            </div>
          </div>
        </footer>
      ) : (
        <footer className="border-t border-canvas-800 bg-canvas-900/80 py-8 px-4 sm:px-6 lg:px-8 text-xs text-ink-400">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-ink-100">DARO.</span>
              <span>&copy; {new Date().getFullYear()} — Plataforma de Arte Independiente</span>
            </div>
            <div className="flex items-center gap-4 text-ink-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Terminal className="w-3.5 h-3.5" />
                Production Ready
              </span>
              <span>•</span>
              <span className="text-accent-light">DISEÑO 1: Dark Slate Studio</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
