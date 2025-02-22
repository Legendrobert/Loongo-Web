<!-- 字体图标 twitter Logo -->
<template>
    <div>
        <svg :width="props.width" :height="props.height" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4581 9.12195L20.9739 1.15625H23.4655L23.4548 1.16801L14.5656 10.592L22.7041 21.3938C22.9109 21.6682 22.9446 22.036 22.7913 22.3436C22.6478 22.6314 22.3635 22.82 22.046 22.843H16.9496C16.6898 22.8242 16.4495 22.6942 16.2914 22.4845L10.5645 14.8834L3.09253 22.843H0.534668L9.45699 13.4133L1.31855 2.61156C1.11177 2.33712 1.078 1.96933 1.23134 1.66182C1.38467 1.3543 1.69874 1.15996 2.04236 1.15996H7.00739C7.29194 1.15996 7.55997 1.29361 7.7312 1.52088L13.4581 9.12195ZM12.6953 11.1216C12.6696 11.0917 12.6462 11.0605 12.625 11.0282L6.5555 2.97248H3.85985L17.4671 21.0329H20.1628L12.6953 11.1216Z" fill="#595959"/>
        </svg>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';
 
// 定义props
const props = defineProps({
  width: {
    type: [String, Number],
    default: 24
  },
  height: {
    type: [String, Number],
    default: 24
  }
});
</script>

<style lang="scss" scoped>

</style>


