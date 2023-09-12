<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <mobile-heading class="" name="Book Demo" />
              <i
                class="fa-solid fa-xmark"
                @click="handleCurrentCross('update')"
              ></i>
            </div>
            <div class="mt-3"><select-box /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="position-relative">
    <div class="container">
      <div class="scroll-container">
        <h3 class="demo-book-subHeading">Select your salon type</h3>
        <SelecSalonType name="Select your salon type" />
        <demo-button
          class="mx-auto btn"
          name="Next"
          @click="handleCurrentNext"
        />
      </div>
    </div>
  </section>
</template>
<script>
import MobileHeading from "../../../components/mobile-heading.vue";
import DemoButton from "../../../components/demo-button.vue";
import SelectBox from "../../../components/select-box.vue";
import "../../../style/main.css";
import SelecSalonType from "../../../components/SelecSalonType.vue";
export default {
  components: {
    MobileHeading,
    DemoButton,
    SelectBox,
    SelecSalonType,
  },
  data() {
    return {
      CurrentCross: "send",
      CurrentNext: "send",
    };
  },
  methods: {
    handleCurrentCross(params) {
      this.currentCross = params;
      navigateTo("/requestDemo");
    },
    handleCurrentNext(params) {
      this.currentNext = params;
      navigateTo("/requestDemo/demoBook-staff");
    },
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
.demo-book-subHeading {
  color: #2c3b91;
  font-size: 18px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin: 10px auto;
}
.label-box {
  margin-top: 20px;
}

.btn {
  position: fixed;
  bottom: 20%;
  left: 16%;
}
</style>
