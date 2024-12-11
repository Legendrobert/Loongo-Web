<template>
  <div class="explore">
    <div class="header-nav">
      <ul class="header-nav-left">
        <li class="activeNav">All</li>
        <li>Eastern</li>
        <li>Western & Southern</li>
        <li>Northern</li>
        <li>Central</li>
      </ul>
      <ul class="header-nav-right">
        <li>
          <svgSearch></svgSearch>
        </li>
        <li>
          <svgMap></svgMap>
        </li>
        <li>
          <svgAI></svgAI>
        </li>
      </ul>
    </div>
    <div class="main">
      <ul class="picList">
        <li v-for="(item,index) in cityList" :key="index">
          <img :src="shanghai">
          <span>{{item.city}}</span>
          <svgLove class="picList-like"></svgLove>
        </li>
      </ul>
      <div class="map">

      </div>
    </div>
  </div>
</template>

<script setup>
import svgAI from '@/components/svg-icons/svg-AI.vue'
import svgMap from '@/components/svg-icons/svg-map.vue'
import svgSearch from '@/components/svg-icons/svg-search.vue'
import svgLove from '@/components/svg-icons/svg-love.vue'
import { ref } from 'vue';

const shanghai = ref( require('@/assets/imgs/shanghai.png') );
const cityList = ref([
  {
    id: 1,
    city: 'SHANGHAI'
  },{
    id: 2,
    city: 'SHANGHAI'
  },{
    id: 3,
    city: 'SHANGHAI'
  },{
    id: 4,
    city: 'SHANGHAI'
  },{
    id: 5,
    city: 'SHANGHAI'
  },{
    id: 6,
    city: 'SHANGHAI'
  },{
    id: 7,
    city: 'SHANGHAI'
  },{
    id: 8,
    city: 'SHANGHAI'
  },{
    id: 9,
    city: 'SHANGHAI'
  },{
    id: 10,
    city: 'SHANGHAI'
  }

  
])

</script>

<style lang="less" scope>
.explore{

  .header-nav{
    height: 47px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;

    .header-nav-left{
      width: 697px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #595959;
      font-size: 20px;
      font-family: Regular;

      li{
        height: 27px;
        border-bottom: 2px solid transparent;
        margin: 0 16px !important;
        
      }
      .activeNav{
        border-bottom: 2px solid #121212;
        color: #121212;
        font-family: Semibold;
      }
    }
    .header-nav-right{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 200px;

      li{
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg{
          vertical-align: middle;
        }
      }
    }
  }
  .main{
    display: flex;

    .picList{
      width: calc(328px * 4 + 18px * 3);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 18px;

      li{
        width: 328px;
        height: 200px;
        position: relative;
        display: inline-flex; /* 将子元素布局为 flex */
        align-items: center; /* 垂直居中 */
        justify-content: center; /* 水平居中 */
        object-fit: cover; /* 确保图片内容按比例缩放以适应尺寸 */
        flex-shrink: 0; /* 防止图片因容器宽度不足而缩小 */

        img{
          width: 328px;
          height: 200px;
          border-radius: 16px;
        }
        span{
          position: absolute;
          // top: 0px;
          font-size: 28px;
          font-family: Bold;
          color: #FFF;
          z-index: 999;
        }
        .picList-like{
          position: absolute;
          top: 19px;
          right: 18px;
          z-index: 999;
        }
      }
    }
  }
}

</style>
