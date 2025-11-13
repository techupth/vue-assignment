<script setup>
import { ref } from "vue";
const name = ref("");

const participants = ref([]);

const addParticipant = () => {
  if (name.value.trim()) {
    participants.value.push(name.value);
    name.value = "";
  }
};
</script>

export default
<template>
  <div class="assignment-container">
    <h2>รายชื่อผู้เข้าร่วมกิจกรรม</h2>
    <input v-model="name" placeholder="กรอกชื่อผู้เข้าร่วม"/>
    <button @click="addParticipant"> เพิ่มชื่อ</button>

    <div class="participant-list"> 
      <p v-if="participants.length === 0">ยังไม่มีผู้เข้าร่วม</p>
      <ul v-else>
        <li v-for="(participant,index) in participants" :key="index">
        {{ participant }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.assignment-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 8px;
  background: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  margin: 0 0 20px 0;
  color: #333;
  font-size: 1.5em;
  text-align: center;
}

input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
  width: 200px;
  margin-right: 8px;
}

input:focus {
  outline: none;
  border-color: #999;
}

button {
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #f0f0f0;
}

.participant-list {
  margin-top: 20px;
}

.participant-list p {
  color: #666;
  text-align: center;
  margin: 20px 0;
}

.participant-list ul {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
}

.participant-list li {
  color: #333;
  margin: 8px 0;
  padding-left: 5px;
}
</style>
