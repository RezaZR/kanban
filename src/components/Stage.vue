<script setup lang="ts">
import { ref } from 'vue'

import Contact from "./Contact.vue";

import stagesResponse from "../jsons/stages.json";

const stages = ref(stagesResponse.results);
</script>

<template>
  <ul class="stage">
    <li class="item" v-for="stage in stages">
      <h2 
        class="title"
        :style="{'--header-color': stage.header_color }"
      >
        {{ stage.name }}
      </h2>

      <Contact :stage="stage" />
    </li>
  </ul>
</template>

<style scoped>
.stage {
  display: flex;
  gap: 16px;
  overflow: auto;
  height: 100vh;
}

.item {
  background-color: #f5f5f5;
  border-radius: 8px;
  flex: 1 0 300px;
  overflow-y: auto;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}

.item::-webkit-scrollbar { 
  display: none;  /* Safari and Chrome */
}

.title {
  position: sticky;
  top: 0;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  padding: 8px;
  background-color: var(--header-color);
  color: #5a5a5a;
}
</style>
