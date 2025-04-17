<template>
  <div class="login">
    <div class="left">
        <img :src="relax" width="152" height="135">
        <p class="texts">Come and check your unique itinerary!</p>
        <p class="notes">Also explore more interesting contents with the magic of AI</p>
        <div class="signInGoogle" @click="toLoginClick">
            <svgGoogle class="svg"></svgGoogle>
            <span>Sign in with Google</span>
        </div>
        <div class="signInOthers">
            <div class="buttonStyle">
                <svgTwitter class="svg"></svgTwitter>
                <span>Sign in with X</span>
            </div>
            <div class="buttonStyle">
                <svgApple class="svg"></svgApple>
                <span>Sign in with Apple</span>
            </div>
        </div>

    </div>
    <div class="right">
        <div class="cardItem" :style="carouselStyle" ref="carouselInner">
            <div v-for="(item, index) in cardPicList" :key="'original-' + index" class="carousel-item">
                <img :src="item.imgName"  />
                <div class="province">
                    <svgLocation class="svgStyle" :fill="'#FFF'" :width="16" :height="16"></svgLocation>
                    <span>SICHUAN</span>
                </div>           
                <span class="city">chengdu</span> 
            </div>
        
            <div v-for="(item, index) in cardPicList" :key="'copy-' + index" class=" carousel-item">
                <img :src="item.imgName" />
                <div class="province">
                    <svgLocation class="svgStyle" :fill="'#FFF'" :width="16" :height="16"></svgLocation>
                    <span>SICHUAN</span>
                </div>           
                <span class="city">chengdu</span> 
            </div> 
        </div>              
    </div>  
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, computed, nextTick } from 'vue';
import request from '@/utils/request'
import { useRouter, useRoute } from 'vue-router'
import svgLocation from '@/components/svg-icons/svg-location.vue'
import svgGoogle from "@/components/svg-icons/svg-google.vue"
import svgTwitter from "@/components/svg-icons/svg-twitter.vue"
import svgApple from "@/components/svg-icons/svg-apple.vue"
const relax = ref( require('@/assets/imgs/relax.png') );
const router = useRouter()
const route = useRoute()

// Vue 3 中的响应式数据
const requestId = ref(null)
const speed = ref(1.5); // 调整滚动速度（值越大滚动越快）
const scrollHeight = ref(205);
const isTransitioning = ref(false);
const cardPicList = reactive(
    [
        {
            imgName: require('@/assets/imgs/beijing.png'),alt:'00'
        },
        {
            imgName: require('@/assets/imgs/chengdu.png'),alt:'01'
        },
        {
            imgName: require('@/assets/imgs/guangzhou.png'),alt:'02'
        },
        {
            imgName: require('@/assets/imgs/beijing.png'),alt:'03'
        },
        {
            imgName: require('@/assets/imgs/chengdu.png'),alt:'04'
        },
        {
            imgName: require('@/assets/imgs/guangzhou.png'),alt:'05'
        }
    ])

// 引用 DOM 元素
const carouselInner = ref(null);

// 计算属性来动态设置轮播容器的样式
const carouselStyle = computed(() => {
  return {
    transform: `translateY(-${scrollHeight.value}px)`, // 修改为竖向滚动
    transition: isTransitioning.value ? 'transform 0.5s ease' : 'none',
  };
});

// 启动平滑滚动
const startAutoScroll = () => {
  const step = () => {
    scrollHeight.value += speed.value;

    // 获取单个 item 的高度 + 间隔
    const itemHeight = carouselInner.value?.children[0]?.offsetHeight || 0;
    const itemMargin = 28;
    const totalHeight = (itemHeight + itemMargin) * cardPicList.length;

    // 滚动到底部时，立即回到顶部，形成无缝循环
    if (scrollHeight.value >= totalHeight) {
      scrollHeight.value = 0;
    }

    requestId.value = requestAnimationFrame(step);
  };
  requestId.value = requestAnimationFrame(step);
};

// 点击登录
 const toLoginClick= () =>{
    if(true){
        router.push({name: 'LoggedIn'})
    }  
 }
// 组件挂载后启动滚动
onMounted(() => {
  nextTick(() => {
    startAutoScroll();
    const res = request.get('/your/api')
  });
});


</script>

<style lang="less" scoped>
.login{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px;
    box-sizing: border-box;
    .left{
        width: 560px;
        height: 652px;
        margin-right: 80px;


        img{
            margin-left: 4px;
            margin-top: 12px; 
        }
        .texts{
            font-size: 40px;
            line-height: 60px;
            color: #121212;
            margin-top: 24px;
        }
        .notes{
            font-size: 20px;
            line-height: 27px;
            font-family: Regular;
            color: #B1B0B0;
            margin-top: 24px;
            padding: 0;
        }
        .signInGoogle{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 80px;
            border-radius: 16px;
            background: #FF401A;
            color: #fff;
            font-family: Bold;
            font-size: 24px;
            line-height: 80px;
            text-align: center;
            margin-top: 75px;

            span{
                margin-left: 16px;
            }
            .svg{
                margin-top: 20px;
            }
        }
        .signInOthers{
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: 40px;

            .buttonStyle{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 260px;
                height: 64px;
                border: 2px solid #CCCCCC;
                border-radius: 16px;
                line-height: 62px;
                text-align: center;
                background: #FFFFFF;
                font-size: 20px;
                font-family: Regular;
                color: #595959;

                span{
                    margin-left: 16px;
                }
                .svg{
                    margin-top: 10px;
                }
            }
        }
    }
    .right{
        width: 640px;
        height: 652px;
        background: #FFEEE6;
        border-radius: 24px;
        display: flex;
        justify-content: center;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        gap: 28px;
        overflow: hidden;
        position: relative;
       
        .cardItem{
            width: 240px;
            height: 240px !important;          
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 28px;

            img{
                border-radius: 16px;
                width: 240px;
                height: 240px;
            }

            .province{
                position: absolute;
                left: 16px;
                top: 16px;
                display: flex;
                color: #F3F3F3;
                font-size: 14px;

                .svgStyle{
                    margin-top: 2px;
                }
            }
            .city{
                position: absolute;
                left: 16px;
                bottom: 16px;
                font-family: Bold;
                font-size: 28px;
                color: #FFFFFF;
            }
        }
    }
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.carousel-item {
  position: relative;
}


}
</style>