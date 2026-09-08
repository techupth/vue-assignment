import { defineStore } from "pinia";

// MARK: store รวมชื่อผู้ใช้ + รายการคอร์สที่ถูกใจ ให้หน้า / และ /summary ใช้ร่วมกัน
export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    username: "",
    favorites: [] as string[],
  }),
  actions: {
    setUsername(name: string) {
      this.username = name;
    },
    // MARK: รับชื่อคอร์ส (title จาก API) แล้วเพิ่มใน favorites
    addFavorite(course: string) {
      this.favorites.push(course);
    },
  },
});
