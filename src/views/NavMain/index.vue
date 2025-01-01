<template>
  <div class="explore">
    <div class="header-nav">
      <ul class="header-nav-left">
        <li v-if="showMap" class="toLeft">
          <toLeft @click="handleClickMap"></toLeft>
        </li>
        <li 
          v-for="(item,index) in parentRoute.children"
          :key="index"
          :class="{'activeNav': isActive(item.name)}"
          @click="updateActive(item.name)"
        >{{item.name}}</li>
      </ul>
      <ul class="header-nav-right">
        <li>
          <svgSearch></svgSearch>
        </li>
        <li 
          v-if="!showMap"
          @click="handleClickMap"
        >
          <svgMap :showMap="showMap"></svgMap>
        </li>
        <!-- <li>
          <svgAI></svgAI>
        </li> -->
      </ul>
    </div>
  </div>
  <div class="main">
    <router-view></router-view> 
  </div>
</template>

<script setup>
import { ref,watch } from 'vue';
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
// import svgAI from '@/components/svg-icons/svg-AI.vue'
import toLeft from '@/components/svg-icons/svg-toLeft.vue'
import svgMap from '@/components/svg-icons/svg-map.vue'
import svgSearch from '@/components/svg-icons/svg-search.vue'

const route = useRoute()
const router = useRouter(); // 获取 router 实例
const store = useStore()
console.log(router.getRoutes(),'========')
const parentRoute = router.getRoutes().find((route) => route.path === "/Main")
const activeName = ref('All')
const showMap = ref(false)



// 路由变化时更新activeName
watch(
  () => route.name,
  (newName) => {
    activeName.value = newName // 根据路由的 name 更新 activeName
  },
  {
    immediate:true
  }
)

const updateActive = (val) => {
  activeName.value = val
  router.push({ name: val })
}
// 选中的导航
const isActive = (name) => {
  return name === activeName.value
}
const handleClickMap = ()=>{
  showMap.value = !showMap.value
  store.commit('all/setShowMap', showMap.value)
}
// // 收起地图
// const handleCloseMap = ()=>{
//   showMap.value = !showMap.value
//   store.commit('all/setShowMap', showMap.value)
// }
</script>

<style lang="less" scope>
.explore{

  .header-nav{
    height: 47px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;

    .header-nav-left{
      // width: 697px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #595959;
      font-size: 20px;
      font-family: Regular;

      .toLeft{
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 !important;
      }

      li{
        height: 27px;
        border-bottom: 2px solid transparent;
        margin: 0 28px !important;
        
      }
      .activeNav{
        border-bottom: 2px solid #121212;
        color: #121212;
        font-family: Semibold;
      }
    }
    .header-nav-right{
      display: flex;
      // justify-content: space-between;
      // align-items: center;
      // width: 104px;

      li{
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 56px;

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
  }
}

</style>
