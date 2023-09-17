<template>
  <div class="HEAD" :style="{ backgroundImage: 'url(/assets/banner.png)' }">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="py-5">
            <div class="d-flex align-items-center justify-content-between">
              <i class="fa-solid fa-angle-left"></i>
              <mobile-heading class="text-center" name="Book Demo" />
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
  <section>
    <div class="container position-relative">
      <div class="scroll-container demoLocation-scroll-container">
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
            <div class="mt-5">
              <div class="form-check form-check-inline single-form-check">
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
                >Select Number of Location</label
              >
              <select
                class="form-select"
                style=""
                aria-label="Default select example"
              >
                <option selected>ABC</option>
                <option value="1">XYZ</option>
                <option value="2">PQR</option>
              </select>
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
                <option value="1">10</option>
                <option value="2">15</option>
              </select>
            </div>
            <div class="" style="margin-top: 45px">
              <h4 style="font-size: 16px; font-weight: 600; color: #2c3b91">
                Do you have website?
              </h4>
              <div
                class="form-check form-check-inline"
                style="margin-right: 6.5rem; margin-top: 13px"
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
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="www.abc.com"
              style="margin-top: 14px"
            />
            <div class="" style="margin-top: 45px">
              <h4 style="font-size: 16px; font-weight: 600; color: #2c3b91">
                Currently using any software?
              </h4>
              <div
                class="form-check form-check-inline"
                style="margin-right: 6.5rem; margin-top: 13px"
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
            <div style="margin-top: 30px">
              <label for="exampleFormControlInput1" class="form-label"
                >Choose software</label
              >
              <select
                class="form-select"
                style=""
                aria-label="Default select example"
              >
                <option selected>ABC</option>
                <option value="1">XYZ</option>
                <option value="2">other</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Other</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Place the name of software you used"
              />
            </div>
          </div>
        </div>
        <div class="d-flex both-btn">
          <demo-button name="Previous" />
          <demo-button
            name="Next"
            @click="handleCurrentCommunication(update)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MobileHeading from "../../../components/mobile-heading.vue";
import DemoButton from "../../../components/demo-button.vue";
import SelectBox from "../../../components/select-box.vue";
import "../../../style/main.css";

export default {
  components: {
    MobileHeading,
    DemoButton,
    SelectBox,
  },

  data() {
    return {
      CurrentCross: "send",
      CurrentCommunication: "send",
    };
  },
  methods: {
    handleCurrentCross(params) {
      this.currentCross = params;
      navigateTo("/requestDemo");
    },
    handleCurrentCommunication(params) {
      this.currentCommunication = params;
      navigateTo("/requestDemo/demo-communication-chanel");
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
.demoLocation-scroll-container {
  height: 65vh !important;
}
.both-btn {
  gap: 20px;
  margin-top: 90px;
  position: fixed;
  bottom: 14px;
  left: 0;
  width: 100%;
  padding: 0 1rem;
}
.form-label {
  color: #2c3b91 !important;
  font-size: 16px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  margin-top: 25px;
}
.form-control {
  color: #d9d9d9 !important;
  font-size: 12px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  border: 1px solid #d9d9d9 !important;
}
/* .form-check {
  margin-top: 13px !important;
} */
.form-check-label {
  color: #000000 !important;
  font-size: 16px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
}
.form-check-input {
  border: 1px solid #2c3b91 !important;
}
.form-check-input:checked {
  background: #2c3b91 !important;
}
.form-select {
  color: #232323 !important;
  font-size: 14px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  padding: 10px;
}
</style>
