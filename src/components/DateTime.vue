<template>
  <div class="date-time">
    <div class="formattedDateTime">{{ formattedDateTime }}</div>
    <div class="formattedTime">{{ formattedTime }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const formattedDateTime = ref<string>('');
    const formattedTime = ref<string>('');

    const updateDateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const dayOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][now.getDay()];
      formattedDateTime.value = `${year} 年 ${month} 月 ${day} 日 ${dayOfWeek}`;

      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      formattedTime.value = `${hours}:${minutes}:${seconds}`;
    };

    onMounted(() => {
      updateDateTime();
      setInterval(updateDateTime, 100);
    });

    return {
      formattedDateTime,
      formattedTime
    };
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

.date-time {
  text-align: center;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.1); /* 半透明背景 */
  backdrop-filter: blur(10px); /* 模糊背景 */
  border-radius: 5px;
  
}

.formattedDateTime{
  color: white;
  font-family: "HarmonyOS_Regular", sans-serif;
  font-size: 18px;
  font-weight: bold;
}

.formattedTime {
  color: white;
  font-family: UnidreamLED;
  font-size: 75px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>