<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <mobile-heading class="" name="Blogs" />
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
  <section>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card-main">
            <div class="card-item" style="margin-top: 21px"><blog-card /></div>
            <div class="card-item" style="margin-top: 30px"><blog-card /></div>
            <div class="card-item" style="margin-top: 30px"><blog-card /></div>
            <div class="card-item" style="margin-top: 30px"><blog-card /></div>
            <div class="" style="margin-top: 30px"><blog-card /></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import MobileHeading from "../../../components/mobile-heading.vue";
import "../../../style/main.css";

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
.card-main {
  margin-top: 133px;
}
.card-item {
  position: relative;
}
.card-item::after {
  position: absolute;
  left: -11px;
  bottom: -15px;
  content: "";
  width: 106%;
  height: 0.5px;
  background: #737373;
}
</style>
