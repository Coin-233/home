<template>
  <div id="app">
    <LoadingAnimation v-if="loading" />
    <transition name="fade">
      <div v-if="!loading">
        <SiteIntro />
        <Message />
        <DateTime />
        <ProgressBar />
        <Friends />
        <Link />
      </div>
    </transition>
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import LoadingAnimation from './components/LoadingAnimation.vue';
import Message from './components/Message.vue';
import SiteIntro from './components/SiteIntro.vue';
import DateTime from './components/DateTime.vue';
import ProgressBar from './components/ProgressBar.vue';
import cursorInit from "@/utils/cursor.js";
import Link from './components/Link.vue';
import Footer from './components/Footer.vue';
import Friends from './components/Friends.vue';

export default defineComponent({
  components: {
    LoadingAnimation,
    SiteIntro,
    Message,
    DateTime,
    ProgressBar,
    Link,
    Friends,
    Footer
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
