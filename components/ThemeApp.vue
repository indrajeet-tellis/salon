<template>
  <div class="themeapp-main">
    <h2>{{ name }}</h2>

    <div class="both-btn">
      <DemoButton name="View Screenshots" style="margin: 0 auto" />
      <DemoBorderButton name="Watch Video" style="margin: 16px auto 0 auto" />
    </div>
  </div>
</template>
<script setup>
import DemoBorderButton from "../components/demo-border-button.vue";
import DemoButton from "../components/demo-button.vue";

defineProps({
  name: String,
});
</script>
<style scoped>
.both-btn {
  position: fixed;
  bottom: 22px;
  left: 35px;
}
.themeapp-main h2 {
  color: #333;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 265px;
  margin: 150px auto 70px auto;
}
</style>
