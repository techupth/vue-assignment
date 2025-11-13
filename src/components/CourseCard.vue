<template>
  <div class="course-card">
    <div>
      <h3>ชื่อคอร์ส: {{ course.title }}</h3>
      <p>ราคา: {{ course.price }} บาท</p>
    </div>
    <button 
      @click="handleAddFavorite"
      :disabled="disabled"
      :class="{ 'disabled': disabled }"
    >
      เพิ่มในรายการโปรด
    </button>
  </div>
</template>

<script setup>
import { useFavoriteStore } from "@/stores/favorite";

const props = defineProps({
  course: {
    type: Object,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const store = useFavoriteStore();

const handleAddFavorite = () => {
  if (!props.disabled) {
    store.addFavorite(props.course);
  }
};
</script>

<style scoped>
.course-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #ffffff;
  padding: 16px 20px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.4;
}

p {
  margin: 0;
  color: #333;
  font-size: 16px;
  font-weight: 500;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  transition: background-color 0.2s;
}

button:hover:not(.disabled) {
  background-color: #2c9c6d;
}

button.disabled {
  background-color: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}
</style>