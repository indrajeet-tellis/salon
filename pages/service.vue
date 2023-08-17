<template>
  <section class="features">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="head fw-bold text-center mt-3">Features of our website</h2>
          <div class="d-flex">
            <div class="left">
              <img src="/assets/feature.png" alt="feature.png" />
            </div>
            <div class="right d-flex align-items-center"></div>
            <button class="" @click="handleCurrentBack('update')">
              Back to home
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <bottom-nav />
</template>

<script>
export default {
  data() {
    return {
      currentBack: "send-btn",
    };
  },
  methods: {
    handleCurrentBack(params) {
      console.log(params);
      // navigateTo("/");
      this.currentBack = params;
      navigateTo("/");
      console.log(this.currentBack);
    },
  },
};
</script>
