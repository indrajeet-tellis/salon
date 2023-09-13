<template>
  <div class="box">
    <img src="/assets/fOne.png" />
    <h3 class="">{{ text }}</h3>
    <p class="">
      {{ subText }}
    </p>
  </div>
</template>
<script setup>
import "../style/main.css";

defineProps({
  text: String,
  subText: String,
});
</script>
<style scoped>
.box {
  border-radius: 20px;
  padding: 15px 10px;
  background: #fff;
  height: 238px;
  text-align: center;
}
h3 {
  color: #2c3b91;
  font-size: 14px !important;
  font-weight: 500 !important;
  margin-top: 15px;
}
p {
  color: #201f1f;
  font-size: 11px !important;
  font-weight: 400 !important;

  width: 172px;
  margin: 6px auto;
}
</style>
