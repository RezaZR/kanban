<script setup lang="ts">
import { ref } from "vue";

import ContactComponent from "./Contact.vue";

import stagesResponse from "../jsons/stages.json";
import contacts1Response from "../jsons/contacts-stage-018f3d6b-335e-7c8e-b5c7-7792b3ee9f15.json";
import contacts2Response from "../jsons/contacts-stage-018f3d6b-a5b7-7124-b0d0-cf5a081f869b.json";
import contacts3Response from "../jsons/contacts-stage-018f3d6c-74b0-76ee-8896-ec7d51d576df.json";
import type { StageResult, Contact, ContactResult, AllContact } from "../models/types";

const LS_KANBAN = 'kanban-data';

const stages = ref<StageResult[]>(stagesResponse.results);

const storedContacts: AllContact = JSON.parse(localStorage.getItem(LS_KANBAN) || '{}');
const contacts1Result: ContactResult[] = (contacts1Response as unknown as Contact).results;
const contacts2Result: ContactResult[] = (contacts2Response as unknown as Contact).results;
const contacts3Result: ContactResult[] = (contacts3Response as unknown as Contact).results;
const allContacts = ref<AllContact>(
  Object.keys(storedContacts).length > 0 ? 
  storedContacts : 
  {
    [contacts1Result[0].stage]: contacts1Result,
    [contacts2Result[0].stage]: contacts2Result,
    [contacts3Result[0].stage]: contacts3Result,
  }
);

function handleDrop(event: DragEvent, targetStageId: string) {
  const storedStageId = (event.dataTransfer as DataTransfer).getData("stageId");
  const storedContactId = (event.dataTransfer as DataTransfer).getData("contactId");
  if (targetStageId !== storedStageId) {
    const contactId = allContacts.value[storedStageId].findIndex(contact => contact.id === storedContactId);
    const movedContact = allContacts.value[storedStageId].splice(contactId, 1)[0];
    if (allContacts.value.hasOwnProperty(targetStageId)) {
      allContacts.value[targetStageId].push(movedContact);
    } else {
      const newContacts = {
        [targetStageId]: [movedContact],
      }
      allContacts.value = Object.assign(allContacts.value, newContacts);
    }
  }
  localStorage.setItem(LS_KANBAN, JSON.stringify(allContacts.value));
}
</script>

<template>
  <ul class="stage">
    <li 
      class="item" 
      v-for="stage in stages"
      @drop="handleDrop($event, stage.id)"
      @dragenter.prevent
      @dragover.prevent
    >
      <h2 
        class="title"
        :style="{'--header-color': stage.header_color }"
      >
        {{ stage.name }}
      </h2>

      <ContactComponent :stage="stage" :allContacts="allContacts" />
    </li>
  </ul>
</template>

<style scoped>
.stage {
  display: flex;
  gap: 16px;
  overflow: auto;
  /* 100vh - padding top & bottom */
  height: calc(100vh - 64px);
}

.item {
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
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
