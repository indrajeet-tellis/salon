<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <mobile-heading class="text-center" name="Themes" />
          </div>
        </div>
      </div>
      <!-- <div class="tab-main">
        <TabSwitch one="Google" rightText="Facebook" />
      </div> -->
    </div>
  </div>
  <section style="margin-bottom: 200px">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="theme-app-text">
            How do you want to view your app theme.
          </h2>

          <div class="both-btn">
            <DemoButton name="View Screenshots" style="margin: 0 auto" />
            <DemoBorderButton
              name="Watch Video"
              style="margin: 16px auto 0 auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MobileHeading from "../../../components/mobile-heading.vue";
import TabSwitch from "../../../components/TabSwitch.vue";

import { ref } from "vue";
export default {
  components: {
    MobileHeading,
    TabSwitch,
  },
  setup() {
    const currentTab = ref("About");

    const handleActiveTab = (params) => {
      currentTab.value = params;
    };
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  },
};
</script>
<style scoped>
.HEAD {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
:deep(.bell path) {
  color: #fff;
}
</style>
