<template>
  <div class="demo-button">
    <a href="#">
      {{ name }}
    </a>
  </div>
</template>

<script setup>
defineProps({
  name: String,
});
</script>

<style scoped>
.demo-button {
  background: #ed0046;
  text-align: center;
  width: 260px;
  border-radius: 1050px;
  padding-top: 6px;
  padding-bottom: 6px;
}
.demo-button a {
  display: inline-block;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
}
</style>
