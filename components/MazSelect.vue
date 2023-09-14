<template>
  <MazRadioButtons
    v-model="selectedCompetition"
    :options="competitions"
    color="secondary"
  >
    <template #default="{ option, selected }">
      <div style="display: flex">
        <MazAvatar
          v-if="option.areaEnsignUrl"
          :src="option.areaEnsignUrl"
          style="margin-right: 16px"
          size="0.8rem"
        />
        <div style="display: flex; flex-direction: column">
          <span>
            {{ option.label }}
          </span>
          <span :class="{ 'maz-text-muted': !selected }">
            {{ option.areaName }}
          </span>
        </div>
      </div>
    </template>
  </MazRadioButtons>
</template>

<script setup>
import { ref } from "vue";

import MazRadioButtons from "maz-ui/components/MazRadioButtons";
import MazAvatar from "maz-ui/components/MazAvatar";

const selectedCompetition = ref();

const competitions = [
  {
    value: "1",
    label: "Yes",
    areaEnsignUrl: "https://picsum.photos/id/1/200/300",
  },
  {
    value: "2",
    label: "No",
    areaEnsignUrl: "https://picsum.photos/id/1/200/300",
  },
];
</script>
