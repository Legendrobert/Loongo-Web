
<!-- 字体图标 toRight -->
<template>
    <div>
        <svg :width="props.width" :height="props.height" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.1665 6.99984H12.8332M12.8332 6.99984L6.99984 1.1665M12.8332 6.99984L6.99984 12.8332" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';
 
// 定义props
const props = defineProps({
  width: {
    type: [String, Number],
    default: 14
  },
  height: {
    type: [String, Number],
    default: 14
  }
});
</script>

<style lang="scss" scoped>

</style>



