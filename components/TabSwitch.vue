<template>
  <div class="review-container">
    <div
      @click="toggle('Google')"
      class="review-switch"
      :class="active === 'Google' && 'review-switch-active'"
    >
      <p class="review-text">
        {{ one }}
      </p>
    </div>
    <div
      @click="toggle('Facebook')"
      class="review-switch"
      :class="active === 'Facebook' && 'review-switch-active'"
    >
      <p class="review-text">
        {{ rightText }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Switch",
  data() {
    return {
      active: "Google",
    };
  },
  props: {
    one: {
      type: String,
      required: true,
    },
    rightText: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggle(params) {
      this.active = params;
      console.log("clicked", this.active);
    },
  },
};
</script>
