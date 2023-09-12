<script setup>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

//const date = ref();
const date = ref(new Date());

// Display only week with 15th date and add custom-class to all dates in that week
const calendarFn = (weeks) => {
  return weeks
        .filter((week) => week.days.some((day) => day.text === 15))
        .map((week) => ({
          ...week,
          days: week.days.map((day) => {
            day.classData['custom-class'] = true;
            return day;
          }),
        }));
}

</script>

<template>
  <!-- 
    https://vue3datepicker.com/props/calendar-configuration/
  -->
  <VueDatePicker v-model="date" auto-apply :close-on-auto-apply="false" :min-date="new Date()" :enable-time-picker="false"
    week-start="0" :calendar="calendarFn" :format="'dd/MM/yyyy'" locale="pt-BR" />
</template>

<style scoped></style>