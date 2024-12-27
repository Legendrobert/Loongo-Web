<!-- 字体图标 map -->
<template>
    <div>
      <svg :width="props.width" :height="props.height" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 17.5L1 21.5V5.5L8 1.5M8 17.5L16 21.5M8 17.5V1.5M16 21.5L23 17.5V1.5L16 5.5M16 21.5V5.5M16 5.5L8 1.5" stroke="#121212" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


<!-- 
        <svg :width="props.width" :height="props.height" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.75" y="1.25" width="38.5" height="38.5" rx="19.25" stroke="#CCCCCC" stroke-width="1.5"/>
<g clip-path="url(#clip0_5830_1587)">
<path d="M17.3332 24.5L12.6665 27.1667V16.5L17.3332 13.8334M17.3332 24.5L22.6665 27.1667M17.3332 24.5V13.8334M22.6665 27.1667L27.3332 24.5V13.8334L22.6665 16.5M22.6665 27.1667V16.5M22.6665 16.5L17.3332 13.8334" stroke="#121212" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_5830_1587">
<rect width="16" height="16" fill="white" transform="translate(12 12.5)"/>
</clipPath>
</defs>
</svg> -->
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

