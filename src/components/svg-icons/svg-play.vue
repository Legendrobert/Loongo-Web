<!-- 字体图标 play -->
<template>
    <div>
        <svg :width="props.width" :height="props.height" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_13055_4176)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.14551 0.0546875C7.30048 0.0546875 6.4696 0.27008 5.73126 0.680253C4.97943 1.06351 4.34483 1.64281 3.89477 2.3572C3.43823 3.08184 3.18904 3.91779 3.17429 4.77413L3.17407 4.79873V35.2559L3.17429 35.2805C3.18904 36.1368 3.43823 36.9728 3.89477 37.6974C4.34483 38.4119 4.97943 38.9911 5.73126 39.3745C6.4696 39.7845 7.30048 39.9999 8.14551 39.9999C9.00251 39.9999 9.84497 39.7785 10.5911 39.3568C10.6075 39.3476 10.6238 39.3379 10.6398 39.3279L35.2963 24.0781C36.044 23.7012 36.6751 23.1272 37.1214 22.4172C37.5817 21.6841 37.8263 20.8359 37.8263 19.9702C37.8263 19.1044 37.5817 18.2562 37.1214 17.5231C36.6749 16.8124 36.0426 16.2379 35.294 15.8611L10.6357 0.724116C10.621 0.715088 10.6061 0.706325 10.5911 0.697833C9.84497 0.276237 9.00251 0.0546875 8.14551 0.0546875Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_13055_4176">
                    <rect width="40" height="40" fill="white" transform="translate(0.5)"/>
                </clipPath>
            </defs>
        </svg>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';
 
// 定义props
const props = defineProps({
  width: {
    type: [String, Number],
    default: 41
  },
  height: {
    type: [String, Number],
    default: 40
  }
});
</script>

<style lang="scss" scoped>

</style>



