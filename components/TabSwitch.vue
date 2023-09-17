<script setup>
import "../style/main.css";
const emit = defineEmits(["active-tab"]);
const activeTab = ref("About");
const props = defineProps({
  tabNames: {
    type: Array,
    required: true,
  },
});
const handleTabClick = (params) => {
  activeTab.value = params;
  emit("active-tab", activeTab.value);
};
</script>

<template>
  <div class="tab-container">
    <div
      :class="activeTab === tabName && 'ActiveTab'"
      @click="handleTabClick(tabName)"
      v-for="tabName in tabNames"
      class="single-tab"
    >
      <h5 :class="activeTab === tabName && 'ActiveName'">
        {{ tabName }}
      </h5>
    </div>
  </div>
</template>

<style scoped>
.tab-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  border-radius: 0.2rem;
  margin-top: 9.2rem;
}

.single-tab {
  padding: 5px 18px;
}

.ActiveTab {
  height: 32px;
  border-radius: 20px;
  background: #2c3b91;
}

.single-tab h5 {
  color: #2c3b91;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 0 !important;
}

.ActiveName {
  color: white !important;
}
</style>
