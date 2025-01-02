<!-- 轮播图 -->
<template>
  <div class="carousel block text-center">
    <el-carousel :height="props.height">
      <el-carousel-item v-for="(item,index) in props.list" :key="index">
        <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
        <img :src="item.imgName" class="imgStyle"> 
      </el-carousel-item>
    </el-carousel>
  </div>
 
</template>
<script setup>
import { defineProps } from 'vue';
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

</script>
<style scoped>

.carousel{
    width: 100%;
    height: 100%;
}
/* .el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
} */
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