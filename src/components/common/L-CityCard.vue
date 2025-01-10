<!-- 城市卡片 -->
<template>
  <div class="cityCard">
    <img :src="shanghai"> 
    <svgLove class="cardLike"></svgLove>
    <div class="cardBottom">
        <span class="span-city">shanghai</span>
        <svgLocation class="span-svg"></svgLocation>
        <span class="span-province">shanghai</span>
    </div>
    <LCarousel 
        v-show="props.toShowIndex === props.index"
        class="carousel"
        :list="cityPicList"
        :height="'200px'"
        @getCurrentIndex="getCurrentIndex"
    ></LCarousel>

    <div
        v-if="props.toShowIndex === props.index && showPicBtn"
        class="picBtn"
        
    >
        <svgToRight2></svgToRight2>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import svgLove from '@/components/svg-icons/svg-love.vue'
import svgLocation from '@/components/svg-icons/svg-location.vue'
import LCarousel from "@/components/common/L-Carousel.vue"
import svgToRight2 from '@/components/svg-icons/svg-toRight2.vue'

const props = defineProps({
  toShowIndex: {
    type: Number,
    default: null
  },
  index: {
    type: Number,
    default: null
  }
});
const cityPicList = ref([
  {
    imgName: require('@/assets/imgs/shanghai.png')
  },{
    imgName:require('@/assets/imgs/beijing.png')
  },{
    imgName:require('@/assets/imgs/chengdu.png')
  },{
    imgName:require('@/assets/imgs/guangzhou.png')
  }
])
const shanghai = ref( require('@/assets/imgs/shanghai.png') );
const showPicBtn = ref(false)
// const toShowIndex = ref(null)

const getCurrentIndex = (value)=>{
  showPicBtn.value = value > 0 ? true : false 
}

</script>

<style lang="less" scoped>
.cityCard{
    min-width: 328px;
    min-height: 192px;
    border-radius: 16px;
    background: yellow;
    position: relative;
    display: inline-flex; /* 将子元素布局为 flex */
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    object-fit: cover; /* 确保图片内容按比例缩放以适应尺寸 */
    flex-shrink: 0; /* 防止图片因容器宽度不足而缩小 */

    img{
        width: 100%;
        height: 100%;
        border-radius: 16px;
    }
    .cardLike{
        position: absolute;
        top: 19px;
        right: 18px;
        z-index: 1001;
    }
    .cardBottom{
        width: 100%;
        height: 67px;
        display: flex;
        background: #fff;
        position: absolute;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        border-right: 1px solid #F3F3F3;
        border-bottom: 1px solid #F3F3F3;
        border-left: 1px solid #F3F3F3;
        bottom: 0;
        left: 0;
        z-index: 999;

        .span-province {
              color:#BFBFBF;
              font-size: 16px;
              font-family: Regular;
              position: absolute;
              right: 18px;
              top: 28%;
            }
            .span-city {
              color:#121212;
              font-size: 20px;
              font-family: Bold;
              position: absolute;
              left: 18px;
              top: 28%;
            }
            .span-svg{
              position: absolute;
              right: 85px;
              top: 28%;
            }
    }
    .carousel{
        width: 100%;
           
            border-radius: 16px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1000;

            ::v-deep .el-carousel--horizontal, .el-carousel--vertical{
              border-radius: 16px;
            }
            ::v-deep .el-carousel__arrow{
              display: none
            }
            ::v-deep .el-carousel__indicators{
              position: absolute;
              left:56px;
              bottom: 12px;
            }
            ::v-deep .el-carousel__button{
              width: 8px;
              height: 8px;
              margin:0 8px;
              border-radius: 50%;
            }
          }
    .picBtn{
        width: 32px;
        height: 32px;
        background: #fff;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1002;
        position: absolute;
        bottom: 0px;
        right: 16px;
    }
}
</style>