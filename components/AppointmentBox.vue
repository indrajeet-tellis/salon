<template>
  <div class="round">
    <img src="/assets/appo-eight.png" style="size: 10%" />
    <p class="">
      {{ text }}
    </p>
  </div>
</template>
<script setup>
import "../style/main.css";
defineProps({
  text: String,
  url: String,
});
</script>
<style scoped>
.round {
  width: 60px;
  height: 60px;
  background: #2c3b91;
  border-radius: 50%;
  padding: 5px;
  bottom: 5%;
  left: 16%;
}
p {
  font-size: 8px;
  font-weight: 400;

  color: #fff;
  margin-top: 2px;
}
</style>
