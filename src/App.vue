<template>
  <nav>
    <RouterLink to="/">🏠 Courses</RouterLink>
    <RouterLink to="/summary">📋 Summary</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
nav {
  margin: 20px;
  text-align: center;
}
a {
  margin: 0 12px;
  color: #42b883;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 600;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.2s;
}
a:hover {
  text-decoration: underline;
  background-color: rgba(66, 184, 131, 0.1);
}
</style>