<template>
  <div class="progress-container">
    <div class="day-progress-bar">
      <div class="day-progress" :style="{ width: `${dayProgress}%` }">
        <div class="bar-inner">{{ dayProgress.toFixed(2) }}%</div>
      </div>
      <div class="day-progress-text">
        <span>今日已过 {{ dayHours.toFixed(2) }} 小时</span>
        <span class="remaining-time">{{ dayRemainingHours.toFixed(2) }} 小时剩余</span>
      </div>
    </div>
    <div class="year-progress-bar">
      <div class="year-progress" :style="{ width: `${progress}%` }">
        <div class="bar-inner">{{ progress.toFixed(2) }}%</div>
      </div>
      <div class="year-progress-text">
        <span>今年已过 {{ yearDays.toFixed(2) }} 天</span>
        <span class="remaining-time">{{ yearRemainingDays.toFixed(2) }} 天剩余</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const progress = ref<number>(0);
    const dayProgress = ref<number>(0);
    const dayHours = ref<number>(0);
    const dayRemainingHours = ref<number>(0);
    const yearDays = ref<number>(0);
    const yearRemainingDays = ref<number>(0);

    const updateProgress = () => {
      const now = new Date();

      // Update year progress
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
      const totalYearDays = (endOfYear.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24);
      const elapsedYearDays = (now.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24);
      progress.value = (elapsedYearDays / totalYearDays) * 100;
      yearDays.value = elapsedYearDays;
      yearRemainingDays.value = totalYearDays - elapsedYearDays;

      // Update day progress
      const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const totalDayHours = (endOfDay.getTime() - startOfDay.getTime()) / (1000 * 60 * 60);
      const elapsedDayHours = (now.getTime() - startOfDay.getTime()) / (1000 * 60 * 60);
      dayProgress.value = (elapsedDayHours / totalDayHours) * 100;
      dayHours.value = elapsedDayHours;
      dayRemainingHours.value = totalDayHours - elapsedDayHours;
    };

    onMounted(() => {
      updateProgress();
      setInterval(updateProgress, 10000);
    });

    return {
      progress,
      dayProgress,
      dayHours,
      dayRemainingHours,
      yearDays,
      yearRemainingDays
    };
  }
});
</script>

<style scoped>
.progress-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 5px;
  margin-top: 20px;
  padding: 20px;
}

.day-progress-bar,
.year-progress-bar {
  width: 100%;
  height: 18px;
  background-color: #ddd;
  margin: 10px 0;
  position: relative;
  border-radius: 5px;
}

.day-progress,
.year-progress {
  height: 100%;
  background-color: #b5ccbf;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='60' height='30'%3E%3Cpath fill='%2340584a' fill-opacity='0.47' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E");
}

.day-progress-text,
.year-progress-text {
  color: white;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}

.bar-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: UnidreamLED;
}

.remaining-time {
  opacity: .6;
  font-style: oblique;
}
</style>