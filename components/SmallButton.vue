<template>
  <div class="small-button">
    <a href="#">{{ name }}</a>
  </div>
</template>
<script setup>
import "../style/main.css";
defineProps({
  name: String,
});
</script>
<style scoped>
.small-button {
  width: 68px;
  background: #ed0046;
  border-radius: 50px;
  height: 22px;
  text-align: center;
  line-height: 15px;
}
.small-button a {
  color: #fff !important;
  font-size: 8px;
  font-weight: 500;
  text-decoration: none !important;
}
</style>
