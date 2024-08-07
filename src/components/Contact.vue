<script setup lang="ts">
import getFlagEmoji from "../utils/getFlagEmoji";
import type { StageResult, ContactResult } from "../models/types";

defineProps<{
  stage: StageResult;
  currentContacts: ContactResult[];
}>();

function handleDrag(event: DragEvent, stage: StageResult, contact: ContactResult) {
  const dataTransfer = event.dataTransfer as DataTransfer;
  dataTransfer.dropEffect = "move";
  dataTransfer.effectAllowed = "move";
  dataTransfer.setData("stageId", stage.id);
  dataTransfer.setData("contactId", contact.id);
}

</script>

<template>
  <ul class="contact">
    <li 
      class="list"
      v-for="contact in currentContacts"
      draggable="true"
      @dragstart="handleDrag($event, stage, contact)"
      :style="{'--header-color': stage.header_color }"
    >
      <p class="country" v-if="contact.country_code">
        {{ getFlagEmoji(contact.country_code) }}
      </p>
      <p class="country" v-else data-has-country="false">
        No Nationality
      </p>

      <h3 class="name">{{ contact.full_name }}</h3>
      <p class="contacts">
        <span>&#9993; </span>
        <a :href="'mailto:' + contact.email">
          {{ contact.email }}
        </a>
      </p>  
      <p class="contacts">
        <span>&#9742; </span>
        <a 
          v-if="contact.phone_number"
          :href="'tel:'+ contact.phone_number || ''"
        >
          {{ contact.phone_number }}
        </a>
        <span v-else>-</span>
      </p>
    </li>
  </ul>
</template>

<style scoped>
.contact {
  padding: 16px;
  color: #5a5a5a;
}

.list {
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 16px;
  cursor: grab;
}

.list:active {
  cursor: grabbing;
}

.list::before {
  content: '';
  /* 100% + padding left & right */
  width: calc(100% + 32px); 
  height: 5px;
  display: block;
  margin: -16px;
  background-color: var(--header-color);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.list:not(:last-of-type) {
  margin-bottom: 16px;
}

.country {
  margin-top: 24px;
}

.country[data-has-country="false"] {
  font-size: 12px;
  font-style: italic;
  color: #9b9b9b;
  height: 24px;
}

.name {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.25px;
  text-transform: capitalize;
  margin: 4px 0px;
}

.contacts {
  font-size: 14px;
}

.contacts > span {
  color: #000;
}
</style>
