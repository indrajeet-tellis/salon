<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <MobileHeading class="" name="FAQ’s" />
              <i
                class="fa-solid fa-xmark"
                @click="handleCurrentCross('update')"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section style="margin-bottom: 200px">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="text-center mt-4"><img src="/assets/faqs-img.png" /></div>
          <div>
            <Accordian />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MobileHeading from "../../../components/mobile-heading.vue";

export default {
  components: {
    MobileHeading,
  },
  data() {
    return {
      CurrentCross: "send",
    };
  },
  methods: {
    handleCurrentCross(params) {
      this.currentCross = params;
      navigateTo("/account");
    },
  },
};
</script>
<style scoped>
.HEAD {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.fw-bold {
  color: #2c3b91 !important;
  font-family: Roboto !important;
  font-size: 16px !important;
  font-style: normal !important;
  font-weight: 500 !important;
  line-height: normal !important;
  letter-spacing: 0.048px !important;
}
</style>
