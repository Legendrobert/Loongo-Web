<template>
  <div id="app">
    <header>
      <div class="header-left">  
        <img :src="logo">
        <span class='ProjectName'>LoonGo</span>
      </div>
      <div v-show="showNav" class="header-middle">
        <!-- <div 
          :class="{
            'active': isActive('Itinerary'),
            'header-middle-item': true,
            'itinerary': true
          }"
          @click="updateActive('Itinerary')"
        >
          <svgItinerary class="svg" ></svgItinerary>
          <span class="exploeText">Itinerary</span>
        </div> -->
        <div 
          :class="{
            'active': isActive('Explore'),
            'header-middle-item': true
          }"
          style="margin-right:40px"
          @click="updateActive('Explore')"
        >
          <svgExplore class="svg"></svgExplore>
          <span class="exploeText">Explore</span>
        </div>
        <div 
          :class="{
            'active': isActive('Destination'),
            'header-middle-item': true
          }"
          @click="updateActive('Destination')"
        >
            
            <svgDestination class="svg" ></svgDestination>
            <span class="exploeText">Destination</span>      
        </div>
        <!-- <div
          :class="{
            'active': isActive('Profile'),
            'header-middle-item': true,
            'profile': true
          }"
          @click="updateActive('Profile')"
        >
          <svgProfile class="svg"></svgProfile>
            <span class="exploeText">Profile</span> 
        </div> -->
    </div>
    <div 
      class="header-right"
      
    >
      <div 
        v-if="showItineraryView"
        class="BackHomeBtn"
        @click="backHomeClick"
      >Back</div>
      <div 
        v-else  
        class="ItineraryBtn"
        @click="toItineraryClick"
      >
        <svgUser></svgUser>
        <span>Itinerary</span>
       
      </div>
      

      <!-- <span class="header-right-title">Travel Plan</span>
      <span class="header-right-num">0</span> -->
    </div>
    </header>
    <main>
      <!-- 城市详情模块 -->
      <div v-if="showCityDetails">
        <cityMapDetails v-if="showMap"></cityMapDetails>
        <cityDetails v-else></cityDetails>
      </div>
      <!-- 一级导航下内容 -->
      <router-view v-else></router-view>
    </main>
  </div>
</template>

<script setup>
import { ref, watch,nextTick } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import cityDetails from '@/views/cityDetails/index.vue'
import cityMapDetails from '@/views/cityDetails/mapView/index.vue'
import svgExplore from '@/components/svg-icons/svg-explore.vue'
import svgDestination from '@/components/svg-icons/svg-destination.vue'
// import svgProfile from '@/components/svg-icons/svg-profile.vue'
import svgFlag from '@/components/svg-icons/svg-flag.vue'
import svgUser from '@/components/svg-icons/svg-user.vue'

const router = useRouter()
const route = useRoute()
const store = useStore()
const topLevelRoutes = router.options.routes.filter(route => !route.parent)
const showNav = ref(true)
const showCityDetails = ref(false)
const showMap = ref(false)
const showItineraryView = ref(false)
topLevelRoutes.forEach((item,index)=>{
  if(item.name === "notfound"){
    topLevelRoutes.splice(index,1)
  }
})


const logo = ref( require('@/assets/imgs/logo.png') );
const activeName = ref('Main') // 默认Main


watch(
   [
    
    () => store.state.all.showCityDetails,
    ()=> route,
    ()=> store.state.all.showMapCityDetails,
    ()=> route.name
  ],
  (
    [newShowCityDetails,newRoute,newShowMapCityDetails,newName], 
    [oldMatched, oldShowCityDetails,oldRoute,oldShowMapCityDetails,oldName]
  ) => {

    activeName.value = route.matched[0].name
    
    showCityDetails.value = newShowCityDetails,
    showMap.value = newShowMapCityDetails
   
    // 如果当前页面为Itinerary，头部按钮为Back Home
    if(newRoute.matched[0].name === "Itinerary"){     
      showItineraryView.value = true
    }else{
      showItineraryView.value = false
 
    }
    
    if(newRoute.name === 'Details'){
      showCityDetails.value = true
    }
    if(route.matched[0].name === 'Explore' || route.matched[0].name === 'Destination'){
      showNav.value = true
    }else{
      showNav.value = false
    }
    
  }
)


// 选中的导航
const isActive = (name) => { 
  return name === activeName.value
}
const updateActive = (val) => {
  activeName.value = val
  store.commit('all/setShowCityDetails', false)
  store.commit('all/setShowMap', false)
  router.push({ name: val })
}
// 跳转到Itinerary页面
const toItineraryClick = () => {

  if(false){
    // 如果为注册用户
    showCityDetails.value = false
    store.commit('all/setShowCityDetails', false)
    store.commit('all/setShowMap', false)
    router.push({ name: 'Itinerary' })
    showItineraryView.value = true
  }else{
    // 非注册用户
    router.push({ name: 'NotLoggedIn' })
  }
}
// 返回到上一页
const backHomeClick = ()=>{
 
  router.go(-1)
  // showNav.value = true
  if(route.name === 'Details'){
      showCityDetails.value = true
    }
   
  
}
</script>

<style lang="less">
/* 全局样式 */
#app {
  cursor: default;
  background: #F7F7F7;
 
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li{
      margin: 0;
      padding: 0;
    }
  } 
  a {
    text-decoration: none;
  }
}

body {
  margin: 0;
  font-family: Semibold;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88px;
  padding: 0 24px;

  .header-left {
    height: 40px;
    
    img {
      width: 40px;
      height: 40px;
      vertical-align: middle; 
    }
    .ProjectName {
      
      font-size: 24px;
      font-weight: 700;
      margin-left: 16px;
      vertical-align: middle; 
    }
  }
  .header-middle {
    display: flex;
    // justify-content: space-between;
    // width: 473px;
    height: 40px;
    font-size: 16px;
    color: #BFBFBF;
    font-family: Regular;

    .active {
        background: #FFEEE6;
        color: #FF401A !important;

        path{
          fill: #FF401A !important;
        }
      }


    .header-middle-item {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;  
      width: 131px;
      height: 40px;
      border-radius: 8px;
      
      span {
        font-size: 16px;
        vertical-align: middle; 
        margin-left: 8px;
      }
      svg {
        vertical-align: middle;
      }
    }
  }
  .header-right {
    
   

    .ItineraryBtn{
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0px 16px;
      height: 40px;
      border-radius: 8px;
      font-size: 16px;
      color: #fff;
      font-family: Regular;
      background: linear-gradient(to right, #FF401A, #FFB094);
      span{
        vertical-align: middle;
        margin-left: 10px;
      }
      svg{
        vertical-align: middle;
        padding-bottom: 2px;
      }
    }
    .BackHomeBtn{
      text-align: center;
      width: 109px;
      height: 40px;
      line-height: 40px;
      border-radius: 8px;
      font-size: 16px;
      color: #FF401A;
      font-family: Regular;
      background: #fff;
    }
   
  }
}
main {
  height: calc(100vh - 88px);
  background-color: #fff;
  // box-sizing: border-box;
  // padding: 28px;
  border-radius: 24px 24px 0 0 ;
  overflow: hidden;
}
</style>
