<template>
  <div class="main">
    <div class="acc-wrapper" v-for="item in accItems" :key="item.id">
      <div class="acc-title" @click="toggleAcc(item)">
        <p class="fw-bold">{{ item.accTitle }}</p>
        <i class="fa-solid fa-minus icon" v-if="item.isOpen"></i>
        <i class="fa-solid fa-plus icon" v-if="!item.isOpen"></i>
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
        accTitle: "What is a salon app?",
        accContent:
          "It all comes down to improving your guest experience. From simple online bookings, to reacting to customer feedback faster, or rewarding loyal clients with a discount code.  Want to reduce no-shows? Send SMS & email reminders about upcoming appointments – push notifications are your friends and can maximise revenue with very minimum effort.",
        isOpen: false,
      },
      {
        id: 3,
        accTitle: "What is a salon app?",
        accContent:
          "It all comes down to improving your guest experience. From simple online bookings, to reacting to customer feedback faster, or rewarding loyal clients with a discount code.  Want to reduce no-shows? Send SMS & email reminders about upcoming appointments – push notifications are your friends and can maximise revenue with very minimum effort.",
        isOpen: false,
      },
      {
        id: 4,
        accTitle: "What is a salon app?",
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
  width: 308px;
}
.accTitle {
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  color: #232323;
}
</style>
