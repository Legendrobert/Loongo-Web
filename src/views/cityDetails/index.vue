<template>
  <div class="navExplore">
    <div class="header-nav">
        <toLeft class="header-nav-left" @click="handleClickBack"></toLeft>
        <ul class="header-nav-middle">
            <li :class="activeIndex === 0 ? 'activeItem' : ''" @click="activeClick(0)">{{cityName}}</li>
            <li :class="activeIndex === 1 ? 'activeItem' : ''" @click="activeClick(1)">Things to do</li>
            <li :class="activeIndex === 2 ? 'activeItem' : ''" @click="activeClick(2)">Experts</li>
            <li :class="activeIndex === 3 ? 'activeItem' : ''" @click="activeClick(3)">Relevant</li>
        </ul>
        <svgMap class="header-nav-right">
            
        </svgMap>
    </div>
    <div class="main">
        
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref,computed } from 'vue';
import toLeft from '@/components/svg-icons/svg-toLeft.vue'
import svgMap from '@/components/svg-icons/svg-map.vue'

const route = useRoute()
// const cityName = route.params.cityName
const cityName = computed(() => route.params.cityName)
const activeIndex = ref(0)

// 返回到主页
const handleClickBack = ()=>{

}
// 点击导航
const activeClick = (i)=>{
    activeIndex.value = i
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
        padding: 0 28px;
       

        .header-nav-middle{
            display: flex;
            font-size: 20px;
            color: #595959;
            font-family: Regular;

            li{
                margin: 0 28px !important;
                // padding-bottom: 4px !important;
                // border-bottom: 2px solid transparent;
            }
        }
        .activeItem{
            font-family: Semibold;
            color: #121212;
            padding-bottom: 4px !important;
            border-bottom: 2px solid #FF401A !important;
        }
    }
    .main{
        display: flex;
        height: calc(100vh - 247px);
        box-sizing: border-box;
        padding: 40px 28px;
        overflow: scroll;
        background:yellow;
    }
}
</style>