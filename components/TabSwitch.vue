<script setup>
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
  /* box-shadow: 0 3px 10px rgb(0 0 0 / 0.1); */
  padding: 0 4rem;
  border-radius: 0.2rem;
  margin-bottom: 1.2rem;
}

.single-tab {
  padding: 4px 30px;
}

.ActiveTab {
  /* border-bottom: 0.3rem solid #d450bc; */
  /* width: 88px; */
  height: 26px;
  border-radius: 20px;
  background: #2c3b91;
}

.single-tab h5 {
  color: #2c3b91;
  text-align: center;
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 0 !important;
}

.ActiveName {
  color: white !important;
}
</style>
