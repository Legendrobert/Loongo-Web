<!-- 字体图标 hotels -->
<template>
    <div>
        <svg :width="props.width" :height="props.height" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_14155_4458)">
                <path :fill="props.fillColor" fill-rule="evenodd" clip-rule="evenodd" d="M0.0463867 2.03973C0.0463867 1.21525 0.714762 0.546875 1.53924 0.546875H12.4607C13.2852 0.546875 13.9536 1.21525 13.9536 2.03973V6.35215L13.95 6.35214H0.0499279L0.0463867 6.35215V2.03973ZM0.0463867 7.60213V12.9612C0.0463867 13.7857 0.714762 14.4541 1.53924 14.4541H12.4607C13.2852 14.4541 13.9536 13.7857 13.9536 12.9612V7.60213L13.95 7.60214H0.0499279L0.0463867 7.60213ZM6.31415 4.048V3.06943C6.31415 2.51714 5.86644 2.06943 5.31415 2.06943H2.62899C2.07671 2.06943 1.62899 2.51714 1.62899 3.06943V4.048C1.62899 4.60028 2.07671 5.048 2.62899 5.048H5.31415C5.86644 5.048 6.31415 4.60028 6.31415 4.048ZM12.3709 3.06943V4.048C12.3709 4.60028 11.9232 5.048 11.3709 5.048H8.68576C8.13347 5.048 7.68576 4.60028 7.68576 4.048V3.06943C7.68576 2.51714 8.13347 2.06943 8.68576 2.06943H11.3709C11.9232 2.06943 12.3709 2.51714 12.3709 3.06943Z" fill="#B1B0B0"/>
            </g>
            <defs>
                <clipPath id="clip0_14155_4458">
                    <rect width="14" height="14" fill="white" transform="translate(0 0.5)"/>
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
    default: 14
  },
  height: {
    type: [String, Number],
    default: 15
  },
  fillColor: {
    type: String,
    default: '#B1B0B0' // 默认颜色
  }
});
</script>

<style lang="scss" scoped>

</style>




