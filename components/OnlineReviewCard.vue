<template>
  <div class="online-main">
    <img src="/assets/on-one.png" />
    <h3 class="">
      {{ heading }}
    </h3>
    <p class="">
      {{ subheading }}
    </p>
  </div>
</template>
<script setup>
import "../style/main.css";
defineProps({
  heading: String,
  subheading: String,
  url: String,
});
</script>

<style scoped>
.online-main {
  border-radius: 15px;
  padding: 15px 10px;
  margin-bottom: 38px;
  height: 222px;
  background: #fff;
  -webkit-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.32);
  box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.32);
}
.online-main h3 {
  color: #201f1f;
  font-size: 14px;
  font-weight: 500;
  margin-top: 15px;
}
.online-main p {
  color: #201f1f;
  font-size: 11px;
  font-weight: 400;
  width: 172px;
  margin-top: 18px;
}
</style>
