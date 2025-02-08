<template>
  <div class="All">
   
      <div class="main-pic" :style="{ width: showMap ? '50%' : '100%' }">
        <!-- 第一排4个固定重点城市 -->
        <ul 
          class="picList" 
          :style="{
            gridTemplateColumns:showMap ? 'repeat(2, minmax(328px, 1fr))' : 'repeat(4, minmax(328px, 1fr))',
            marginBottom: '1.7vh'
          }"
        >
          <li 
            v-for="(item,index) in importantCityList" 
            :key="index"    
            :style="{
              marginTop: showMap && index > 1 ? '28px' : ''
            }"
            @mouseenter="mouseenterFn(index)"
            @mouseleave="mouseleaveFn(index)"
            @click="clickToDetails(item)" 
          >
            <img :src="shanghai">
            <video 
              v-show="toShowIndex === index"
              ref="videoRef"
              :src="beijingVideo" 
              type="video/mp4"
              controls
              controlsList="nodownload"
              :muted="isMuted"
              loop
              
             
            ></video>
            <span >{{item.city}}</span>
            <svgLove class="picList-like"></svgLove>
          </li>
        </ul>
        <!-- 其他城市 -->
        <ul class="picList" :style="{gridTemplateColumns:showMap ? 'repeat(2, minmax(328px, 1fr))' : 'repeat(4, minmax(328px, 1fr))'}">
          <li 
            v-for="(item,index) in otherCityList" 
            :key="index"
            class="otherCityLi"
            @mouseenter="mouseenterFn(index, 'other')"
            @mouseleave="mouseleaveFn(index,'other')"
            @click="clickToDetails(item)"
          >
            <LCarousel 
              v-if="toShowOtherIndex === index" 
              class="carousel"
              :list="cityPicList"
              :height="'200px'"
              @getCurrentIndex="getCurrentIndex"
            ></LCarousel>
            <div
              v-if="toShowOtherIndex === index && showPicBtn"
              class="picBtn"
              @click="clickToDetails(item)"
            >
              <svgToRight2></svgToRight2>
            </div>
            <img v-show="toShowOtherIndex !== index" :src="shanghai">    
            <svgLove class="picList-like"></svgLove>
            <div v-show="toShowOtherIndex !== index" class="picList-bottom">
              <span class="span-city">{{item.city}}</span>
              <svgLocation class="span-svg"></svgLocation>
              <span class="span-province">{{item.province}}</span>
            </div>
          </li>
        </ul>
      </div>      
      <div 
        v-show="showMap"
        id="main-map">

      </div>
    
  </div>
</template>

<script setup>
import { ref,computed,watch,onMounted,onUnmounted } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import AMapLoader from "@amap/amap-jsapi-loader";
import svgLove from '@/components/svg-icons/svg-love.vue'
import svgLocation from '@/components/svg-icons/svg-location.vue'
import svgToRight2 from '@/components/svg-icons/svg-toRight2.vue'
import video1 from "@/assets/video/beijing.mp4";
import LCarousel from "@/components/common/L-Carousel.vue"

const router = useRouter()
const beijingVideo = ref(video1);
const shanghai = ref( require('@/assets/imgs/shanghai.png') );
const beijing = ref(require('@/assets/imgs/beijing.png') )
const guangzhou = ref(require('@/assets/imgs/guangzhou.png') )
const chengdu = ref(require('@/assets/imgs/chengdu.png') )
const videoRef = ref(null)
const store = useStore()

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
const toShowIndex = ref(null)
const toShowOtherIndex = ref(null)
const isMuted = ref(true)
const showPicBtn = ref(false)
// 地图容器的 DOM 元素
let map = null




const showMap = computed(() => store.state.all.showMap)

watch(
  () => showMap.value,
  (newValue) => {
    if(newValue){
      getMap()
    }else{
      map?.destroy();
    }
  },
  // {
  //   immediate:true
  // }
)
const getMap = () => {
  AMapLoader.load({
    key: "ada7e22879bce64dfcbc6f2b70d7f7af", // Web端开发者Key
    version: "2.0", // JSAPI 的版本
    plugins: ["AMap.ToolBar", "AMap.Scale"], // 所需插件
  })
    .then((AMap) => {
      // 初始化地图
      const map = new AMap.Map("main-map", {
        viewMode: "3D", // 3D地图模式
        zoom: 4, // 地图级别，适合显示全国
        center: [104.195397, 35.86166], // 设置中国中心点
      });

      // 添加常用控件
      AMap.plugin(["AMap.ToolBar", "AMap.Scale"], () => {
        map.addControl(new AMap.ToolBar());
        map.addControl(new AMap.Scale());
      });

      // 城市地标数据
      const cities = [
        {
          name: "北京",
          position: [116.407396, 39.9042],
          photo: beijing.value, // 替换为实际图片路径
        },
        {
          name: "上海",
          position: [121.473701, 31.230416],
          photo: shanghai.value, // 替换为实际图片路径
        },
        {
          name: "广州",
          position: [113.264385, 23.129112],
          photo: guangzhou.value, // 替换为实际图片路径
        },
        {
          name: "成都",
          position: [104.065735, 30.659462],
          photo: chengdu.value, // 替换为实际图片路径
        },
      ];

      // 遍历城市列表，添加自定义图标地标
      cities.forEach((city) => {
        addCityMarker(city, AMap, map);
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

// 添加城市地标和自定义圆形图标
const addCityMarker = (city, AMap, map)=> {
  // 自定义地标图标为圆形照片 + 边框
  const marker = new AMap.Marker({
    position: city.position, // 城市经纬度
    map: map, // 所属地图实例
    offset: new AMap.Pixel(-23, -23), // 调整图标位置，圆形直径为46px
    content: `
      <div style="
        width: 46px;
        height: 46px;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        background-image: url('${city.photo}');
        background-size: cover;
        background-position: center;
      "></div>
    `, // 自定义HTML内容
  });

  // 创建信息窗口（InfoWindow）
  const infoWindow = new AMap.InfoWindow({
    content: `<div style="font-size:14px;">
                <b>${city.name}</b>
                <p>这是${city.name}的简介内容</p>
              </div>`, // 信息窗口的内容
    offset: new AMap.Pixel(0, -30), // 偏移位置
  });

  // 鼠标悬停显示信息窗口
  marker.on("mouseover", () => {
    infoWindow.open(map, city.position);
  });

  // 鼠标移出关闭信息窗口
  marker.on("mouseout", () => {
    infoWindow.close();
  });
}





const mouseenterFn = (i,type) =>{
  if(type === 'other'){
  
    toShowOtherIndex.value = i

  }else{
    toShowIndex.value = i
      if (videoRef.value[i]) {
      videoRef.value[i].play();
    }
  }
}
const mouseleaveFn = (i) =>{
  toShowIndex.value = null
  toShowOtherIndex.value = null
  if (videoRef.value[i]) {
   
      videoRef.value[i].pause();
   
    }

}
// 查看城市详情
const clickToDetails = (item)=>{
  store.commit('all/setShowCityDetails', true)

  router.push({
  name: 'Details', 
  params: {
    cityName: item.city
  },
});
}
const getCurrentIndex = (value)=>{
  showPicBtn.value = value > 0 ? true : false 
}

</script>

<style lang="less" scoped>
.All{
  width: 100%;
  display: flex;
  justify-content: space-between;
    
    .main-pic{
      // width: 100%;
      // padding-right: 20px;
      height: calc(100vh - 219px);
      overflow: scroll;
      .picList{
        // display: grid;
        // // grid-template-columns: repeat(4, 328px); /* 一行固定 4 列，每列宽度 328px */
        
        // width: 100%;
        // justify-content: space-between;
        display: grid;
    // grid-template-columns: repeat(4, minmax(328px, 1fr)); /* 最小宽度 328px，自适应屏幕 */
    gap:clamp(10px, 1.7vw, 30px);
  
    box-sizing: border-box;

        li{
          // width: 328px;
          width: 100%;
          height: 200px;
          position: relative;
          display: inline-flex; /* 将子元素布局为 flex */
          align-items: center; /* 垂直居中 */
          justify-content: center; /* 水平居中 */
          object-fit: cover; /* 确保图片内容按比例缩放以适应尺寸 */
          flex-shrink: 0; /* 防止图片因容器宽度不足而缩小 */

          img{
            // width: 328px;
            width: 100%;
            height: 200px;
            border-radius: 16px;
          }
          video{
            // width: 328px;
            width: 100%;
            height: 200px;
            border-radius: 16px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1000;

            
          }
          span{
           
            position: absolute;
            font-size: 28px;
            font-family: Bold;
            color: #FFF;
            z-index: 999;
          }
          .picList-like{
           
            position: absolute;
            top: 19px;
            right: 18px;
            z-index: 1001;
          }
          .picList-bottom {
            
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
          // margin-top: 28px !important;

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
            bottom: 13px;
            right: 16px;
          }
        }
      }
    }
    #main-map{
      width: 53%;
      height: calc(100vh - 219px);
      border-radius: 16px;
      margin-left: 1.7vw

    }
    video::-webkit-media-controls-play-button{
      display: none !important;
    }
   
    /* 隐藏“全屏”按钮 */
    video::-webkit-media-controls-fullscreen-button {
      display: none !important;
    }

    /* 隐藏“播放时长” */
    video::-webkit-media-controls-time-remaining-display,
    video::-webkit-media-controls-current-time-display {
      display: none !important;
    }
  }
</style>