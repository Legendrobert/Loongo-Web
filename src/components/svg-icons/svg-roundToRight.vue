
<!-- 字体图标 圆型toRight -->
<template>
    <div>
        <svg :width="props.width" :height="props.height" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9999 25.6663L25.6666 18.9997M25.6666 18.9997L18.9999 12.333M25.6666 18.9997H12.3333M35.6666 18.9997C35.6666 28.2044 28.2047 35.6663 18.9999 35.6663C9.79517 35.6663 2.33325 28.2044 2.33325 18.9997C2.33325 9.79493 9.79517 2.33301 18.9999 2.33301C28.2047 2.33301 35.6666 9.79493 35.6666 18.9997Z" stroke="#FF401A" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
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




