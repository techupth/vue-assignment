import { defineStore } from 'pinia';

interface Course {
  id: number;
  title: string;
  price: number;
  [key: string]: any;
}

export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    username: '' as string,
    favorites: [] as Course[]
  }),
  
  actions: {
    setUsername(name: string) {
      this.username = name;
    },
    
    addFavorite(course: Course) {
      const exists = this.favorites.find((fav: Course) => fav.id === course.id);
      if (!exists) {
        this.favorites.push(course);
      }
    }
  },
  
  getters: {
    favoriteCount: (state) => state.favorites.length
  }
});