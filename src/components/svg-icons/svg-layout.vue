<!-- 字体图标 love -->
<template>
    <div>
        <svg :width="props.width" :height="props.height" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.78675 9.74602L9.49341 8.03935L7.78675 6.33268M2.66675 8.03935H9.44675M8.00008 2.66602C10.9467 2.66602 13.3334 4.66602 13.3334 7.99935C13.3334 11.3327 10.9467 13.3327 8.00008 13.3327" stroke="#121212" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';
 
// 定义props
const props = defineProps({
  width: {
    type: [String, Number],
    default: 16
  },
  height: {
    type: [String, Number],
    default: 16
  },
});
</script>

<style lang="scss" scoped>

</style>


