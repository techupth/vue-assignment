<template>
  <section class="page-container">
    <header>
      <h2>📚 Course List</h2>

      <!-- MARK: อ่านจาก Pinia เลย อัปเดต realtime เมื่อกดเพิ่มโปรด -->
      <p>❤️ ถูกใจแล้ว {{ favoriteStore.favorites.length }} คอร์ส</p>
    </header>

    <div class="form-section">
      <label for="username">ชื่อผู้ใช้:</label>
      <!-- MARK: ผูกชื่อเข้า store — CourseCard ใช้ค่านี้ไป disable ปุ่ม -->
      <input
        id="username"
        v-model="favoriteStore.username"
        placeholder="กรอกชื่อของคุณ"
      />
    </div>

    <!-- MARK: ลิงก์ไป /summary ตามโจทย์ (นอกเหนือจาก nav ใน App.vue) -->
    <p>
      <RouterLink to="/summary">ไปหน้า Summary</RouterLink>
    </p>

    <div class="course-list">
      <CourseCard
        v-for="course in courses"
        :key="course.id"
        :course="course"
        @favorite="favoriteStore.addFavorite(course.title)"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import CourseCard from "../components/CourseCard.vue";
import { useFavoriteStore } from "../stores/favorite";

const courses = ref([]);
const favoriteStore = useFavoriteStore();

// MARK: ดึงรายการจาก Fake Store ตาม Requirement หน้า /
onMounted(async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  courses.value = response.data;
});
</script>

<style scoped>
.page-container {
  text-align: center;
  padding: 40px;
}

.form-section {
  margin: 16px 0;
}

.course-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: auto;
  padding: 16px;
}
</style>
