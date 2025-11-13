<template>
  <div class="page-container">
    <header>
      <h2>📚 Course List</h2>
      <!-- แสดงจำนวนคอร์สที่ถูกใจจาก store -->
      <p>❤️ ถูกใจแล้ว {{ store.favoriteCount }} คอร์ส</p>
    </header>

    <div class="form-section">
      <label>ชื่อผู้ใช้:</label>
      <!-- v-model username -->
      <input 
        v-model="store.username" 
        placeholder="กรอกชื่อของคุณ" 
      />
    </div>

    <div class="course-list">
      <!-- Render CourseCard -->
      <CourseCard 
        v-for="course in courses" 
        :key="course.id"
        :course="course"
        :disabled="!store.username"
      />
    </div>

    <div style="margin-top: 20px;">
      <RouterLink to="/summary">ไปหน้า Summary</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import CourseCard from "@/components/CourseCard.vue";
import { useFavoriteStore } from "@/stores/favorite";

const store = useFavoriteStore();
const courses = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    courses.value = response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
});
</script>

<style scoped>
.page-container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}

header h2 {
  color: #ffffff;
  font-size: 2em;
  font-weight: 700;
  margin: 20px 0 10px 0;
}

header p {
  color: #ffffff;
  font-size: 1.1em;
  font-weight: 500;
  margin: 10px 0 20px 0;
}

.form-section {
  margin: 20px 0;
}

.form-section label {
  display: block;
  margin-bottom: 8px;
  color: #ffffff;
  font-size: 1em;
  font-weight: 500;
}

.form-section input {
  padding: 10px 14px;
  border: 2px solid #555;
  border-radius: 6px;
  width: 250px;
  background-color: #f5f5f5;
  color: #333;
  font-size: 1em;
}

.form-section input:focus {
  outline: none;
  border-color: #42b883;
  background-color: #ffffff;
}

.course-list {
  margin-top: 24px;
}

a {
  color: #42b883;
  font-weight: 600;
  text-decoration: none;
  font-size: 1em;
}

a:hover {
  text-decoration: underline;
  color: #2c9c6d;
}
</style>