
<!-- 字体图标 toRight -->
<template>
    <div>
        <svg :width="props.width" :height="props.height" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.49175 22L8.11675 14.975L2.66675 10.25L9.86675 9.625L12.6667 3L15.4667 9.625L22.6667 10.25L17.2167 14.975L18.8417 22L12.6667 18.275L6.49175 22Z" fill="#121212"/>
        </svg>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';
 
// 定义props
const props = defineProps({
  width: {
    type: [String, Number],
    default: 25
  },
  height: {
    type: [String, Number],
    default: 24
  }
});
</script>

<style lang="scss" scoped>

</style>



