<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <MobileHeading name="Hair Salon" />
              <i class="fa-solid fa-xmark" @click="handleCurrentCross"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="hairslaon-btn">
    <DemoButton name="Select" @click="handleCurrentAppbilder" />
  </div>
</template>
<script>
import MobileHeading from "../../../components/mobile-heading.vue";
import DemoButton from "../../../components/demo-button";
import "../../../style/main.css";
export default {
  components: {
    MobileHeading,
    DemoButton,
  },
  data() {
    return {
      CurrentCross: "send",
      CurrentAppbilder: "send",
    };
  },
  methods: {
    handleCurrentCross(params) {
      this.currentCross = params;
      navigateTo("/themes");
    },
    handleCurrentAppbilder(params) {
      this.currentAppbilder = params;
      navigateTo("/themes/themeBookDemo");
    },
  },
};
</script>
<style scoped>
.hairslaon-btn {
  position: fixed;
  bottom: 50px;
  left: 33px;
}
</style>
