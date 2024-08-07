<script setup lang="ts">
import { ref } from 'vue'

import contacts1Response from "../jsons/contacts-stage-018f3d6b-335e-7c8e-b5c7-7792b3ee9f15.json";
import contacts2Response from "../jsons/contacts-stage-018f3d6b-a5b7-7124-b0d0-cf5a081f869b.json";
import contacts3Response from "../jsons/contacts-stage-018f3d6c-74b0-76ee-8896-ec7d51d576df.json";
import getFlagEmoji from '../utils/getFlagEmoji';

defineProps<{
  stage: any;
}>();

const contacts1Result = contacts1Response.results;
const contacts2Result = contacts2Response.results;
const contacts3Result = contacts3Response.results;
const allContacts = ref({
  [contacts1Result[0].stage]: contacts1Result,
  [contacts2Result[0].stage]: contacts2Result,
  [contacts3Result[0].stage]: contacts3Result,
});

</script>

<template>
  <ul class="contact">
    <li 
      class="list"
      v-for="contact in allContacts[stage.id]"
      :style="{'--header-color': stage.header_color }"
    >
      <p class="country" v-if="contact.country_code">{{ getFlagEmoji(contact.country_code) }}</p>
      <p class="country" v-else data-has-country="false">No Nationality</p>

      <h3 class="name">{{ contact.full_name }}</h3>
      <p class="contacts">
        <span>&#9993; </span>
        <a :href="'mailto:' + contact.email">
          {{ contact.email }}
        </a>
      </p>  
      <p class="contacts">
        <span>&#9742; </span>
        <a v-if="contact.phone_number" :href="'tel:'+ contact.phone_number || ''">
          {{ contact.phone_number }}
        </a>
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
}

.name {
  font-size: 16px;
  font-weight: 600;
  margin: 4px 0px;
  letter-spacing: 0.25px;
}

.contacts {
  font-size: 14px;
}

.contacts > span {
  color: #000;
}

</style>
