<template>
  <div class="navExplore">
    <div class="header-nav">
        <toLeft class="header-nav-left" @click="handleClickBack"></toLeft>
        <!-- <ul class="header-nav-middle">
            <li :class="activeIndex === 0 ? 'activeItem' : ''" @click="activeClick(0)">{{cityName}}</li>
            <li :class="activeIndex === 1 ? 'activeItem' : ''" @click="activeClick(1)">Things to do</li>
            <li :class="activeIndex === 2 ? 'activeItem' : ''" @click="activeClick(2)">Experts</li>
            <li :class="activeIndex === 3 ? 'activeItem' : ''" @click="activeClick(3)">Relevant</li>
        </ul> -->
         <div class="header-nav-middle">
            <a 
                href="#0"
                :class="activeIndex === 0 ? 'activeItem' : ''" 
                @click="activeClick(0)"
            >{{cityName}}</a>
            <a 
                href="#1"
                :class="activeIndex === 1 ? 'activeItem' : ''" 
                @click="activeClick(1)"
            >Things to do</a>
            <a 
                href="#2"
                :class="activeIndex === 2 ? 'activeItem' : ''" 
                @click="activeClick(2)"
            >Experts</a>
            <a 
                href="#3"
                :class="activeIndex === 3 ? 'activeItem' : ''" 
                @click="activeClick(3)"
            >Relevant</a>
        </div>
        <svgMap 
            class="header-nav-right" 
            @click="handleShowMap"
        >
            
        </svgMap>
    </div>
    <div class="main">
        <Citys :activeIndex="activeIndex"></Citys>
        <!-- <Citys v-show="activeIndex === 0"></Citys> -->
        <!-- <ThingToDo v-show="activeIndex === 1"></ThingToDo>
        <Experts v-show="activeIndex === 2"></Experts>
        <Relevant v-show="activeIndex === 3"></Relevant> -->
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ref,computed } from 'vue';
import toLeft from '@/components/svg-icons/svg-toLeft.vue'
import svgMap from '@/components/svg-icons/svg-map.vue'
import Citys from './citys.vue'
// import ThingToDo from './thingsToDo.vue'
// import Experts from './experts.vue'
// import Relevant from './relevant.vue'

const route = useRoute()
const router = useRouter()
// const cityName = route.params.cityName
const store = useStore()
const cityName = computed(() => route.params.cityName)
const activeIndex = ref(0)
// const activeId = ref('Introduction')


// 返回到上一页
const handleClickBack = ()=>{
    router.go(-1)
    store.commit('all/setShowCityDetails', false)
}
// 点击导航
const activeClick = (i)=>{
    activeIndex.value = i
}
// 展示地图
const handleShowMap = ()=>{
    console.log('打开地图')
}
</script>

<style lang="less" scope>

.navExplore{
    .header-nav{
        height: 103px;
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        padding: 0 14px;
       

        .header-nav-middle{
            display: flex;
            font-size: 20px;
            font-family: Regular;

            // li{
            //     margin: 0 28px !important;
            // }
            a{
                margin: 0 28px !important;
                color: #595959;
                font-size: 20px;
                font-family: Regular;
            }
        }
        .activeItem{
            font-family: Semibold !important;
            color: #121212 !important;
            padding-bottom: 4px !important;
            border-bottom: 2px solid #FF401A !important;
        }
        .header-nav-right{
            &:hover{
                path{
                    stroke: #121212 !important;
                }
            }
        }
    }
    .main{
        display: flex;
        height: calc(100vh - 247px);
        box-sizing: border-box;
        padding-top: 40px;
        overflow: scroll;
        scroll-behavior: smooth; /* 平滑滚动 */
    }
}
</style>