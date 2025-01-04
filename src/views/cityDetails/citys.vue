<template>
  <div class="citys">
    <div class="pics">
        <div class="large-image">
            <video          
              ref="videoRef"
              :src="beijingVideo" 
              type="video/mp4"
              controls
              :muted="isMuted"
              loop
            ></video>
        </div>
        <div class="small-images">
            <div class="small-image">
                <img :src="mainPic">
            </div>
            <div class="small-image">
                <img :src="mainPic">
            </div>
            <div class="small-image">
                <img :src="mainPic">
            </div>
            <div class="small-image">
                <img :src="mainPic">
                <svgMore class="svgMore"></svgMore>
            </div>
        </div>
    </div>
    <div class="introduction">
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
  </div>
</template>

<script setup>
import { ref,computed } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import video1 from "@/assets/video/beijing.mp4";
import svgMore from '@/components/svg-icons/svg-more.vue'
import svgTemperature from '@/components/svg-icons/svg-temperature.vue'
import svgDate from '@/components/svg-icons/svg-date.vue'

const route = useRoute()
const mainPic = ref( require('@/assets/imgs/shanghai.png') );
const isMuted = ref(true)
const beijingVideo = ref(video1);
const detailsContent = ref('Shanghai is a luxurious playground for the well-heeled, with Michelin-star dining, high-end fashion houses, and over-the-top hotels. The Huangpu River splits the city into two districts: Pudong and Puxi. The Pudong skyline looks like it was ripped from the Jetsons; on the Puxi side, you can walk the Bund riverside district to get a taste of old Shanghai. The food scene is phenomenal.')
const cityName = computed(() => route.params.cityName)
</script>

<style lang="less" scoped>
.citys{
    width: 100%;
    .pics {
        display: grid;
        grid-template-columns: 1.15fr 1fr;
        gap: 15px;
        width: 100%;
        height: auto;
        margin-bottom: 40px;

        .large-image {
            grid-column: 1 / 2;
            grid-row: 1 / 3;

        }

         .large-image video {
            width: 100%;
            height:420px;
            object-fit: cover;
            border-top-left-radius: 24px;
            border-bottom-left-radius: 24px;
        }

        .small-images {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(2, 1fr);
            gap: 15px;
        }
        .small-images .svgMore{
            position: absolute;
            right: 20px;
            bottom: 20px;
        }

        .small-image img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .small-image:nth-child(2) img{
            border-top-right-radius: 24px;
            // border-bottom-right-radius: 24px;
        }
        .small-image:nth-child(4){
            position: relative;
        }
        .small-image:nth-child(4) img{
            
            // border-top-right-radius: 24px;
            border-bottom-right-radius: 24px;
        }
    }
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
            // height: 42px;
            .other-item{
                height: 42px;
                display: flex;
                align-items: center;

                .title{
                    color:#595959;
                    font-size: 20px;
                    font-family: Regular;
                    margin-left: 8px;
                    margin-right: 16px;
                }
                .value{
                    color: #121212;
                    font-size: 24px;
                }
                .line{
                    color: #CCCCCC;
                    margin: 0 7px;
                }
            }
        }
    }
}
</style>