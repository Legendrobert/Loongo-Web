<!-- 字体图标 toRight -->
<template>
    <div>
        <svg :width="props.width" :height="props.height"  viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 13.5L2 7.5L8 1.5" stroke="#1E1E1E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';
 
// 定义props
const props = defineProps({
  width: {
    type: [String, Number],
    default: 10
  },
  height: {
    type: [String, Number],
    default: 15
  }
});
</script>

<style lang="scss" scoped>

</style>



