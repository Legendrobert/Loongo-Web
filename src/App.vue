<template>
  <div id="app">
    <header>
      <div class="header-left">  
        <img :src="logo">
        <span class='ProjectName'>LoonGo</span>
      </div>
      <div class="header-middle">
        <div 
          :class="{
            'active': isActive('Itinerary'),
            'header-middle-item': true,
            'itinerary': true
          }"
          @click="updateActive('Itinerary')"
        >
          <svgItinerary class="svg" ></svgItinerary>
          <span class="exploeText">Itinerary</span>
        </div>
        <div 
          :class="{
            'active': isActive('Explore'),
            'header-middle-item': true,
            'explore': true
          }"
          @click="updateActive('Explore')"
        >
            <svgExplore class="svg"></svgExplore>
            <span class="exploeText">Explore</span>      
        </div>
        <div
          :class="{
            'active': isActive('Profile'),
            'header-middle-item': true,
            'profile': true
          }"
          @click="updateActive('Profile')"
        >
          <svgProfile class="svg"></svgProfile>
            <span class="exploeText">Profile</span> 
        </div>
    </div>
    <div class="header-right">
      <span class="header-right-title">Travel Plan</span>
      <span class="header-right-num">0</span>
    </div>
    </header>
    <main>
      <router-view></router-view> 
    </main>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import svgExplore from '@/components/svg-icons/svg-explore.vue'
import svgItinerary from '@/components/svg-icons/svg-itinerary.vue'
import svgProfile from '@/components/svg-icons/svg-profile.vue'

const router = useRouter()
const route = useRoute()

const topLevelRoutes = router.options.routes.filter(route => !route.parent)

topLevelRoutes.forEach((item,index)=>{
  if(item.name === "notfound"){
    topLevelRoutes.splice(index,1)
  }
})


const logo = ref( require('@/assets/imgs/logo.png') );
const activeName = ref('Itinerary') // 默认Itinerary

// 路由变化时更新activeName
watch(
  () => route.matched[0],
  (newName) => {
    activeName.value = newName.name // 根据路由的 name 更新 activeName
  }
)

// 选中的导航
const isActive = (name) => {
  return name === activeName.value
}
const updateActive = (val) => {
  activeName.value = val
  router.push({ name: val })
  
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
    justify-content: space-between;
    width: 473px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 146px;
    height: 40px;
    box-sizing: border-box;
    padding: 0px 16px;
    background-color: #FFF;
    border-radius: 8px;
    .header-right-title {
      color: #121212;
      font-size: 16px;
      font-weight: 600;
    }
    .header-right-num {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #FFEEE6;
      font-size: 14px;
      font-weight: 600;
      color: #FF401A;
    }
  }
}
main {
  height: calc(100vh - 88px);
  background-color: #fff;
  box-sizing: border-box;
  padding: 28px;
  border-radius: 24px 24px 0 0 ;
  overflow: hidden;
}
</style>
