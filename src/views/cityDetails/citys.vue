<template>
  <div class="citys">
    <!-- 图片/视频 展示区 fullScreenPics-->
    <div class="pics" :style="isFullScreen ? 'display: block;':'display: grid'">
        <div class="large-image">
            <video      
              ref="videoRef"
              :src="beijingVideo" 
              type="video/mp4"
              autoplay
              controlsList="nodownload"
              :muted="isMuted"
              loop
              :style="isFullScreen ? 'border-radius: 24px' : 'border-top-left-radius: 24px;border-bottom-left-radius: 24px'"
            ></video>
            <svgSound class="svgSound"></svgSound>
            <svgFullScreen 
                v-if="!isFullScreen"
                class="svgFullScreen" 
                @click="handleFullScreen"
            ></svgFullScreen>
            <svgInitFullScreen 
                v-else
                class="svgInitFullScreen" 
                @click="handleFullScreen"
            ></svgInitFullScreen>
        </div>
        <div class="small-images" :style="isFullScreen ? 'display: none' : '' ">
            <div 
                class="small-image"
                v-for="(item,index) in mainPicList"
                :key="index"
                @mouseenter="mouseenterImg(index)"
                @mouseleave="mouseleaveImg(index)"
            >
         
                <img :src="item.imgItem" >
                <svgMore 
                    v-if="showSvgMore && index === 3" 
                    class="svgMore"
                    @mouseenter="mouseEnterFn"
                    @mouseleave="mouseLeaveFn"
                    @click="clickSvgMoreFn"
                ></svgMore>
                <svgMoreWhite 
                    v-if="!showSvgMore && index === 3" 
                    class="svgMore"
                    @mouseenter="mouseenterFn"
                    @mouseleave="mouseLeaveFn"
                    @click="clickSvgMoreFn"
                ></svgMoreWhite>
            </div>
        </div>
    </div>
    <!-- 城市详情区 -->
    <Introduction id="0" :isFullScreen="isFullScreen"></Introduction>
    <!-- 分割线 -->
    <div class="divider-horizontal"></div>
    <!-- things to do  -->
    <ThingsToDo id="1" @clickAddFn="clickAddFn"></ThingsToDo>
    <!-- 分割线 -->
    <div class="divider-horizontal"></div>
    <!-- Experts -->
    <Experts id="2"></Experts>
    <!-- 分割线 -->
    <div class="divider-horizontal"></div>
    <!-- Relevant Cities -->
    <Relevant id="3"></Relevant>
    
    <!-- 弹窗 -->
    <LAlert 
        v-if="isCloseAlert" 
        class="alert"
        :img="addCityData.img"
        :text="addCityData.text"
        @closeAlertFn="closeAlertFn"
    ></LAlert>
  </div>
</template>

<script setup>
import { ref,computed,defineProps} from 'vue';
import { useRouter, useRoute } from 'vue-router'
import video1 from "@/assets/video/beijing.mp4";
import svgMore from '@/components/svg-icons/svg-more.vue'
import svgMoreWhite from '@/components/svg-icons/svg-moreWhite.vue'

import svgSound from '@/components/svg-icons/svg-sound.vue'
import svgFullScreen from '@/components/svg-icons/svg-fullScreen.vue'
import svgInitFullScreen from '@/components/svg-icons/svg-initFullScreen.vue'
import LAlert from "@/components/common/L-Alert.vue"
import Introduction from "./citys/introduction.vue"
import ThingsToDo from "./citys/thingsToDo.vue"
import Experts from "./citys/Experts.vue"
import Relevant from "./citys/Relevant.vue"

const route = useRoute()

const restaurants = ref( require('@/assets/imgs/restaurants.png') );

const isMuted = ref(true)
const beijingVideo = ref(video1);

const mainPicList = ref(
    [
        {
            id: 0,
            imgItem: require('@/assets/imgs/shanghai.png')
        },{
            id: 1,
            imgItem: require('@/assets/imgs/shanghai.png')
        },{
            id: 2,
            imgItem: require('@/assets/imgs/shanghai.png')
        },{
            id: 3,
            imgItem: require('@/assets/imgs/shanghai.png')
        }
    ])
const showSvgMore = ref(true)
const isFullScreen = ref(false)

const isCloseAlert = ref(false)
const isAmplify = ref(false)
const mouseOverImgId = ref(null)
const addCityData = ref({
    text: '',
    img: ''
})
const props = defineProps({
  activeId: {
    type: Number,
    default: 0
  }
});

const mouseEnterFn = ()=>{
    showSvgMore.value = false
}
const mouseLeaveFn = ()=>{
 showSvgMore.value = true
}
// 点击更多，切换四张图片，上线为50张
const clickSvgMoreFn = ()=>{

}
// 视频切换全屏模式
const handleFullScreen = ()=>{
    isFullScreen.value = !isFullScreen.value
}

const closeAlertFn = (val)=>{
    isCloseAlert.value = val
}
const clickAddFn = (val,Data)=>{
    setTimeout(()=>{
        isCloseAlert.value = val
        addCityData.value = Data
    },3000)
}
// 点击图片，图片放大
const mouseenterImg = (i) =>{
    isAmplify.value = true
    mouseOverImgId.value = i
    const imgElement = document.querySelectorAll('.small-image img')[i];
    
    if (imgElement && mouseOverImgId.value === i) {
    
         // 计算 scale 比例
        const scaleX = 2.043;
        const scaleY = 2.1;
        imgElement.style.transition = 'transform  0.5s ease'
        imgElement.style.position = 'relative';
        imgElement.style.zIndex = '999';

        imgElement.style.borderTopRightRadius = '12px';
        imgElement.style.borderBottomRightRadius = '12px';
     
    
        imgElement.style.transformOrigin = getTransformOrigin(i);
        imgElement.style.transform = `scale(${scaleX}, ${scaleY})`;
    }
    
}
// 点击图片，图片缩小
const mouseleaveImg = (i) =>{
    
    isAmplify.value = false
   
    const imgElement = document.querySelectorAll('.small-image img')[i];
    if (imgElement && mouseOverImgId.value === i) {
        imgElement.style.transition = 'transform 0.5s ease';      
        
        imgElement.style.position = 'relative';
        imgElement.style.borderTopRightRadius = '0px';
        imgElement.style.borderBottomRightRadius = '0px';
      
        mouseOverImgId.value = null
       
        
        imgElement.style.transform = 'scale(1)'; // 恢复到原始大小
        setTimeout(()=>{
            imgElement.style.zIndex = '0';
        },500)

        if(i === 1){
            imgElement.style.borderTopRightRadius = '24px';
        }
        if(i === 3){
            imgElement.style.borderBottomRightRadius = '24px';
        }
    }
    
}
const getTransformOrigin = (i)=> {

  // 根据索引返回不同的放大方向
  if (i === 0) return 'left top'; // 左上
  if (i === 1) return 'right top'; // 右上
  if (i === 2) return 'left bottom'; // 左下
  if (i === 3) return 'right bottom'; // 右下
}
</script>

<style lang="less" scoped>
.citys{
    width: 100%;
    .pics {
        display: grid;
        grid-template-columns: 1.15fr 1fr;
        gap: 15px;
        width: 100%;
        height: auto;
        // margin-bottom: 40px;

        .large-image {
            height: 420px;
            grid-column: 1 / 2;
            grid-row: 1 / 3;
            position: relative;

            video {
                width: 100%;
                height:420px;
                object-fit: cover;
                border-top-left-radius: 24px;
                border-bottom-left-radius: 24px;
            }
            

            .svgSound{
                position: absolute;
                bottom: 20px;
                left: 20px;
            }
            .svgFullScreen{
                position: absolute;
                bottom: 20px;
                right: 20px;
            }
            .svgInitFullScreen{
                position: absolute;
                bottom: 20px;
                right: 20px;
            }
        }

        
        .small-images {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(2, 1fr);
            gap: 15px;
        }
        .small-images .svgMore{
            position: absolute;
            right: 20px;
            bottom: 20px;
           
        }

        .small-image img {
            width: 100%;
            height: 200px;
            object-fit: cover;
           z-index: 0;
           position: relative;
        }
        .small-image:nth-child(2) img{
            border-top-right-radius: 24px;
        }
        .small-image:nth-child(4){
            position: relative;
            z-index: 0;
        }
        .small-image:nth-child(4) img{
            border-bottom-right-radius: 24px;
        }
    }
   
    .divider-horizontal{
        width: 100%;
        height: 120px;
        border-top: 1.5px solid #F3F3F3;
        margin-top: 120px;
    }
    
    .cardContainer-header{
        height: 40px;
        display: flex;
        justify-content: space-between;
        font-size: 32px;
        color: #121212;
        margin-bottom: 28px;

        .cardContainer-header-right{
            width: 104px;
            display: flex;
            justify-content: space-between;
        }
    }
    .alert{
        position: fixed;
        top: 130px;
        left: 50%;
        transform: translateX(-50%);
    }
  
}
</style>