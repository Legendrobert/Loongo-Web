<!-- 轮播图 -->
<template>
  <div class="carousel block text-center">
    <el-carousel :height="props.height" @change="handleIndicatorClick">
      <el-carousel-item v-for="(item,index) in props.list" :key="index" activeIndex='0'>
        <img :src="item.imgName" class="imgStyle"> 
      </el-carousel-item>
    </el-carousel>
  </div>
 
</template>
<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const emits = defineEmits(["getCurrentIndex"])
const props = defineProps({
  list: {
    type: Array,
    default: []
  },
  height: {
    type: [String, Number],
    default: "150px"
  }
});
const currentIndex = ref(0)
const handleIndicatorClick = (index)=>{
  currentIndex.value = index;
  emits('getCurrentIndex', currentIndex.value)
  
}
</script>
<style scoped>

.carousel{
    width: 100%;
    height: 100%;
}

.imgStyle{
    width: 100%;
    height: 100%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

</style>