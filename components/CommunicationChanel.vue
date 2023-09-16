<template>
  <div class="channel-main">
    <div class="d-flex channel-inner">
      <div class="box">
        <div class="item">
          <img :src="imgSrcOne" />
          <p class="itemText">{{ textOne }}</p>
        </div>
      </div>
      <div class="box">
        <div class="item">
          <img :src="imgSrcTwo" />
          <p class="itemText">{{ textTwo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import "../style/main.css";
defineProps({
  textOne: String,
  textTwo: String,
  imgSrcOne: String,
  imgSrcTwo: String,
});
</script>
<style scoped>
.box {
  width: 30%;
  margin-top: 35px;
  height: 120px;
  border-radius: 10px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
}
.item {
  background: #fff;
  margin: 0 auto;
  padding: 7px 6px;
  text-align: center;
}
.itemText {
  margin-top: 20px;
  color: #333;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
}
.channel-inner {
  column-gap: 44px;
  justify-content: center;
}
</style>
