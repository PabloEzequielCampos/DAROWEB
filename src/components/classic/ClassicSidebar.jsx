import React from 'react';
import { Feather, Coffee, Rss, Calendar, Sparkles, BookOpen } from 'lucide-react';

export function ClassicSidebar({ onSelectCategory, onSelectTag }) {
  return (
    <aside className="space-y-6 font-typewriter text-xs text-[#1a1614]">
      {/* Caja de Perfil del Dibujante */}
      <div className="bg-white border-2 border-[#1a1614] shadow-[4px_4px_0px_#1a1614] p-4">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-[#1a1614]">
          <Feather className="w-4 h-4 text-[#1a1614]" />
          <h4 className="font-bold uppercase tracking-wider text-sm font-classic">
            El Taller de Daro
          </h4>
        </div>
        <div className="flex gap-3 items-center mb-3">
          <div className="w-14 h-14 bg-[#ffd166] border-2 border-[#1a1614] flex items-center justify-center font-classic text-xl font-bold shadow-[2px_2px_0px_#1a1614]">
            D.
          </div>
          <div>
            <p className="font-bold text-sm font-classic">Daro Cómics</p>
            <p className="text-[11px] text-[#5a5247]">Guionista & Dibujante</p>
            <p className="text-[10px] text-[#8a8175]">Buenos Aires, Arg.</p>
          </div>
        </div>
        <p className="font-classic text-xs text-[#4a4239] leading-relaxed mb-3">
          Historietas creadas a mano y tinta digital. Publicación periódica independiente dedicada al cómic de ciencia ficción, humor absurdo y estudio anatómico.
        </p>
        <div className="bg-[#f0ebe1] p-2 border border-[#1a1614] text-[11px]">
          <strong>Herramientas:</strong> Plumilla G-Pen, Tinta China, Pincel Kolinsky y Tableta gráfica.
        </div>
      </div>

      {/* Manifiesto Web Independiente */}
      <div className="bg-[#ffd166] border-2 border-[#1a1614] shadow-[4px_4px_0px_#1a1614] p-4">
        <h4 className="font-bold uppercase tracking-wider text-xs mb-1.5 flex items-center gap-1.5 font-typewriter">
          <Coffee className="w-4 h-4" /> Manifiesto Indie
        </h4>
        <p className="font-classic text-xs leading-relaxed text-[#1a1614]">
          "Este blog está alojado en infraestructura propia. Sin rastreadores corporativos, sin feeds manipulados y con total libertad creativa."
        </p>
      </div>

      {/* Archivo Histórico de Publicaciones */}
      <div className="bg-white border-2 border-[#1a1614] shadow-[4px_4px_0px_#1a1614] p-4">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-[#1a1614]">
          <Calendar className="w-4 h-4" />
          <h4 className="font-bold uppercase tracking-wider text-sm font-classic">
            Archivo de Publicaciones
          </h4>
        </div>
        <ul className="space-y-1.5 text-xs">
          <li>
            <button
              onClick={() => onSelectCategory('Todos')}
              className="hover:underline flex items-center justify-between w-full text-left"
            >
              <span>▸ Octubre 2026</span>
              <span className="font-bold bg-[#f0ebe1] px-1 border border-[#1a1614]">6 tiras</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => onSelectCategory('Todos')}
              className="hover:underline flex items-center justify-between w-full text-left text-[#5a5247]"
            >
              <span>▸ Septiembre 2026</span>
              <span className="font-bold bg-[#f0ebe1] px-1 border border-[#1a1614]">2 bocetos</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Sindicación RSS & Contacto */}
      <div className="bg-[#f0ebe1] border-2 border-[#1a1614] shadow-[4px_4px_0px_#1a1614] p-3 text-center">
        <div className="flex items-center justify-center gap-1.5 font-bold mb-1">
          <Rss className="w-4 h-4 text-orange-600" />
          <span>CANAL RSS / BOLETÍN</span>
        </div>
        <p className="text-[11px] text-[#5a5247] mb-2 font-classic">
          Recibí las viñetas directamente en tu lector preferido.
        </p>
        <button
          onClick={() => alert('¡Enlace RSS generado: /feed.xml')}
          className="w-full py-1.5 bg-white hover:bg-[#ffd166] border-2 border-[#1a1614] font-bold text-xs shadow-[2px_2px_0px_#1a1614] transition-all"
        >
          Copiar Enlace RSS
        </button>
      </div>
    </aside>
  );
}
