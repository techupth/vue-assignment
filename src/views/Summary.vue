<template>
  <div class="page-container">
    <h2>📋 Summary</h2>
    
    <!-- ตรวจสอบว่ามีข้อมูลหรือไม่ -->
    <div v-if="!store.username || store.favorites.length === 0">
      <p>ยังไม่มีข้อมูลการเลือกคอร์ส</p>
    </div>
    
    <div v-else>
      <p>ชื่อผู้ใช้: {{ store.username }}</p>
      <p>จำนวนคอร์สที่ถูกใจ: {{ store.favoriteCount }}</p>
    </div>

    <div style="margin-top: 20px;">
      <RouterLink to="/">กลับไปหน้า Course</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useFavoriteStore } from "@/stores/favorite";

const store = useFavoriteStore();
</script>

<style scoped>
.page-container {
  text-align: center;
  padding: 40px;
}

h2 {
  color: #ffffff;
  font-size: 2em;
  font-weight: 700;
  margin: 20px 0 30px 0;
}

p {
  color: #ffffff;
  font-size: 1.2em;
  font-weight: 500;
  margin: 15px 0;
}

a {
  color: #42b883;
  font-weight: 600;
  text-decoration: none;
  font-size: 1em;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.2s;
}

a:hover {
  text-decoration: underline;
  background-color: rgba(66, 184, 131, 0.1);
}
</style>