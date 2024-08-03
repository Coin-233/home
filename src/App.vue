<template>
  <div id="app">
    <LoadingAnimation v-if="loading" />
    <transition name="fade">
      <div v-if="!loading">
        <SiteIntro />
        <DateTime />
        <ProgressBar />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import LoadingAnimation from './components/LoadingAnimation.vue';
import SiteIntro from './components/SiteIntro.vue';
import DateTime from './components/DateTime.vue';
import ProgressBar from './components/ProgressBar.vue';
import cursorInit from "@/utils/cursor.js";

export default defineComponent({
  components: {
    LoadingAnimation,
    SiteIntro,
    DateTime,
    ProgressBar
  },
  setup() {
    const loading = ref(true);

    onMounted(() => {
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    });
    onMounted(() => {
      // 自定义鼠标
      cursorInit();
    });

    return {
      loading
    };
  }
});
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
