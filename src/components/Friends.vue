<template>
    <div class="friends">
        <div class='friends-title'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="white" height='16'><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>我的朋友们</div>
      <div class="friend-list">
        <a :href="friend.link" target="_blank" class="friend-item" v-for="(friend, index) in friends" :key="index">
          <img :src="friend.avatar" alt="avatar" class="avatar" />
          <div class="info">
            <div class="name">{{ friend.name }}</div>
            <p class="descr">{{ friend.descr }}</p>
          </div>
        </a>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import yaml from 'js-yaml';
  
  export default defineComponent({
    data() {
      return {
        friends: [] as any[],
      };
    },
    async mounted() {
      const response = await axios.get('/Friends.yaml', { responseType: 'text' });
      const data = yaml.load(response.data);
      if (Array.isArray(data)) {
        this.friends = data;
      }
    },
  });
  </script>
  
  <style scoped>
  .friends {
    color: white;
    text-align: center;
    margin-top: 20px;
    backdrop-filter: blur(10px);
    /* background-color: rgba(255, 255, 255, 0.2); */
    border-radius: 5px;
  }

path{
    .d{
        width: 64px;
        height: 64px;
    }
}
  
  .friend-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .friend-item {
    width: 214px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    border-radius: 5px;
    padding: 10px;
    text-decoration: none;
    color: inherit;
    height: 120px;
    overflow: hidden;
  }
  
  .avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    flex: 1;
  }
  
  .name {
    font-weight: bold;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .descr {
    color: #ccc;
    font-size: 0.9em;
    flex: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 限制行数 */
    -webkit-box-orient: vertical;
  }
  
  </style>