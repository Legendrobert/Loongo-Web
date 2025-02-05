
<template>
  <div class="introduction" :style="props.isFullScreen ? 'margin-top:40px' : 'margin-top:21px'">
        <div class="header">
            <div class="cityName">{{cityName}} City</div>
            <ul class="header-right">
                <li class="header-right-item" v-for="i in 3" :key="i">Metropolitan</li>
            </ul>
        </div>
        <div class="content">
            <div class="title">Introduction</div>
            <div class="details">{{detailsContent}}</div>
        </div>
        <div class="other">
            <div class="other-item" style="margin-right:80px">
                <svgTemperature></svgTemperature>
                <span class="title">Current temperature:</span>
                <span class="value">5~15˚C</span>
                <span class="line">|</span>
                <span class="value">41~59˚F</span>
            </div>
            <div class="other-item">
                <svgDate></svgDate>
                <span class="title">Ideal travel month:</span>
                <span class="value">Jun</span>
                <span class="line">|</span>
                <span class="value">Sep</span>
                <span class="line">|</span>
                <span class="value">Oct</span>
                <span class="line">|</span>
                <span class="value">Nov</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
import svgDate from '@/components/svg-icons/svg-date.vue'
import svgTemperature from '@/components/svg-icons/svg-temperature.vue'
// import roundToLeft from '@/components/svg-icons/svg-roundToLeft.vue'
// import roundToRight from '@/components/svg-icons/svg-roundToRight.vue'
const cityName = computed(() => route.params.cityName)
const detailsContent = ref('Shanghai is a luxurious playground for the well-heeled, with Michelin-star dining, high-end fashion houses, and over-the-top hotels. The Huangpu River splits the city into two districts: Pudong and Puxi. The Pudong skyline looks like it was ripped from the Jetsons; on the Puxi side, you can walk the Bund riverside district to get a taste of old Shanghai. The food scene is phenomenal.')

const props = defineProps({
  isFullScreen: {
    type: Boolean,
    default: false
  }
});

</script>

<style lang="less" scoped>
.introduction{
        width: 100%;
        height: auto;
  
        .header{
            height: 87px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .cityName{
                font-family: Bold;
                font-size: 64px;
            }
            .header-right{
                display: flex;
                justify-content: space-between;
                width: 557px;

                .header-right-item{
                    // width: 127px;
                    height: 27px;
                    padding: 8px 16px !important;
                    font-size: 20px;
                    font-family:  Semibold;
                    border-radius: 8px;
                }
                .header-right-item:nth-child(1){
                    color: #00998A;
                    background: #E9F5F5;
                }
                .header-right-item:nth-child(2){
                    color: #B39500;
                    background: #F5F4E9;
                }
                .header-right-item:nth-child(3){
                    color: #B31200;
                    background: #F5E9E9;
                }
            }
            
        }
        .content{
            background: #F9F9F9;
            border-radius: 16px;
            padding: 28px;
            margin-top: 40px;
            .title{
                color: #121212;
                font-size: 28px;
                // font-family: Bold;
            }

            .details{
                color: #595959;
                font-size: 20px;
                font-family: Regular;
                margin-top: 28px;
            }
        }
        .other{
            display: flex;
          
            margin-top: 40px;
         
            .other-item{
                height: 42px;
                display: flex;
                align-items: center;
                color:#595959;
                    font-size: 20px;
                    font-family: Regular;
                   

                .title{
                 
                    margin-left: 8px;
                    margin-right: 16px;
                }
                .value{
                    color: #121212;
                }
                .line{
                    color: #CCCCCC;
                    margin: 0 7px;
                }
            }
        }
    }
</style>