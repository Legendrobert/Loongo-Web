<!-- 字体图标 flag -->
<template>
    <div>
        <svg :width="width" :height="height" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.0466 0.0507812C1.28434 0.0507812 1.49949 0.147578 1.65476 0.303912L11.4946 5.22385C11.6882 5.32064 11.8105 5.5185 11.8105 5.73495C11.8105 5.95139 11.6882 6.14926 11.4946 6.24605L1.90374 11.0415V15.0919C1.90374 15.5653 1.51999 15.9491 1.0466 15.9491C0.573213 15.9491 0.189453 15.5653 0.189453 15.0919V0.907925C0.189453 0.434537 0.573213 0.0507812 1.0466 0.0507812Z" fill="#FF401A"/>
        </svg>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';
 
// 定义props
const props = defineProps({
  width: {
    type: [String, Number],
    default: 11
  },
  height: {
    type: [String, Number],
    default: 16
  }
});
</script>

<style lang="scss" scoped>

</style>


