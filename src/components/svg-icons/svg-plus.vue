<!-- 字体图标 plus -->
<template>
    <div>
        <svg :width="props.width" :height="props.height" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M13.9999 2.33398V25.6673M2.33325 14.0007H25.6666" :stroke="props.fillColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';
 
// 定义props
const props = defineProps({
  width: {
    type: [String, Number],
    default: 28
  },
  height: {
    type: [String, Number],
    default: 28
  },
  fillColor: {
    type: String,
    default: '#fff' // 默认颜色
  }
});
</script>

<style lang="scss" scoped>

</style>



