<!-- 字体图标 map -->
<template>
    <div>
      <svg :width="props.width" :height="props.height" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 17.5L1 21.5V5.5L8 1.5M8 17.5L16 21.5M8 17.5V1.5M16 21.5L23 17.5V1.5L16 5.5M16 21.5V5.5M16 5.5L8 1.5" stroke="#BFBFBF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';
 
// 定义props
const props = defineProps({
  width: {
    type: [String, Number],
    default: 22
  },
  height: {
    type: [String, Number],
    default: 20
  }
});
</script>

<style lang="scss" scoped>

</style>

