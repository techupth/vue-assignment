<template>
  <div class="page-container">
    <header>
      <h2>📚 Course List</h2>

      <!-- TODO: แสดงจำนวนคอร์สที่ถูกใจจาก store -->
      <p>❤️ ถูกใจแล้ว {{ favoriteStore.favorites.length }} คอร์ส</p>
    </header>

    <div class="form-section">
      <label>ชื่อผู้ใช้:</label>
      <!-- TODO: v-model username -->
      <input v-model="favoriteStore.username" placeholder="กรอกชื่อของคุณ" />
    </div>

    <div class="course-list">
      <!-- TODO: Render CourseCard -->
      <CourseCard
        v-for="course in courses"
        :key="course.id"
        :course="course"
        @favorite="favoriteStore.addFavorite(course.name)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CourseCard from "../components/CourseCard.vue";
// TODO: import axios
import axios from "axios";
// TODO: import { useFavoriteStore } จาก "../stores/favorite"
import { useFavoriteStore } from "../stores/favorite";

const courses = ref([]);
// TODO: ดึงข้อมูลจาก API ด้วย axios.get() แล้วเก็บใน courses
axios.get("https://api.example.com/courses").then((response) => {
  courses.value = response.data;
});
// TODO: ใช้ store เพื่อเข้าถึง username และ favorites
const favoriteStore = useFavoriteStore();

onMounted(async () => {
  const response = await axios.get("https://api.example.com/courses");

  courses.value = response.data;
});
</script>
