<template>
  <section class="page-container">
    <h2>📋 Summary</h2>

    <!-- MARK: ไม่มีชื่อ หรือยังไม่เลือกคอร์ส → ข้อความตามโจทย์ -->
    <p v-if="!hasCourseSelection">ยังไม่มีข้อมูลการเลือกคอร์ส</p>

    <div v-else>
      <p>ชื่อผู้ใช้: {{ favoriteStore.username }}</p>
      <p>จำนวนคอร์สที่ถูกใจ: {{ favoriteStore.favorites.length }}</p>
    </div>

    <p>
      <RouterLink to="/">กลับไปหน้า Course</RouterLink>
    </p>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useFavoriteStore } from "../stores/favorite";

const favoriteStore = useFavoriteStore();

// MARK: ต้องมีทั้งชื่อ และอย่างน้อย 1 คอร์ส ถึงถือว่ามีข้อมูลการเลือก
const hasCourseSelection = computed(
  () =>
    favoriteStore.username.trim().length > 0 &&
    favoriteStore.favorites.length > 0,
);
</script>

<style scoped>
.page-container {
  text-align: center;
  padding: 40px;
}
</style>
