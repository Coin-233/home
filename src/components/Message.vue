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

  const descriptions = [
    "~ 某只生活在互联网角落的幽灵 ~",
    "正在尝试做些什么",
];

let currentIndex = 0;
let descriptionElement: HTMLElement | null = document.querySelector('.description');

function changediscription() {
    if (descriptionElement) {
        const randomIndex = Math.floor(Math.random() * descriptions.length);
        descriptionElement.textContent = descriptions[randomIndex];
    } else {
        descriptionElement = document.querySelector('.description'); 
    }
}

setInterval(changediscription, 10000); 
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sankofa+Display&display=swap&family=ZCOOL+KuaiLe&display=swap');

.hw {
    font-family: "Sankofa Display", sans-serif;
    font-size: 80px;
    font-style: normal;
}

.description{
  font-family: "ZCOOL KuaiLe";
  font-size: 20px;
}
.message-container {
    color: white;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 5px;
}
</style>