<template>
  <div class="cancle-main">
    <h2 class="cancel-text">Cancel Appointment</h2>
    <p class="cancel-subtext">
      Are you sure you want to cancel the appointment?
    </p>
    <div class="form-floating">
      <textarea
        class="form-control"
        id="floatingTextarea2"
        style="height: 115px"
      ></textarea>
      <label for="floatingTextarea2"
        >Tell us reason why you want to cancel appointment.....</label
      >
    </div>
    <div class="btn-box">
      <demo-button
        name="Cancel Demo Request"
        class="mx-auto"
        style="margin-top: 27px"
      />
    </div>
  </div>
</template>
<script>
import DemoButton from "../components/demo-button.vue";

export default {
  components: {
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
.cancle-main {
  width: 375px;
  background: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 25px 0 15px 0;
}
.cancel-text {
  font-size: 22px;
  font-weight: 500;
  color: #2c3b91;
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin-bottom: 0;
}
.cancel-subtext {
  font-size: 16px;
  font-weight: 400;
  color: #2c3b91;
  font-family: "Roboto", sans-serif;
  text-align: center;
  width: 330px;
  margin: 23px auto 0 auto;
  line-height: 20px;
}
.form-floating {
  position: relative;
  width: 298px;
  margin: 36px auto 0 auto;
}
.form-floating > .form-control-plaintext ~ label,
.form-floating > .form-control:focus ~ label,
.form-floating > .form-control:not(:placeholder-shown) ~ label,
.form-floating > .form-select ~ label {
  color: #979797 !important;
  font-size: 12px !important;
  font-weight: 400 !important;
  font-family: "Roboto", sans-serif !important;
  width: 318px !important;
}
</style>
