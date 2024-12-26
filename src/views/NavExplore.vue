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
      <div class="main-pic">
        <!-- 第一排4个固定重点城市 -->
        <ul class="picList">
          <li 
            v-for="(item,index) in importantCityList" 
            :key="index"    
            @mouseenter="mouseenterFn(index)"
            @mouseleave="mouseleaveFn(index)" 
          >
            <img :src="shanghai">
            <video 
              v-show="toShowIndex === index"
              ref="videoRef"
              :src="beijingVideo" 
              type="video/mp4"
              muted
              loop
              @mouseenter="playVideo(index)"
              @mouseleave="pauseVideo(index)"
            ></video>
            <span >{{item.city}}</span>
            <svgLove class="picList-like"></svgLove>
          </li>
        </ul>
        <!-- 其他城市 -->
        <ul class="picList">
          <li 
            v-for="(item,index) in otherCityList" 
            :key="index"
            class="otherCityLi"
           @mouseenter="mouseenterFn(index, 'other')"
            @mouseleave="mouseleaveFn(index,'other')"
          >
            <img :src="shanghai">    
            <video 
              v-show="toShowOtherIndex === index"
              ref="otherVideoRef"
              :src="beijingVideo" 
              type="video/mp4"
              muted
              loop
              @mouseenter="playVideo(index,'other')"
              @mouseleave="pauseVideo(index,'other')"
            ></video>     
            <svgLove class="picList-like"></svgLove>
            <div class="picList-bottom">
              <span class="span-city">{{item.city}}</span>
              <svgLocation class="span-svg"></svgLocation>
              <span class="span-province">{{item.province}}</span>
            </div>
          </li>
        </ul>
      </div>      
      <div class="main-map">

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import svgAI from '@/components/svg-icons/svg-AI.vue'
import svgMap from '@/components/svg-icons/svg-map.vue'
import svgSearch from '@/components/svg-icons/svg-search.vue'
import svgLove from '@/components/svg-icons/svg-love.vue'
import svgLocation from '@/components/svg-icons/svg-location.vue'
import video1 from "@/assets/video/beijing.mp4";
const beijingVideo = ref(video1);



const shanghai = ref( require('@/assets/imgs/shanghai.png') );
const videoRef = ref(null)
const otherVideoRef = ref(null)


const importantCityList = ref([
  {
    id: 1,
    city: 'SHANGHAI',
    video: beijingVideo
  },{
    id: 2,
    city: 'SHANGHAI',
    video: beijingVideo
  },{
    id: 3,
    city: 'SHANGHAI',
    video: beijingVideo
  },{
    id: 4,
    city: 'SHANGHAI',
    video: beijingVideo
  }
])
const otherCityList = ref([
  {
    id: 1,
    city: 'JIAXING',
    province: 'Zhejiang',
    video: beijingVideo
  },{
    id: 2,
    city: 'SHANGHAI',
    province: 'Zhejiang',
    video: beijingVideo
  },{
    id: 3,
    city: 'SHANGHAI',
    province: 'Zhejiang',
    video: beijingVideo
  },{
    id: 4,
    city: 'SHANGHAI',
    province: 'Zhejiang',
    video: beijingVideo
  },{
    id: 5,
    city: 'SHANGHAI',
    province: 'Zhejiang',
    video: beijingVideo
  },{
    id: 6,
    city: 'SHANGHAI',
    province: 'Zhejiang',
    video: beijingVideo
  }
])
const toShowIndex = ref(null)
const toShowOtherIndex = ref(null)

const mouseenterFn = (i,type) =>{
  if(type === 'other'){
    toShowOtherIndex.value = i
  }else{
    toShowIndex.value = i
  }
}
const mouseleaveFn = () =>{
  toShowIndex.value = null
  toShowOtherIndex.value = null
}
// 播放视频
const playVideo = (i,type) => {
  if(type === 'other'){
    if (otherVideoRef.value[i]) {
      otherVideoRef.value[i].play();
    }

  }else{
    if (videoRef.value[i]) {
      videoRef.value[i].play();
    }
  }
};

// 暂停视频
const pauseVideo = (i,type) => {

  if(type === 'other'){
    if (otherVideoRef.value[i]) {
      otherVideoRef.value[i].pause();
    }
  }else{
    if (videoRef.value[i]) {
      videoRef.value[i].pause();
    }
  }
};

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
    height: calc(100vh - 219px);
    overflow: scroll;
    .main-pic{
      width: 100%;
      .picList{
        display: grid;
        grid-template-columns: repeat(4, 328px); /* 一行固定 4 列，每列宽度 328px */
        // grid-gap: 18px; /* 照片间的间距 */
        width: 100%;
        justify-content: space-between;

        li{
          width: 328px;
          height: 200px;
          position: relative;
          display: inline-flex; /* 将子元素布局为 flex */
          align-items: center; /* 垂直居中 */
          justify-content: center; /* 水平居中 */
          object-fit: cover; /* 确保图片内容按比例缩放以适应尺寸 */
          flex-shrink: 0; /* 防止图片因容器宽度不足而缩小 */
          
          // margin-top: 28px !important;

          // &:hover{
            
          //   .toShow {
          //     display: inline
          //   }
          // }

          img{
            width: 328px;
            height: 200px;
            border-radius: 16px;
          }
          video{
            width: 328px;
            height: 200px;
            border-radius: 16px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1000;
          }
          span{
            // display: none;
            position: absolute;
            font-size: 28px;
            font-family: Bold;
            color: #FFF;
            z-index: 999;
          }
          .picList-like{
            display: none;
            position: absolute;
            top: 19px;
            right: 18px;
            z-index: 999;
          }
          .picList-bottom {
            // display: none;
            width: 100%;
            height: 67px;
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
              right: 18px;
              top: 28%;
            }
            .span-city {
              color:#121212;
              font-size: 20px;
              font-family: Bold;
              left: 18px;
              top: 28%;
            }
            .span-svg{
              position: absolute;
              right: 85px;
              top: 28%;
            }
          }
        }
        .otherCityLi{
          margin-top: 28px !important;
        }
      }
    }
  }
}

</style>
