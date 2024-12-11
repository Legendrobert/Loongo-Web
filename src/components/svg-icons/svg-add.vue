<!-- 字体图标 add -->
<template>
    <div>
        <svg :width="props.width" :height="props.height" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 8.5H0.5V6.5H6.5V0.5H8.5V6.5H14.5V8.5H8.5V14.5H6.5V8.5Z" fill="#FF401A"/>
        </svg>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';
 
// 定义props
const props = defineProps({
  width: {
    type: [String, Number],
    default: 15
  },
  height: {
    type: [String, Number],
    default: 15
  }
});
</script>

<style lang="scss" scoped>

</style>

