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

import { ref } from "vue";
export default {
  components: {
    MobileHeading,
  },
  setup() {
    const activeTabId1 = ref("ex1-1");

    return {
      activeTabId1,
    };
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
</style>
