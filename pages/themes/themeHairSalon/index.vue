<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <mobile-heading class="text-center" name="Hair Salon" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="main">
    <demo-button name="Select" style="margin: 100px auto 0 auto" />
  </div>
</template>
<script>
import MobileHeading from "../../../components/mobile-heading.vue";
import DemoButton from "../../../components/demo-button";
export default {
  components: {
    MobileHeading,
    DemoButton,
  },
};
</script>
<style scoped>
.HEAD {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.main {
  margin-bottom: 100px;
}
</style>
