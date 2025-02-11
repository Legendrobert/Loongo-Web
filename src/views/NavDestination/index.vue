<template>
  <div class="NavMain">
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
        </li>
        <li 
          v-if="!showMap"
          @click="handleClickMap()"
 
        >
          <svgMap :showMap="showMap"></svgMap>
        </li>
        <!-- <li>
          <svgAI></svgAI>
        </li> -->
      </ul>
    </div>
    <div class="main">
      <router-view></router-view> 
    </div>
  </div>
 
  
</template>

<script setup>
import { ref,watch,nextTick } from 'vue';
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
// import svgAI from '@/components/svg-icons/svg-AI.vue'

import toLeft from '@/components/svg-icons/svg-toLeft.vue'
import svgMap from '@/components/svg-icons/svg-map.vue'
import svgSearch from '@/components/svg-icons/svg-search.vue'

const route = useRoute()
const router = useRouter(); // 获取 router 实例
const store = useStore()

const parentRoute = router.getRoutes().find((route) => route.path === "/Destination")
const activeName = ref('All')
const showMap = ref(false)

const searchInput = ref('')
const showSearchSvg = ref(true)
const inputRef = ref()



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
  showMap.value = false
  store.commit('all/setShowMap', false)
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

<style lang="less" scope>
.NavMain{

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
        border-bottom: 2px solid #FF401A;
        color: #121212;
        font-family: Semibold;
      }
    }
    .header-nav-right{
      display: flex;

      li{
        // width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 30px !important;

        &:hover{
          path{
            stroke: #121212 !important;
          }
        }
       
        svg{
          vertical-align: middle;
        }
        path{
          stroke: #ccc !important;
        }
        .el-input {
          width: 286px;
          height: 40px;
          --el-input-focus-border-color: #ccc;
          &:hover{

            path{
              stroke: #121212 !important;
            }
            .el-input__wrapper{
              box-shadow: 0 0 0 1px #121212;
            }
          }
        

          .el-input__wrapper{
            border-radius: 100px;
            font-size: 16px;
          }
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
.cityDetails{

}
</style>
