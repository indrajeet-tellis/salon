<template>
  <section
    class="demoBG"
    :style="{ backgroundImage: 'url(/assets/demo-bg.png)' }"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <i
            class="fa-solid fa-xmark icon"
            @click="handleCurrentCross('update')"
          ></i>
          <div style="margin-top: 40px; text-align: center">
            <img src="/assets/calendar-check.png" />
          </div>
          <div class="text-center">
            <h1 class="mb-0 header-text">Already Booked An Appointment</h1>
            <p class="mb-0 confirm-text">
              You already booked your demo request appointment you can see your
              appointment details below
            </p>
            <h2 class="mb-0 subheader-text">
              Tuesday, 13 Oct 2022 at 11:30 AM
            </h2>
            <h3 class="mb-0 reminder-text">Prefered communication channel</h3>
          </div>
          <div class="d-flex justify-content-between mt-3">
            <div class="item">
              <img src="/assets/channel-one.png" />
              <p class="item-p">Google Meet</p>
            </div>
            <div class="item">
              <img src="/assets/channel-three.png" />
              <p class="item-p">Desktop</p>
            </div>
            <div class="item">
              <img src="/assets/channel-five.png" />
              <p class="item-p">Audio call</p>
            </div>
          </div>

          <div class="both-btn">
            <demo-button name="Reschedule Appointment" class="mx-auto" />
            <demo-border-button
              name="Cancel Appointment"
              class="mx-auto mt-3"
              @click="isOpen = true"
            />
          </div>

          <MazBottomSheet v-model="isOpen">
            <div class="maz-flex maz-flex-center">
              <CancelAppointment />
            </div>
          </MazBottomSheet>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import MazBottomSheet from "maz-ui/components/MazBottomSheet";
import CancelAppointment from "../../../components/cancel-appointment.vue";

definePageMeta({
  layout: false,
});

const isOpen = ref(false);
</script>

<script>
import DemoButton from "../../../components/demo-button.vue";
import DemoBorderButton from "../../../components/demo-border-button.vue";
import "../../../style/main.css";

export default {
  components: {
    DemoButton,
    DemoBorderButton,
  },

  data() {
    return {
      CurrentBooked: "send",
      CurrentCross: "send",
    };
  },

  methods: {
    handleCurrentCross(params) {
      this.currentCross = params;
      navigateTo("/requestDemo");
    },
    handleCurrentBooked(params) {
      this.currentBooked = params;
      navigateTo("/requestDemo/demoAppointment-booked");
    },
  },
};
</script>

<style scoped>
.icon {
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  color: #a7a7a7;
}

:deep(.m-bottom-sheet__container) {
  border-radius: 20px !important;
}
:deep(.m-backdrop-content) {
  border-radius: 20px !important;
}

.demoBG {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 0 203px 0;
  overflow: hidden;
}
.header-text {
  font-size: 30px;
  font-weight: 700;
  color: #2c3b91;
  width: 324px;
  margin: 18px auto 0 auto;
}
.subheader-text {
  font-size: 19px;
  font-weight: 600;
  color: #ed0046;
  margin: 40px auto 0 auto;
  width: 294px;
}
.confirm-text {
  font-size: 18px;
  font-weight: 400;
  color: #2c3b91;
  width: 321px;
  margin: 26px auto 0 auto;
  line-height: 20px;
}
.reminder-text {
  font-size: 16px;
  font-weight: 500;
  color: #2c3b91;
  width: 367px;
  margin: 54px auto 0 auto;
}
.both-btn {
  position: fixed;
  bottom: 3%;
  left: 9%;
}
.item {
  width: 28%;
  text-align: center;
}
.item-p {
  font-size: 14px;
  font-weight: 500;
  color: #2c3b91;
}
</style>
