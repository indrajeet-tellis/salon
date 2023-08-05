<template>
  <div class="main">
    <div class="acc-wrapper" v-for="item in accItems" :key="item.id">
      <div
        class="acc-title d-flex justify-content-between"
        @click="toggleAcc(item)"
      >
        <div class="para">
          <p class="fw-bold">{{ item.accTitle }}</p>
        </div>
        <div class="icons ps-4">
          <i class="fa-solid fa-minus icon" v-if="item.isOpen"></i>
          <i class="fa-solid fa-plus icon" v-if="!item.isOpen"></i>
        </div>
      </div>
      <div class="acc-content fw-normal" v-if="item.isOpen">
        {{ item.accContent }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const accItems = ref([
      {
        id: 1,
        accTitle: "What is a salon app?",
        accContent:
          "It all comes down to improving your guest experience. From simple online bookings, to reacting to customer feedback faster, or rewarding loyal clients with a discount code.  Want to reduce no-shows? Send SMS & email reminders about upcoming appointments – push notifications are your friends and can maximise revenue with very minimum effort.",
        isOpen: true,
      },

      {
        id: 2,
        accTitle: "How do you make a beauty app?",
        accContent:
          "It all comes down to improving your guest experience. From simple online bookings, to reacting to customer feedback faster, or rewarding loyal clients with a discount code.  Want to reduce no-shows? Send SMS & email reminders about upcoming appointments – push notifications are your friends and can maximise revenue with very minimum effort.",
        isOpen: false,
      },
      {
        id: 3,
        accTitle: "How can I make my salon busier?",
        accContent:
          "It all comes down to improving your guest experience. From simple online bookings, to reacting to customer feedback faster, or rewarding loyal clients with a discount code.  Want to reduce no-shows? Send SMS & email reminders about upcoming appointments – push notifications are your friends and can maximise revenue with very minimum effort.",
        isOpen: false,
      },
      {
        id: 4,
        accTitle:
          "How much does development cost for a beauty salon mobile app?",
        accContent:
          "It all comes down to improving your guest experience. From simple online bookings, to reacting to customer feedback faster, or rewarding loyal clients with a discount code.  Want to reduce no-shows? Send SMS & email reminders about upcoming appointments – push notifications are your friends and can maximise revenue with very minimum effort.",
        isOpen: false,
      },
    ]);

    const toggleAcc = (item) => {
      item.isOpen = !item.isOpen;
    };

    return { accItems, toggleAcc };
  },
};
</script>

<style>
.icon {
  cursor: pointer;
  margin-bottom: 20px;
  color: #ed0046;
  margin-top: 7px;
}
.acc-wrapper {
  border-bottom: 1px dashed black;
  box-sizing: content-box;
  margin-top: 20px;
}
.acc-content {
  margin-bottom: 20px;
  font-family: "DM Sans", sans-serif;
  font-size: 8px;
  color: #2e3a59;
  /* width: 308px; */
}
.accTitle {
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  color: #232323;
}
/* .acc-title {
  width: 334px;
}
.acc-title .para {
  width: 80%;
}
.acc-title .icons {
  width: 20%;
} */
</style>
