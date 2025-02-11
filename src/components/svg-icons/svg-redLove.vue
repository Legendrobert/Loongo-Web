<!-- 字体图标 love -->
<template>
    <div>
        <svg :width="props.width" :height="props.height" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.3859 10.1582C22.4201 12.1532 20.7031 13.9726 19.1422 15.4409C18.0203 16.4945 15.7716 18.6115 13.3327 20.1334C12.5181 20.6406 11.484 20.6406 10.6694 20.1334C8.23533 18.6115 5.98177 16.4945 4.85987 15.4409C3.29896 13.9726 1.58196 12.1483 0.616146 10.1582C-0.944763 6.92904 0.591757 2.68532 3.79162 1.16831C6.83539 -0.270656 9.49869 0.714668 12.001 2.69507C14.5034 0.714668 17.1667 -0.270656 20.2056 1.16831C23.4103 2.68532 24.9468 6.92904 23.3859 10.1582Z" fill="#FF401A"/>
        </svg>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';
 
// 定义props
const props = defineProps({
  width: {
    type: [String, Number],
    default: 20
  },
  height: {
    type: [String, Number],
    default: 17
  },
  fillColor: {
    type: String,
    default: '#fff' // 默认颜色
  }
});
</script>

<style lang="scss" scoped>

</style>


