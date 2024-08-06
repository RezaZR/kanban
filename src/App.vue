<script setup lang="ts">
import { ref } from 'vue'

import stagesResponse from "./jsons/stages.json";

const stages = ref(stagesResponse.results);
</script>

<template>
  <div class="staging">
    <ul class="list">
      <li class="item" v-for="stage in stages">
        <h2 
          class="title"
          :style="{'--header-color': stage.header_color }"
        >
          {{ stage.name }}
        </h2>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.staging {
  background-color: #dcdcdc;
}

.list {
  display: flex;
  gap: 16px;
  overflow: auto;
  height: 100vh;
}

.item {
  background-color: #f5f5f5;
  border-radius: 4px;
  flex: 1 0 300px;
}

.title {
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  padding: 8px;
  background-color: var(--header-color);
  color: #5a5a5a;
}
</style>
