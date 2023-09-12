<template>
  <div class="softwareitem">
    <div class="round">
      <img src="/assets/sof-one.png" />
    </div>
    <p class="software-tittle">{{ name }}</p>
  </div>
</template>
<script setup>
import "../style/main.css";
defineProps({
  name: String,
  url: String,
});
</script>
<style scoped>
.softwareitem {
  text-align: center;
  padding-top: 10px;
}
.software-tittle {
  width: 88px;
  margin-top: 12px;
  color: #333333;
  font-size: 12px;
  font-weight: 700;
}
.round {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.24);
  margin: 0 auto;
}
.round img {
  padding: 10px;
}
</style>
