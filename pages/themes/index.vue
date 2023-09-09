<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <MobileHeading name="Themes" />
              <i class="fa-solid fa-xmark" @click="handleCurrentCross"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section style="margin-bottom: 200px">
    <div class="container">
      <div class="scroll-container themes-scroll-container">
        <div class="row">
          <div class="col">
            <TabSwitch :tabNames="tabNames" v-on:active-tab="handleActiveTab" />
            <div class="main-container">
              <div v-if="currentTab === 'App'">
                <div class="middle-section">
                  <ThemeApp name="How do you want to view your app theme." />
                </div>
              </div>
              <div v-if="currentTab === 'Website'">
                <div class="middle-section">
                  <SelecSalonType />
                  <div class="website-btn">
                    <DemoButton name="Select" @click="handleCurrentHairSalon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MobileHeading from "../../components/mobile-heading.vue";
import "../../style/main.css";
import TabSwitch from "../../components/TabSwitch.vue";
import ThemeApp from "../../components/ThemeApp.vue";
import SelecSalonType from "../../components/SelecSalonType.vue";
import DemoButton from "../../components/demo-button.vue";

// const components = {
//   MobileHeading,
//   TabSwitch,
// };

const currentTab = ref("App");
const tabNames = ["App", "Website"];
const handleActiveTab = (params) => {
  currentTab.value = params;
};

const handleCurrentCross = (params) => {
  navigateTo("/");
};

const handleCurrentHairSalon = (params) => {
  navigateTo("/themes/themeHairSalon");
};
</script>

<style scoped>
.website-btn {
  position: fixed;
  bottom: 130px;
  left: 59px;
}
.themes-scroll-container {
  margin-top: 142px;
}
.h-100 {
  height: 100%;
}
.theme-app-text {
  margin-top: 90px;
  color: #333;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 260px;
  margin: 90px auto 0 auto;
}
.both-btn {
  margin-top: 65px;
}
.card-header h5 {
  font-size: 2.2rem;
  color: #444053;
}

.card-header p {
  margin-top: 0.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: #444053;
}

.category-card {
  background-color: red;
  height: 10rem;
  padding: 1.2rem 1.5rem;
  border-radius: 1rem;
  background-size: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 1rem;
}
.review-container {
  margin: 1rem 0;
  background-color: #efefef;
  border-radius: 1rem;
  padding: 0.5rem 0.6rem;
  column-gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.review-switch {
  background-color: #efefef;
  color: #737373;
  padding: 1rem 2rem;
  border-radius: 1rem;
  flex: 1;
}

.review-switch-active {
  background-color: #fff;
  color: #d450bc;
}
.review-text {
  text-align: center;
  font-size: 1.4rem;
  font-weight: 500;
}
/* :deep(.bell path) {
  color: #fff;
} */
</style>
