<script setup>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const emit = defineEmits(['updateDate'])

const selectedDate = ref(null);

const startTime = ref({ minutes: 0 });

const updateDate = () => {
  emit('updateDate', selectedDate.value); // Emita o valor da propriedade 'selectedDate'
  clearTableStyles();
};

const clearTableStyles = () => {
  // Percorra todas as mesas e remova o estilo 'secondary'
  tables.value.forEach((table) => {
    table.status = 'livre';
  });
};
</script>

<template>
  <p>
    <VueDatePicker 
      v-model="selectedDate" 
      position="left" 
      placeholder="Selecione uma data" 
      auto-apply 
      partial-flow
      :flow="['calendar', 'time']" 
      time-picker-inline 
      minutes-increment="60" 
      :start-time="startTime" 
      no-minutes-overlay 
      :close-on-auto-apply="false"
      :min-date="new Date()" 
      :enable-time-picker="true" 
      week-start="0" 
      model-type="format" 
      :format="'dd/MM/yyyy HH:mm'"
      locale="pt-BR" 
      @update:model-value="updateDate">
    </VueDatePicker>
  </p>
</template>

<style scoped></style>