<!-- 从 https://www.imsyy.top/ 抄的() -->
 
<template>
  <div class="link-container">
    <!-- 社交链接 -->
    <div class="social">
      <div class="link">
        <a v-for="item in socialLinks" :key="item.name" :href="item.url" target="_blank"
          @mouseenter="socialTip = item.tip" @mouseleave="socialTip = '通过这里联系我吧'">
          <img class="icon" :src="item.icon" height="24" />
        </a>
      </div>
      <span class="tip">{{ socialTip }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import socialLinks from "@/assets/Link.json";

const socialTip = ref("通过这里联系我吧");
</script>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({});
</script>

<style scoped>
.container {
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 5px;
}
</style>

<style lang="scss" scoped>
.social {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 42px;
  background-color: transparent;
  border-radius: 6px;
  backdrop-filter: blur(0);
  animation: fade 0.5s;
  transition:
    background-color 0.3s,
    backdrop-filter 0.3s;
  @media (max-width: 840px) {
    max-width: 100%;
    justify-content: center;
    .link {
      justify-content: space-evenly !important;
      width: 90%;
    }
    .tip {
      display: none !important;
    }
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      display: inherit;
      .icon {
        margin: 0 12px;
        transition: transform 0.3s;
        &:hover {
          transform: scale(1.1);
        }
        &:active {
          transform: scale(1);
        }
      }
    }
  }
  .tip {
    color: white;
    display: none;
    margin-right: 12px;
    animation: fade 0.5s;
  }
  @media (min-width: 768px) {
    &:hover {
      background-color: #00000040;
      backdrop-filter: blur(5px);
      .tip {
        display: block;
      }
    }
  }
}
</style>