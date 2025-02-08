<template>
  <div class="mapView">
    <div class="header-nav">
        <ul class="header-nav-left">
            <li>
                <toLeft  @click="handleClickBack"></toLeft>
            </li>
            <li 
                class="liItem"
                :class="activeNavValue === 'events' ? 'activeItem':''"
                @click="clickNavItem('events')"
            >
                <svgEvents :fillColor="activeNavValue === 'events' ? '#fff':'#B1B0B0'"></svgEvents>
                <span>Events</span>
            </li>
            <li 
                class="liItem"
                :class="activeNavValue === 'restaurants' ? 'activeItem':''"
                @click="clickNavItem('restaurants')"
            >
                <svgRestaurants :fillColor="activeNavValue === 'restaurants' ? '#fff':'#B1B0B0'"></svgRestaurants>
                <span>Restaurants</span>
            </li>
            <li 
                class="liItem"
                :class="activeNavValue === 'hotels' ? 'activeItem':''"
                @click="clickNavItem('hotels')"
            >
                <svgHotels :fillColor="activeNavValue === 'hotels' ? '#fff':'#B1B0B0'"></svgHotels>
                <span>Hotels</span>
            </li>
        </ul>
        <div class="header-nav-right">
            <svgSearch 
               
                v-show="showSearchSvg"
                @click="handleClickSearch()"
            ></svgSearch>
            <el-input
                ref="inputRef"
                v-show="!showSearchSvg"
                v-model="searchInput"
                placeholder="Search city, region, province.."
                @blur="inputBlur"
            >
                <template #prefix>
                <svgSearch class="el-input__icon" :width="16" :height="16"></svgSearch>
                </template>
            </el-input>           
        </div>
    </div>
    <div class="main">      
        <ul class="main-content">
            <li 
                class="contentItem"
                v-for="(item, index) in lists" 
                :key="index"
            >
                <LCarousel 
                    class="carousel"
                    :list="item.picList"
                    :height="'165px'"
                ></LCarousel>
                <div class="detail">
                    <div class="nameMsg">
                        <span>{{item.name}}</span>
                        <svgLove :fillColor="'#B1B0B0'"></svgLove>
                    </div>
                    <div class="addressMsg">
                        <svgLocation :width="16" :height="16"></svgLocation>
                        <span>{{item.address}}</span>
                    </div>
                    <div class="workTimeMsg">
                        <svgDate :width="16" :height="16"></svgDate>
                        <span>{{item.workTime}}</span>
                    </div>
                    <ul class="tagsMsg">
                        <li 
                            v-for="(v, i) in item.tags" 
                            :key="i"
                        >{{v}}</li>
                    </ul>
                    <div class="scoreMsg">
                        <div class="scoreMsg-left">{{item.price}}</div>
                        <div class="scoreMsg-right">
                            <svgGood></svgGood>
                            <span class="score">{{item.score}}</span>                             
                            <span class="numberOfPeople">({{item.numberOfPeople}})</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
       
        <div id="main-map"></div>
    </div>
  </div>
</template>

<script setup>
import { ref,nextTick,watch,onMounted } from 'vue';
import { useStore } from 'vuex';
import svgSearch from '@/components/svg-icons/svg-search.vue'
import svgEvents from '@/components/svg-icons/svg-events.vue'
import svgRestaurants from '@/components/svg-icons/svg-restaurants.vue'
import svgHotels from '@/components/svg-icons/svg-hotels.vue'
import toLeft from '@/components/svg-icons/svg-toLeft.vue'
import svgLove from '@/components/svg-icons/svg-love.vue'
import svgLocation from '@/components/svg-icons/svg-location.vue'
import svgDate from '@/components/svg-icons/svg-date.vue'
import svgGood from '@/components/svg-icons/svg-good.vue'
import AMapLoader from "@amap/amap-jsapi-loader";
import LCarousel from "@/components/common/L-Carousel.vue"

const beijing = ref(require('@/assets/imgs/beijing.png') )
// const chengdu = ref(require('@/assets/imgs/chengdu.png') )
// const shanghai = ref(require('@/assets/imgs/shanghai.png') )
// const guangzhou = ref(require('@/assets/imgs/guangzhou.png') )
// const shanghaiBlack = ref(require('@/assets/imgs/shanghaiblack.png') )
const activeNavValue = ref('events')
const searchInput = ref('')
const showSearchSvg = ref(true)
const inputRef = ref()
const store = useStore()
const lists = ref([
    {
        id:0,
        picList: [ 
            {
                imgName: require('@/assets/imgs/shanghai.png')
            },{
                imgName:require('@/assets/imgs/beijing.png')
            },{
                imgName:require('@/assets/imgs/chengdu.png')
            },{
                imgName:require('@/assets/imgs/guangzhou.png')
            },{
                 imgName:require('@/assets/imgs/shanghaiblack.png')
            }
         ],
        name: 'Wukang Mansion',
        address: 'No. 393, Xuhui District',
        workTime: 'Monday to Sunday, 8:00 - 17:00',
        tags: ['Ancient Building','Landmarks','Sightseeing'],
        price: '免费',
        score: '4.8',
        numberOfPeople: '544'
    },{
        id:0,
        picList: [ 
            {
                imgName: require('@/assets/imgs/shanghai.png')
            },{
                imgName:require('@/assets/imgs/beijing.png')
            },{
                imgName:require('@/assets/imgs/chengdu.png')
            },{
                imgName:require('@/assets/imgs/guangzhou.png')
            },{
                 imgName:require('@/assets/imgs/shanghaiblack.png')
            }
         ],
        name: 'Wukang Mansion',
        address: 'No. 393, Xuhui District',
        workTime: 'Monday to Sunday, 8:00 - 17:00',
        tags: ['Ancient Building','Landmarks','Sightseeing'],
        price: '免费',
        score: '4.8',
        numberOfPeople: '544'
    },{
        id:0,
        picList: [ 
            {
                imgName: require('@/assets/imgs/shanghai.png')
            },{
                imgName:require('@/assets/imgs/beijing.png')
            },{
                imgName:require('@/assets/imgs/chengdu.png')
            },{
                imgName:require('@/assets/imgs/guangzhou.png')
            },{
                 imgName:require('@/assets/imgs/shanghaiblack.png')
            }
         ],
        name: 'Wukang Mansion',
        address: 'No. 393, Xuhui District',
        workTime: 'Monday to Sunday, 8:00 - 17:00',
        tags: ['Ancient Building','Landmarks','Sightseeing'],
        price: '免费',
        score: '4.8',
        numberOfPeople: '544'
    },{
        id:0,
        picList: [ 
            {
                imgName: require('@/assets/imgs/shanghai.png')
            },{
                imgName:require('@/assets/imgs/beijing.png')
            },{
                imgName:require('@/assets/imgs/chengdu.png')
            },{
                imgName:require('@/assets/imgs/guangzhou.png')
            },{
                 imgName:require('@/assets/imgs/shanghaiblack.png')
            }
         ],
        name: 'Wukang Mansion',
        address: 'No. 393, Xuhui District',
        workTime: 'Monday to Sunday, 8:00 - 17:00',
        tags: ['Ancient Building','Landmarks','Sightseeing'],
        price: '免费',
        score: '4.8',
        numberOfPeople: '544'
    },{
        id:0,
        picList: [ 
            {
                imgName: require('@/assets/imgs/shanghai.png')
            },{
                imgName:require('@/assets/imgs/beijing.png')
            },{
                imgName:require('@/assets/imgs/chengdu.png')
            },{
                imgName:require('@/assets/imgs/guangzhou.png')
            },{
                 imgName:require('@/assets/imgs/shanghaiblack.png')
            }
         ],
        name: 'Wukang Mansion',
        address: 'No. 393, Xuhui District',
        workTime: 'Monday to Sunday, 8:00 - 17:00',
        tags: ['Ancient Building','Landmarks','Sightseeing'],
        price: '免费',
        score: '4.8',
        numberOfPeople: '544'
    },
])

onMounted(() => {
  getMap()
});
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
        }
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
// 导航点击事件
const clickNavItem = (val)=>{
    activeNavValue.value = val
}
// 返回城市详情默认状态
const handleClickBack = ()=>{
    store.commit('all/setShowMapCityDetails', false)
}
// 显示搜索
const handleClickSearch = ()=>{
  showSearchSvg.value = !showSearchSvg.value
  if(!showSearchSvg.value){
    nextTick(()=>{
      if(inputRef.value && typeof inputRef.value.focus === 'function'){
        inputRef.value.focus()
      }
    })
  }
}
const inputBlur = ()=>{
  showSearchSvg.value = !showSearchSvg.value
}
</script>

<style lang="less" scoped>
.mapView{
    .header-nav{
        height: 103px;
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        padding: 0 14px;

        .activeItem{
            background: #121212;
            color: #fff !important;
        }

        .header-nav-left{
            display: flex;

            .liItem{
                padding: 0 16px !important;
            }
            li{
                display: flex;
                text-align: center;
                justify-content: center;
                // width: 118px;
                
                height: 43px;
                line-height: 43px;
                margin-right: 24px !important;
                color: #B1B0B0;
                border-radius: 12px;
                font-size: 20px;
                font-family: Semibold;

                span{
                    margin-left: 8px;
                } 
            }
            
        }
        .header-nav-right{
            &:hover{
                ::v-deep .icon-path {
                    stroke: black !important; /* 修改 stroke 为黑色 */
                }
                
            }
        }
           
    }
    .main{
        display: flex;
        height: calc(100vh - 219px);
        overflow: scroll;

        .main-content{
            width: 50%;
            height: 100%;
            overflow-y: scroll;
            
            .contentItem{
                display: flex;
                width: 100%;
                height: 205px;
                border-radius: 24px;
                border: 2px solid #F3F3F3;
                background: #FFFFFF;
                box-sizing: border-box;
                padding: 20px !important;
                margin-bottom: 20px !important;

                .carousel{
                    width: 37%;
                    border-radius: 16px;

                    ::v-deep .el-carousel--horizontal, .el-carousel--vertical{
                        border-radius: 16px;
                    }
                    ::v-deep .el-carousel__arrow{
                        display: none
                    }
                    ::v-deep .el-carousel__indicators{
                        position: absolute;
                        left:50%;
                        bottom: 12px;
                    }
                    ::v-deep .el-carousel__button{
                        width: 8px;
                        height: 8px;
                        margin:0 8px;
                        border-radius: 50%;
                    }
                }
                .detail{
                    width: 63%;
                    margin-left: 40px;
                    .nameMsg{
                        display: flex;
                        justify-content: space-between;
                        height: 27px;
                        line-height: 27px;
                        color: #121212;
                        font-family: Bold;
                        font-size: 20px;                       
                    }
                    .addressMsg{
                        display: flex;
                        margin: 12px 0;
                        height: 20px;
                        line-height: 20px;
                        font-size: 14px;
                        font-family: Regular;
                        color:  #ccc;

                        span{
                            margin-left: 5px;  
                            vertical-align: middle;                        
                        }
                        ::v-deep svg{
                            margin-top: 2px !important;
                        }
                    }
                    .workTimeMsg{
                        display: flex;
                        height: 20px;
                        line-height: 20px;
                        font-size: 14px;
                        font-family: Regular;
                        color:  #ccc;

                        span{
                            margin-left: 5px;                          
                        }
                        ::v-deep svg{
                            margin-top: 2px !important;
                        }
                    }
                    .tagsMsg{
                        margin: 12px 0 !important;
                        display: flex;

                        li{
                            height: 20px;
                            border-radius: 8px;
                            padding: 4px 8px !important;
                            margin-right: 16px !important;
                            background: #F9F9F9;
                            color: #595959;
                            font-size: 14px;
                            
                        }
                    }
                    .scoreMsg{
                        display: flex;
                        justify-content: space-between;
                        height: 22px;
                        line-height: 22px;
                        font-size: 16px;
                        font-family: Semibold;

                        .scoreMsg-left{                                                       
                            color: #121212;                                                      
                        }
                        .scoreMsg-right{
                            display: flex;

                            ::v-deep svg{
                                margin-top: 3px !important;
                            }

                            .score{
                                color: #FFC61A;
                                margin-left: 8px;
                                margin-right: 4px;
                            }
                            .numberOfPeople{
                                font-family: Regular;
                                color: #B1B0B0;
                            }
                        }
                    }
                }
            }
        }
        #main-map{
            width: 50%;
            height: 100%;
            border-radius: 16px;
            margin-left: 10px;
        }
    }
}
</style>