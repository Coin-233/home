<template>
    <footer>
        <div class="footer"></div> 
        <!-- 没想好写什么 -->
    </footer>
</template>

<script lang="ts" >
  import { defineComponent } from 'vue';
  
  export default defineComponent({});

  
  </script>

<style scoped>
.footer {
    /* background-color: rgba(0, 0, 0, 0.1);   
    backdrop-filter: blur(10px); */
    color: white;
    padding: 20px 0;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 50%;
    z-index: 1000;
}
</style>