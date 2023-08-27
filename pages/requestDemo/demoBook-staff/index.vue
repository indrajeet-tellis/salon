<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <mobile-heading class="text-center" name="Book Demo" />
            <div class="mt-3"><select-box /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section style="margin-bottom: 100px">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Salon Name</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="ABC"
            />
          </div>
          <div class="text-center mt-5">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1"
                >Single Location</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2"
                >Multi Location</label
              >
            </div>
          </div>
          <div style="margin-top: 30px">
            <label for="exampleFormControlInput1" class="form-label"
              >Select Number of Staff</label
            >
            <select
              class="form-select"
              style=""
              aria-label="Default select example"
            >
              <option selected>5</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div class="" style="margin-top: 45px">
            <h4
              style="
                font-size: 16px;
                font-weight: 400;
                color: #2c3b91;
                font-family: 'DM Sans', sans-serif;
              "
            >
              Do you have website?
            </h4>
            <div
              class="form-check form-check-inline"
              style="margin-right: 6.5rem"
            >
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">No</label>
            </div>
          </div>
          <div class="" style="margin-top: 45px">
            <h4
              style="
                font-size: 16px;
                font-weight: 400;
                color: #2c3b91;
                font-family: 'DM Sans', sans-serif;
              "
            >
              Currently using any software?
            </h4>
            <div
              class="form-check form-check-inline"
              style="margin-right: 6.5rem"
            >
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">Yes</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">No</label>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex both-btn" style="gap: 20px; margin-top: 150px">
        <demo-button name="Previous" />
        <demo-button name="Next" v-bind:disabled="btnDisable" />
      </div>
    </div>
  </section>
</template>

<script>
import MobileHeading from "../../../components/mobile-heading.vue";
import DemoButton from "../../../components/demo-button.vue";
import SelectBox from "../../../components/select-box.vue";
// import "vuetify/styles";
// import { createVuetify } from "vuetify";
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";
export default {
  components: {
    MobileHeading,
    DemoButton,
    SelectBox,
  },
  data() {
    return {
      btnDisable: true,
    };
  },
  setup() {
    // const vuetify = createVuetify({
    //   components,
    //   directives,
    // });

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
.form-label {
  color: #2c3b91 !important;
  font-size: 16px;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  margin-top: 25px;
}
.form-control {
  color: #d9d9d9 !important;
  font-size: 12px;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  border: 1px solid #d9d9d9 !important;
}
.form-check-label {
  color: #000000 !important;
  font-size: 16px;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
}
.form-check-input {
  border: 1px solid #2c3b91 !important;
}
.form-check-input:checked {
  background: #2c3b91 !important;
}
.form-select {
  color: #232323 !important;
  font-size: 12px;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
}
</style>
