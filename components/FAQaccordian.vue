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
          <i class="fa-solid fa-angle-down" v-if="item.isOpen"></i>
          <i class="fa-solid fa-angle-right" v-if="!item.isOpen"></i>
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
        accTitle: "When should I switch to a paid subscription plan ?",
        accContent:
          "It heavily depends on what type of business you are running and what features you need in the app. For example, the average cost to build an app like Uber is $91,000 & $ 71,000 for an app like whtsapp according to Goodfirms report.",
        isOpen: false,
      },

      {
        id: 2,
        accTitle: "Why was my credit card payment declined ?",
        accContent:
          "It heavily depends on what type of business you are running and what features you need in the app. For example, the average cost to build an app like Uber is $91,000 & $ 71,000 for an app like whtsapp according to Goodfirms report.",
        isOpen: false,
      },
      {
        id: 3,
        accTitle: "How much does it cost to create an app for your business ?",
        accContent:
          "It heavily depends on what type of business you are running and what features you need in the app. For example, the average cost to build an app like Uber is $91,000 & $ 71,000 for an app like whtsapp according to Goodfirms report.",
        isOpen: false,
      },
      {
        id: 4,
        accTitle: "How much does an app cost ?",
        accContent:
          "It heavily depends on what type of business you are running and what features you need in the app. For example, the average cost to build an app like Uber is $91,000 & $ 71,000 for an app like whtsapp according to Goodfirms report.",
        isOpen: false,
      },
      {
        id: 5,
        accTitle: "What affects mobile application costs ?",
        accContent:
          "It heavily depends on what type of business you are running and what features you need in the app. For example, the average cost to build an app like Uber is $91,000 & $ 71,000 for an app like whtsapp according to Goodfirms report.",
      },
    ]);

    const toggleAcc = (item) => {
      item.isOpen = !item.isOpen;
    };

    return { accItems, toggleAcc };
  },
};
</script>

<style scoped>
.icon {
  cursor: pointer;
  margin-bottom: 20px;
  color: #ed0046;
  margin-top: 7px;
}
.acc-wrapper {
  border-bottom: 1px dashed #333;
  box-sizing: content-box;
  margin-top: 20px;
}

.acc-content {
  color: #333;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.24px;
  position: relative;
}
/* .acc-content::after {
  position: absolute;
  content: "";
  left: 0%;
  top: 0%;
  width: 10px;
  height: 10px;
  background: #ed0046;
} */
.accTitle {
  color: #333;
  font-family: Roboto;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.16px;
}
</style>
