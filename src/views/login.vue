<template>
  <div class="login">
    <div class="left">
        <img :src="relax" width="152" height="135">
        <p class="texts">Come and check your unique itinerary!</p>
        <p class="notes">Also explore more interesting contents with the magic of AI</p>
        <div class="signInGoogle">
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
    <div class="right carousel-container" ref="carouselContainer">
        <div class="cardItem carousel-inner" :style="carouselStyle" ref="carouselInner">
            <div v-for="(item, index) in cardPicList" :key="'original-' + index" class=" carousel-item">
                <img :src="item.imgName"  />
                <div class="province">
                    <svgLocation class="svgStyle" :fill="'#ccc'" :width="16" :height="16"></svgLocation>
                    <span>SICHUAN</span>
                </div>           
                <span class="city">chengdu</span> 
            </div>
        
            <div v-for="(item, index) in cardPicList" :key="'copy-' + index" class="cardItem carousel-item">
                <img :src="item.imgName" />
                <div class="province">
                    <svgLocation class="svgStyle" :fill="'#ccc'" :width="16" :height="16"></svgLocation>
                    <span>SICHUAN</span>
                </div>           
                <span class="city">chengdu</span> 
            </div> 
        </div>              
    </div>  
  </div>
</template>

<script setup>
import { ref, reactive,onMounted, onUnmounted,computed,nextTick } from 'vue';


import svgLocation from '@/components/svg-icons/svg-location.vue'
import svgGoogle from "@/components/svg-icons/svg-google.vue"
import svgTwitter from "@/components/svg-icons/svg-twitter.vue"
import svgApple from "@/components/svg-icons/svg-apple.vue"
const relax = ref( require('@/assets/imgs/relax.png') );

// Vue 3 中的响应式数据
const currentIndex = ref(1);
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
const carouselContainer = ref(null);
const carouselInner = ref(null);

// 计算属性来动态设置轮播容器的样式
const carouselStyle = computed(() => {
  return {
    transform: `translateY(-${scrollHeight.value}px)`, // 修改为竖向滚动
    transition: isTransitioning.value ? 'transform 0.5s ease' : 'none',
  };
});

// 处理自动滚动的方法
const startAutoScroll = () => {
  setInterval(() => {
    if (isTransitioning.value) return;


    isTransitioning.value = true;
    // 每次增加图片高度 + 间隔
    const itemHeight = carouselInner.value.children[currentIndex.value].offsetHeight;
    const itemMargin = 28; // 图片间隔35px
    scrollHeight.value += itemHeight + itemMargin;

    // 更新当前图片索引
    currentIndex.value = (currentIndex.value + 1) % cardPicList.length;

    // 当滚动到复制图片时，立即将滚动高度重置为 0，这样不会看到过渡
    if (currentIndex.value === 1) {
      setTimeout(() => {
        scrollHeight.value = 205;
        isTransitioning.value = false;
      }, 500); // 等待动画过渡完成后再重置
    } else {
      setTimeout(() => {
        isTransitioning.value = false;
      }, 500); // 等待动画过渡完成后恢复
    }
  }, 3000); // 每3秒自动滚动
};

// 计算容器高度
const updateContainerHeight = () => {
  nextTick(() => {
    // 确保容器高度设置为图片的高度，减去部分图片底部
    const firstItemHeight = carouselInner.value?.children[0]?.offsetHeight || 0;
    if (firstItemHeight) {
     
      carouselInner.value.style.height = `${firstItemHeight}px`; // 显示一张完整的图片和部分间隔
      
    }
  
  });
};

// 组件挂载后执行
onMounted(() => {
  updateContainerHeight();
  startAutoScroll();
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
            // position: relative;
            // transition: transform 1s ease-in-out;
            width: 240px;
            height: 240px !important;
            // display: flex;
            // position: absolute;
            // top: 0;
            // left: 0;
            display: flex;
            // justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 28px;

            img{
                border-radius: 16px;
                width: 240px;
                height: 240px;
                // background: red;
            }

            .province{
                position: absolute;
                left: 16px;
                top: 16px;
                display: flex;
                color: #ccc;
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

// .carousel-container {
//   width: 240px;  /* 每张图片的宽度 */
//   height: 655px;  /* 容器高度：图片高度 + 间隔的部分，目的是能看到上一张图片的底部和下一张图片的顶部 */
//   overflow: hidden;
//   position: relative;
//   margin: 0 auto;
//   background: #000;
// }

// .carousel-inner {
//   display: flex;
//   flex-direction: column;  /* 垂直排列 */
// }

// .carousel-item {
//   width: 240px;
//   height: 240px;  /* 每张图片的高度 */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 35px;  /* 图片间隔35px */
// }

// .carousel-item img {
//   width: 240px;
//   height: 240px; 
//   object-fit: cover;
  
// }
}
</style>