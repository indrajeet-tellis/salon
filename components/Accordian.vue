<template>
  <div>
    <div class="accordion" id="accordionExample">
      <div v-for="(item, index) in items" :key="index" class="accordion-item">
        <h2 class="accordion-header" :id="'heading' + index">
          <button
            class="accordion-button"
            type="button"
            :data-bs-toggle="index === 0 ? 'collapse' : ''"
            :data-bs-target="'#collapse' + index"
            :aria-controls="'collapse' + index"
            :aria-expanded="index === 0 ? 'true' : 'false'"
            @click="toggleAccordion(index)"
          >
            {{ item.title }}
          </button>
        </h2>
        <div
          :id="'collapse' + index"
          class="accordion-collapse collapse"
          :class="{ show: index === 0 }"
          :aria-labelledby="'heading' + index"
        >
          <div class="accordion-body">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleAccordion(index) {
      if (index !== 0) {
        const targetId = "#collapse" + index;
        const targetCollapse = new bootstrap.Collapse(
          document.querySelector(targetId),
          { toggle: false }
        );
        targetCollapse.toggle();
      }
    },
  },
};
</script>
