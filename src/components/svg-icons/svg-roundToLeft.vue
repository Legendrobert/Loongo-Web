

<!-- 字体图标 圆型方向图标 -->
<template>
    <div>
        <svg :width="props.width" :height="props.height" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9999 13.333L13.3333 19.9997M13.3333 19.9997L19.9999 26.6663M13.3333 19.9997H26.6666M36.6666 19.9997C36.6666 29.2044 29.2047 36.6663 19.9999 36.6663C10.7952 36.6663 3.33325 29.2044 3.33325 19.9997C3.33325 10.7949 10.7952 3.33301 19.9999 3.33301C29.2047 3.33301 36.6666 10.7949 36.6666 19.9997Z" stroke="#CCCCCC" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
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




