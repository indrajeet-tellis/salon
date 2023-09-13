<template>
  <div class="box">
    <img src="/assets/one.png" />
    <p class="mb-0">
      {{ title }}
    </p>
  </div>
</template>
<script setup>
import "../style/main.css";

defineProps({
  title: String,
});
</script>
<style scoped>
.box {
  border-radius: 10px;
  margin-bottom: 25px;
  background: #fff;
  height: 160px;
  text-align: center;
  margin-top: 20px;
  padding: 10px 0;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.28);
}
p {
  color: #333333;
  font-size: 11px !important;
  font-weight: 400 !important;
  width: 107px;
  margin: 6px auto;
}
</style>
