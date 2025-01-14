<template>
  <div class="Eastern"> 
    <div class="picList" :style="{ width: showMap ? '50%' : '100%',gridTemplateColumns:showMap ? 'repeat(2, minmax(328px, 1fr))' : 'repeat(4, minmax(328px, 1fr))' }">
       <cityCard 
        v-for="(item,i) in cityList" 
        :key="i"
        :index="i"
        :toShowIndex="toShowIndex"
        @mouseenter="mouseenterFn(i)"
        @mouseleave="mouseleaveFn(i)"
        @click="clickToDetails(item)"
      >
      </cityCard>
    </div>
   <div 
        v-show="showMap"
        id="main-map">

      </div>

  </div>
</template>

<script setup>
import { ref,watch,computed } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import cityCard from '@/components/common/L-CityCard.vue'
import AMapLoader from "@amap/amap-jsapi-loader";

const store = useStore()
const showMap = computed(() => store.state.all.showMap)
const router = useRouter()
const toShowIndex = ref(null)
const shanghai = ref( require('@/assets/imgs/shanghai.png') );
const beijing = ref(require('@/assets/imgs/beijing.png') )
const guangzhou = ref(require('@/assets/imgs/guangzhou.png') )
const chengdu = ref(require('@/assets/imgs/chengdu.png') )

const cityList = ref([
  {
    id: 1,
    city: 'JIAXING',
    province: 'Zhejiang',
    
  },{
    id: 2,
    city: 'SHANGHAI',
    province: 'Zhejiang',
  
  },{
    id: 3,
    city: 'SHANGHAI',
    province: 'Zhejiang',
    
  },{
    id: 4,
    city: 'SHANGHAI',
    province: 'Zhejiang',
   
  },{
    id: 5,
    city: 'SHANGHAI',
    province: 'Zhejiang',
   
  },{
    id: 6,
    city: 'SHANGHAI',
    province: 'Zhejiang',
  
  }
])
// 地图容器的 DOM 元素
let map = null
watch(
  () => showMap.value,
  (newValue) => {
    if(newValue){
      getMap()
    }else{
      map?.destroy();
    }
  }
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
function addCityMarker(city, AMap, map) {
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



const mouseenterFn = (i) =>{
  toShowIndex.value = i 
  
}
const mouseleaveFn = (i) =>{
  toShowIndex.value = null
}
const clickToDetails = (item)=>{
  store.commit('all/setShowCityDetails', true)

  router.push({
  name: 'Details', 
  params: {
    cityName: item.city
  },
});
}
</script>

<style lang="less" scoped>
.Eastern{
  width: 100%;
  display: flex;
  justify-content: space-between;

  .picList{
    display: grid;
    height: 200px;
    // grid-template-columns: repeat(4, minmax(328px, 1fr)); /* 最小宽度 328px，自适应屏幕 */
    gap:clamp(10px, 1.7vw, 30px);

    box-sizing: border-box;
  }
  #main-map{
      width: 50%;
      height: calc(100vh - 219px);
      border-radius: 16px;
      margin-left: 1.7vw
      
    }
}

</style>