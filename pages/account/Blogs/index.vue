<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <mobile-heading class="" name="Blogs" />
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section style="margin-bottom: 100px">
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

export default {
  components: {
    MobileHeading,
  },
};
</script>
<style scoped>
.HEAD {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
