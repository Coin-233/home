<template>
    <div class="message-container">
        <div class="hw">Hello world!</div>
        <div>  </div>
        <div class="description">~ 某只生活在互联网角落的幽灵 ~</div>
    </div>
</template>

<script lang="ts" >
  import { defineComponent } from 'vue';
  
  export default defineComponent({});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sankofa+Display&display=swap');

.hw {
    font-family: "Sankofa Display", sans-serif;
    font-size: 80px;
    font-style: normal;
}

.description{

}
.message-container {
    color: white;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1); /* 半透明背景 */
    backdrop-filter: blur(10px); /* 模糊背景 */
    border-radius: 5px; /* 圆角 */
}
</style>