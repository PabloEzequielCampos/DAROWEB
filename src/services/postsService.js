import postsData from '../data/posts.json';

/**
 * Servicio desacoplado para la gestión de posts.
 * Facilita la futura migración de JSON local a API REST / CMS sin modificar la UI.
 */

export const postsService = {
  /**
   * Obtiene todos los posts disponibles
   */
  async getAll() {
    // Simula una promesa asíncrona para que la UI ya esté habituada al patrón async
    return Promise.resolve([...postsData]);
  },

  /**
   * Obtiene un post específico por su ID
   */
  async getById(id) {
    const post = postsData.find((p) => p.id === id);
    return Promise.resolve(post || null);
  },

  /**
   * Extrae la lista de categorías únicas y la cantidad de elementos en cada una
   */
  getCategories(posts = postsData) {
    const categoriesMap = posts.reduce((acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    }, {});

    return [
      { name: 'Todos', count: posts.length },
      ...Object.entries(categoriesMap).map(([name, count]) => ({ name, count })),
    ];
  },

  /**
   * Extrae todos los tags únicos existentes
   */
  getUniqueTags(posts = postsData) {
    const tagsSet = new Set();
    posts.forEach((post) => {
      post.tags?.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  },
};
