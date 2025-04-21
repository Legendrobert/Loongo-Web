<template>
  <div class="navExplore" ref="exploreContainer">
    <div class="header">
      <div class="header-title">
        <span>Where Next</span>
        <img 
          :src="headImg" 
          width="120" 
          height="90"
          class="transition-image"
          @click="clickHeadImg"
        >
        <span>?</span>
      </div>
      <div class="tips">for the terrific and memorable China trip</div>
    </div>
    <div class="chinaTrip">
      <div class="chinaTrip-left">
        <div class="title">
          <span>What</span>
            <el-select
              v-model="selectValue"
              :teleported="false"
              class="selectPart"
              placeholder="Select a country"
            >
              <template #prefix>
                <img :src="America" width="24" height="24">
              </template>
              <el-option 
                v-for="(item,index) in list"
                :key="index"
                :label="item.country" 
                :value="item.id"
              >
                <img :src="item.img" width="24" height="24" style="margin-top:5px;">
                <span>{{ item.country }}</span>
                  
                </el-option>
            </el-select>
          <span>like for China trip</span>
        </div>
        <ul class="rank">
          <li 
            v-for="i in 6" 
            :key="i"
            class="rankItem"
            :style="{ 
              borderBottom: i !== 6 ? '1px solid #CCCCCC' : 'none',
              fontFamily: i === 1 ? 'Semibold' : 'Regular'
            }"   
          >
            <span>Exiquisite Jewelery Shopping</span>
            <div 
              v-if="i === 1"
              class="rankItemNew"
              >NEW</div>
            <div>
              <div 
                v-if="i === 2"
                class="rankItemNum"
              >
                <svgRankUp></svgRankUp>
                {{i-1}}
              </div>
              <div 
                v-if="i === 3"
                class="rankItemNum">
                <svgRankDown></svgRankDown>
                {{i-1}}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="chinaTrip-right" @click="clickDetail">
        <img 
          :src="greatWall" 
          width="517" 
          height="345"
          class="pic"
        >
        <div class="content">
          <div class="content-top">
            <div class="content-top-hot">
              <svgHot :fill="'#121212'"></svgHot>
              <span>5675</span>
            </div>
            <div class="sharePart">
              <svgShare :fillColor="'#fff'" ></svgShare>
            </div>
            
          </div>
          <div class="content-text">{{text}}</div>
        </div>
      </div>
    </div>
    <div class="specialTour">
      <div class="specialTour-top">
        <span class="specialTour-top-title">Specialized Tours for</span>
        <ul class="specialTour-top-type">
          <li 
            v-for="(item,index) in specialTourList"
            :key="index"
            :class="typeActiveIndex === index ? 'active' : ''"
            @click="typeClick(index)"
          >{{item}}</li>
        </ul>
      </div>
      <div class="specialTour-show">
        <div class="morePic">
          <div class="morePic-top">
            <div class="morePic-top-title">OFFICAL RECOMMENDATIONS</div>
            <div class="morePic-top-content">Unlock Exclusive Travel Guides</div>
            <div class="morePic-top-tips">Discover exiquisite and unique on Hotels, restaurants</div>
          </div>
          <div class="morePic-bottom">
            <div class="showMore">Show More</div>
            <img :src="hotAirBalloon" width="120" height="120">
          </div>
        </div>
        <!-- 横向滚动轮播图 -->
        <div 
          class="carousel-container"
          ref="carouselContainer" 
          
        >       
          <ul 
            class="picList" 
            ref="carousel"
          >
            <li 
              v-for="index in 5" 
              :key="index" 
              class="picItem" 
              @mouseenter="picMouseEnter(index)"
              @mouseleave="picMouseLeave(index)"
            >
              <img :src="greatWall" width="305" height="398">
              <div class="item-top">
                <div class="item-top-left">
                  <svgHot :fillColor="'#fff'"></svgHot>
                  <span>5678</span>
                </div>
                <svgShare 
                  :fillColor="isHoverIndex === index ? '#FF401A' : '#121212'" 
                  :width="isHoverIndex === index ? '48' : '32'" 
                  :height="isHoverIndex === index ? '48' : '32'" 
                  :class="isHoverIndex === index ? 'item-top-right-48 item-top-right':'item-top-right'"
                ></svgShare>
              </div>
              <div v-if="isHoverIndex === index" class="hoverStyle item-bottom">{{hoverPicText}}</div>
              <div v-else class="item-bottom">4-DAY TOUR OF THE GREAT WALL</div>
              
            </li>          
          </ul>
        </div>
      </div>
      
    </div>
    <div class="bestTravel">
        <div class="title">Best Travel in China</div>
        <div class="carousel">
          <img :src="currentMainImage" width="100%" :height="600"> 
          <div class="introduce">
            <div class="introduce-title">The Long Journey</div>
            <div class="introduce-content">{{introduceContent}}</div>
            <div class="introduce-more">
              <span>View More</span>
              <svgToRight></svgToRight>
            </div>
          </div>
          <ul class="picList">
            <li 
              class="picItem" 
              v-for="(item,index) in cityPicList" 
              :key="index"
              @mouseenter="handlePicItemHover(index)"
          
            >
              <img :src="item.imgName" :width="186" :height="160">
            </li>
          </ul>
        </div>
        <div class="button">
          <div 
            v-for="(item,i) in 3" 
            :key="i" 
            :class="i === currentButtonIndex ? 'buttonItem active' : 'buttonItem'" 
            @mouseenter="handleButtonItemHover(i)"
          ></div>
        </div>

      </div>
    <div class="footer">
      <div class="pics-container">
        <ul class="pics first" ref="firstPics">
          <li v-for="(item,i) in 6" :key="i">
            <img :src="greatWall" width="240" height="240">
          </li>
          <li v-for="(item,i) in 6" :key="i + 6">
            <img :src="greatWall" width="240" height="240">
          </li>
        </ul>
      </div>
      <div class="pics-container">
        <ul class="pics second" ref="secondPics">
          <li v-for="(item,i) in 6" :key="i">
            <img :src="greatWall" width="240" height="240">
          </li>
          <li v-for="(item,i) in 6" :key="i + 6">
            <img :src="greatWall" width="240" height="240">
          </li>
        </ul>
      </div>
      <div class="text">
        <div>Top recommendations for you</div>
        <svgToDown class="toDown"></svgToDown>
      </div>
    </div>
    <!-- china trip 弹窗 -->
    <el-dialog 
      v-model="showChinaTripDetail"
      class="dialog"
      width="1017px"
      center
      align-center
    >
      <template #header>
            <img :src="logo" width="40" height="40">
        </template>
      <div class="dialog-content">
        <el-carousel 
          height="480px"
          class="carouselList"
          :autoplay="false"
        >
          <el-carousel-item 
            v-for="(item,index) in cityPicList" 
            :key="index">
            <img :src="item.imgName">
          </el-carousel-item>
        </el-carousel>
        <div class="carouselText">
          <div 
            id="fullText"
            class="title"
            @mouseenter="mouseEnterFn"
            @mouseleave="mouseLeaveFn"
          >{{carouselText}}</div>
          <div class="hot">
            <div class="hotItem">
              <svgLocation :width="16" :height="16" :fill="'#595959'"></svgLocation>
              <span>Shanghai</span>
            </div>
            <div class="hotItem">
              <svgClock :width="16" :height="16" :fill="'#595959'"></svgClock>
              <span>1 Day</span>
            </div>
            <div class="hotItem">
              <svgHot :width="16" :height="16" :fill="'#595959'"></svgHot>
              <span>5678</span>
            </div>
          </div>
          <div class="blockContent">{{blockContentText}}</div>
          <div class="menuBlock">
            <div 
              ref="navContainer" 
              class="menuHead"
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"            
            >
              <!-- 左按钮 -->
              <svgToLeft 
                v-if="showArrowsLeft"
                class="arrow-btn svgLeft"
                @click="scrollLeft"
              ></svgToLeft>
              <!-- 可滚动区域 -->
              <div 
                class="nav-wrapper" 
                ref="scrollWrapper"
              >
                <ul>
                  <li 
                    v-for="index in 7" 
                    :key="index"
                    :class="activeIndex === index ? 'isActiveMenu nav-item' : 'nav-item'"
                    @click="clickMenuItem(index)"
                  >header{{index}}</li>
                </ul>
              </div>
              <!-- 右按钮-->
              <svgToRight1 
                v-if="showArrowsRight"
                class="arrow-btn svgRight"
                @click="scrollRight"
              ></svgToRight1>
            </div>
            <div>{{menuItemText}}</div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted,reactive, nextTick,computed } from 'vue';
import { ArrowDown } from '@element-plus/icons-vue'
import svgToLeft from '@/components/svg-icons/svg-toLeft.vue'
import svgToRight1 from '@/components/svg-icons/svg-toRight.vue'
import svgLocation from '@/components/svg-icons/svg-location.vue'
import svgRankUp from '@/components/svg-icons/svg-rankUp.vue'
import svgRankDown from '@/components/svg-icons/svg-rankDown.vue'
import svgShare from '@/components/svg-icons/svg-share.vue'
import svgHot from '@/components/svg-icons/svg-hot.vue'
import svgClock from '@/components/svg-icons/svg-clock.vue'
import svgToRight from '@/components/svg-icons/svg-toRight2.vue'
import svgToDown from '@/components/svg-icons/svg-toDown.vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const logo = ref( require('@/assets/imgs/logo.png') );
const Russia = ref( require('@/assets/imgs/Russia.png') );
const America = ref( require('@/assets/imgs/America.png') );
const greatWall = ref( require('@/assets/imgs/greatWall.png') );
const beijing = ref(require('@/assets/imgs/beijing.png'));
const chengdu = ref(require('@/assets/imgs/chengdu.png'))
const hotAirBalloon = ref( require('@/assets/imgs/hotAirBalloon.png') );
const text = ref('Shanghai is a luxurious playground for the well-heeled, with Michelin-star dining, high-end fashion houses, and over-the-top hotels. The Huangpu River splits the city...')
const introduceContent = ref('Shanghai is a luxurious playground for the well-heeled, with Michelin-star dining, high-end fashion houses, and over-the-top hotels. The Huangpu River splits the city into two districts: Pudong and Puxi.')
const specialTourList = reactive(['Landscape','Hiking','City Walk'])
const headPicList = reactive([
  {
    img: greatWall
  },{
    img: beijing
  },{
    img: chengdu
  }
])
const list = reactive([
  { 
    img: Russia,
    country: 'United States',
    id: 0
  },
  { 
    img: Russia,
    country: 'United States',
    id: 1
  },
  { 
    img: America,
    country: 'United States',
    id: 2
  },
]);
const cityPicList = reactive([
  {
    imgName: require('@/assets/imgs/greatWall.png')
  },{
    imgName:require('@/assets/imgs/beijing.png')
  },{
    imgName:require('@/assets/imgs/chengdu.png')
  }
])
const typeActiveIndex = ref(1)
const selectValue = ref('')
const isHoverIndex = ref(-1)
const hoverPicText = ref('" Wonderful sightseeing, you will love it immediately, highly recommendations as the first CN travel! "')
const blockContentText = ref('Shanghai is a luxurious playground for the well-heeled, with Michelin-star dining, high-end fashion houses, and over-the-top hotels. The Huangpu River splits the city into two districts: Pudong and Puxi.')
const menuItemText = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
const fullText = ref('Exquisite Jewelry Shopping within 10 days') // 标题全部内容
const carouselText = ref('Exquisite Jewelry Shopping within 10 days')
const showChinaTripDetail = ref(false)
const headImg = ref(null)
const activeIndex = ref(1)
const showArrowsRight = ref(false)
const showArrowsLeft = ref(false)
const isJumpingToDestination = ref(false) // 拖动到底部是否跳转到Destination
const currentMainImage = ref(greatWall) // 添加主图片的响应式变量
const currentButtonIndex = ref(0)

// refs
const navContainer = ref(null);  // 外层容器
const scrollWrapper = ref(null); // 可滚动容器
const carouselContainer = ref(null); // 鼠标滚动事件的外层容器
const carousel = ref(null); //鼠标滚动事件的可滚动容器
const exploreContainer = ref(null) // explore 页面
const firstPics = ref(null)
const secondPics = ref(null)

// 组件挂载后，检测内容是否超出
onMounted(() => {
  let headPicListIndex = 0;
  
  const changeImage = () => {
    const img = document.querySelector('.transition-image');
    // img.style.animation = 'none';
    // img.offsetHeight; // 触发重绘
    // img.style.animation = null;
    
    headImg.value = headPicList[headPicListIndex].img;
    headPicListIndex = (headPicListIndex + 1) % headPicList.length;
  };

  setInterval(changeImage, 2000);
  nextTick(() => {
    checkOverflow();
  });
  window.addEventListener("wheel", handleGlobalWheel, { passive: false });
  if (exploreContainer.value) {
    exploreContainer.value.addEventListener('scroll', handleExploreToDestinationScroll);
  }
});
onUnmounted(() => {
  window.removeEventListener("wheel", handleGlobalWheel);
  if (exploreContainer.value) {
    exploreContainer.value.removeEventListener('scroll', handleExploreToDestinationScroll);
  }
});
// 点击图片跳转到相应城市详情页
const clickHeadImg = () => {
  router.push({
    name: 'Details',
    params: {
      cityName: 'SHANGHAI'
    }
  });
}
// 点击type按钮
const typeClick = (i)=>{
  typeActiveIndex.value = i
}
const picMouseEnter = (index) => {
  isHoverIndex.value = index
}
const picMouseLeave = (index) =>{
  isHoverIndex.value = -1
}
// 点击china trip 内容卡片
const clickDetail = ()=>{
  showChinaTripDetail.value = true
}
// 点击弹窗中menu
const clickMenuItem = (i)=>{
  activeIndex.value = i
  menuItemText.value += i
}
// 鼠标悬停在弹窗右侧标题
const mouseEnterFn = () =>{
  let container = document.getElementById("fullText");
  let fullText = container.innerText;
  let visibleText = ""; // 可见部分
  let hiddenText = ""; // 超出的部分

  if (container.scrollWidth > container.clientWidth) {
    let ratio = container.clientWidth / container.scrollWidth;
    let visibleLength = Math.floor(fullText.length * ratio);
    visibleText = fullText.substring(0, visibleLength);
    hiddenText = fullText.substring(visibleLength-8);
    carouselText.value = hiddenText
  }
}
// 鼠标离开弹窗右侧标题
const mouseLeaveFn = () =>{
  carouselText.value = fullText.value
}
// 当内容超出 500px 时，才需要滚动
const checkOverflow = ()=> {
  if (!scrollWrapper.value) return;
}

// 鼠标移入容器：如果确实超出，则显示箭头
const handleMouseEnter = ()=> {
  if (scrollWrapper.value.scrollWidth > scrollWrapper.value.clientWidth) {
    if(scrollWrapper.value.scrollLeft > 0){
      showArrowsLeft.value = true
    }
    if(scrollWrapper.value.scrollLeft === 0){
      showArrowsRight.value = true
    }
    const maxScroll = scrollWrapper.value.scrollWidth - scrollWrapper.value.clientWidth;
    if(scrollWrapper.value.scrollLeft < maxScroll && scrollWrapper.value.scrollLeft > 0){
      showArrowsLeft.value = true
      showArrowsRight.value = true
    }
  }
}

// 鼠标移出容器：隐藏箭头
const handleMouseLeave = ()=> {
    showArrowsLeft.value = false
    showArrowsRight.value = false
}

// 点击向左移动
const scrollLeft = () =>{
  if (!scrollWrapper.value) return;
  const wrapper = scrollWrapper.value;
  const items = wrapper.querySelectorAll('.nav-item')
   wrapper.scrollLeft -= Math.floor(wrapper.scrollWidth/items.length)+2
  showArrowsRight.value = true
  // 防止滚过头
  if (wrapper.scrollLeft < 0) {
    wrapper.scrollLeft = 0;
  }
  if(wrapper.scrollLeft === 0){ 
    showArrowsLeft.value = false
  }
}
// 点击向右移动
const scrollRight = () => {
  if (!scrollWrapper.value) return;
  const wrapper = scrollWrapper.value;
  const items = wrapper.querySelectorAll('.nav-item')

  // 同理，每次移动一个导航项
  wrapper.scrollLeft += Math.floor(wrapper.scrollWidth/items.length)+2;
  showArrowsLeft.value = true
  // 防止滚过头
  const maxScroll = wrapper.scrollWidth - wrapper.clientWidth; 
  if (wrapper.scrollLeft > maxScroll) {   
    wrapper.scrollLeft = maxScroll;
  }
  if(wrapper.scrollLeft === maxScroll){
    showArrowsRight.value = false
    
  }
}
// 全局监听wheel事件
const handleGlobalWheel = (e) => {
  // 获取轮播区域在视口中的位置
  const rect = carouselContainer.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const carouselCenterY = rect.top + rect.height / 2;
  const viewportCenterY = viewportHeight / 2;
  const toleranceY = 100;// 可容忍的误差范围（比如 ±100px）

  // 判断轮播区域是否在视口中（可见部分至少超过 50px）
  if (Math.abs(carouselCenterY - viewportCenterY) <= toleranceY) {
    
    // 获取当前水平滚动位置和可滚动范围
    const currentScrollLeft = carouselContainer.value.scrollLeft;
    const maxScrollLeft = carouselContainer.value.scrollWidth - carouselContainer.value.clientWidth;
    console.log(e.deltaY,currentScrollLeft,maxScrollLeft,'111')
    // 如果鼠标滚轮向下（deltaY > 0）且未滚到右边缘，则拦截
    if (e.deltaY > 0 && currentScrollLeft < maxScrollLeft-1) {
      e.preventDefault();
      // 将垂直滚动距离转换为横向滚动
      carouselContainer.value.scrollLeft += e.deltaY;
      console.log(carouselContainer.value.scrollLeft,e.deltaY,'222')
    }
    // 如果鼠标滚轮向上（deltaY < 0）且未滚到左边缘，则拦截
    else if (e.deltaY < 0 && currentScrollLeft > 1) {
      e.preventDefault();
      carouselContainer.value.scrollLeft += e.deltaY;
      console.log('333')
    }else{
      // 否则，不拦截（允许页面垂直滚动）
    console.log('4444')
    }
    
  }
}

// 鼠标滚动
const handleExploreToDestinationScroll = () => {
  if (!exploreContainer.value || isJumpingToDestination.value) return;

  const el = exploreContainer.value;
  const scrollBottom = el.scrollHeight - el.scrollTop - el.clientHeight;

  if (scrollBottom <= 1) {
    // 到底部了，准备跳转
    isJumpingToDestination.value = true;

    // 先平滑滚到底再跳
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });

    // 跳转到 Destination
    setTimeout(() => {
      isJumpingToDestination.value = false;
      router.push('/Destination'); 
    }, 1000); 
  }
};

// 添加鼠标移入事件处理函数
const handlePicItemHover = (index) => {
  currentMainImage.value = cityPicList[index].imgName
}

// 鼠标移入轮播图按钮时
const handleButtonItemHover = (i) =>{
  currentButtonIndex.value = i
  currentMainImage.value = cityPicList[i].imgName
}

</script>

<style lang="less" scoped>
.navExplore{
  height: calc(100vh - 88px);
  
  overflow: scroll;
  .header{
    display: flex;
    flex-direction: column; /* 让子元素垂直排列 */
    align-items: center;    /* 左右居中 */
    padding: 120px 64px;
    background: #fff;


    .header-title{
      font-size: 80px;
      color: #121212;
      height: 109px;
      line-height: 109px;
      span{
        font-family: Bold;
      }
      

      img{
        border-radius: 16px;
        transform: rotate(-15deg);
        margin: 0 30px;
        box-shadow: 0px 16px 32px 0px rgba(196, 196, 196, 0.5);
        transition: all 0.8s ease;
      }
    }
    .tips{
      height: 36px;
      line-height: 36px;
      color: #B1B0B0;
      font-size: 24px;
      font-family: Semibold;
      margin-top:24px;
    }
  }
  .chinaTrip{
    padding: 64px;
    box-sizing: border-box;
    background: #F9F9F9;
    display: flex;
    justify-content: space-between;

    .chinaTrip-left{
     
      .title{
        height: 60px;
        line-height: 60px;
        color: #121212;
        font-size: 40px;
        font-family: Bold;
        display: flex;
        margin-bottom: 40px;
        gap: 8px;

         .selectPart{
            width: 80px;
            height: 48px;
            margin-top: 7px;

            img{
              margin:0px !important;
            }

            
            ::v-deep .el-select__wrapper {
              width: 80px;
              height: 48px;
              background: #fff;
              box-shadow: none;
              border: 2px solid #F9F9F9;
              border-radius: 100px;

              &:hover{
                box-shadow: 0 8px 16px rgba(131, 131, 131, 0.1);
              }
            }
            ::v-deep .el-select__caret{
              color: #121212;
              
            }
            ::v-deep .el-select__selection{
              flex: 0;
              margin-right:3px;
            }
            
          }
        ::v-deep .el-popper.is-pure{
          box-shadow: 0 8px 16px 0 rgba(131, 131, 131, 0.1);
          border: none;
          border-radius: 8px;
          padding: 12px;
          gap: 8px;
        }
        ::v-deep .el-select-dropdown__item{
          display:flex;
          height:40px;
          line-height: 24px;
          font-family:Regular;
          font-size:14px;
          color:#000;
          padding: 8px !important;
          gap:8px;
        }
        ::v-deep .is-hovering{
          font-family: Seminold;
          background: #121212;
          color:#fff;
          border-radius: 4px;
        }
      }
      .rank{
        

        .rankItem{
          display: flex;
          
          font-size: 20px;
          color: #121212;
          padding: 23px 0px !important;

          .rankItemNew{
            width: 49px;
            height: 28px;
            margin-left: 16px;
            line-height: 28px;
            text-align: center;
            background: #B31200;
            border-radius: 8px;
            font-size: 14px;
            font-family: Seminold;
            color: #FFFFFF;
          }
          .rankItemNum{
            display: flex;
            margin-left: 16px;
            gap: 12px;
          }
        }
      }
    }
    .chinaTrip-right{
      width: 517px;
      height: 511px;
      background: #fff;
      box-shadow: 0px 8px 16px 0px rgba(131, 131, 131, 0.1);
      border-radius: 24px;

      .pic{
        border-top-left-radius: 24px;
        border-top-right-radius: 24px;
      }
      .content{
        padding: 24px;

        .content-top{
          display: flex;
          justify-content: space-between;

          .content-top-hot{
            width: 84px;
            height: 35px;
            border: 1.5px solid #F3F3F3;
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            color: #121212;
            font-family: Seminold;
            margin-bottom: 16px;
            gap: 12px;
          }
          .sharePart{
            width: 32px;
            height: 32px;
            background: #FF401A;
            border-radius: 50%;
            
          }
        }
        .content-text{
          font-size: 16px;
          color: #595959;
          font-family: Regular;
          line-height: 22px;
        }
      }
    }
  }
  .specialTour{
    padding: 88px 64px;
    background: #fff;

    .specialTour-top{
      display: flex;
      justify-content: space-between;
      height: 60px;
      line-height: 60px;
      margin-bottom: 65px;

      .specialTour-top-title{
        color: #121212;
        font-size: 40px;
        font-family: Bold;
      }
      .specialTour-top-type{
        display: flex;
        gap: 24px;

        li{
          height: 41px;
          line-height: 41px;
          padding: 0 16px !important;
          text-align: center;
          border-radius: 100px;
          border: 1.5px solid #CCCCCC;
          color: #121212;
          font-size: 20px;
          font-family: Regular;
        }
        .active{
          color: #fff;
          font-family: Semibold;
          background: #121212;
          border: 1.5px solid #121212;
        }
      }
      
    }
    .specialTour-show{
        gap: 28px;
        display: flex;
        
        .morePic{
          position: relative;
          width: 320px;
          height: 398px;
          background: #F9F9F9;
          border-radius: 24px;
          padding: 24px;
          box-sizing: border-box;
          
          .morePic-top{

            .morePic-top-title{
              height: 20px;
              line-height: 20px;
              font-family: Seminold;
              font-size: 14px;
              color: #595959;
              margin-bottom: 16px;
            }
            .morePic-top-content{
              height: 72px;
              line-height: 36px;
              font-family: Bold;
              font-size: 24px;
              color: #121212;
              margin-bottom: 16px;
            }
            .morePic-top-tips{
              height: 20px;
              line-height: 20px;
              font-family: Regular;
              font-size: 14px;
              color: #B1B0B0;
            }
          }
          .morePic-bottom{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 24px 0 0 24px;
            position: absolute;
            bottom: 0;
            left: 0;
            box-sizing: border-box;

            .showMore{
              width: 137px;
              height: 46px;
              line-height: 46px;
              background: #FF401A;
              border-radius: 100px;
              text-align: center;
              font-size: 16px;
              font-family: Bold;
              margin-bottom: 24px;
              position: relative;
              bottom: -50px;
              color: #FFFFFF;
            }
          }
        }
        .carousel-container{
          width: calc(100vw - 412px);
          height: 460px;
          overflow-x: scroll;

          .picList{         
            display: flex;
            gap: 28px;
            

            &::-webkit-scrollbar{
              height: 8px;
              margin-top: 50px;
              margin-right: 64px;
              background: #F3F3F3;
              border-radius: 4px;

            }
            &::-webkit-scrollbar-thumb {
              background: #121212;
              border-radius: 4px;
            }
            

            .picItem{
              width: 305px;
              height: 398px;
              border-radius: 24px;
              position: relative;
              display: inline-block;
              display: flex;
              
              img{
                border-radius: 24px;

                  &::after {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background: #121212; /* 半透明黑色 */
                  opacity: 0.8; /* 20% 透明度 */
                }
              }
              .item-top{
                position: absolute;
                top: 0;
                width: -webkit-fill-available;
                margin: 24px;
                display: flex;
                justify-content: space-between;

                .item-top-left{
                  height: 38px;
                  display: flex;
                  color: #FFFFFF;
                  justify-content: space-between;
                  align-items: center;
                  background: rgba(18, 18, 18, 0.8);
                  border-radius: 100px;
                  padding: 0 12px;
                  box-sizing: border-box;
                  gap: 4px;
                }
                .item-top-right-48{
                  width: 48px !important;
                  height: 48px !important;
                }
                .item-top-right{
                  width: 32px;
                  height: 32px;
                  background: #fff;
                  border-radius: 50%;
                }
              }   
              .item-bottom{
                position: absolute;
                bottom: 0px;
                width: 100%;
                // width: 352px;
                color: #FFFFFF;
                font-family: Bold;
                font-size: 24px;
                line-height: 42px;
                width: -webkit-fill-available;
                margin: 24px;
               
              }  
              .hoverStyle{
                // width: 352px;
                // width: 100%;
                // height: 84px;
                line-height: 20px;
                font-size: 14px;
                font-family: Seminold;
                background: #F3F3F34D;
                border-radius: 12px;
                padding: 8px;
                box-sizing: border-box;              
              }
            }
          }
        }
      }
  }
  .bestTravel{
    padding: 0 64px 88px 64px;
    background: #fff;

    .title{
      width: 100%;
      text-align: center;
      font-size: 40px;
      font-family: Bold;
      color: #121212;
      margin-bottom: 64px;
    }
    .carousel{
      height: 600px;
      position: relative;
      margin-bottom: 64px;

      img{
        border-radius: 24px;
      }
      .introduce{
        width: 480px;
        position: absolute;
        left: 64px;
        bottom: 64px;

        .introduce-title{
          height: 60px;
          line-height: 60px;
          color: #FFFFFF;
          font-size: 40px;
          font-family: Bold;
        }
        .introduce-content{
          line-height: 22px;
          color: #F3F3F3;
          font-size: 16px;
          font-family: Regular;
          margin: 40px 0;
        }
        .introduce-more{
          width: 146px;
          height: 56px;
          line-height: 56px;
          padding: 0 16px;
          display: flex;
          justify-content: space-between;
          background: #fff;
          border-radius: 100px;
          color: #000000;
          font-size: 16px;
          font-family: Semibold;
        }
      }
      .picList{
        position: absolute;
        bottom: 60px;
        right: 64px;
        display: flex;
        gap: 40px;

        .picItem{
          img{
            border-radius: 12px;
          }
        }
      }

      // img{
      //   border-radius: 24px;
      // }
      // .content{
        
      // }
    }
    .button{
      width: 100%;
      height: 12px;
      display: flex;
      justify-content: center;
      gap: 16px;

      .buttonItem{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #F3F3F3;
      }
      .active{
        background: #121212;
      }
    }
  }
  .footer{
    width: 100%;
    overflow: hidden;
    background: #121212;
    padding: 64px 0;
    box-sizing: border-box;

    .pics-container {
      width: 100%;
      overflow: hidden;
      position: relative;
    }

    .pics {
      display: flex;
      gap: 40px;
      width: max-content;
      
      img {
        border-radius: 24px;
      }
    }
    
    .first {
      margin-bottom: 40px !important;
      position: relative;
      left: -80px;
      animation: carouselLeft 50s linear infinite;
    }
    
    .second {
      position: relative;
      left: -120px;
      animation: carouselRight 50s linear infinite;
    }
    .text{
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: 56px;
      font-family: Bold;
      color: #fff;
      line-height: 76px;
      margin-top: 64px;

      .toDown{
        height: 40px;
        margin-top: 40px;
      }
    }
  }
}
.dialog{

  .dialog-content{
    display: flex;
    justify-content: space-between;
    height: 480px;
    overflow-y: scroll;

    .carouselList{
      width: 400px;
      border-radius: 16px;

      ::v-deep .el-carousel--horizontal, .el-carousel--vertical{
          border-radius: 24px;
      }
      ::v-deep .el-carousel__arrow{
          display: none
      }
      ::v-deep .el-carousel__button{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #fff;
        margin: 24px 8px;

      }
    }
    .carouselText{
      width: 500px;
      height: 480px;
      overflow-y: scroll;

      .title{
        width: 500px;
        height: 42px;
        line-height: 42px;
        color: #121212;
        font-size: 28px;
        font-family: Bold;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
      .hot{
        height: 20px;
        line-height: 20px;
        margin: 16px 0;
        gap: 40px;
        color: #595959;
        font-size: 14px;
        font-family: Regular;
        display: flex;

        .hotItem{
          display: flex;
          gap: 4px;

          ::v-deep svg{
            margin-top: 2px;
            
          }
        }
      }
      .blockContent{
        height: 84px;
        line-height: 20px;
        background: #F3F3F3;
        color: #595959;
        font-family: Regular;
        font-size: 14px;
        border-radius: 8px;
        padding: 12px;
        box-sizing: border-box;
        overflow:hidden;
        
      }
      .menuBlock{
        
        .menuHead{
          display: flex;
          margin: 24px 0 !important;
          width: 500px;
          height: 27px;
          line-height: 27px;
          position: relative;
          
          .arrow-btn{
            transform: translateY(0%);
            position: absolute;
            margin-top:2px;
          }
          .svgLeft{
            left: 0;
            width: 20px;
            height: 20px;
            background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.6));
          }
          .svgRight{
            right: 0;
            width: 20px;
            height: 20px;
            text-align: right;
            background: linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 1));
          }
          .nav-wrapper{
            width: 100%;
            overflow: hidden;

            ul{
              display: flex;
              gap: 24px;
              font-family: Semibold;
              font-size: 20px;
              color: #ccc;
            }
          }
        }
        .isActiveMenu{
          color: #121212;
        }
        
      }
    }
  }
}
::v-deep .el-dialog{
  border-radius: 24px !important;
  padding: 40px !important;
  box-sizing: border-box;

  
}
::v-deep .el-dialog__header.show-close{
  padding: 0 !important;
  height: 40px;
  margin-bottom: 40px;
}
::v-deep .el-dialog__headerbtn{
  right: 21px;
  top: 36px;
}
::v-deep .el-dialog__headerbtn .el-dialog__close{
  color: #121212;
}

.header-title img {
  border-radius: 16px;
  transform: rotate(-15deg);
  margin: 0 30px;
  box-shadow: 0px 16px 32px 0px rgba(196, 196, 196, 0.5);
  transition: all 0.8s ease;
}

.header-title img:hover {
  transform: rotate(-15deg) scale(1.05);
}

@keyframes imageFade {
  0% {
    opacity: 1;
    transform: rotate(-15deg) scale(1);
  }
  50% {
    opacity: 0.8;
    transform: rotate(-15deg) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: rotate(-15deg) scale(1);
  }
}

.transition-image {
  animation: imageFade 2s infinite;
}

@keyframes carouselLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes carouselRight {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

</style>