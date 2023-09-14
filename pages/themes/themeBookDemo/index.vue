<template>
  <section
    class="main"
    :style="{ backgroundImage: 'url(/assets/package-img.png)' }"
  >
    <i class="fa-solid fa-xmark icon" @click="handleCurrentCross"></i>
    <h1 class="theme-app-text">App Builder</h1>
    <h4 class="appBuilder-text">
      With our App Builder feature you can customize theme colour, splash
      screen, onboarding screen and much more.
    </h4>
    <h3 class="theme-app-subText">
      What do you want to use to view your app theme.
    </h3>
    <div class="both-btn">
      <DemoButton name="Use App Builder" style="margin: 0 auto" />
      <DemoBorderButton
        name="Use Default Theme"
        style="margin: 20px auto 0 auto"
      />
    </div>
  </section>
</template>
<script>
import DemoButton from "../../../components/demo-button.vue";
import DemoBorderButton from "../../../components/demo-border-button.vue";
import "../../../style/main.css";
export default {
  components: {
    DemoButton,
    DemoBorderButton,
  },
  data() {
    return {
      CurrentCross: "send",
    };
  },
  methods: {
    handleCurrentCross(params) {
      this.currentCross = params;
      navigateTo("/themes");
    },
  },
};
</script>
<style scoped>
.icon {
  position: absolute;
  right: 17px;
  top: 15px;
}
.main {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 180px 0 462px 0;
  overflow: hidden !important;
  height: 100vh;
}
.theme-app-text {
  color: #2c3b91;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 0 !important;
}
.appBuilder-text {
  color: #333;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  width: 339px;
  margin: 51px auto 0 auto;
}
.theme-app-subText {
  color: #2c3b91;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  width: 329px;
  margin: 31px auto 0 auto;
}

.both-btn {
  position: fixed;
  bottom: 35px;
  left: 32px;
}
</style>
