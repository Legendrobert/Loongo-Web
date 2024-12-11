

<!-- 字体图标 add -->
<template>
    <div>
        <svg :width="props.width" :height="props.height" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="40" height="40" rx="20" fill="#660300"/>
            <path d="M18 27.5L15.5 22L10 19.5L15.5 17L18 11.5L20.5 17L26 19.5L20.5 22L18 27.5ZM26 29.5L24.75 26.75L22 25.5L24.75 24.25L26 21.5L27.25 24.25L30 25.5L27.25 26.75L26 29.5Z" fill="white"/>
        </svg>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';
 
// 定义props
const props = defineProps({
  width: {
    type: [String, Number],
    default: 40
  },
  height: {
    type: [String, Number],
    default: 40
  }
});
</script>

<style lang="scss" scoped>

</style>

