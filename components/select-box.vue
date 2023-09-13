<template>
  <div class="select-box-main position-relative">
    <div class="box-line d-flex justify-content-between">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <!-- <p>Select</p> -->
        <label class="form-check-label" for="inlineRadio1"></label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label class="form-check-label" for="inlineRadio1"></label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label class="form-check-label" for="inlineRadio1"></label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label class="form-check-label" for="inlineRadio1"></label>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  name: String,
});
</script>

<style scoped>
/* .form-check-input:checked {
  background: none !important;
} */
.form-check-inline {
  display: inline-block;
  margin-right: 0rem !important;
  z-index: 2;
}
.form-check-input {
  border-radius: 50%;
  background: #2c3b91;
}
.form-check-input {
  --bs-form-check-bg: var(--bs-body-bg);
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* background-color: var(--bs-form-check-bg); */
  background-image: var(--bs-form-check-bg-image);
  background-repeat: no-repeat;
  background-position: center;
  /* background-size: contain; */
  border: 1px solid #2c3b91 !important;
}
.box-line::after {
  content: "";
  background: #2c3b91;
  top: 37%;
  left: 0%;
  width: 97%;
  height: 12%;
  position: absolute;
}
</style>
