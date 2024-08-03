<template>
    <div class="loading-animation">
      <div class="spinner"></div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({});
  </script>
  
  <style scoped>
  .loading-animation {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #ccc;
    border-top-color: #000;
    border-radius: 50%;
    animation: spin 1s infinite linear;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  