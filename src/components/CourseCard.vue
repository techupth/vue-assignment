<template>
  <!-- MARK: การ์ดคอร์ส 1 ใบ — รับข้อมูลจาก props แล้ว emit ตอนกดโปรด -->
  <article class="course-card">
    <!-- MARK: Fake Store API ใช้ฟิลด์ title / price ไม่ใช่ name -->
    <h3>ชื่อคอร์ส: {{ course.title }}</h3>
    <p>ราคา: {{ course.price }} บาท</p>

    <!-- MARK: ยังไม่กรอกชื่อ → disabled = true, กรอกแล้วกดได้ -->
    <button
      type="button"
      :disabled="!canAddFavorite"
      @click="emit('favorite')"
    >
      เพิ่มในรายการโปรด
    </button>
  </article>
</template>

<script setup>
import { computed } from "vue";
import { useFavoriteStore } from "../stores/favorite";

// MARK: รับ object สินค้าจากหน้า Courses (id, title, price, ...)
defineProps({
  course: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["favorite"]);

const favoriteStore = useFavoriteStore();

// MARK: trim() เพื่อกันกรณีกรอกแต่ช่องว่าง
const canAddFavorite = computed(() => favoriteStore.username.trim().length > 0);
</script>

<style scoped>
.course-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
  padding: 12px 16px;
}

h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
}

p {
  margin: 0;
  color: #555;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  flex-shrink: 0;
}

button:hover:not(:disabled) {
  background-color: #2c9c6d;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
