<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <mobile-heading class="text-center" name="Book Demo" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <section>
    <h3 class="demo-book-subHeading">Select your salon type</h3>
    <demo-button class="mx-auto" name="Next" />
  </section>
</template>
<script>
import MobileHeading from "../../../components/mobile-heading.vue";
import DemoButton from "../../../components/demo-button.vue";
export default {
  components: {
    MobileHeading,
    DemoButton,
  },
  setup() {
    let database = ref([
      {
        name: "string",
      },
    ]);
  },
};
</script>
<style scoped>
.HEAD {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.demo-book-subHeading {
  color: #2c3b91;
  font-size: 18px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin: 10px auto;
}
</style>
