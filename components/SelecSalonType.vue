<template>
  <div class="selectsalon-main">
    <div class="main-item text-center d-flex">
      <div class="item">
        <div class="type-img"><img src="/assets/type-one.png" /></div>
        <h4 class="item-text">{{ text }}</h4>
      </div>
      <div class="item">
        <div class="type-img"><img src="/assets/type-two.png" /></div>
        <h4 class="item-text">{{ textTwo }}</h4>
      </div>
    </div>
  </div>
</template>
<script setup>
import "../style/main.css";
defineProps({
  text: String,
  textTwo: String,
});
</script>
<style scoped>
.item {
  width: 35%;
  background: #fff;
  margin: 0 auto;
  padding: 8px 10px;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.23);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.23);
  margin-top: 20px;
  border-radius: 5px;
  transition: 0.4s;
}

.type-img img {
  width: 100%;
}
.item-text {
  font-size: 15px;
  font-weight: 500;
  color: #2c3b91;
  margin-top: 9px;

  margin-bottom: 0 !important;
}
.tab-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  border-radius: 0.2rem;
  margin-bottom: 1.2rem;
}

.single-tab {
  padding: 4px 30px;
}

.ActiveTab {
  height: 26px;
  border-radius: 20px;
  background: #2c3b91;
}

.single-tab h5 {
  color: #2c3b91;
  text-align: center;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0 !important;
}

.ActiveName {
  color: white !important;
}
</style>
